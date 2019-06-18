const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/demo", { useNewUrlParser: true })


//连接数据库后，操作mongodb需要声明约束对象（Schema）,Schema是一个构造函数,通过mongoose.Schema就可以获取
const Schema = mongoose.Schema; 
//创建集合（model）需要使用Schema对集合中的字段进行约束
const stuSchema = new Schema({
    name:String, 
    age:Number,
    gender:String,
    national:{
        type:String,
        default:"中国"
    }
})

//创建Model
const stuModel = mongoose.model("students",stuSchema)



stuModel.findOne({},(err,data)=>{
    if(!err){
       
        console.log(data)

        // let json = data.toJSON(); //我认为toJSON有bug
        // console.log(json)
        // console.log(typeof json)


        //把document对象转为json字符串使用JSON.stringify
        let json = JSON.stringify(data) //把对象转为json字符串，一般用于录入数据库中
        console.log(json)
        console.log(typeof json)

        let strJson = `{"national":"中国","_id":"5c7b8f6b89639b170c9d1bf2","name":"沙和尚","age":108,"gender":"male","__v":11}`
        let obj = JSON.parse(strJson)
        console.log(obj)
        console.log(typeof obj)
    }
})