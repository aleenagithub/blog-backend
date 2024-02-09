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

router.get("/view",async(req,res)=>{
    let data=await signupModel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await patientModel.find(input)
   res.json(data)
 })
  
module.exports=router


