const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name:{ type : String, required : [ true, 'Please Enter the Name...'] },
    email: {type:String, required:[true, 'Please Enter Email..'], 
    unique:[true, 'Please enter Unique Email Address'],
    },
    password:{type:String, required:[true, 'Please enter the password..']},
    address: [
        {city:String},
        {country:String},
        {add1:String},
        {add2:String},
        {zipCode:String},
        {addressType:String},
    ],
    role:{type:String, default:'user'},
    avatar:{
        url:{type:String, required:true},
        public_id:{type:String, required:true},
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
},
{
    versionKey: false
}

);

const userModel= mongoose.model('User', userSchema);
module.exports = userModel;