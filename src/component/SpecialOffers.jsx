import React from 'react';
const link = [
  { name: 'موبایل', img: '/img/app14.png' },
  { name: 'فلش', img: '/img/flash2.png' },
  { name: 'لب تاب', img: 'img/labap.png' },
  { name: 'هدفون بی سیم', img: 'img/headphone.png' },
  { name: 'هدفون با سیم', img: 'img/headphone1.png' },
];
function SpecialOffers() {
  return (
    <div className="container m-auto flex flex-col gap-[80px] items-center">
      <h1 className="text-zinc-800  text-3xl font-semibold">
        پیشنهاد ویژه دیجیتال مارکت
      </h1>
      <div className="flex flex-wrap justify-center gap-[50px] ">
        {link.map((link) => (
          <div
            key={link.name}
            className="relative  hover:scale-110  duration-700 cursor-pointer"
          >
            <div
              className="w-[250px] h-[230px] border-2 bg-gradient-to-r
               from-yellow-200 to-zinc-500  flex-col
                    flex items-center justify-around text-black text-2xl
                    font-[yekan] rounded-b-2xl rounded-t-md z-10 relative"
            >
              <p className="text-red-500 text-3xl font-[sogand] absolute -left-[53px] -rotate-90">Digital Market</p>
              <img src={link.img} alt="img" className="imgw" />
              {link.name}
            </div>
            <div
              className="absolute -top-[38px] left-[50%]  transform -translate-x-[50%]
             text-red-500 border-t-4 border-l-4 border-red-500 rounded-full w-24 h-24 z-0 rotate-[45deg] "
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialOffers;
