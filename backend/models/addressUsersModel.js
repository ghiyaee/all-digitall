import mongoose from 'mongoose';
import User from './userModel.js';
const addressSchema = mongoose.Schema({
  province: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  postCode: { type: Number, required: true },
  mobile: { type: Number, required: true },
  tell: { type: Number, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
const Address = mongoose.model('Address', addressSchema);
export default Address;
