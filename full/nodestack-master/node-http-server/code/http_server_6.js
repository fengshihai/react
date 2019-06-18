const http = require("http") 


http.createServer( (request,response)=>{
    
    // response.write("Hello Nodejs Server~!")
    // response.end() //结束当前响应

    // express : response.write("xxxx").end() 
    response.end("hi,nodejs") //8以上的版本可以这样写

} ).listen(9090,()=>{
    console.log("服务器启动成功，可以访问:http://localhost:8080")
}) 


