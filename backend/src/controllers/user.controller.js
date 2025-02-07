const userModel = require("../models/user.model.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const transporter = require("../utils/sendMail.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary.js");
const fs = require("fs");
const { default : mongoose} = require('mongoose');

require("dotenv").config({
  path: "../config/.ereturn nv",
});

async function createUser(req, res) {
  const { Name, email, password } = req.body;
  const checkUserPresent = await userModel.findOne({
    email: email,
  });
  if (checkUserPresent) {
    const error = new ErrorHandler("Already Present in DB", 400);
    return res.status(404).send({
      message: error.message,
      status: error.statusCode,
      success: false,
    });
  }
  const newUser = new userModel({
    Name: Name,
    email: email,
    password: password,
  });
  const data = {
    Name,
    email,
    password,
  };
  const token = generateToken(data);
  await transporter.sendMail({
    to: "varshavpanda@gmail.com",
    from: "varshavijayashwini@gmail.com",
    subject: "verification email from follow along project",
    text: "Text",
    html: `Hello world http://localhost:5173/activation/${token}`,
  });

  await newUser.save();

  return res.send("User Created Successfully");
}
const generateToken = (data) => {
  const token = jwt.sign(
    { name: data.name, email: data.email , id:data.id},
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
        .cookie("token", token)
        .json({ token, success: true });
    }
    return res.status(403).send({ message: "token expired" });
  } catch (er) {
    return res.status(403).send({ message: er.message });
  }
}
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const checkUserPresentinDataB = await userModel.findOne({ email: email });
    if (checkUserPresentinDataB) {
      return res.status(403).send({ message: "User already present login" });
    }
    console.log(req.file, process.env.cloud_name);
    const ImageAddress = await cloudinary.uploader
      .upload(req.file.path, {
        folder: "uploads",
      })
      .then((result) => {
        fs.unlinkSync(req.file.path);
        return result.url;
      }).catch((err) => {console.log(err.message)});
    console.log("url", ImageAddress);

    bcrypt.hash(password, 10, async function (err, hashedPassword) {
      try {
        if (err) {
          return res.status(403).send({ message: err.message });
        }
        await userModel.create({
          Name: name,
          email,
          password: hashedPassword,
          avatar: {
            url: ImageAddress,
            public_id: `${email}_public_id`,
          },
        });

        return res.status(201).send({ message: "User created successfully" });
      } catch (er) {
        console.log(er);
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
          return res.status(403).send({ message: err.message, success: false });
        }
        let data = {
          id: checkUserPresentinDB._id,
          email,
          password: checkUserPresentinDB.password,
        };
        const token = generateToken(data);
        return res.status(200).cookie("token", token).send({
          message: "User logged in successfully..",
          success: true,
          token,
        });
      }
    );
  } catch (er) {
    return res.status(403).send({ message: er.message, success: false });
  }
};

const getUSerData = async (req, res) => {
  const userId = req.UserId;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).send({ message: 'Send Valid User Id' });
    }

    const checkUserPresentinDB = await userModel.findOne({ _id: userId });
    if (!checkUserPresentinDB) {
      return res
        .status(401)
        .send({ message: 'Please Signup, user not present' });
    }

    return res.status(200).send({ data: checkUserPresentinDB });
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
};

const AddAddressController = async (req,res)=>{
  const userId = req.UserId;
  const{city, country, address1, address2, zipCode, addressType } = req.body;
  try{
    const userFindOne = await userModel.findOne({_id:userId});
    if(!userFindOne){
      return res
      .status(404)
      .send({message:'User not found', success:false});
    }
    const userAddress={
      country,
      city,
      address1,
      address2,
      zipCode,
      addressType,
    }
    userFindOne.address.push(userAddress);
    const response = await userFindOne.save();
    return res
    .status(201)
    .send({message:'User address added successfully', success:true, response});
  }
  catch(err){
    return res.status(500).send({message:err.message})
  }
}

const DeleteAddyController = async (req, res) => {
  const userId = req.UserId;
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(401)
        .send({ message: 'Un-Authorised please signup', success: false });
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .send({ message: 'Address Id is in-valid', sucess: false });
    }
    const checkIfUSerPresent = await userModel.findOne({ _id: userId });
    if (!checkIfUSerPresent) {
      return res
        .status(401)
        .send({ message: 'Un-Authorised please signup', sucess: false });
    }
    const response = await userModel.findOneAndUpdate(
      { _id: userId },
      { $pull: { address: { _id: id } } },
      { new: true }
    );
    return res
      .status(201)
      .send({ message: 'User Address deleted', success: true, response });
  } catch (er) {
    return res.status(500).send({ message: er.message, sucess: false });
  }
};

const GetAddressController = async (req, res) => {
  const userId = req.UserId;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).send({ message: 'Please login, un-Authorised' });
    }
    const checkUser = await userModel.findOne({ _id: userId }, { address: 1 });
    if (!checkUser) {
      return res.status(401).send({ message: 'Please signup, un-Authorised' });
    }

    return res.status(200).send({
      userInfo: checkUser,
      message: 'Success',
      success: true,
    });
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
};

module.exports = { createUser, verifyUserController, signup, login, getUSerData, AddAddressController, DeleteAddyController, GetAddressController };
