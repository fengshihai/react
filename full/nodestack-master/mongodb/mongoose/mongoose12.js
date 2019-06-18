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


//stuModel.remove(条件(条件为空删除全部),回调函数)
stuModel.remove({name:"彭劲"},(err)=>{
    if(!err){
        console.log("删除~!")
    }
})