import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import FadeLoader from 'react-spinners/FadeLoader';

function ProdcutsEdit() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [result,setResult]=useState()
  const handelDeleteProduct = async (product) => {
    const fetchproducts = await axios.post('/api/products/del', { product });
    setResult(true)
    setProducts([...products, ...fetchproducts]);
  };
  const handelEditProducts = (product) => {
    navigate('/ProductEdit', { state: product });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
        setIsLoading(false);
      } catch (error) {
        toast.error('ارتباط با سرور قطع شده است');
      }
    };
    fetchData();
  }, [products]);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setResult(false)
    },4000)
  },[result])
  return (
    <>
      {result ? (
        <div
          className={`flex items-center rounded-lg text-xl p-4
         bg-green-500 w-62 h-24 text-yellow-200 justify-center : ''`}
        >
          محصول حذف گردید
        </div>
      ) : (
        <>
          {' '}
          {isLoading ? (
            <>
              <p className="flex justify-center items-center text-3xl font-[yekan] text-yellow-400 ">
                لطفاصبرکنید...
                <FadeLoader color={'#f41d3e'} loading={isLoading} size={100} />
              </p>
            </>
          ) : (
            <div
              className={`flex flex-col gap-6 font-[yekan] p-10  max-h-screen  overflow-y-auto`}
            >
              <h2 className="text-yellow-400 text-center text-3xl font-bold mt-0 border p-10 rounded-lg">
                ویرایش محصولات
              </h2>
              {products?.map((product) => (
                <div
                  className={` p-10 rounded-lg bg-zinc-700 text-yellow-100 h-[70px] 
             flex  gap-[0px]  items-center shadow shadow-orange-100 justify-between `}
                  key={product._id}
                >
                  <img alt="img" src={product.img} className="h-[70px]" />

                  <div className="text-xl font-bold flex items-center gap-3 ">
                    <p className="w-[200px]">{product.name}</p>
                    <p className=" w-[200px] ">
                      {' '}
                      تعداد: {product.countInStock}
                    </p>
                    <p className=" w-[200px] "> قیمت : {product.price} تومان</p>
                    <button
                      onClick={() => handelEditProducts(product)}
                      className="text-blue-700  bg-[#ffea00] py-2 
                w-[100px] rounded-lg"
                    >
                      ویرایش
                    </button>
                    <button
                      onClick={() => handelDeleteProduct(product._id)}
                      className="text-white  bg-red-500 py-2  
                w-[100px] rounded-lg"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ProdcutsEdit;
