import Message from '../models/messageModel.js';
import { ObjectId } from 'mongodb';
const home = async (req, res) => {
  const message = new Message({
    message: req.body.msg,
    user_id: req.body.state._id,
  });
  await message.save();
  res.send(message);
};
const allMessage = async (req, res) => {
  const msg = await Message.find({ isSync:false });
  res.send(msg);
};

const editMessage = async (req, res) => {
  const msg = await Message.updateMany(
    { user_id: req.body.userinfo, isSync: false },
    { isSync: true }
  );
  const updateMess = await Message.find({isSync:false});
  res.send(updateMess);
};
const add = async (req, res) => {
  const message = new Message({
    message: req.body.msg,
    user_id: req.body.state._id,
  });
  await message.save();
  res.send(message);
};
export { home, allMessage, editMessage, add };

//.populate('user_id');
//$and: [{ isSync: true }, {user_id: req.body.userinfo}]
//const msg = await Message.updateMany(  { user_id: req.body.userinfo, isSync: false }, { isSync: true },
// { new: true}
//   ).then((msg) => {
//  res.send(msg)
// })