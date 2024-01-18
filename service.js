/*模組化啟用*/  
var httpAPI=require("./rules/router.js"); //HTTP api


/*呼叫內容*/
function startServer(){
    httpAPI;
}

/*組成一個函式去呼叫*/
if(require.main === module){
    startServer();
}else{
    module.exports= startServer;
}
