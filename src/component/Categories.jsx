import React from 'react';
import { useNavigate } from 'react-router-dom';

const link = [
  { name: 'موبایل', img: '/img/app14.png', catgory: 'mobile' },
  { name: 'فلش', img: '/img/flash2.png', catgory: 'flash' },
  { name: 'لب تاب', img: 'img/labap.png', catgory: 'labtab' },
  { name: 'هدفون بی سیم', img: 'img/headphone.png', catgory: 'headbi' },
  { name: 'هدفون با سیم', img: 'img/headphone1.png', catgory: 'headba' },
];
function Categories() {
  const navigate=useNavigate()
  const handelCatgory = (name) => {
    navigate('/searchProduct',{state:name})
  };
  return (
    <div className="container m-auto flex flex-col gap-[60px] items-center">
      <h1 className="text-zinc-800  text-3xl font-semibold">
        دسته بندی های دیجیتال مارکت
      </h1>
      <div className="flex flex-wrap flex-col md:flex-row justify-center gap-[50px] ">
        {link.map((link) => (
          <div key={link.name}>
            <button
              className="w-40 h-40 bg-zinc-500 rounded-full flex-col
                    flex items-center justify-center text-black text-2xl
                    font-[yekan] animate-bounce  cursor-pointer relative"
              onClick={() => handelCatgory(link.catgory)}
            >
              <span
                className="border-[6px] border-b-red-400  absolute top-0
               w-40 h-40 rounded-full animate-spin "
              ></span>
              <img src={link.img} alt="img" className="imgw " />
            </button>
            <p className="text-center text-lg font-[yekan] "> {link.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
