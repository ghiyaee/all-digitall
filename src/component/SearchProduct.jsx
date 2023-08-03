import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation ,Link} from 'react-router-dom';
function SearchProduct() {
  const { state } = useLocation('');
  const [product,setProduct]=useState([])
  console.log(state);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post('/api/products/catgory',{state});
      console.log(res.data);
      setProduct(res.data);
    }
  fetchData()
  },[])
  console.log(product);
  return (
    <div className="text-white flex flex-wrap gap-8 justify-center font-[yekan]">
      {product?.map((product) => (
        <div
          className=" p-6   text-black
               flex flex-col gap-4 justify-between items-center relative  shadow-xl rounded-lg w-[384px]
                shadow-orange-400"
          key={product._id}
        >
          <Link to={`/product/${product.slug}`}>
            <img alt="img" src={product.img} className=" w-[200px] h-[200px]" />
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

export default SearchProduct
