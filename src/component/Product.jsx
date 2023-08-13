import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Store } from '../context/Store';

import ViewPoint from './ViewPoint';
import {CgScrollV} from 'react-icons/cg'
import { logDOM } from '@testing-library/react';
import Like from './Like';
function Product() {
  const navigation = useNavigate();
  const { dispatch, setCart, state } =
    useContext(Store);
  const { userinfo ,cart} = state;
  const [product, setProduct] = useState([]);
  const params = useParams();
  const { slug } = params;
  const [scroll, setScroll] = useState(false);

  const handelAddItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: {...item ,conter:1}});
    navigation('/Card');
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/products/slug/${slug}`);
      setProduct(res.data);
    };
    fetchData();
  }, [slug]);
 useEffect(() => {
   window.addEventListener('scroll', () => {
     if (window.scrollY > 100) {
       setScroll(true);
     } else {
       setScroll(false);
     }
   });
 }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <>
      {scroll && (
        <CgScrollV
          onClick={scrollUp}
          className=" fixed bottom-10 text-red-500 right-10 text-5xl"
        />
      )}
      {userinfo.length > 0 ? (
        <div className="flex container m-auto gap-20 mt-4 flex-col">
          <div className="flex  justify-around  ">
            <div className="flex  border p-10 items-center gap-[100px] shadow-2xl shadow-orange-400 text-black rounded-lg">
              <div className="w-96 p-6 rounded-lg ">
                <img src={product.img} alt="img" />
              </div>
              <div className=" text-3xl font-[yekan] flex flex-col gap-5">
                <h1 className="">برند :{product.name}</h1>
                <p>امتیاز :{product.rating}</p>
                <p>قیمت : {product.price} تومان</p>
                <p>توضیحات : {product.description}</p>
                <p>
                  وضعیت :
                  {product.countInStock > cart.cartItem.length
                    ? 'موجود'
                    : 'ناموجود'}
                </p>
                <button
                  onClick={() => handelAddItem(product)}
                  className={`bg-blue-500 p-4 text-white rounded-lg w-full hover:scale-105  hover:rounded-[40px] duration-500
                     ${
                       product.countInStock > cart.cartItem.length
                         ? 'block'
                         : 'hidden'
                     }
                    `}
                >
                  خرید
                </button>
                <Like product={product}/>
              </div>
            </div>
          </div>
          <ViewPoint product={product} />
        </div>
      ) : (
        navigation('/SignIn')
      )}
    </>
  );
}

export default Product;

 // setCart(cart.concat({ ...product, conter: 1 }));
    // const exits = cart.find((f) => f._id === item._id);
    // if (!exits) {
    //   setCart([...cart, { ...product, conter: 1 }]);
    //   navigation('/Card');
    // } else {
    //   return;
    // }