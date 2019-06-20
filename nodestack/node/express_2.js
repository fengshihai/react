const express = require("express")
const bodyParser = require('body-parser')
const multer = require("multer")
const app = express() 
app.listen(8080,()=>{
	console.log("localhost:8080")
})
app.use(bodyParser.urlencoded({
	extended:false,   
	limit:2 * 1024 * 1024	//默认为100k
}))
app.use(multer({dest:__dirname+"/upload"}).any())
app.post("/",(request,response)=>{
    response.send("Hello") 
})
//处理了静态资源
app.use(express.static(__dirname+"/statics"))		