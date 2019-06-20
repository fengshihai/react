const mysql = require("mysql")
//连接池
const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "react"
});
const add = "INSERT INTO accounts(usename,gender)VALUES('f','男');"
const sel = 'SELECT id,usename,gender FROM accounts;'
pool.query(sel, (err,data) => {
    if (!err) {
        console.log("成功")
        console.log(data)
    }else{
        console.log(err)
    }
});
