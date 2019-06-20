const express = require("express")
const bodyParser = require("body-parser")
const multer = require("multer")
const app = express()
app.listen(8080, () => { console.log("express server start") })
app.use(bodyParser.urlencoded({
    extended: false,
    limit: 2 * 1024 * 1024
}))
app.use(multer({ dest: __dirname + "/upload" }).any())
//引用新闻模块
app.use("/news", require("./bussine/news")())
//引用产品模块
app.use("/pro", require("./bussine/pro")())
//处理了静态资源
app.use(express.static(__dirname + "/statics")) 