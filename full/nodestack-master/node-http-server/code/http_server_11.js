const http = require("http") 


http.createServer( (request,response)=>{

    let GET = {} 
    //b.html?username=pengjin&age=33 
    let urlInfo = request.url
     
    //以下代码有解决favin.ico的bug
    if( urlInfo.indexOf("?")!==-1) {
        //getArgs[0] => /b.html
        //getArgs[1] => username=pengjin&age=33
        let getArgs = urlInfo.split("?")

        let queryArgs = getArgs[1].split("&")

        for(var i=0;i<queryArgs.length;i++){
            //0 => username=pengjin
            //1 => age=33
            let kv = queryArgs[i].split("=")
            GET[ kv[0] ] = kv[1] // GET["username"] = "pengjin"

        }

        console.log(GET)        
    }



    response.end() 

} ).listen(9090,()=>{
    //console.log("服务器启动成功，可以访问:http://localhost:8080")
}) 


//  http://localhost:9090/index.html?username=pengjin&age=33 

// {username:pengjin,age:11} 

// /b.html?
