---
layout: post
title:  hexo 커맨드 정리 (포스트 작성,삭제,배포)
date:   2018-01-02 00:22:34
author: yozi
categories: etc
tags:	blog hexo
cover:  "/assets/posts/hexo-command/hexo-logo.png"
---

hexo를 설치하여 쓰다보니, 대부분 터미널에서 커맨드로 처리하다보니
자주 쓰는건 잊지 않게 정리해야 할 것 같아서 정리 한다.

### hexo 포스트 작성
포스트 작성하려면 터미널에서 **hexo**를 이용해서 포스트 파일을 만든다
```bash
$ hexo new post_name

# 만약 scaffold 를 이용하여 만들경우
$ hexo new post "post_name"
# 형태로 쓸수 있다. 그럼 scaffold에 post.md 파일 기반으로 새 포스트 파일을 만들어준다.
```

그럼 파일은 아래의 경로에 생성된다.
```bash
source/_post/post_name.md
```
해당 파일에 헤더부분을 수정하고, 내용을 작성한뒤 배포하면 된다.

### hexo deploy를 이용한 배포
hexo 설정파일 (_config.yml)에 보면 deploy 설정이 있다.
```bash
deploy:
  type: git
  repo: 깃 주소
```

해당 설정을 해두면 hexo를 통하여 배포 할 수 있다 (여기서 배포는 깃페이지에 글을 올릴수 있단 개념)
설정이 되어있다면 터미널에 아래의 명령어로 배포한다.
```bash
    hexo clean
    hexo generate   # 동적 데이터로 변환
    hexo deploy     # 배포

    #아래의 명령어로 generate와 deploy를 한번에 할 수 있다.
    hexo deploy --generate

    #아래의 명령어는 축약어라 생각 하면된다. 아래처럼 입력해도 된다.
    hexo g
    hexo d
```
여기서 clean은 없어도 상관없지만, 오류가 생기는 경우가 있어서 항상 올리기전에 입력하고 있다.

#### deploy를 이용하여 업로드 할때 오류가 난다면
나는 처음에 hexo deploy로 업로드할때 아래의 오류가 났었다.
```bash
    ERROR Deployer not found: git
```
이럴땐 'hexo-deployer-git' 플러그인을 설치하면 해결된다고 한다.

```bash
    npm install hexo-deployer-git --save    # 플러그인 설치

    # _config.yml 파일을 열어준뒤 아래의 구문을 추가한다.
    plugins:
        - hexo-deployer-git
```

### 작성된 포스트 지우기
포스트를 지울땐 생성할때와 동일한 **source/_post/** 폴더로 접근해보면, 지울 포스트 파일이 보인다.
포스트파일을 제거한 뒤 clean ~ deploy 까지의 과정 (배포) 을 진행하면 포스트가 제거된 것을 볼 수 있다.

단, 포스트가 아예 없을경우 배포중 오류가 나는 경우가 있었다. 이부분 꼭 참고해야한다!


### 참고 url
아래는 hexo를 설치하고, markdown문서를 작성하며 참고하였던 페이지들이다. 혹 문제가 된다면 알려주시면 삭제하겠습니다!

[https://www.holaxprogramming.com/2017/04/16/github-page-and-hexo/](https://www.holaxprogramming.com/2017/04/16/github-page-and-hexo/)
[https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/)
[https://steemit.com/kr/@nand/markdown](https://steemit.com/kr/@nand/markdown)
