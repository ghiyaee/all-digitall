import mongoose from 'mongoose';
import User from './userModel.js';
import Product from './productModel.js';
const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  },
  { timestamps: true }
);
const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
