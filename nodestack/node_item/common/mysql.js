const mysql = require("mysql")
//连接池
const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "react"
});
module.exports =pool