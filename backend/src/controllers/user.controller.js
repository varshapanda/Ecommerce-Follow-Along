const userModel = require("../models/user.model.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const transporter = require('../utils/sendMail.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config({
  path: '../config/.env',
});


async function createUser(req,res){
    const {Name, email, password} = req.body;
    const checkUserPresent = await userModel.findOne({
        email:email,
    });
    if(checkUserPresent){
        const error = new ErrorHandler('Already Present in DB', 400);
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
        password,
    }
    const token = generateToken(data);
    await transporter.sendMail({
        to: 'varshavpanda@gmail.com',
        from: 'varshavijayashwini@gmail.com',
        subject: 'verification email from follow along project',
        text: 'Text',
        html: `Hello world http://localhost:5173/activation/${token}`,
      });
    
      await newUser.save();
    
      return res.send('User Created Successfully');
    }
    const generateToken = (data) => {
        const token = jwt.sign(
          { name: data.name, email: data.email },
          process.env.SECRET_KEY
        );
        return token;
      };
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
      const signup = async (req, res) => {
        const { name, email, password } = req.body;
        try {
          const checkUserPresentinDataB = await userModel.findOne({ email: email });
          if (checkUserPresentinDataB) {
            return res.status(403).send({ message: 'User already present' });
          }
      
          bcrypt.hash(password, 10, async function (err, hashedPassword) {
            try {
              if (err) {
                return res.status(403).send({ message: err.message });
              }
              await userModel.create({
                Name: name,
                email,
                password: hashedPassword,
              });
      
              return res.status(201).send({ message: 'User created successfully' });
            } catch (er) {
              return res.status(500).send({ message: er.message });
            }
          });
        } catch (er) {
          return res.status(500).send({ message: er.message });
        }
      };
      const login = async (req, res) => {
        const { email, password } = req.body;
        try {
          const checkUserPresentinDB = await userModel.findOne({ email: email });
      
          bcrypt.compare(
            password,
            checkUserPresentinDB.password,
            function (err, result) {
              if (err) {
                return res.status(403).send({ message: er.message, success: false });
              }
              let data = {
                id: checkUserPresentinDB._id,
                email,
                password: checkUserPresentinDB.password,
              };
              const token = generateToken(data);
              return res
                .status(200)
                .cookie('token', token)
                .send({ message: 'User logged in successfully..', success: true });
            }
          );
        } catch (er) {
          return res.status(403).send({ message: er.message, success: false });
        }
      };
      
      module.exports = { createUser, verifyUserController, signup, login };