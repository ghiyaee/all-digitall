import mongoose from 'mongoose';
const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    img: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    like: { type: Number, default: 0 },
    disLike:{type :Number,default:0}
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productsSchema);
export default Product;
