import React from 'react';
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import User from './User';
import Comments from './Comments';
import MessageUser from './MessageUser';
import { Store } from '../context/Store';
import { useContext } from 'react';
import axios from 'axios';
function DashboardUser() {
  const { state } = useContext(Store);
  const { message, userinfo } = state;
  const [user, setUser] = useState(false);
  const [comments, setComments] = useState(false);
  const [msg, setMessage] = useState(false);
  const handelMessage = async () => {
    setMessage(true);
    await axios.post('/api/message/edit', { userinfo });
  };
 
  const handelProducts = () => {};
  const handelComments = () => {};
  return (
    <>
      <div className="flex container m-auto font-[yekan] ">
        <div className="border p-5 w-52 min-h-screen flex flex-col items-center gap-5 rounded-lg text-yellow-200 bg-zinc-700">
          <div className="mt-4  p-6 rounded-full shadow shadow-blue-400 bg-white">
            <FaUserAlt className="text-red-500" />
          </div>
          <h2 className="text-2xl ">داشبورد کاربر</h2>
          <div className="flex flex-col gap-10 text-2xl  ">
            <button
              onClick={() => handelMessage()}
              className="style-button p-4 "
            >
              پیامها
            </button>
            <button
              onClick={() => handelComments()}
              className="style-button p-4"
            >
              دیدگاه
            </button>

            <button
              onClick={() => handelProducts()}
              className="style-button p-4"
            >
              سفارشات
            </button>
          </div>
        </div>
        <div
          className="flex justify-center  border w-full rounded-lg
           text-black items-center bg-zinc-700"
        >
          {user === true ? (
            <User />
          ) : comments === true ? (
            <Comments />
          ) : msg === true ? (
            <MessageUser />
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}

export default DashboardUser;
