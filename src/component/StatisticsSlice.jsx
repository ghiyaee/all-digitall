import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const optionsCategoty = [
  { value: '0', category: '' },
  { value: '1', category: 'mobile' },
  { value: '2', category: 'flash' },
  { value: '3', category: 'labtab' },
  { value: '4', category: 'headPhone' },
];
const optionsBrand = [
  { value: '0', brand: '' },
  { value: '1', brand: 'apple' },
  { value: '2', brand: 'pixel' },
  { value: '3', brand: 'samsung' },
  { value: '4', brand: 'motorola' },
  { value: '4', brand: 'sandisk' },
];
function StatisticsSlice() {
  const [category, setCategoryValue] = useState();
  const [brand, setBrandValue] = useState();
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState('hidden');
  const handelCb = async () => {
    if (category && brand) {
      const res = await axios.post('/api/products/cb', { category, brand });
      if (res.data.length > 0) {
        setProduct(res.data);
        setShow('hidden');
        // setCategoryValue('');
        // setBrandValue('');
      } else {
        setShow('block');
      }
    } else {
      return;
    }
  };
  console.log(product);
  return (
    <div className="text-2xl flex flex-col items-center gap-5 ">
      <h2 className="text-yellow-400">انتخاب تفکیکی محصولات</h2>
      <div className="flex gap-5 items-center">
        <div className="py-2 px-4 ">
          <select
            value={category}
            onChange={(e) => setCategoryValue(e.target.value)}
            className="bg-yellow-400 cursor-pointer py-2 px-6 "
          >
            {optionsCategoty?.map((option) => (
              <option
                value={option.category}
                key={option.value}
                className="bg-zinc-700 text-yellow-400"
              >
                {option.category}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <select
            value={brand}
            onChange={(e) => setBrandValue(e.target.value)}
            className="bg-yellow-400 cursor-pointer py-2 px-6 "
          >
            {optionsBrand?.map((option) => (
              <option
                value={option.brand}
                key={option.value}
                className="bg-zinc-700 text-yellow-400"
              >
                {option.brand}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-zinc-800 text-yellow-400 py-4 px-8 rounded-lg "
          onClick={handelCb}
        >
          جستجو
        </button>
      </div>
      {product.length > 0 ? (
        <table className="border-collapse w-full">
          <thead>
            <tr className="text-yellow-400">
              <th className="style_table">نام محصول</th>
              <th className="style_table">تعداد خرید</th>
              <th className="style_table">تعدا فروش</th>
              <th className="style_table">مانده</th>
            </tr>
          </thead>
          <tbody>
            {product.map((p) => (
              <tr className="text-yellow-400">
                <>
                  <td className="style_table">{p.name}</td>
                  <td className="style_table">{p.countInStock}</td>
                  <td className="style_table">{p.purchased}</td>
                  <td className="style_table">
                    {p.countInStock - p.purchased}
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={`text-yellow-400 ${show}`}>محصولی یافت نشد</div>
      )}
    </div>
  );
}

export default StatisticsSlice;
