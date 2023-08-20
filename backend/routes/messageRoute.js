import express from 'express';
import Message from '../models/messageModel.js';
const messageRoute = express.Router()
 
messageRoute.post('/', async (req, res) => {
    console.log(req.body);
  // console.log(req.body);
  // const msg = await Message.findOne({ user_id: req.body.state })
  // console.log(msg);
  const message = new Message({
    message: req.body.state,
  });
  await message.save();
  const msg = await Message.findOne({ user_id: req.body.state })
  console.log(msg);
})

export default messageRoute
