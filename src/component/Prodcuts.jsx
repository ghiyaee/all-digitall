import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Store } from '../context/Store';
import { CgScrollV } from 'react-icons/cg';
import FadeLoader from 'react-spinners/FadeLoader';
function Prodcuts() {
  const navigate = useNavigate();
  const { state, setProduct } = useContext(Store);
  const { userinfo } = state;
  const [products, setProducts] = useState([]);
  const [scroll, setScroll] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const recordspPage = 8;
  const lastIndex = currentpage * recordspPage;
  const fristIndex = lastIndex - recordspPage;
  const records = products.slice(fristIndex, lastIndex);
  const npage = Math.ceil(products.length / recordspPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
      } catch (error) {
        toast.error('ارتباط با سرور قطع شده است');
      }
    };
    fetchData();
  }, []);
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
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center gap-5 font-[yekan] text-2xl">
          لطفاصبرکنید
          <FadeLoader color={'#f41d3e'} loading={loading} size={100} />
        </div>
      ) : (
        <>
          {scroll && (
            <CgScrollV
              onClick={scrollUp}
              className=" fixed bottom-10 text-red-500 right-2
           text-5xl"
            />
          )}
          {userinfo.length > 0 ? (
            <div className="text-white flex flex-wrap gap-8 justify-center font-[yekan] mt-4">
              {records?.map((product) => (
                <div
                  className="p-6 bg-zinc-700  text-yellow-300
               flex flex-col gap-4 justify-between items-center relative  shadow-xl rounded-lg w-[384px]
                shadow-orange-300"
                  key={product.slug}
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
                    <p
                      className="absolute top-0 left-0 bg-[#ffea00] text-zinc-700 
                    p-1 rounded-tl-lg rounded-br-lg"
                    >
                      امتیاز :{product.rating}
                    </p>
                    <Link to={`/product/${product.slug}`}>
                      <button
                        className="text-zinc-500 bg-[#ffea00] p-2 hover:bg-zinc-700 
                                hover:text-[#ffea00] hover:rounded-3xl 
                                   hover:border border-e-yellow-500 duration-500 w-full "
                      >
                        مشاهده
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            navigate('/SignIn')
          )}
          <div className="flex justify-center mt-10">
            <ul className="flex gap-4 text-2xl font-bold font-[yekan]">
              {numbers
                .map((n, i) => (
                  <li
                    className={`${
                      currentpage === n ? 'pageActive' : 'pageDeActive'
                    } w-10 h-10 flex justify-center items-center rounded-full  cursor-pointer  `}
                    onClick={() => setCurrentPage(n)}
                  >
                    {n}
                  </li>
                ))
                .reverse()}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Prodcuts;
