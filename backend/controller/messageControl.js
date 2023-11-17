import Message from '../models/messageModel.js';
const home = async (req, res) => {
  const message = new Message({
    message: req.body.msg,
    user_id: req.body.state._id,
  });
  await message.save();
  res.send(message);
}
const allMessage = async (req, res) => {
  const msg = await Message.find().populate('user_id');
  res.send(msg);
};

const editMessage = async (req, res) => {
  const msg = await Message.findOneAndUpdate(
    { user_id: req.body.userinfo[0]._id, isSync: false },
    { isSync: true }
  );
};
export {home,allMessage,editMessage}