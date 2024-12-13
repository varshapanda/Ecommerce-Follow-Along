const ErrorHandler = require("../utils/ErrorHandler")
const userModel = require("../models/user.model");

export  async function createUser(req,res){
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