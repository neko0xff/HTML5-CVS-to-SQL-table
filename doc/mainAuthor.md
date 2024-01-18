原作者的話
===

## 結語 / In closing

以前我寫過一篇「[如何解決 CSV匯入PostgreSQL發生的錯誤？](http://blog.pulipuli.info/2016/11/csvpostgresql-how-to-resolve-problems.html)」的文章，內容是在講怎麼使用COPY指令或pgAdmin來完成。但是這樣處理起來很容易發生各種問題，多到我還用了[一篇文章](http://blog.pulipuli.info/2016/11/csvpostgresql-how-to-resolve-problems.html)來彙整解決方法。

這次我又要將CSV匯入到資料庫中的時候，我就想放棄原本的方式，看能不能將CSV轉換成SQL語法，這樣會比較簡單。但搜尋了一下，卻發現網路上並沒有這樣的線上工具。雖然也有匯入CSV資料的工具，不過卻多是付費軟體。

想來想去，剖析CSV跟產生SQL語法也不難，為何不要自己做就好了呢？所以就用一個下午完成了[CSV to SQL Table](https://pulipulichen.github.io/HTML5-CVS-to-SQL-table/)。希望對大家有幫助！

----

An HTML5 widget for converting a CSV file to a SQL table

- https://github.com/pulipulichen/HTML5-CVS-to-SQL-table
- https://github.com/pulipulichen/HTML5-CVS-to-SQL-table.git
- https://pulipulichen.github.io/HTML5-CVS-to-SQL-table/

Based on 
Table Data Transposer (rotate data from rows to columns or vice versa) - file process framework 20161217
https://codepen.io/pulipuli/pen/eBbMNx

````
drop table if exists ur_table;
    CREATE TABLE ur_table
    (
        id serial NOT NULL,
        log_id numeric, 
        proc_code numeric,
        date timestamp,
        qty int,
        name varchar,
        price money
    );
    COPY 
        ur_table(id, log_id, proc_code, date, qty, name, price)
    FROM '\path\xxx.csv' DELIMITER ',' CSV HEADER;


INSERT INTO films VALUES
    ('UA502', 'Bananas', 105, '1971-07-13', 'Comedy', '82 minutes');
````