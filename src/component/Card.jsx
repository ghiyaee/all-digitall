import React from 'react'

function Card() {
  return (
    <div className=" border p-5 h-3/4 font-[yekan] text-2xl flex flex-col gap-8 items-center">
      <h2>فاکتور خرید</h2>
      <div className="flex flex-col gap-5">
        <p>تعداد : 2</p>
        <p>مالیات ارزش برافزوده به تومان : 1000000</p>
        <p>جمع به تومان : 10000000</p>
        <button className="bg-green-500 p-4 text-white rounded-lg w-full ">
          افزودن به خرید سبد
        </button>
      </div>
    </div>
  );
}

export default Card