import express from 'express';
import Product from '../models/productModel.js';
const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products)
})

productRouter.post('/Edit', async (req, res) => {
  const product = await Product.findOne({ _id: req.body.id })
  product.price = req.body.price;
  product.countInStock = req.body.countInStock;
  await product.save();
  const newProduct = await Product.find();
  res.send(newProduct)
})
productRouter.post('/comment', async (req, res) => {
  const pro = await Product.findOne({ _id: req.body.product })
  pro.comment.push(req.body.text)
  await pro.save();
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
  console.log(req.body);
  const product = await Product.findOne({slug:req.params.slug});
  res.send(product);
});

export default productRouter;