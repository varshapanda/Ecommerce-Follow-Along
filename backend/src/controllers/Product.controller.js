const multer = require('multer');
const cloudinary = require('../utils/cloudinary.js');
const fs = require('fs');
const ProductModel = require('../models/Product.model.js');

const createProductController = async (req, res) => {
  const {
    title,
    description,
    rating,
    discountedPrice,
    originalPrice,
    quantity,
    category,
  } = req.body;

  try {
    const arrayImage = req.files.map(async (singleFile, index) => {
      return cloudinary.uploader
        .upload(singleFile.path, {
          folder: 'uploads',
        })
        .then((result) => {
          fs.unlinkSync(singleFile.path);
          return result.url;
        });
    });

    const dataImages = await Promise.all(arrayImage);
    const StoreProductDetails = await ProductModel.create({
      title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
      images: dataImages,
    });
    return res.status(201).send({
      message: 'Image Successfully Uploaded',
      sucess: true,
      dataImages,
      StoreProductDetails,
    });
  } catch (er) {
    if (er instanceof multer.MulterError) {
      return res.status(400).send({
        message: 'Multer error plese send image less than 5 ',
        success: false,
      });
    }

    return res.status(500).send({ message: er.message, success: false });
  }
};

const getProductDataController = async (req,res)=>{
  try{
    const data = await ProductModel.find();
    return res
    .status(200)
    .send({data,message:'Data fetched successfully'})
  }catch(err){
    return res.status(500).send({message:err.message, success:false })
  }
}
module.exports = { createProductController, getProductDataController };