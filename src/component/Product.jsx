import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Store } from '../context/Store';
function Product() {
  const navigation=useNavigate()
  const { cart, setCart } = useContext(Store);
  const [product, setProduct] = useState([]);
  const params = useParams();
  const { slug } = params;
  const handelAddItem = (item) => {
    const exits = cart.find((f) => f.id === item.id);
    if (!exits) {
      setCart(cart.concat({ ...product,conter:1 }));
      navigation('/Card')
    } else
    {
     return
      }
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/products/slug/${slug}`);
      setProduct(res.data);
    };
    fetchData();
  }, [slug]);

  return (
    <div className="flex justify-around container m-auto ">
      <div className="flex border p-10 items-center gap-[100px] bg-zinc-800 text-white rounded-lg">
        <div className="w-96 p-6 rounded-lg ">
          <img src={product.img} alt="img" />
        </div>
        <div className=" text-3xl font-[yekan] flex flex-col gap-3">
          <h1 className="">برند :{product.name}</h1>
          <p>امتیاز :{product.rating}</p>
          <p>قیمت : {product.price} تومان</p>
          <p>توضیحات : {product.description}</p>
          <p>
            وضعیت :{product.countInStock > cart.length ? 'موجود' : 'ناموجود'}
          </p>
          <button
            onClick={()=> handelAddItem(product)}
            className={`bg-green-500 p-4 text-white rounded-lg w-full 
          ${product.countInStock > cart.length ? 'block' : 'hidden'}
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
