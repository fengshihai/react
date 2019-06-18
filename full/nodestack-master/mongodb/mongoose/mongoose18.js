const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/demo", { useNewUrlParser: true })


//连接数据库后，操作mongodb需要声明约束对象（Schema）,Schema是一个构造函数,通过mongoose.Schema就可以获取
const Schema = mongoose.Schema; 
//创建集合（model）需要使用Schema对集合中的字段进行约束
const classesSchema = new Schema({
    name:String, 
    age:Number,
    lesson:String
})

//创建Model
const classesModel = mongoose.model("classes",classesSchema)

// let obj = {
//     name:"xxx",
//     age:333,
//     gender:"dsffd"
// }
// delete obj.age 
// console.log(obj.name,obj.gender,obj.age)


classesModel.countDocuments({},(err,count)=>{
    console.log( count )
})