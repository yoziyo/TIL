# mysql 외래키 설정 지정시 설정값 설명

mysql 외래키 설정할 때 on delete, on update에 대한 이벤트 설정값을 정할 수 있고, 해당 값에 따라서 적용 되는 내용이 달라짐.

::: tip options
RESTRICT - 개체가 on delete, on update 이벤트를 받으면 그 개체를 참고하고 있는 테이블의 값들의 변경,삭제를 취소함.

CASCADE - 개체가 on delete, on update 이벤트를 받으면 그 개체를 참고하고 있는 테이블의 값도 변경, 삭제 됨.

NO ACTION - 개체가 on delete, on update 이벤트를 받으면 그 개체를 참고하고 있는 테이블의 값은 아무 처리 하지 않음. (가만히 둠)

SET NULL - 개체가 on delete, on update 이벤트를 받으면 그 개체를 참고하고 있는 테이블의 값은 NULL로 셋팅함.
:::
