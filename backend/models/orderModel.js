import mongoose from 'mongoose';
import User from './userModel.js';
import Product from './productModel.js';
import Address from "./addressUsersModel.js"
const orderSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product_id:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    address_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    numOrder: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    dateOrder: { type: Date, default: Date.now },
    dateSend: { type: Date, required: false },
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema)

export default Order
