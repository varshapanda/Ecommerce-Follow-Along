const mongoose = require('mongoose');
const UserModel = require('../models/user.model.js');
const CartModel = require('../models/cart.model.js');

async function AddToCartController(req,res){
    const {productId, quantity} = req.body;
    const userId = req.UserId;
    try{
        if(!mongoose.Types.ObjectId.isValid(productId)){
            return res.status(400).send({message:"Send valid product id", success:false})
        }
        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(400).send({message:"Send valid user id", success:false})
        }

        const checkUserPresent = await UserModel.findOne({_id:userId});
        if(!checkUserPresent){
            return res.status(401).send({message:'Unauthorized please signup', success:false});
        }
        const checkIfProductPresent = await CartModel.findOne({productId:productId});
        if(checkIfProductPresent){
            return res.status(400).send({message:'Product already present', success:false});
        } 
        await CartModel.create({
            productId,
            quantity,
            userId,
        });

        return res.status(201).send({message:'Product added successfully'})
    }catch(err){
        return res.status(500).send({message:err.message, success:false})
    }
}

// milestone18
async function GetProductsForUser(req,res){
    const userId = req.UserId
    try{
       if(!mongoose.Types.ObjectId.isValid(userId)){
        return res.status(401).send({message:'Un-authorized please signup'});
       } 
       const checkUserPresent = await UserModel.findOne({_id:userId})
       if(!checkUserPresent){
        return res.status(401).send({message:'Unauthorized please signup'});
       }
       const data = await CartModel.find({userId});
       return res
       .status(200)
       .send({
        message:'Data is successfully fetched',
        success:true,
        cartData:data,       })
    }catch(err){
        return res.status(500).send({message:err.message, success:false});
    }
}

module.exports = {AddToCartController, GetProductsForUser};