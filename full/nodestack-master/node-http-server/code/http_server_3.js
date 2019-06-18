const http = require("http") 


http.createServer( ()=>{
    console.log("有人访问了我!!!!!!!!!!!!")
} ).listen(8080,()=>{
    console.log("服务器启动成功，可以访问:http://localhost:8080")
}) 


