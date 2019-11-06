# [laravel] 라라벨 에서 Propel orm 사용하기

라라벨에선 기본적으로 Eloquent ORM을 지원하지만, 현재 실무 에선 Propel을 사용중이었고, propel 기반의 셋팅중 laravel+propel 관련 한글 자료가 너무 없었고,

공식 [propelorm/PropelLaravel](https://github.com/propelorm/PropelLaravel) 패키지의 문서에 내용과도 현재 라라벨 버전업으로 지원되지 않는 부분들이 있어서, 직접 해보고 경험한 내용 및 설치 순서를 정리 해보려 한다.

## 0. ORM

설명 하기전에 ORM에 대해 간단하게 정리해보자면 **object relational mapping**의 줄임말로 객체 관계 매핑 정도로 해석된다

즉 데이터베이스를 처리할때 쿼리빌더라 날쿼리를 쓰는게 아니라 객체지향 형태로 구성된 환경에서 쿼리를 처리할수 있는 환경을 뜻할수 있고, 오브젝트로 반환되는 값들을 이용해 연계 처리를 할수있는 등의 형태다

java 에선 MyBatis, node.js 에서는 MongoDB 가 있다.

## 1. 설치

기준은 라라벨 5.5와 Database가 설치되고, 필요 테이블이 만들어진 이후 부터이다.

현재 [propelorm/PropelLaravel](https://github.com/propelorm/PropelLaravel) 의 문서상에 내용대로 진행하고, 설치를 시도 해보면 propel/propel-laravel: "dev-master"이 설치되는대,
이부분은 가장 안정성있는 최신 버전이라고 되어있지만 실제 현재 상황에서 사용해보면 버그가 발생하거나, 초기 설정이 여러 부분 필요하다.

해당 패키지 issues를 확인해보면, 최신 버전에 대한 이야기와 더이상 업데이트가 없냐는 이야기가 있을 정도이다. 해서 dev-develop 버전으로 사용하는 것으로 시작한다.

### 1-1.composer.json 파일에 패키지를 등록한다

```json
...
"require": {
  ...
  "propel/propel": "^2.0@alpha",
  "propel/propel-laravel": "dev-develop"
}
...
"minimum-stability": "alpha"
```

require부분에 사용할 propel과 propel provider가 포함된 propel-laravel을 추가해주고, 최소 사용가능 버전 설정을 위해 맨 아래에 minimum-stability 도 추가해 준다.

그다음 composer를 업데이트 한다.

```bash
composer update
```

### 1-2. Laravel service provider 등록

기존에 문서에보면 GeneratorServiceProvider, RuntimeServiceProvider 를 등록하라고 나오는대, 업데이트된 버전에선 한개의 provider만 등록하면 된다.

```bash
/* app/config/app.php */
'providers' => [
...
Propel\PropelLaravel\PropelIntegrationServiceProvider::class,
...
];
```

### 1-3. propel config 파일 복사

터미널(혹은 콘솔) 에서 아래의 명령어를 입력하여 config을 복사

```bash
php ./artisan vendor:publish --provider 'Propel\PropelLaravel\RuntimeServiceProvider'
```

***단! 이 방법이 안될경우 아래의 명령어를 통해 cache초기화 등을 해준뒤 다시 진행해본다***

```bash
php artisan config:cache
composer update
php artisan config:cache
php artisan vendor:publish
```

## 2. 설정

설치가 다되었으면, 이제 Laravel을 설정하여 DB를 연결하고, 해당 DB테이블에 대한 schema.xml 파일을 추출한 뒤 해당 테이블과 매칭되는 모델을 propel 명령어로 생성한다.

### 2-1. env설정

laravel DB설정을 위해 상위폴더에 env파일을 열고, 자신의 환경에 맞게 DB를 설정한다.

```bash
/* 나는 homestead 를 사용하기 때문에, 그에맞게 설정! */
...
DB_CONNECTION=mysql
DB_HOST=db.local
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
...
```

그리고 env 파일이나 config 파일이 변경되면 clear 작업을 통해 새로 불러와야 한다.

```bash
php artisan config:clear
```

### 2-2. schema.xml 추출

만들어진 테이블을 기반으로 schema.xml을 뽑아 내도록 한다.

```bash
php artisan propel:database:reverse {데이터베이스 커넥션 명(mysql,default)}
```

여기서 사용되는 데이터베이스 커넥션 명은 따로 변경하지 않았으면 default, mysql 둘중 하나일 가능 성이 크다.

커넥션명은 아까 복사한 config/propel.php 파일을 열어보면 connections안에 포함된 이름으로 확인 할 수 있다.

### 2-3. schema.xml 파일 수정

***이부분은 사람마다, 상황마다 다르다. 필수가 아님!***
timestamp 컬럼에 데이터가 들어가는 시간을 자동으로 넣어 주는 부분과, 미리 모델을 만들때 namespace를 선언하기 위해 xml 파일을 수정한다

```xml
...
/* namespace="App\Models\" 추가 */
<database name="default" defaultIdMethod="native" defaultPhpNamingMethod="underscore" namespace="App\Models\">
...

/* timestamp 추가 */
...
<column name="user_id" phpName="UserId" type="INTEGER" size="10" sqlType="int(10) unsigned" required="true"/>
    <behavior name="timestampable"/>
...
```

### 2-4. model 생성

만들어진 schema.xml 기반의 내용으로 laravel 모델을 생성한다.

```bash
php artisan propel:model:build
```

### 2-5. 테스트

```bash
php artisan tinker

>>> App\Models\Base\UserQuery::create()->find();
=> Propel\Runtime\Collection\ObjectCollection {#888}
```

## 3. 정리

여기까지가 laravel 5.5에서 propel orm을 적용하는 방법이었다.
실제로 github 페이지 readme.md에서 변경된건

- 설치방법 (1-1)
- provider 등록 (1-2)

밖에 없다. 다만, laravel+propel 환경의 셋팅 자료도 잘없고,
나중에 필요할때 까먹지 않기 위해 정리해 보았다!
