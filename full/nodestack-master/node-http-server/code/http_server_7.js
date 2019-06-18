const http = require("http") 


http.createServer( (request,response)=>{
    
    console.log( request.url ) 
    response.end() 

} ).listen(9090,()=>{
    //console.log("服务器启动成功，可以访问:http://localhost:8080")
}) 


