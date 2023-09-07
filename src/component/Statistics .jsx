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
  const productProducts = products?.map((f) => f.countInStock);
  const totalProducts = productProducts?.reduce((a, b) => a + b, 0);

  const outProducts = products?.map((f) => f.purchased);
  const totalOutProducts = outProducts?.reduce((a, b) => a + b, 0);

  const productMobile = products?.filter((f) => f.category === 'mobile');
  const mobile = productMobile?.map((f) => f.countInStock);
  const totalMobile = mobile?.reduce((a, b) => a + b, 0);

  const outMobile = products?.filter((f) => f.category === 'mobile');
  const mobileOut = outMobile?.map((f) => f.purchased);
  const totalPurchasedMobile = mobileOut?.reduce((a, b) => a + b, 0);

  const productFlash = products?.filter((f) => f.category === 'flash');
  const flash = productFlash?.map((f) => f.countInStock);
  const totalFlash = flash?.reduce((a, b) => a + b, 0);

  const outFlash = products?.filter((f) => f.category === 'flash');
  const flashOut = outFlash?.map((f) => f.purchased);
  const totalPurchaseFlash = flashOut?.reduce((a, b) => a + b, 0);

  const productLabtab = products?.filter((f) => f.category === 'labtab');
  const labtab = productLabtab?.map((f) => f.countInStock);
  const totallabtab = labtab?.reduce((a, b) => a + b, 0);

  const outtLabtab = products?.filter((f) => f.category === 'labtab');
  const labtabOut = outtLabtab?.map((f) => f.purchased);
  const totalPurchasedlabtab = labtabOut?.reduce((a, b) => a + b, 0);

  const productHeadba = products?.filter((f) => f.category === 'headba');
  const headba = productHeadba?.map((f) => f.countInStock);
  const totalHeadba = headba?.reduce((a, b) => a + b, 0);

  const outHeadba = products?.filter((f) => f.category === 'headba');
  const headbaOut = outHeadba?.map((f) => f.purchased);
  const totalPurchasedHeadba = headbaOut?.reduce((a, b) => a + b, 0);

  const productHeadbi = products?.filter((f) => f.category === 'headbi');
  const headbi = productHeadbi?.map((f) => f.countInStock);
  const totalHeadbi = headbi?.reduce((a, b) => a + b, 0);

  const outHeadbi = products?.filter((f) => f.category === 'headbi');
  const headbiOut = outHeadbi?.map((f) => f.purchased);
  const totalPurchasedHeadbi = headbiOut?.reduce((a, b) => a + b, 0);
  useEffect(() => {
    const fetachData = async () => {
      const res = await axios.get('api/products/cb');
      console.log(res.data);
    };
    fetachData();
  });

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
  return (
    <>
      {isLoading ? (
        <>
          <p
            className="flex justify-center items-center text-3xl 
                                  font-[yekan] text-yellow-400 "
          >
            لطفاصبرکنید...
            <FadeLoader color={'#f41d3e'} loading={isLoading} size={100} />
          </p>
        </>
      ) : (
        <div
          className="flex flex-col gap-5 justify-center 
    items-center text-2xl font-[yekan] container m-auto
     bg-zinc-700 p-4 text-yellow-200 rounded-lg overflow-x-auto"
        >
          <h2 className="text-3xl">آمار محصولات در یک نگاه</h2>
          <div className={`${moveSlider1.move} duration-1000`}>
            <p className="text-red-500">واردشده</p>
            <table className="border-collapse w-full text-2xl ">
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
          <div className={`${moveSlider2.move} duration-1000`}>
            <p className=" text-red-500">خارج شده</p>
            <table className="border-collapse w-full text-2xl">
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
          <div className={`${moveSlider3.move} duration-1000`}>
            <p className="text-red-500">مانده </p>
            <table className="border-collapse w-full text-2xl">
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
