const express = require("express")
const bodyParser = require("body-parser")
const multer = require("multer")
const consolidate = require("consolidate")
const cookie = require("cookie-parser")//引入cookie-parser获取cookie数据
const app = express()
app.listen(8080, () => { console.log("cookie") })
//把密钥设置到cookie中
const cookieKey="abcdefg"+Math.random()
//引入cookie-parser
app.use(cookie(cookieKey))
app.use(bodyParser.urlencoded({
    extended: false,
    limit: 2 * 1024 * 1024
}))
app.use(multer({ dest: __dirname + "upload" }).any())
//告诉服务器,我们需要使用的模板引擎是什么类型: (xml json html)
app.set("view engine", "html")
//告诉服务器,consolidate应该去哪个目录下找文件
app.set("views", __dirname + "/templates")
//告诉服务器,consolidate整合的是哪个模板引擎
app.set("html", consolidate.ejs)
app.get("/", (request, response) => {
    response.serect = cookieKey
    response.cookie("name", ("haha"), {maxAge:20*1000,signed:true})//设置20秒后过期 启动加密
    response.send("ok")
})
app.get("/user", (request, response) => {
    console.log(request.cookies)//没有签名的获取方式无法获取已经签名过的cookie
    console.log("已经签名过的cookie",request.signedCookies)
    response.cookie("user",("user"),{path:"/user"})//默认为游览器关闭时失效 只在/user加载
    response.send("user")
})
app.get("/del", (request, response) => {
    response.clearCookie("name")//删除cookie
    response.send("del")
})
//处理静态资源
app.use(express.static(__dirname + "/statics")) 