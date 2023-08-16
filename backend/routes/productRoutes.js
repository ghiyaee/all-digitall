import express from 'express';
import Product from '../models/productModel.js';
const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const products = await Product.find();
  res.send(products)
})
productRouter.post('/newProduct', async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      slug: req.body.slug,
      img: req.body.img,
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.descritp,
      price: req.body.price,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
    });
    await product.save();
    res.status(201).send({msg:'ثبت محصول با موفقیت انجام شد'})
  } catch (error) {
    res.status(500).send({msg:"مشکلی در سرور ایجاد شده"})
  }

})
productRouter.post('/categorys', async (req, res) => {
  try {
    const product = await Product.find({ category: req.body.category });
    res.send(product);
  } catch (error) {
    res.status(500).send({mgs:"مشکلی در سرور ایجاد شده"})
  }
  
})
productRouter.post('/category', async (req, res) => {
  try {
    const product = await Product.find({ category: req.body.state });
    res.send(product);
  } catch (error) {
    res.status(500).send({mgs:"مشکلی در سرور ایجاد شده"})
  }
})
productRouter.post('/like', async (req, res) => {
  const product = await Product.findOne({ _id: req.body.product._id });
  product.like = req.body.product.like
  await product.save();
  const newProduct = await Product.findOne({ _id: req.body.product._id });
  res.send(newProduct);
})
productRouter.post('/dislike', async (req, res) => {
  const product = await Product.findOne({ _id: req.body.product._id });
  product.disLike = req.body.product.disLike;
  await product.save();
  const newProduct = await Product.findOne({ _id: req.body.product._id });
  res.send(newProduct);
});
// productRouter.post('/likeComment', async (req, res) => {
//   const product = await Product.findOne({ _id: req.body.product._id });
//   product.likeComment = req.body.product.likeComment;
//   await product.save();
//   const newProduct = await Product.findOne({ _id: req.body.product._id });
//   res.send(newProduct);
// });
// productRouter.post('/dislikeComment', async (req, res) => {
//   const product = await Product.findOne({ _id: req.body.product._id });
//   product.disLikeComment = req.body.product.disLikeComment;
//   await product.save();
//   const newProduct = await Product.findOne({ _id: req.body.product._id });
//   res.send(newProduct);
// });
productRouter.post('/Edit', async (req, res) => {
  const product = await Product.findOne({ _id: req.body.id })
  product.price = req.body.price;
  product.countInStock = req.body.countInStock;
  await product.save();
  const newProduct = await Product.findOne({ _id: req.body.id });
  res.send(newProduct)
})
productRouter.post('/comment', async (req, res) => {
  const product = await Product.findOne({ _id: req.body.product })
  product.comment.push({ text: req.body.text });
  await product.save()
  const newPro = await Product.findOne({_id:req.body.product})
  res.send(newPro);
})
productRouter.post('/del', async (req, res) => {
 
  const products = await Product.findOne({ _id: req.body.product });
  await products.deleteOne();
  const newProducts = await Product.find();
  res.send(newProducts) 
})

productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({slug:req.params.slug});
  res.send(product);
});

productRouter.post('/searchProduct', async (req, res) => {
  const product = await Product.find({ brand: req.body.state });
  product.length > 0
    ? res.send(product)
    : res.send({ msg: 'محصولی یافت نشد' });
})
export default productRouter;