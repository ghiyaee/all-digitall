import React from 'react';
import { useEffect, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
function ProdcutsEdit() {
  const navigate=useNavigate()
  const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  const handelDeleteProduct = async (product) => {
    const fetchproducts = await axios.post('/api/products/del', { product });
    setProducts([...products,...fetchproducts])
  }
  const handelEditProducts = (product) => {
  navigate('/ProductEdit',{state:product})
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
        setIsLoading(false)
      } catch (error) {
        toast.error('ارتباط با سرور قطع شده است');
      }
    };
    fetchData();
  }, [products]);
  return (
    <>
      {isLoading && (
        <p className="flex justify-center items-center text-2xl font-[yekan] ">
          لطفا صبر کنید...
        </p>
      )}
      <div className=" flex flex-col gap-6 font-[yekan] p-10">
        <h2 className="text-black text-center text-3xl font-bold mt-5">
          ویرایش محصولات
        </h2>
        {products?.map((product) => (
          <div
            className=" p-10 rounded-lg  text-black h-[70px] 
             flex  gap-[150px]  items-center shadow-xl shadow-orange-200 justify-between"
            key={product._id}
          >
            <img alt="img" src={product.img} className="h-[70px]" />

            <div className="text-xl font-bold flex items-center gap-5 ">
              <p className=" w-[200px] "> تعداد: {product.countInStock}</p>
              <p className=" w-[210px] "> قیمت : {product.price} تومان</p>
              <button
                onClick={() => handelEditProducts(product)}
                className="text-blue-700  bg-[#ffea00] py-2 
                w-[200px] rounded-lg"
              >
                ویرایش
              </button>
              <button
                onClick={() => handelDeleteProduct(product._id)}
                className="text-white  bg-red-500 py-2  
                w-[200px] rounded-lg"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProdcutsEdit;
