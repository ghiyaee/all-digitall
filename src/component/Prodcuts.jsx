import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
function Prodcuts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
      } catch (error) {
        toast.error('ارتباط با سرور قطع شده است')
      }
    };
    fetchData();
  }, []);
  return (
    <div className="text-white flex flex-wrap gap-5 justify-center font-[yekan]">
      {products?.map((product) => (
        <div
          className=" p-6 rounded-lg w-96 text-black
             flex flex-col gap-0 justify-between items-center relative border"
          key={product._id}
        >
          <Link to={`/product/${product.slug}`}>
            <img alt="img" src={product.img} />
          </Link>

          <div className="text-xl font-bold mt-6 flex flex-col gap-4 ">
            <p> قیمت : {product.price} تومان</p>
            <p className="absolute top-0 left-0 bg-[#ffea00] p-1 rounded-tl-lg rounded-br-lg">
              امتیاز :{product.rating}
            </p>
            <Link to={`/product/${product.slug}`}>
              <button
                className="text-white bg-blue-500 p-2 hover:bg-blue-500 
                 hover:text-white hover:rounded-3xl duration-500 w-full "
              >
                مشاهده
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Prodcuts;
