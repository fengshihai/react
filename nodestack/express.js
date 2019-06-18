const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")
const multer = require("multer")
const app = express() 

app.listen(8080,()=>{
	console.log("localhost:8080")
})

// app.get("/",{request,response}=>{
// 	let json = {name:"haha",age:20,sex:"male"}
// 	//let arr =[1,2,3,4,5]
// 	response.send(json)
// 	//response.send()
// })
// app.get("/user",{request,response}=>{
// 	response.send('name: ${request.query.name},age: ${request.query.age}')
// })
//使用multer中间件
app.use(bodyParser.urlencoded({
	extended:false,   
	limit:2 * 1024 * 1024	//默认为100k
}))
app.use(multer({dest:__dirname+"/upload"}).any())
app.post("/",(request,response)=>{
	let title = request.body.title
	//获取上传的文件对象
	let f = request.files[0]
	//获取后缀名并统一转为小写
	let extName = path.extname(f.originalname).toLowerCase()
	//定义允许上传的后缀名
	let allowedExts = [".jpg",".png"]
	//定一个旗标
	flag = false
	for (let item of allowedExts) {
		if (item ==extName) {
			flag = true
			break
		}
	}
	if (flag) {
		//根据后缀名创建一个新的文件名
		let newName = f.destination + "/" +f.filename +extName
		//获取旧的名字
		let oldName = f.path
		//修改名字
		fs.rename(oldName,newName,err=>{
		if (!err) {
				response.send('上传成功'+f.originalname)
				console.log('上传成功'+f.originalname)
			}
		})
	}else{
		//可以删除文件,应该设置定时命令shell批量删除 rm -rf
		fs.unlink(f.path,err=>{
			console.log("上传的文件不符合要求")
		})
	}
})

