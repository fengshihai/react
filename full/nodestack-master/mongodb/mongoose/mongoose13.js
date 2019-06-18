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
        //document.update方法修改是自己本身
    //    data.update({name:"齐天大圣"},(err)=>{
    //       if(!err){
    //           console.log("update ok")
    //       }
    //    })


        
        data.name = "孙行者"
        //data.set({name:"孙悟空"})
        data.save()
    }
})