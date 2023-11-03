import express from 'express';
import Comment from '../models/commentModel.js';
const commentRouter = express.Router();
commentRouter.get('/allComments', async (req, res) => {
  const comments = await Comment.find().populate(['user_id', 'product_id']);
  res.send(comments);
});
commentRouter.post('/like', async (req, res) => {
  const product = await Comment.findOne({
    product_id: req.body.comment.product_id,
  });
  product.like = req.body.comment.like;
  await product.save();
  const comment = await Comment.findOne({
    product_id: req.body.comment.product_id,
  });
  res.send(comment);
});
commentRouter.post('/dislike', async (req, res) => {
  const product = await Comment.findOne({
    product_id: req.body.comment.product_id,
  });
  product.disLike = req.body.comment.disLike;
  await product.save();
  const comment = await Comment.findOne({
    product_id: req.body.comment.product_id,
  });
  res.send(comment);
});
commentRouter.post('/search', async (req, res) => {
  const com = await Comment.find({
    show_comment: true,
    product_id: req.body.product._id,
  }).populate(['user_id', 'product_id']);
  res.send(com);
});
commentRouter.post('/user', async (req, res) => {
  const com = await Comment.find({ user_id: req.body.user }).populate([
    'user_id',
    'product_id',
  ]);
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
  res.send({ msg: 'نظرشما ثبت شد پس از تایید نمایش داده خواهدشد' });
});
commentRouter.post('/confirmation', async (req, res) => {
  const comment = await Comment.findOne({ _id: req.body.id });
  comment.show_comment = true;
  await comment.save()
  const comments = await Comment.find().populate(['user_id', 'product_id']);
  res.send(comments);
});
export default commentRouter;
