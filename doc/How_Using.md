該工具的使用方式
===

## 介紹

這是一個將[CSV格式資料](http://blog.pulipuli.info/2017/09/data-source-and-format.html)轉換成[關聯式資料庫](https://www.wikiwand.com/zh/%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93)插入表格與資料SQL語法的網頁工具。可適用於[SQLite](https://www.wikiwand.com/zh/SQLite)、[PostgreSQL](https://www.wikiwand.com/zh/PostgreSQL)與[MySQL](https://www.wikiwand.com/zh/MySQL)等關聯式資料庫。傳統做研究時比較常用Excel、SPSS等試算表資料，但其實加入到資料庫之後，就能更容易跟其他資料交互比對、分析，也能用資料庫內建的聚合函數(aggregate functions)計算平均數、標準差等統計常用的[資料中心與離度](http://blog.pulipuli.info/2017/09/measures-of-center-and-spread.html)。


## 匯入：CSV資料 / Import: CSV data

如果要使用CSV to SQL Table，CSV的第一列必須是表格欄位的名稱，僅能使用英文數字、而且第一個字不能是數字。而後面資料的類型沒有特別的限制，程式會一一檢查每一筆資料的內容，自動決定合適的資料類型：

- 如果只有數字，則會視為「整數」(integer, int)
- 如果數字有小數點，則會視為「浮點數」(float)
- 如果有非數字的資料，則會視為「文字」(text)

目前就僅使用這三種資料格式。

資料庫的表格名稱會使用CSV的檔案名稱建立。同樣的，表格名稱也只能使用英文數字、而且第一個字不能是數字。

## SQL：插入表格並建立資料 / Create Table and Insert Data 

轉換後的SQL語法如下：

    drop table if exists data;
    CREATE TABLE data (
    	sale_s_by_region text,
    	f1qtr_1 float,
    	qtr_2 float,
    	qtr_3 float,
    	qtr_4 int
    );
    
    INSERT INTO data VALUES ('Europe',21704.714,17987034,19485029,22567894);
    INSERT INTO data VALUES ('As\nia',8774099,NULL,14356.879,NULL);
    INSERT INTO data VALUES ('Nor,th America',12094215,10873.099,15689543,17456723);

前半部是插入表格的語法，可以看到CSV第一列的欄位名稱已經被放上去，並且附有自動判斷的資料類型。後半部則是插入資料的語法。
