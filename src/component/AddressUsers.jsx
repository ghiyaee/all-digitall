import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Store } from '../context/Store';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function AddressUsers() {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userinfo } = state;
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [postCode, setPostCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [tell, setTell] = useState('');
  const [msg, setMsg] = useState(false);
  const handelAddress = async (e) => {
    e.preventDefault();
    if (province && city && street && postCode && mobile && tell) {
      try {
        const fetchData = await axios.post('/api/address/addressNew', {
          userinfo,
          province,
          city,
          street,
          postCode,
          mobile,
          tell,
        });
        navigate(-1);
      } catch (error) {
        console.log(error);
      }
    } else {
      setMsg(true);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setMsg(false);
    }, 200000);
  }, [msg]);
  return (
    <>
      {msg ? (
        <div className="flex justify-center items-center  w-36  rounded-lg text-yellow-400 bg-zinc-800 p-2 text-xl">
          باید تمامی مقدار وارد شوند
        </div>
      ) : (
        <div className="flex flex-col  gap-4 p-10  bg-zinc-700 container m-auto">
          <h2 className="text-yellow-200 text-2xl text-center">
            اطلاعات تکمیلی (آدرس)
          </h2>
          <form className="flex  flex-col text-xl gap-5 w-96 font-[yekan]">
            <input
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              type="text"
              className="py-3 px-1 rounded-lg w-[190px] outline-none"
              placeholder="استان"
            />
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              className="py-3 px-1 rounded-lg w-[190px] outline-none"
              placeholder="شهر"
            />

            <input
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
              type="text"
              className="py-3 px-1 rounded-lg w-[190px] outline-none"
              placeholder="کدپستی"
            />
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="text"
              className="py-3 px-1 rounded-lg w-[190px] outline-none"
              placeholder="موبایل"
            />
            <input
              value={tell}
              onChange={(e) => setTell(e.target.value)}
              type="text"
              className="py-3 px-1 rounded-lg w-[190px] outline-none"
              placeholder="تلفن ثابت"
            />
            <input
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              type="text"
              className="py-3 px-1 rounded-lg w-[900px] outline-none"
              placeholder="خیابان"
            />
            <button
              className="text-yellow-200 py-4 w-[190px] rounded-lg 
              hover:scale-95 duration-300 cursor-pointer bg-zinc-900
               border-r-[3px] border-l-[3px]
             hover:text-yellow-500    hover:border-red-500"
              onClick={(e) => handelAddress(e)}
            >
              آدرس جدید
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default AddressUsers;
