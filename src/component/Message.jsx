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
    try {
     await axios.post('/api/message', { msg, state });
      navigate('/Dashboard');
    } catch (error) {}
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2>فرم ارسال پیام</h2>
      <p>کاربر{state.name}</p>
      <form className="flex flex-col gap-4">
        <textarea
          type="text"
          placeholder="اینجا پیام بنویسید"
          className="border outline-none w-96"
          value={msg}
          onChange={(e) => setMsg(e.target.value.toLowerCase())}
        />
        <button
          className=" bg-zinc-700 text-yellow-200 py-4 px-8"
          onClick={handelMessage}
        >
          ارسال
        </button>
      </form>
    </div>
  );
}

export default Message;
