import express from 'express';
import Message from '../models/messageModel.js';
const messageRoute = express.Router()
 
messageRoute.post('/', async (req, res) => {
  console.log(req.body);
  const message = new Message({
    message: req.body.msg,
    user_id:req.body.state._id
  });
  await message.save();
  console.log(message);
})
messageRoute.get('/all', async (req, res) => {
  const msg = await Message.find().populate('user_id')
  res.send(msg)
})

export default messageRoute
