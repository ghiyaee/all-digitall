import Comment from '../models/commentModel.js';
const allComments = async (req, res) => {
  const comments = await Comment.find().populate(['user_id', 'product_id']);
  res.send(comments);
};

const like = async (req, res) => {
  const product = await Comment.findOne({
    product_id: req.body.comment.product_id,
  });
  product.like = req.body.comment.like;
  await product.save();
  const comment = await Comment.findOne({
    product_id: req.body.comment.product_id,
  });
  res.send(comment);
};

const dislike = async (req, res) => {
  const product = await Comment.findOne({
    product_id: req.body.comment.product_id,
  });
  product.disLike = req.body.comment.disLike;
  await product.save();
  const comment = await Comment.findOne({
    product_id: req.body.comment.product_id,
  });
  res.send(comment);
};

const search = async (req, res) => {
  const com = await Comment.find({
    show_comment: true,
    product_id: req.body.product._id,
  }).populate(['user_id', 'product_id']);
  res.send(com);
};

const user = async (req, res) => {
  const com = await Comment.find({ user_id: req.body.user }).populate([
    'user_id',
    'product_id',
  ]);
  res.send(com);
};

const deleted = async (req, res) => {
  const comment = await Comment.findOne({ _id: req.body.id });
  await comment.deleteOne();
  const comments = await Comment.find().populate(['user_id', 'product_id']);
  res.send(comments);
};

const newComment = async (req, res) => {
  const comment = new Comment({
    text: req.body.newComment,
    user_id: req.body.user,
    product_id: req.body.product._id,
  });
  await comment.save();
  res.send({ msg: 'نظرشما ثبت شد پس از تایید نمایش داده خواهدشد' });
};
const confirmations = async (req, res) => {
  const comment = await Comment.findOne({ _id: req.body.id });
  comment.show_comment = true;
  await comment.save();
  const comments = await Comment.find().populate(['user_id', 'product_id']);
  res.send(comments);
};
export {
  allComments,
  like,
  dislike,
  search,
  user,
  deleted,
  newComment,
  confirmations,
};
