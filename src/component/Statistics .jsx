import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Statistics() {
  const [products, setProducts] = useState();

  const productProducts = products?.map((f) => f.countInStock);
  const totalProducts = productProducts?.reduce((a, b) => a + b, 0);
  const productMobile = products?.filter((f) => f.category === 'mobile');
  const mobile = productMobile?.map((f) => f.countInStock);
  const totalMobile = mobile?.reduce((a, b) => a + b, 0);

  const productFlash = products?.filter((f) => f.category === 'flash');
  const flash = productFlash?.map((f) => f.countInStock);
  const totalFlash = flash?.reduce((a, b) => a + b, 0);

  const productLabtab = products?.filter((f) => f.category === 'labtab');
  const labtab = productLabtab?.map((f) => f.countInStock);
  const totallabtab = labtab?.reduce((a, b) => a + b, 0);

  const productHeadba = products?.filter((f) => f.category === 'headba');
  const headba = productHeadba?.map((f) => f.countInStock);
  const totalHeadba = headba?.reduce((a, b) => a + b, 0);

  const productHeadbi = products?.filter((f) => f.category === 'headbi');
  const headbi = productHeadbi?.map((f) => f.countInStock);
  const totalHeadbi = headbi?.reduce((a, b) => a + b, 0);

  useEffect(() => {
    const fetachData = async () => {
      const result = await axios.get('/api/products/filter');
        setProducts(result.data);
    };
    fetachData();
  }, []);
  return (
    <div
      className="flex flex-col gap-7 justify-center 
    items-center text-2xl font-[yekan] container m-auto
     bg-zinc-700 p-4 text-yellow-200 rounded-lg"
    >
      <h2 className="text-3xl">آمار محصولات در یک نگاه</h2>
      <table className="border-collapse w-full text-2xl">
        <thead>
          <tr className="text-yellow-200">
            <th className="style_table">تعداد موبایل</th>
            <th className="style_table">تعداد هدفون بیسم</th>
            <th className="style_table">تعداد لب تاب</th>
            <th className="style_table">تعداد فلش</th>
            <th className="style_table">تعداد هدفون باسیم</th>
            <th className="style_table">تعداد کل محصولات</th>
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
  );
}

export default Statistics;
