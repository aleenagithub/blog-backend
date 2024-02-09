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
router.get("/viewpost",async(req,res)=>{
    let result=await postmodel.find()
    .populate("userId","name age phoneno pin email -_id")
    .exec()
    res.json(result)
})
module.exports=router