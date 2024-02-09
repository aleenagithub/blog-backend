const express=require("express")
const postmodel=require("../model/postmodel")
const router=express.Router()
router.post("/addpost",async(req,res)=>{
    let data =req.body
    let post= new postmodel(data)
    let response = await post.save()
    res.json({
        status:"success"
    })

})

module.exports=router