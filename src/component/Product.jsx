import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Product() {
  const [product, setProduct] = useState([])
  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/products/slug/${slug}`);
      setProduct(res.data);
    };
    fetchData();
  }, [slug]);

  return (
    <div className="flex justify-around container m-auto">
      <div className="w-96 p-6 rounded-lg bg-white">
        <img src={product.img} alt="img" />
      </div>
      <div className="bg-gradient-to-b from-white to-indigo-500 title text-3xl font-[yekan] ">
        <h1 className="">برند :{product.name}</h1>
        <p> موجودی: {product.countInStock}</p>
        <p>امتیاز :{product.rating}</p>
        <p>قیمت : {product.price} تومان</p>
        <p>توضیحات : {product.description}</p>
      </div>
      <div>فاکتور</div>
    </div>
  );
}

export default Product;
