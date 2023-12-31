import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const link = [
  { name: 'موبایل', catgory: 'mobile' },
  { name: 'فلش مموری', catgory: 'flash' },
  { name: 'لب تاب', catgory: 'labtab' },
  { name: 'هدفون بیسم', catgory: 'headbi' },
  { name: 'هدفون باسیم', catgory: 'headba' },
];

function Navbar() {
  const navigate = useNavigate();
    const [moveSlider, setMoveSlider] = useState({
      move: 'transform -translate-y-[800px]',
    });
     const [moveSlider1, setMoveSlider1] = useState({
       move: 'transform -translate-y-[800px]',
     });

  const handelProduct = (name) => {
    navigate('/searchProduct', { state: name });
  };
  
  useEffect(() => {
    setTimeout(() => {
       setMoveSlider('transform translate-y-[0px]');
     },1000) 
  }, [moveSlider])
    useEffect(() => {
      setTimeout(() => {
        setMoveSlider1('transform translate-y-[0px]');
      }, 1500);
    }, [ moveSlider1]);
  return (
    <div
      className={`hidden md:inline-flex h-[80px] relative items-center justify-center container m-auto
     rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-600 mt-3  ${moveSlider.move} duration-[1500ms]`}
    >
      <ul className="flex gap-[100px] text-xl relative">
        {link.map((product) => (
          <li
            className={`style_navbar  font-[yekan]  hover:scale-110 duration-700 relative ${moveSlider1.move} duration-[2000ms]`}
            key={product.name}
            onClick={() => handelProduct(product.catgory)}
          >
            {product.name}
            <span
              className="border-[3px] border-red-500 absolute top-0 right-0
              h-11 w-32 rounded-md 
             animate-ping hover:border-none"
            ></span>
          </li>
        ))}
      </ul>
      <div className="style_navbar_cur  -left-6  border-l-4  rounded-bl-lg "></div>
      <div className="style_navbar_cur  -right-6  border-r-4  rounded-br-lg "></div>
    </div>
  );
}

export default Navbar;
