const http = require("http") 


http.createServer( (request,response)=>{
    
    response.write("Hello Nodejs Server~!")
    response.end() //结束当前响应

} ).listen(9090,()=>{
    console.log("服务器启动成功，可以访问:http://localhost:8080")
}) 


