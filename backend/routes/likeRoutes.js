import express from 'express';
import Like from '../models/likeModel.js';
const likeRouter = express.Router();
likeRouter.post('/', async (req, res) => {
  const like = await Like.findOne({product_id:req.body.product._id}).populate('product_id');
  res.send(like);
});
likeRouter.post('/newlike', async (req, res) => {
  const like = await Like.findOne({ product_id: req.body.product._id });
  like.like = req.body.product.like;
  await like.save();
   const newLike = await Like.findOne({ product_id: req.body.product._id }).populate('product_id');
  res.send(newLike);
});
export default likeRouter