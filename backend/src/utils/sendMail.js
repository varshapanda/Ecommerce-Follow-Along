const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth:{
        user:'varshavijayashwini@gmail.com',
        pass: 'ldwa pnhz mlki pvml',
    },
});
module.exports=transporter;