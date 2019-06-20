const express = require("express")
module.exports = function(){
    const router =  express.Router()
    router.post("/add",(request,response)=>{
        response.send("news add~")
    })
    router.get("/list",(request,response)=>{
        response.send("news list~")
    })
    router.get("/del",(request,response)=>{
        response.send("news del~")
    })
    router.post("/update",(request,response)=>{
        response.send("news update~")
    })
    return router
}