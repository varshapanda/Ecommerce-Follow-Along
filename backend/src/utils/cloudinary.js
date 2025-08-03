const cloudinary = require('cloudinary').v2;

if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: '../config/env',
  });
}
// console.log('Cloudinary Config:', {
//   cloud_name: process.env.cloud_name,
//   api_key: process.env.api_key,
//   api_secret: process.env.api_secret,
// });

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

module.exports = cloudinary;