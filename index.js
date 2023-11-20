import express from 'express';

const app = express();

app.get("/", (req,res)=>{
    res.send ("hii")
})

app.listen(5000,()=>{
    console.log("hey app is listening")
})