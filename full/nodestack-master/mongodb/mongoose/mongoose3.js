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

//添加一个文档(document)：stuModel.create(文档对象,回调函数(err)=>{})

stuModel.create([{
    name:"孙悟空",
    age:28,
    gender:"male"
},{
    name:"唐三藏",
    age:38,
    gender:"male"
},{
    name:"沙和尚",
    age:18,
    gender:"male"
}],(err)=>{
    if(!err){
        console.log("添加成功~!")
    }
})
