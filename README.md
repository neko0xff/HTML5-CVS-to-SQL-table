CSV to SQL Table：將CSV試算表加入到關聯式資料庫 / Import CSV File into a Database Table
===

## 00 原作者的程式碼保存庫 / Repository

CSV to SQL Table程式碼保存在GitHub中，以MIT條款授權，可任意使用。

- [GitHub：HTML5-CVS-to-SQL-table](https://github.com/pulipulichen/HTML5-CVS-to-SQL-table)
    * [程式碼下載](https://github.com/pulipulichen/HTML5-CVS-to-SQL-table/archive/master.zip)
- [原作者的線上展示 / Online Demo](https://pulipulichen.github.io/HTML5-CVS-to-SQL-table/)
- [原作者介紹文](https://blog.pulipuli.info/2017/11/csv-to-sql-tablecsv-import-csv-file.html)

## 01 加入改進部分
- 快速建置成docker容器,提供給不同的環境使用
  * 使用的工具
    1. docker-compose
    2. make
- WEB環境
  * Service: Nodejs+Express
  * Port: 8087
- Electron App 支援
  * 工具: electron-builder

## 02 如何開始建置
- Docker Container
  ```bash
  $ sudo make
  ```
- Electron App
  * linux
    * snap: `electron-builder --linux snap`
    * apk: `electron-builder --linux apk`
  * windows: `electron-builder --windows portable`
  * debug: `electron ele_app.js`