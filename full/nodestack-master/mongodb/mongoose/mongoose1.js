const mongoose = require("mongoose")
//协议格式:mongodb://用户名:密码@服务器名称:端口号/数据库名
//mongodb://root:12345@localhost:27017/admin
//如果没有添加 { useNewUrlParser: true } 会报出一个warning
/**
 * 
 * (node:1976) DeprecationWarning: current URL string parser is deprecated, 
 * and will be removed in a future version. To use the new parser, 
 * pass option { useNewUrlParser: true } to MongoClient.connect.
 */
mongoose.connect("mongodb://localhost:27017/demo", { useNewUrlParser: true })

//mongoose有一个名为connection的连接对象,该对象有几个事件
// open : 表示数据库是否已经打开（连接）,成功则回调
// closed : 表示数据库连接是否已经断开,开发时很少用
// 触发需要使用connecitons对象的once方法

//创建connections对象
const connect = mongoose.connection;
//触发open事件
connect.once("open",()=>{
    console.log("连接mongodb成功了~!")
})