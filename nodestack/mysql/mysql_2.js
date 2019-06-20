const mysql = require("mysql")
//连接池
const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "react"
});
//定义个generator
function * getStudentsInfo(){
    yield pool.query("SELECT id FROM accounts WHERE usename = ?",['a'],(err,data)=>{
        if (!err&&data.length>0) {
            console.log("先查找到a的id",data[0].id)
            it.next(data[0].id)
        }else{
            console.log("无法找到数据")
        }
    })
    yield pool.query("SELECT id,usename,gender FROM accounts WHERE usename =?",['a'],(err,data)=>{
        if (!err&&data.length>0) {
            console.log("先查找到a",data)
            it.next()
        }
    })
}
let it = getStudentsInfo() //产生一个迭代器
it.next()