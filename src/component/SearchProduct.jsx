import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
function SearchProduct() {
  const { state } = useLocation('');
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const recordPage = 4;
  const lastIndex = currentPage * recordPage;
  const fristIndex = lastIndex - recordPage;
  const records = product.slice(fristIndex, lastIndex);
  const nPage = Math.ceil(product.length / recordPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post('/api/products/category', { state });
      setProduct(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <p className="text-3xl flex justify-center ">لطفا صبرکنید ...</p>
      ) : (
        <>
          {product.length ? (
            <>
              <div className="text-white flex flex-wrap gap-8 justify-center duration-700 font-[yekan]">
                {records?.map((product) => (
                  <div
                    className=" p-6 bg-zinc-700  text-yellow-300
               flex flex-col gap-4 justify-between items-center relative  shadow-xl rounded-lg w-[384px]
                shadow-orange-300"
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
                      <p> قیمت : {product.price} تومان</p>
                      <p className="absolute top-0 left-0 bg-[#ffea00] text-zinc-700 p-1 rounded-tl-lg rounded-br-lg">
                        امتیاز :{product.rating}
                      </p>
                      <Link to={`/product/${product.slug}`}>
                        <button
                          className="text-zinc-500 bg-[#ffea00] p-2 hover:bg-zinc-700 
                 hover:text-[#ffea00] hover:rounded-3xl hover:border border-e-yellow-500 duration-500 w-full "
                        >
                          مشاهده
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <ul className="flex gap-4 text-2xl font-bold font-[yekan]">
                  {numbers
                    .map((n, i) => (
                      <li
                        className={`${
                          currentPage === n ? 'pageActive' : 'pageDeActive'
                        } w-10 h-10 flex justify-center items-center rounded-full  cursor-pointer  `}
                        onClick={() => setCurrentPage(n)}
                        key={n} >
                        {n}
                      </li>
                    ))
                    .reverse()}
                </ul>
              </div>
            </>
          ) : (
            <div className="flex justify-center  text-2xl text-red-500">
              محصول مورد انتخابی وجود ندارد
            </div>
          )}
        </>
      )}
    </>
  );
}

export default SearchProduct;
