const express = require("express")
const bodyParser = require("body-parser")
const multer = require("multer")
const consolidate = require("consolidate")
const app = express()
app.listen(8080, () => { console.log("express server start") })
app.use(bodyParser.urlencoded({
    extended: false,
    limit: 2 * 1024 * 1024
}))
app.use(multer({ dest: __dirname + "upload" }).any())
//告诉服务器,我们需要使用的模板引擎是什么类型: (xml json html)
app.set("view engine", "html")
//告诉服务器,consolidate应该去哪个目录下找文件
app.set("views", "templates")
//告诉服务器,consolidate整合的是哪个模板引擎
app.set("html", consolidate.ejs)
app.get("/",(request,response)=>{
    response.render("index.ejs",(err,data)=>{
        if (!err) {
            response.send(data)
        }else{
            response.send(err)
        }
    })
})
app.get("/hello",(request,response)=>{
    response.render("index.ejs",{name:'<span>张三</span>'},(err,data)=>{
        if (!err) {
            response.send(data)
        }else{
            response.send(err)
        }
    })
})
app.get("/fz",(request,response)=>{
    response.render("index.ejs",{name:["李四","王五","张三"]},(err,data)=>{
        if (!err) {
            response.send(data)
        }else{
            response.send(err)
        }
    })
})
//处理静态资源
app.use(express.static(__dirname + "/statics")) 