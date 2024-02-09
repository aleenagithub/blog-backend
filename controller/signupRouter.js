const express=require("express")
const router=express.Router()
const bcrypt= require("bcryptjs")
const signupModel = require("../model/signupModel")


hashPasswardGenertor=async (pass)=>{
    const salt= await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}

router.post("/add",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashPasswardGenertor(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let signup=signupModel(data)
            let result =signup.save()
            res.json({
                status:"success"
            })
        }
    )
    
})









module.exports=router