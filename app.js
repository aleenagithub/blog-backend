
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const signuprouter=require("./controller/signupRouter")
const app=express()
 app.use(express.json())

 app.use(cors())
 mongoose.connect("mongodb+srv://aleena_11:aleena_11@cluster0.dkjmoah.mongodb.net/blogDb?retryWrites=true&w=majority");

 app.use("/api/blog",signuprouter)

 app.listen(3001,()=>{
    console.log("server running")
 })
