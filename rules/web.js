/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
/*相関函式庫*/
var httpServer=require("../modules/httpserver.js");
var express=require("express");

/*伺服器部分*/
var app=httpServer.app();

app.use('/SQL_CV', express.static('src'));