
import mongoose from "mongoose";
import User from '../models/userModel.js';
const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    img: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    postComment:{type:mongoose.Schema.Types.ObjectId,Ref:"User",required:true},
    comment: [
      {
        text: { type: String, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productsSchema)
export default Product;