import React from 'react';
const link = [
  { name: 'موبایل', img: '/img/app14.png' },
  { name: 'فلش', img: '/img/flash2.png' },
  { name: 'لب تاب', img: 'img/labap.png' },
  { name: 'هدفون بی سیم', img: 'img/headphone.png' },
  { name: 'هدفون با سیم', img: 'img/headphone1.png' },
];
function Categories() {
  return (
    <div className="container m-auto flex flex-col gap-[60px] items-center">
      <h1 className="text-zinc-800  text-3xl font-semibold">
        دسته بندی های دیجیتال مارکت
      </h1>
      <div className="flex gap-[100px] ">
        {link.map((link) => (
          <div key={link.name}>
            <p
              className="w-44 h-44 bg-red-500 rounded-full flex-col
                    flex items-center justify-center text-black text-2xl
                    font-[yekan] border-[5px] border-green-300  bg-gradient-to-b 
                    from-blue-500  to-yellow-100"
            >
              {/* <div className="w-16"> */}
              <img src={link.img} alt="img" className="imgw" />
              {/* </div> */}
              {link.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
