import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import FadeLoader from 'react-spinners/FadeLoader';
import { useRef } from 'react';
function ProdcutsEdit() {
  const navigate = useNavigate();
  const res = useRef();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();
  const [warning, setWarning] = useState();
  const [product, setProduct] = useState();
  const handelWarning = (product) => {
    setWarning(true);
    setProduct(product);
  };
  const handelCancelProduct = () => {
    setProduct('');
    setWarning(false);
    return;
  };
  const handelDeleteProduct = async (product) => {
    const fetchproducts = await axios.post('/api/products/del', { product });
    setWarning(false);
    setResult(true);
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
      setResult(false);
    }, 3000);
  }, [result]);
  return (
    <>
      {warning ? (
        <div className="flex flex-col justify-center p-10 gap-5 rounded-lg border font-[yekan]">
          <p className="text-yellow-200 text-2xl">
            هشدار!! آیااز حذف محصول اطمینان دارید؟ چون غیرقابل بازگشت است.
          </p>
          <div className="flex justify-between">
            <button
              className="p-2 w-[80px] text-2xl rounded-lg bg-red-500"
              onClick={() => handelDeleteProduct(product)}
            >
              بله
            </button>
            <button
              className="p-2 w-[100px] text-2xl rounded-lg bg-green-500"
              onClick={handelCancelProduct}
            >
              انصراف
            </button>
          </div>
        </div>
      ) : (
        <>
          {result ? (
            <div
              className={`flex items-center rounded-lg text-2xl p-4
                   after: bg-green-500 w-[300px] h-24 text-yellow-200 justify-center : ''`}
            >
              محصول حذف گردید
            </div>
          ) : (
            <>
              {isLoading ? (
                <>
                  <p
                    className="flex justify-center items-center text-3xl 
                                  font-[yekan] text-yellow-400 "
                  >
                    لطفاصبرکنید...
                    <FadeLoader
                      color={'#f41d3e'}
                      loading={isLoading}
                      size={100}
                    />
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
                        <p className=" w-[200px] ">
                          {' '}
                          قیمت : {product.price} تومان
                        </p>
                        <button
                          onClick={() => handelEditProducts(product)}
                          className="text-blue-700  bg-[#ffea00] py-2 
                              w-[100px] rounded-lg"
                        >
                          ویرایش
                        </button>
                        <button
                          onClick={() => handelWarning(product._id)}
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
      )}
    </>
  );
}

export default ProdcutsEdit;
