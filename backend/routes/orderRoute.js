import experss from 'express';
import Order from '../models/orderModel.js';
const orderRoute = experss.Router();

orderRoute.get('/', async (req, res) => {
  const order = await Order.find().populate([
    'user_id',
    'product_id',
    'address_id',
  ]);
  res.send(order)
  console.log(order);
})
orderRoute.post('/new', async (req, res) => {
  console.log(req.body );
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
});

orderRoute.post('/send', async (req, res) => {
  const order = await Order.findOne({ _id: req.body.order._id })
  order.status = true
  order.dateSend = Date.now()
  await order.save()
  const orders = await Order.find().populate(['user_id', 'product_id', 'address_id'])
  res.send(orders)
  
})
orderRoute.post('/user', async (req, res) => {
  const order = await Order.find({ user_id: req.body.userinfo[0] }).populate([
    'user_id',
    'product_id',
    'address_id',
  ]);
  res.send(order)
})
orderRoute.get('/filter', async (req, res) => {
  const order = await Order.find({
    $or: [
      { category: 'mobile' },
      { category: 'headbi' },
      { category: 'headba' },
      { category: 'flash' },
      { category: 'labtab' },
    ],
  })

})
export default orderRoute;
