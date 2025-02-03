const { default:mongoose} = require('mongoose');
const OrderModel = require('../models/Order.model.js');

async function CreateOrder(req, res){
    const userId = req.UserId;
    const {Items, address, totalAmount} = req.body; 
    try{

        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.
            status(400)
            .send({message:'Invalid user id', success:false});
        }

        const checkUser = await userModel.findOne({_id:userId});
        if(!checkUser){
            return res.status(400).send({message:'User not present please signup', success:false});
        }
        if(!Items){
            return res.status(400).send({message:'Items not present', success:false});
        } 

        const order = await OrderModel.create({
            user:userId,
            orderItems:Items,
            shippingAddress:address,
            totalAmount:totalAmount
        })
        return res.status(201).send({message:'Data fetched successfully', success:true, order})

    }
    catch(err){
        return res.status(500).send({message:err.message, success:false});
    }
}

module.exports = {
    CreateOrder,
}