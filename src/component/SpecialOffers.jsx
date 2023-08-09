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
    <div className="container m-auto flex flex-col gap-[60px] items-center">
      <h1 className="text-zinc-800  text-3xl font-semibold">
        پیشنهادات ویژه دیجیتال مارکت
      </h1>
      <div className="flex gap-[60px] ">
        {link.map((link) => (
          <div key={link.name}>
            <p
              className="w-[300px] h-[300px] bg-gradient-to-b 
             from-green-700 to-yellow-200  flex-col
                    flex items-center justify-center text-black text-2xl
                    font-[yekan]   rounded-xl
                   "
            >
              <img src={link.img} alt="img" className="imgw" />
              {link.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialOffers;
