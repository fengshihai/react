const http = require("http") 


http.createServer( (request,response)=>{
    
    switch( request.url ){
        case "/a.html":
            response.write("this is "+request.url)
            break
        case "/b.html": 
            response.write("that is "+request.url)
            break
        default:
            response.write("404 not found")
    }
    response.end() 

} ).listen(9090,()=>{
    //console.log("服务器启动成功，可以访问:http://localhost:8080")
}) 





