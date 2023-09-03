import experss from 'express';
import Order from '../models/orderModel.js';
const orderRoute = experss.Router();

orderRoute.post('/', async (req, res) => {
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

export default orderRoute;
