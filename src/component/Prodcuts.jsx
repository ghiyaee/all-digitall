import React from 'react';
import { useEffect, useState,useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Store } from '../context/Store';
function Prodcuts() {
  const navigate = useNavigate()
  const { state, setProduct } = useContext(Store)
  const {userinfo}=state
  const [products, setProducts] = useState([]);

  const [currentpage, setCurrentPage] = useState(1)
  const recordspPage = 4;
  const lastIndex = currentpage * recordspPage;
  const fristIndex = lastIndex - recordspPage;
  const records = products.slice(fristIndex, lastIndex);
  const npage = Math.ceil(products.length / recordspPage);
  const numbers = [...Array(npage+1).keys()].slice(1)

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
    <>
      {userinfo.length > 0 ? (
        <div className="text-white flex flex-wrap gap-8 justify-center font-[yekan]">
          {records?.map((product) => (
            <div
              className=" p-6   text-black
               flex flex-col gap-4 justify-between items-center relative  shadow-xl rounded-lg w-[384px]
                shadow-orange-400"
              key={product._id}
            >
              <Link to={`/product/${product.slug}`}>
                <img alt="img" src={product.img} className=' w-[200px] h-[200px]' />
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
  );
}

export default Prodcuts;
