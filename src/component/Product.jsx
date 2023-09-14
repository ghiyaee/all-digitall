import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Store } from '../context/Store';

import ViewPoint from './ViewPoint';
import { CgScrollV } from 'react-icons/cg';
import Like from './Like';
function Product() {
  const navigation = useNavigate();
  const { dispatch, state } = useContext(Store);
  const { userinfo} = state;
  const [product, setProduct] = useState([]);
  const params = useParams();
  const { slug } = params;
  const [scroll, setScroll] = useState(false);

  const handelAddItem = async (item) => {
    
    dispatch({ type: 'ADD_ITEM', payload: { ...item, conter: 1 } });

    navigation('/Card',);
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
        <div className="flex container m-auto gap-10 mt-0 flex-col">
          <div className="flex  justify-around  ">
            <div className="flex flex-wrap justify-center bg-zinc-700  text-yellow-300 border p-5 items-center gap-[30px] shadow-2xl shadow-orange-400  rounded-lg">
              <div className="w-96 p-6 rounded-lg ">
                <img src={product.img} alt="img" />
              </div>
              <div className=" text-xl font-[yekan] flex flex-col gap-2">
                <h1 className="">برند :{product.name}</h1>
                <p>امتیاز :{product.rating}</p>
                <p>قیمت : {product.price} تومان</p>
                <p>توضیحات : {product.description}</p>
                <p>
                  وضعیت :
                  {product.countInStock >= product.purchased
                    ? 'موجود'
                    : 'ناموجود'}
                </p>
                <button
                  onClick={() => handelAddItem(product)}
                  className={`text-zinc-700 bg-[#ffea00] p-4 hover:bg-zinc-700 
                 hover:text-[#ffea00] hover:border border-e-yellow-500
                  rounded-lg w-full hover:scale-105  hover:rounded-[40px] duration-500
                     ${
                       product.countInStock > product.purchased
                         ? 'block'
                         : 'hidden'
                     }
                    `}
                >
                  خرید
                </button>
                <Like product={product} />
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
