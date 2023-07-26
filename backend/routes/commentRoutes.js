import express from 'express';
import Comment from '../models/commentModel.js';
const commentRouter = express.Router();

commentRouter.post('/search', async (req, res) => {
  const com = await Comment.find({ product_id: req.body.product._id }).populate(
    ['user_id', 'product_id']
  );
  // res.send(com)
  // console.log(com);
  // const newComment = await Comment.findOne({ product_id: req.body.product._id}).populate(['user_id', 'product_id']);
  console.log(com);
 res.send(com);
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
  // console.log(com);
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


