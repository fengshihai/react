const http = require("http") 
const queryString = require("querystring")

http.createServer( (request,response)=>{
    // data 事件: 负责数据拆分
    // end 事件:  当数据拆分完成后触发
    // body-parser multer 

    let postData = ""

    request.on("data",(_post)=>{
        //每拆一次我们就拼接一次
        postData += _post
    })


    request.on("end",()=>{
        //console.log("post完成:",postData)
        let POST = queryString.parse(postData)
        console.log(POST.title,POST.content)
    })

    response.end() 

} ).listen(9090,()=>{
    //console.log("服务器启动成功，可以访问:http://localhost:8080")
}) 
