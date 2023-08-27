import React from 'react';
import { useState } from 'react';

function AddressUsers() {
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [postCode, setPostCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [tell, setTell] = useState('');

  return (
    <div className="flex flex-col  gap-4 p-10  bg-zinc-700 container m-auto">
      <h2 className="text-yellow-200 text-2xl text-center">
        اطلاعات تکمیلی (آدرس)
      </h2>
      <form className="flex  flex-col text-2xl gap-5 w-96 font-[yekan]">
        <input
          type="text"
          className="py-3 px-1 rounded-lg w-[190px] outline-none"
          placeholder="استان"
        />
        <input
          type="text"
          className="py-3 px-1 rounded-lg w-[190px] outline-none"
          placeholder="شهر"
        />
        <input
          type="text"
          className="py-3 px-1 rounded-lg w-[1200px] outline-none"
          placeholder="خیابان"
        />
        <input
          type="text"
          className="py-3 px-1 rounded-lg w-[190px] outline-none"
          placeholder="کدپستی"
        />
        <input
          type="text"
          className="py-3 px-1 rounded-lg w-[190px] outline-none"
          placeholder="موبایل"
        />
        <input
          type="text"
          className="py-3 px-1 rounded-lg w-[190px] outline-none"
          placeholder="تلفن ثابت"
        />
        <button
          className="text-yellow-200 py-4 w-[190px] rounded-lg 
        hover:scale-95 duration-300 cursor-pointer bg-zinc-900
        border-r-[3px] border-l-[3px]
         hover:text-red-500    hover:border-red-500"
        >
          ثبت
        </button>
      </form>
    </div>
  );
}

export default AddressUsers;
