const express = require("express")
module.exports = function(){
    const router =  express.Router()
    router.post("/add",(request,response)=>{
        response.send("pro add~")
    })
    router.get("/list",(request,response)=>{
        response.send("pro list~")
    })
    router.get("/del",(request,response)=>{
        response.send("pro del~")
    })
    router.post("/update",(request,response)=>{
        response.send("pro update~")
    })
    return router
}