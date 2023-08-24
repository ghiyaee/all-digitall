import mongoose from 'mongoose';
import User from './userModel.js';
const messageSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isSync: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
