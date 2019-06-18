const fs = require("fs")


fs.writeFile("./htdocs/abc.txt","我爱中国人","utf8",(err)=>{
    if(!err){
        console.log("写入成功")
    }
})