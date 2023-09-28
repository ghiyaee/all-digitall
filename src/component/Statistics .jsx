import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
function Statistics() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [moveSlider1, setMoveSlider] = useState({
    move: 'transform translate-x-[1500px]',
  });
  const [moveSlider2, setMoveSlider2] = useState({
    move: 'transform translate-x-[1500px]',
  });
  const [moveSlider3, setMoveSlider3] = useState({
    move: 'transform translate-x-[1500px]',
  });
  let totalProducts = products
    ?.map((f) => f.countInStock)
    .reduce((a, b) => a + b, 0);

  let totalOutProducts = products
    ?.map((f) => f.purchased)
    .reduce((a, b) => a + b, 0);

  let totalMobile = products
    ?.filter((f) => f.category === 'mobile')
    .map((f) => f.countInStock)
    .reduce((a, b) => a + b, 0);

  let totalPurchasedMobile = products
    ?.filter((f) => f.category === 'mobile')
    .map((f) => f.purchased)
    .reduce((a, b) => a + b, 0);

  let totalFlash = products
    ?.filter((f) => f.category === 'flash')
    .map((f) => f.countInStock)
    .reduce((a, b) => a + b, 0);

  let totalPurchaseFlash = products
    ?.filter((f) => f.category === 'flash')
    .map((f) => f.purchased)
    .reduce((a, b) => a + b, 0);
 
  let totallabtab = products
    ?.filter((f) => f.category === 'labtab')
    .map((f) => f.countInStock)
    .reduce((a, b) => a + b, 0);
  
  let totalPurchasedlabtab = products
    ?.filter((f) => f.category === 'labtab')
    .map((f) => f.purchased)
    .reduce((a, b) => a + b, 0);
 
  let totalHeadba = products
    ?.filter((f) => f.category === 'headba')
    .map((f) => f.countInStock)
    .reduce((a, b) => a + b, 0);
  
  let totalPurchasedHeadba = products
    ?.filter((f) => f.category === 'headba')
    .map((f) => f.purchased)
    .reduce((a, b) => a + b, 0);
  
  let totalHeadbi = products
    ?.filter((f) => f.category === 'headbi')
    .map((f) => f.countInStock)
    .reduce((a, b) => a + b, 0);

  let totalPurchasedHeadbi = products
    ?.filter((f) => f.category === 'headbi')
    .map((f) => f.purchased)
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    const fetachData = async () => {
      const result = await axios.get('/api/products/filter');
      setProducts(result.data);
    };
    fetachData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMoveSlider('transform translate-x-[0px] ');
    }, 3900);
  });
  useEffect(() => {
    setTimeout(() => {
      setMoveSlider2('transform translate-x-[0px] ');
    }, 4500);
  });
  useEffect(() => {
    setTimeout(() => {
      setMoveSlider3('transform translate-x-[0px] ');
    }, 5000);
  });
  console.log(products);
  return (
    <>
      {isLoading ? (
        <>
          <p
            className="flex justify-center items-center text-xl 
                                  font-[yekan] text-yellow-400 "
          >
            لطفاصبرکنید...
            <FadeLoader color={'#f41d3e'} loading={isLoading} size={100} />
          </p>
        </>
      ) : (
        <div
          className="flex flex-col gap-5 justify-center 
    items-center text-xl font-[yekan] container m-auto
     bg-zinc-700 p-4 text-yellow-200 rounded-lg overflow-x-auto "
        >
          <h2 className="text-xl">آمار محصولات در یک نگاه</h2>
          <div className={`${moveSlider1.move} duration-[2000ms]`}>
            <p className="text-red-500">واردشده</p>
            <table className="border-collapse w-full text-lg ">
              <thead>
                <tr className="text-yellow-400">
                  <th className="style_table">تعداد موبایل</th>
                  <th className="style_table">تعداد هدفون بیسم</th>
                  <th className="style_table">تعداد لب تاب</th>
                  <th className="style_table">تعداد فلش</th>
                  <th className="style_table">تعداد هدفون باسیم</th>
                  <th className="style_table w-[335px]">
                    تعداد کل محصولات وارد شده
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="style_table">{totalMobile}</td>
                  <td className="style_table">{totalHeadbi}</td>
                  <td className="style_table">{totallabtab}</td>
                  <td className="style_table">{totalFlash}</td>
                  <td className="style_table">{totalHeadba}</td>
                  <td className="style_table">{totalProducts}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`${moveSlider2.move} duration-[2000ms]`}>
            <p className=" text-red-500">خارج شده</p>
            <table className="border-collapse w-full text-lg">
              <thead>
                <tr className="text-yellow-400">
                  <th className="style_table">تعداد موبایل</th>
                  <th className="style_table">تعداد هدفون بیسم</th>
                  <th className="style_table">تعداد لب تاب</th>
                  <th className="style_table">تعداد فلش</th>
                  <th className="style_table">تعداد هدفون باسیم</th>
                  <th className="style_table w-[335px]">
                    تعداد کل محصولات خارج شده
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="style_table">{totalPurchasedMobile}</td>
                  <td className="style_table">{totalPurchasedHeadbi}</td>
                  <td className="style_table">{totalPurchasedlabtab}</td>
                  <td className="style_table">{totalPurchaseFlash}</td>
                  <td className="style_table">{totalPurchasedHeadba}</td>
                  <td className="style_table">{totalOutProducts}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`${moveSlider3.move} duration-[2000ms]`}>
            <p className="text-red-500">مانده </p>
            <table className="border-collapse w-full text-lg">
              <thead>
                <tr className="text-yellow-400">
                  <th className="style_table">تعداد موبایل</th>
                  <th className="style_table">تعداد هدفون بیسم</th>
                  <th className="style_table">تعداد لب تاب</th>
                  <th className="style_table">تعداد فلش</th>
                  <th className="style_table">تعداد هدفون باسیم</th>
                  <th className="style_table w-[335px]">
                    تعداد کل محصولات مانده
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="style_table">
                    {totalMobile - totalPurchasedMobile}
                  </td>
                  <td className="style_table">
                    {totalHeadbi - totalPurchasedHeadbi}
                  </td>
                  <td className="style_table">
                    {totallabtab - totalPurchasedlabtab}
                  </td>
                  <td className="style_table">
                    {totalFlash - totalPurchaseFlash}
                  </td>
                  <td className="style_table">
                    {totalHeadba - totalPurchasedHeadba}
                  </td>
                  <td className="style_table">
                    {totalProducts - totalOutProducts}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Statistics;
