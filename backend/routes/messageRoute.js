import express from 'express';
import Message from '../models/messageModel.js';
const messageRoute = express.Router();

messageRoute.post('/', async (req, res) => {
  const message = new Message({
    message: req.body.msg,
    user_id: req.body.state._id,
  });
  await message.save();
  res.send(message);
});
messageRoute.get('/all', async (req, res) => {
  const msg = await Message.find().populate('user_id');
  res.send(msg);
});

messageRoute.post('/edit', async (req, res) => {
  const msg =
    await Message.findOneAndUpdate({ user_id: req.body.userinfo[0]._id, isSync: false }, { isSync: true })
})
export default messageRoute;
