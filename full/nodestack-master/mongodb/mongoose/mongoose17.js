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

// let obj = {
//     name:"xxx",
//     age:333,
//     gender:"dsffd"
// }
// delete obj.age 
// console.log(obj.name,obj.gender,obj.age)


stuModel.findOne({},(err,data)=>{
    if(!err){
        //document对象不等于javascript中的object普通对象
        delete data.name //delete无法删除document对象中的属性
        console.log(data)


        //如果希望删除document对象中属性或者方法需要把document转为普通对象(原有document方法就失效，但属性依然存在)
        let o = data.toObject() 
        delete o._id
        console.log(o)

    }
})