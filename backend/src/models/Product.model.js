const mongoose = require('mongoose');
const SchemaObject = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 1 },
  discountedPrice: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  category: { type: String, required: true, enum: ['male', 'female', 'kids'] },
  images: [
    {
      type: String,
      required: true,
      default:
        'https://i.pinimg.com/474x/31/6c/ec/316cec65feecd9de3b24143aa928d371.jpg',
    },
  ],
};

const productSchema = new mongoose.Schema(SchemaObject, { versionKey: false });

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;