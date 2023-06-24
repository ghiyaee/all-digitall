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
    <div className="flex justify-around container m-auto ">
      <div className="flex border p-10 items-center gap-[100px] bg-zinc-800 text-white">
        <div className="w-96 p-6 rounded-lg ">
          <img src={product.img} alt="img" />
        </div>
        <div className=" text-3xl font-[yekan] flex flex-col gap-3">
          <h1 className="">برند :{product.name}</h1>
          <p>امتیاز :{product.rating}</p>
          <p>قیمت : {product.price} تومان</p>
          <p>توضیحات : {product.description}</p>
          <p> وضعیت : {product.countInStock > 0 ? 'موجود' : 'ناموجود'} </p>
          <button
            className={`bg-green-500 p-4 text-white rounded-lg w-full 
          ${product.countInStock > 0 ? 'block' : 'hidden'}
          `}
          >
            خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
