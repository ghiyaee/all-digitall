import express from "express";
import Product from '../models/productModel.js';
import data from '../data.js';
import User from "../models/userModel.js";
const seedRouter = express.Router()
seedRouter.get('/', async (req, res) => {
try {
   await Product.deleteMany({});
   await User.deleteMany({});
   const createProducts = await Product.insertMany(data.products);
   const createUser = await User.insertMany(data.user);
     res.send({ createProducts ,createUser});
} catch (error) {
   console.log(error.message)
}
})
export default seedRouter;