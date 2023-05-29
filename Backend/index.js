import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myNotingApp",
{
    useNewUrlParser:true,
    
    useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log("this is error",err)
    }
    else{
        console.log('databse is connected');
    }
})


// routes


app.get("/",(req,res)=>{
    res.send("my api")
})


app.listen(9002,() => {
    console.log("BE started at port 9002")
})