const mongoose = require("mongoose")
/*
 * mongodb有密码和没有密码的情况
 * 有密码:mongodb://用户名:密码@服务器名称:27017/数据库名称
 * 		mongodb://root:12345@localhost:27017/test
 * 无密码:mongodb://localhost:27017/test
 * 加上{useNewUrlParser:true}可以清楚警告
 */
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true})
/**
 * 创建连接对象,作用在于:监听当前连接是否
 * 监听有2个事件:open(是否已经打开),closed(没用)
 * 触发监听事件需求调用连接对象中的once方法
 */
const connect = mongoose.connection//获取链接对象
connect.once("open",()=>{
	console.log("链接成功")
})
//获取Schema构造函数
const Schema = mongoose.Schema
//创建约束
const userSchema = new Schema({
	name:String,
	age:Number,
	gender:String,
	national:{
		type:String,
		default:"地球"
	}
})
//创建模型
const userMoudel = mongoose.model("users",userSchema)
//find有4个参数:find({条件},{字段列表},{辅助功能},{回调函数})
//以前的版本{字段列表} gender 显示 -1不显示
//{字段列表} 0表示不显示 1表示显示 {}表示查询所有字段
userMoudel.find({},{_id:0,__v:0},(err,data)=>{
	console.log(data)
})