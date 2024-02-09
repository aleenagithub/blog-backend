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
    let Password=data.Password
    hashPasswardGenertor(Password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.Password=hashedPassword
            console.log(data)
            let user=signupModel(data)
            let result =user.save()
            res.json({
                status:"success"
            })
        }
    )
    
})


  




module.exports=router