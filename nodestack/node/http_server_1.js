const http = require("http")
//const queryString = require("queryString")	//	&	= 
const url = require("url")					//	?	&	=
http.createServer((request,response)=>{
	let Get = {}
	//解决favin.ico的bug
	if (request.url.indexOf("?")!==-1) {
		Get = url.parse(request.url).query
		let a = url.parse(request.url).pathname
		switch(a){
			case "/a.html":
				response.write("this is"+a)
				console.log(Get)
				break
			case "/b.html":
				response.write("this is"+a)
				console.log(Get)
				break
			default:
				response.write("404 not found"+a)
				console.log("错误")
		}
	}
	response.end()
}).listen(8080,()=>{
	console.log("服务器启动成功,可以访问localhost:8080")
})