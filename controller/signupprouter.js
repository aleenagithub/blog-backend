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
    /*hashPasswardGenertor(Password).then(
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


  
router.post("/signin",async(req,res)=>{
    let input =req.body
    let data=await signupModel.find(input)
    res.json({

          status:"success"
    })*/
    const hashedPassword=await hashPasswardGenertor(Password)
data.Password=hashedPassword
let user=new signupModel(data)
let result=await user.save(data)
res.json({

    status:"success"
})
})

router.post("/signin",async(req,res)=>{
    let input =req.body
    let Email=req.body.Email
//reetrive all info of emailid

    let data=await signupModel.findOne({"Email":Email})
    if(!data)
    {
        return res.json({

            status:"invalid user"
        })
    }
    console.log(data)
    let dbPassword=data.Password
    let inputPassword=req.body.Password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match){
        return res.json ({

            status:"invalid password"
        })
    }
    else{
        res.json(
            {
                status:"success"
            }
        )
    }
    
})





module.exports=router