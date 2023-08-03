import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation ,Link} from 'react-router-dom';
function SearchProduct() {
  const { state } = useLocation('');
  const [product, setProduct] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const recordPage = 4;
  const lastIndex = currentPage * recordPage; ;
  const fristIndex = lastIndex - recordPage;
  const records = product.slice(fristIndex, lastIndex);
  const nPage = Math.ceil(product.length / recordPage);
  const numbers=[...Array(nPage+1).keys()].slice(1)
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post('/api/products/category',{state});
      console.log(res.data);
      setProduct(res.data);
    }
  fetchData()
  },[])
  return (
    <>
      <div className="text-white flex flex-wrap gap-8 justify-center duration-700 font-[yekan]">
        {records?.map((product) => (
          <div
            className=" p-6   text-black
               flex flex-col gap-4 justify-between items-center relative  shadow-xl rounded-lg w-[384px]
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

      <div className="flex justify-center mt-10">
        <ul className="flex gap-4 text-2xl font-bold font-[yekan]">
          {numbers
            .map((n, i) => (
              <li
                className={`${
                  currentPage === n ? 'pageActive' : 'pageDeActive'
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

export default SearchProduct
