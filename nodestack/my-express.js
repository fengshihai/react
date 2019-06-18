const express = require("express")
const bodyParser = require("./my-body-parser")
const app = express() 
app.listen(8080,()=>{
	console.log("my-body-parser ..")
})
app.use(bodyParser.urlencoded())
app.post("/",(request,response)=>{
	console.log(request.body)
})