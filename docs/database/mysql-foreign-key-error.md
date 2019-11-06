# foreign key(외래키) 지정시 오류 발생 해결법

![](../img/database/1.png)

foreign key 지정할때 오류가 나는 경우는 보통 두 테이블의 컬럼들의 속성이 다를경우이다.

같은 int 형인대 하나는 unsigned 라서 안된다거나, 한쪽만 not null이 먹혀져있어서 그런 경우가 있다.

이 경우에는 mysql에서 당연히 오류가 발생한다.

아무리해도 차이가 없는대 오류가 나는 경우도 테이블의 스토리지 엔진을 확인해 봐야하는데,
InnoDB만 Foreign key를 지원하기 때문에 만약 MyISAM으로 되있는 테이블이 있는 경우 InnoDB로 변경해야 한다.
