import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Store } from '../context/Store';
import { useNavigate } from 'react-router-dom';
function AddressEdit() {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userinfo } = state;
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [postCode, setPostCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [tell, setTell] = useState('');
  const handelEdit = async (e) => {
    e.preventDefault();
    const fetchData = await axios.post('/api/address/edit', {
      userinfo,
      province,
      city,
      street,
      postCode,
      mobile,
      tell,
    });

    navigate('/');
  };
  useEffect(() => {
    const fetchData = async () => {
      const address = await axios.post('/api/address', { userinfo });
      setProvince(address.data.province);
      setCity(address.data.city);
      setStreet(address.data.street);
      setPostCode(address.data.postCode);
      setMobile(address.data.mobile);
      setTell(address.data.tell);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col  gap-4 p-10  bg-zinc-700 container m-auto">
      <h2 className="text-yellow-200 text-2xl text-center">
        ویرایش اطلاعات تکمیلی (آدرس)
      </h2>
      <form className="flex  flex-col text-2xl gap-5 w-96 font-[yekan]">
        <input
          value={province}
          onChange={(e) => setProvince(e.target.value.toLowerCase())}
          type="text"
          className="py-3 px-1 rounded-lg w-[190px] outline-none"
          placeholder="استان"
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value.toLowerCase())}
          type="text"
          className="py-3 px-1 rounded-lg w-[190px] outline-none"
          placeholder="شهر"
        />

        <input
          value={postCode}
          onChange={(e) => setPostCode(e.target.value.toLowerCase())}
          type="text"
          className="py-3 px-1 rounded-lg w-[190px] outline-none"
          placeholder="کدپستی"
        />
        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value.toLowerCase())}
          type="text"
          className="py-3 px-1 rounded-lg w-[190px] outline-none"
          placeholder="موبایل"
        />
        <input
          value={tell}
          onChange={(e) => setTell(e.target.value.toLowerCase())}
          type="text"
          className="py-3 px-1 rounded-lg w-[190px] outline-none"
          placeholder="تلفن ثابت"
        />
        <input
          value={street}
          onChange={(e) => setStreet(e.target.value.toLowerCase())}
          type="text"
          className="py-3 px-1 rounded-lg w-[1200px] outline-none"
          placeholder="خیابان"
        />
        <button
          className="text-yellow-200 py-4 w-[190px] rounded-lg 
        hover:scale-95 duration-300 cursor-pointer bg-zinc-900
        border-r-[3px] border-l-[3px]
         hover:text-yellow-500    hover:border-red-500"
          onClick={handelEdit}
        >
          ویرایش آدرس
        </button>
      </form>
    </div>
  );
}

export default AddressEdit;
