const ErrorHandler = require("../utils/ErrorHandler.js")
const userModel = require("../models/user.model.js");
const transporter = require('../utils/sendMail.js');
const jwt = require('jsonwebtoken');

require('dotenv').config({
    path: '../config/.env',
})


async function createUser(req,res){
    const {Name, email, password} = req.body;
    const checkUserPresent = await userModel.findOne({
        email:email,
    });

    if(checkUserPresent){
        const error = ErrorHandler('Already Present in DB', 400);

        return res.status(404).send({
            message: error.message,
            status: error.statusCode,
            success: false,
        });
    }
    const newUser=new userModel({
        Name:Name,
        email:email,
        password:password,  
    });

    const data = {
        Name,
        email,
        password
    }

    const token = generateToken(data);
    await transporter.sendMail({
        to: 'varshavpanda@gmail.com',
        from: 'varshavijayashwini@gmail.com',
        text: 'Text',
        html: `Hello World! http://localhost:5173/activation/${token}`,
    })
    await newUser.save();
    return res.send('User created successfully');
}
const generateToken=(data)=>{
    const token = jwt.sign(
        { name: data.name, email: data.email},
        process.env.SECRET_KEY
    )
    return token;
}
const verifyUser = (token) => {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (verify) {
      return verify;
    } else {
      return false;
    }
  };
  
  async function verifyUserController(req, res) {
    const { token } = req.params;
    try {
      if (verifyUser(token)) {
        return res
          .status(200)
          .cookie('token', token)
          .json({ token, success: true });
      }
      return res.status(403).send({ message: 'token expired' });
    } catch (er) {
      return res.status(403).send({ message: er.message });
    }
  }
  
  module.exports = { createUser, verifyUserController };