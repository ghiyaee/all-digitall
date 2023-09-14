import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function SearchItem() {
  const { state } = useLocation('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pro, setPro] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post('/api/products/searchProduct', { state });
        setProducts(res.data);
        setIsLoading(false);
      } catch (error) {
        toast.error(['ارتباط با سرور قطع شده است']);
      }
    };
    fetchData();
  }, [state]);

  console.log(products);
  return (
    <>
      {isLoading && (
        <p className="flex justify-center items-center text-2xl font-[yekan]">
          لطفا صبرکنید...
        </p>
      )}
      <div className="container m-auto flex justify-center mt-4">
        {products.msg ? (
          <p
            className=" flex justify-center p-10 shadow-xl text-xl font-[yekan] rounded-lg w-[384px]
                shadow-orange-400"
          >
            {products.msg}
          </p>
        ) : (
          <div className="flex flex-wrap justify-center gap-8  ">
            {products?.map((product) => (
              <div
                className="bg-zinc-700 p-6 text-yellow-400
               flex flex-col gap- justify-between 
               items-center relative  shadow-xl rounded-lg w-[384px]
                shadow-orange-400"
                key={product._id}
              >
                <Link to={`/product/${product.slug}`}>
                  <img
                    alt="img"
                    src={product.img}
                    className=" w-[200px] h-[200px]"
                  />
                </Link>

                <div className="text-xl font-bold mt-6 flex flex-col gap-4 ">
                  <p>برند :{product.brand}</p>
                  <p> قیمت : {product.price} تومان</p>
                  <p className="absolute top-0 left-0 text-zinc-700 bg-[#ffea00] p-1 rounded-tl-lg rounded-br-lg">
                    امتیاز :{product.rating}
                  </p>
                  <Link to={`/product/${product.slug}`}>
                    <button
                      className="text-zinc-700 bg-[#ffea00] hover:bg-zinc-700 
                             hover:text-[#ffea00] hover:border border-e-yellow-500 py-2 
                             px-6 rounded-lg 
                             hover:scale-105 hover:rounded-3xl duration-500 w-full"
                    >
                      مشاهده
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchItem;
