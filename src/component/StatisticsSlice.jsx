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
];
function StatisticsSlice() {
  const [category, setCategoryValue] = useState();
  const [brand, setBrandValue] = useState();
  const handelCb = async () => {
      const res = await axios.post('/api/products/cb', { category, brand });
      
  };
  return (
    <div className="text-2xl">
      <h2 className="text-yellow-400">انتخاب تفکیکی محصولات</h2>
      <div className="flex gap-5">
        <div className="py-2 px-4 ">
          <select
            value={category}
            onChange={(e) => setCategoryValue(e.target.value)}
          >
            {optionsCategoty?.map((option) => (
              <option value={option.category} key={option.value}>
                {option.category}
              </option>
            ))}
          </select>
        </div>
        <div className="py-2 px-4">
          <select value={brand} onChange={(e) => setBrandValue(e.target.value)}>
            {optionsBrand?.map((option) => (
              <option value={option.brand} key={option.value}>
                {option.brand}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-zinc-800 text-yellow-400 py-1 px-8 rounded-lg "
          onClick={handelCb}
        >
          جستجو
        </button>
      </div>
    </div>
  );
}

export default StatisticsSlice;
