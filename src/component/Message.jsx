import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Message() {
  const navigate = useNavigate();
  const { state } = useLocation();
  let [msg, setMsg] = useState('');
  const handelMessage = async (e) => {
     e.preventDefault();
    if (msg === '') {
     
      return
    } else{
      try {
        const res = await axios.post('/api/message', { msg, state });
        setMsg(res.data)
        navigate('/Dashboard');
      } catch (error) {}

    }
  };
  return (
    <div className="flex items-center flex-col justify-center container m-auto  mt-5 ">
      <div className="py-5 px-16 rounded-lg flex items-center flex-col gap-5 bg-zinc-700 text-yellow-200 w-full text-2xl">
        <h2>فرم ارسال پیام</h2>
        <form className="flex flex-col gap-4 font-[yekan]">
          <textarea
            cols="30"
            rows="10"
            type="text"
            placeholder="اینجا پیام بنویسید"
            className="border outline-none w-[500px] rounded-lg text-zinc-800"
            value={msg}
            onChange={(e) => setMsg(e.target.value.toLowerCase())}
          />
          <button
            className=" bg-yellow-300 text-zinc-700 py-4 px-8 rounded-lg"
            onClick={handelMessage}
          >
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;
