import mongoose from 'mongoose';
import Product from './productModel.js';
const likeSchema = new mongoose.Schema(
  {
    like: { type: Number, required: true },
    disLike: { type: Number, required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  },
  {
    timestamps: true,
  }
);

const Like = mongoose.model('Like', likeSchema);

export default Like

