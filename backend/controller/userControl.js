import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

const users = async (req, res) => {
  const user = await User.find();
  res.send(user);
};
const message = async (req, res) => {
  const message = await User.findOne({ _id: req.body.state });
  message.msg = req.body.msg;
  await message.save();
};
const delelte = async (req, res) => {
  const user = await User.findOne({ _id: req.body.user });
  await user.deleteOne();
  const newUser = await User.find();
  res.send(newUser);
};
const edit = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  await user.save();
  const newUser = await User.find();
  res.send(newUser);
};
const signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
      return;
    }
  }
  res.status(401).send({ msg: 'email or password not validation' });
};
const signUp = async (req, res) => {
  const saltRounds = 12;
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, saltRounds),
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
    return;
  }
  res.status(401).send({ msg: 'email or password not validation' });
};
export {users,message,delelte,edit,signin,signUp}