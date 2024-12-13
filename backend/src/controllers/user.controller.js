const ErrorHandler = require("../utils/ErrorHandler.js")
const userModel = require("../models/user.model.js");

async function createUser(req,res){
    const {Name, email, password} = req.body;
    const checkUserPresent = await userModel.findOne({
        email:email,
    });
    if(checkUserPresent){
        return new ErrorHandler('Already Present in DB', 400);
    }
    const newUser=new userModel({
        Name:Name,
        email:email,
        password:password,  
    });
    await newUser.save();
    return res.send('User created successfully');
}
module.exports= createUser