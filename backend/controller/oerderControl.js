import Order from '../models/orderModel.js';
const home = async (req, res) => {
  const order = await Order.find().populate([
    'user_id',
    'product_id',
    'address_id',
  ]);
  res.send(order);
};
const newOrder = async (req, res) => {
  const order = new Order({
    numOrder: req.body.newState[0],
    total: req.body.newState[1],
    user_id: req.body.newState[2],
    product_id: req.body.newState[3],
    address_id: req.body.newState[4],
  });
  await order.save();
  const orders = await Order.findOne({
    user_id: req.body.newState[2],
    product_id: req.body.newState[3],
    address_id: req.body.newState[4],
  }).populate(['user_id', 'product_id', 'address_id']);
  res.send(orders);
};
const send = async (req, res) => {
  const order = await Order.findOne({ _id: req.body.order._id });
  order.status = true;
  order.dateSend = Date.now();
  await order.save();
  const orders = await Order.find().populate([
    'user_id',
    'product_id',
    'address_id',
  ]);
  res.send(orders);
};
const userOrder = async (req, res) => {
  const order = await Order.find({ user_id: req.body.userinfo[0] }).populate([
    'user_id',
    'product_id',
    'address_id',
  ]);
  res.send(order);
};
const orderFilter = async (req, res) => {
  const order = await Order.find({
    $or: [
      { category: 'mobile' },
      { category: 'headbi' },
      { category: 'headba' },
      { category: 'flash' },
      { category: 'labtab' },
    ],
  });
};
export { home, newOrder, send, userOrder, orderFilter };
