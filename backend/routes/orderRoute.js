import experss from 'express';
import Order from '../models/orderModel.js';
const orderRoute = experss.Router();

orderRoute.post('/', async (req, res) => {
  console.log(req.body.state[4]);
  const order = new Order({
    numOrder: req.body.state[0],
    total: req.body.state[1],
    user_id: req.body.state[2],
    product_id: req.body.state[3],
    address_id: req.body.state[4],
  });
  await order.save();
  const orders = await Order.findOne({
    user_id: req.body.state[2],
    product_id: req.body.state[3],
    address_id: req.body.state[4],
  }).populate(['user_id', 'product_id', 'address_id']);
  res.send(orders);
});

export default orderRoute;
