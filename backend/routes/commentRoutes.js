import express from 'express';
import Comment from '../models/commentModel.js';
const commentRouter = express.Router();

commentRouter.post('/search', async (req, res) => {
  const newComment = await Comment.findOne({ product_id: req.body.product._id }).populate(['user_id', 'product_id']);
  console.log(newComment);
 res.send(newComment);
});
commentRouter.post('/newComment', async (req, res) => {
  const comment = new Comment({
    text: req.body.newComment,
    user_id: req.body.userinfo[0]._id,
    product_id: req.body.product._id,
  });
  await comment.save();
  const newComment = await Comment.find().populate(['user_id']);
  res.send(newComment);
});

commentRouter.post('/newText', async (req, res) => {
  const text = new Comment({
    text: req.body.text,
  });
  await text.save();
  const View = await Text.find();
  res.send(View);
});

export default commentRouter;


