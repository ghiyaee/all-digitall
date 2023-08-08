import express from 'express';
import Comment from '../models/commentModel.js';
const commentRouter = express.Router();
commentRouter.get('/allComments', async (req, res) => {
  const comments = await Comment.find().populate(['user_id', 'product_id']);
  res.send(comments);
});
commentRouter.post('/search', async (req, res) => {
  console.log(req.body);
  const com = await Comment.find({ product_id: req.body.product._id }).populate(
    ['user_id', 'product_id']
  );
  res.send(com);
});
commentRouter.post('/user', async (req, res) => {
  console.log(req.body.user);
  const com = await Comment.find({ user_id: req.body.user }).populate(
    ['user_id', 'product_id']
  );
  res.send(com);
});
commentRouter.post('/del', async (req, res) => {
  const comment = await Comment.findOne({ _id: req.body.id });
  await comment.deleteOne();
  const comments = await Comment.find().populate(['user_id', 'product_id']);
  res.send(comments);
});
commentRouter.post('/newComment', async (req, res) => {
  const comment = new Comment({
    text: req.body.newComment,
    user_id: req.body.user,
    product_id: req.body.product._id,
  });
  await comment.save();
  const com = await Comment.find({ product_id: req.body.product._id }).populate(
    ['user_id', 'product_id']
  );
  res.send(com);
});
export default commentRouter;
