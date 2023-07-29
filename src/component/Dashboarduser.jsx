import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import User from './User';
import axios from 'axios';
import { Store } from '../context/Store';
import Comments from './Comments';

function DashboardUser() {
  const [user, setUser] = useState(true);
  const [comments, setComments] = useState(false);
  const { userinfo } = useContext(Store);
  const handelUsers = () => {
    setUser('');
  };
  const handelProducts = () => {};
  const handelComments = () => {
    setComments(true);
    setUser(false);
  };
  return (
    <>
      <div className="flex container m-auto font-[yekan] ">
        <div className="border  w-52 min-h-screen flex flex-col items-center gap-5 rounded-lg bg-[#ffea00]">
          <div className="mt-4  p-6 rounded-full shadow shadow-blue-400 bg-white">
            <FaUserAlt className="text-red-500" />
          </div>
          <h2 className="text-2xl ">داشبورد کاربر</h2>
          <div className="flex flex-col gap-10 text-2xl  ">
            <button
              onClick={() => handelProducts()}
              className="bg-blue-400 py-3 px-6 hover:rounded-3xl hover:text-white duration-500"
            >
              محصولات خریداری شده
            </button>
            <button
              onClick={() => handelUsers()}
              className="bg-blue-400 py-3 px-6 hover:rounded-3xl hover:text-white duration-500 cursor-pointer  "
            >
              ویرایش مشخصات
            </button>
            <p
              onClick={() => handelComments()}
              className="bg-blue-400 py-3 px-6 hover:rounded-3xl hover:text-white duration-500 cursor-pointer"
            >
              ویرایش دیدگاه
            </p>
          </div>
        </div>
        <div className="border w-full rounded-lg text-black">
          {user === true ? <User /> : comments === true ? <Comments /> : ''}
        </div>
      </div>
      
    </>
  );
}

export default DashboardUser;