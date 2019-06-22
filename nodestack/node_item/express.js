const express = require("express")
const bodyParser = require("body-parser")
const multer = require("multer")
const consolidate = require("consolidate")
const cookie = require("cookie-parser")//引入cookie-parser获取cookie数据
const session = require("cookie-session")//引入cookie-session
const app = express()
app.listen(8080, () => { console.log("session") })
//把密钥设置到cookie中
const cookieKey = "abcdefg" + Math.random()
//引入cookie-parser
app.use(cookie(cookieKey))
//引入cookie-session必须再cookie-parser后面
let sessionKeys = []
for (let i = 1; i <= 100; i++) {
    let mt_rand = String(Math.random())
    sessionKeys.push(mt_rand)
}
app.use(session({
    name: "node_session",
    keys: sessionKeys,//keys必须接受String类型
    maxAge: 1200 * 1000
}))
app.use(bodyParser.urlencoded({
    extended: false,
    limit: 2 * 1024 * 1024
}))
app.use(multer({ dest: __dirname + "upload" }).any())
//告诉服务器,我们需要使用的模板引擎是什么类型: (xml json html)
app.set("view engine", "html")
//告诉服务器,consolidate应该去哪个目录下找文件
app.set("views", __dirname + "templates")
//告诉服务器,consolidate整合的是哪个模板引擎
app.set("html", consolidate.ejs)

//处理静态资源
app.use(express.static(__dirname + "/statics")) 