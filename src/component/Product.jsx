import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Store } from '../context/Store';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import ViewPoint from './ViewPoint';
function Product() {
  const navigation = useNavigate();
  const { cart, setCart, like, setLike, dislike, setDisLike ,state} =
    useContext(Store);
  const {userinfo}=state
  const [product, setProduct] = useState([]);
  const params = useParams();
  const { slug } = params;
  const handelLike = () => {
    if (!like) {
      setLike(like + 1);
    }
    if (like) {
      setLike(like - 1);
    }
  };
  const handeDislLike = () => {
    if (!dislike) {
      setDisLike(dislike + 1);
    }
    if (dislike) {
      setDisLike(dislike - 1);
    }
  };

  const handelAddItem = (item) => {
    const exits = cart.find((f) => f._id === item._id);
    if (!exits) {
      // setCart(cart.concat({ ...product, conter: 1 }));
      setCart([...cart, { ...product, conter: 1 }]);
      navigation('/Card');
    } else {
      return;
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
    <>
      {userinfo.length > 0 ? (
        <div className="flex container m-auto gap-20 flex-col">
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
                  {product.countInStock > cart.length ? 'موجود' : 'ناموجود'}
                </p>
                <button
                  onClick={() => handelAddItem(product)}
                  className={`bg-blue-500 p-4 text-white rounded-lg w-full hover:scale-105  hover:rounded-[40px] duration-500
          ${product.countInStock > cart.length ? 'block' : 'hidden'}
          `}
                >
                  خرید
                </button>
                <div className="flex justify-around mt-5">
                  <div className="flex items-center gap-1 ">
                    <span>{dislike}</span>
                    <AiOutlineDislike
                      className="cursor-pointer text-red-500"
                      onClick={() => handeDislLike()}
                    />
                  </div>
                  <div className="flex gap-1">
                    <span>{like}</span>
                    <AiOutlineLike
                      className="cursor-pointer text-green-500"
                      onClick={() => handelLike()}
                    />
                  </div>
                </div>
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
