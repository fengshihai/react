const http = require("http")
//const queryString = require("queryString")	//	&	= 
const url = require("url")					//	?	&	=
http.createServer((request,response)=>{
	//data事件:负责数据拆分
	//end事件:当数据拆分完后触发
	let postData = ""
	let i =0
	request.on("data",(_post)=>{
		console.log("组合"+(++i)+"次")
		//每拆分一次我们就拼接一次
		postData +=_post
	})
	request.on("end",()=>{
		console.log("post完成:",postData)
	})
	response.end()
}).listen(8080,()=>{
	console.log("服务器启动成功,可以访问localhost:8080")
})