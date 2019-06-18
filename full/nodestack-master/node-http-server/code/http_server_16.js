const http = require("http") 
const url = require("url")

http.createServer( (request,response)=>{
    // data 事件: 负责数据拆分
    // end 事件:  当数据拆分完成后触发
    // body-parser multer 

    request.on("data",(_post)=>{
        console.log(_post)
    })


    request.on("end",()=>{
        console.log("post完成")
    })

    response.end() 

} ).listen(9090,()=>{
    //console.log("服务器启动成功，可以访问:http://localhost:8080")
}) 
