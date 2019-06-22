const express = require("express")
const mysql = require("./common/mysql")
module.exports = function(){
    const router = express.Router()
    //显示注册界面
    router.get("/register",(Request,Response)=>{
        Response.render("register.ejs",(err,data)=>{
            if (!err) {
               Response.send(data)
            }
        })
    })
    //注册:判断用户是否已经存在
 


    return router
}