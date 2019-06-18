const http = require("http") 
const url = require("url")

http.createServer( (request,response)=>{

   

    let GET = {} 
     
    //以下代码有解决favin.ico的bug
    if( request.url.indexOf("?")!==-1) {
        GET = url.parse( request.url,true ).query 
        console.log(GET)        
    }



    response.end() 

} ).listen(9090,()=>{
    //console.log("服务器启动成功，可以访问:http://localhost:8080")
}) 


//  http://localhost:9090/index.html?username=pengjin&age=33 

// {username:pengjin,age:11} 

// /b.html?
