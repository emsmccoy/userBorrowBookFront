# Error for DELETE user and book

Related to JPA relationships

## Console Log
```
2025-03-19T18:13:49.791+01:00 ERROR 13634 --- [userBorrowBookBack] [nio-8080-exec-7] o.h.engine.jdbc.spi.SqlExceptionHelper   : Referential integrity constraint violation: "FKLAIM50SA1HDGNBFP804BRWLF5: PUBLIC.BORROW FOREIGN KEY(USER_ID) REFERENCES PUBLIC.USER_APP(ID) ('U005')"; SQL statement:
delete from user_app where id=? [23503-232]
```
