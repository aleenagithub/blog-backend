const express=require("express")
const signupModel=require("../model/signupModel")
const router=express.Router()
//separate page  to  call api 
router.post("/add",async(req,res)=>{
    let data=req.body
    let  signup=new signupModel(data)
    let result=await signup.save()
    res.json(
        {
            status:"success"
        }
    )
})



  
module.exports=router


