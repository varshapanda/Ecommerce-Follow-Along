if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'./src/config/.env',
    })
}

const express = require('express');

const app = express();
const userRouter = require('./routes/user.route')

app.get("/",(req,res)=>{
    return res.send("Welcome to backend");
})

app.get("/user/squad", (req,res)=>{
    return res.send({message:"Good afternon"});
})

module.exports = app;
