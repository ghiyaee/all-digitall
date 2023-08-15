import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../context/Store';
import { FaUserAlt } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import SearchBar from './SearchBar';
import axios from 'axios';
import { toast } from 'react-toastify';
function Header() {
  const { state } = useContext(Store);
  const { userinfo, cart } = state;
  return (
    <header className=" min-w-full">
      <div className=" h-24 flex p-2 md:p-10 justify-between items-center  font-[yekan] border-b  sticky top-0 z-50 bg-gradient-to-b from-zinc-800 to-zinc-600  ">
        <Link to={'/'} className="text-3xl text-yellow-300">
          <div className="flex gap-5 items-center">
            <div>
              <p> دیجیتال مارکت</p>
              <p className="font-[sogand] text-red-400">Digital Market</p>
            </div>
            <div className="w-8 h-10 border-yellow-300 border-4 rounded-tr-2xl rounded-br-2xl relative -translate-x-6"></div>

            <div className=" h-5 border-red-500 border-r-4 relative  flex items-center justify-center translate-x-4">
              <div className=" h-4 border-red-500  border-r-4 absolute top-0 transform -translate-x-1 rotate-45 "></div>
            </div>

            <div className=" h-5 border-red-500   border-l-4 relative flex items-center justify-center translate-x-2">
              <div className=" h-3 border-red-500  text-red-400  border-l-4 absolute top-0 transform translate-x-1 -rotate-45"></div>
            </div>
          </div>
        </Link>
        <div className=" gap-3 hidden md:inline-flex ">
          <SearchBar />
          <div className="flex bg-yellow-50 text-zinc-800  p-3 rounded-lg text-2xl shadow-md shadow-orange-200">
            <ul className="flex gap-5 ">
              <Link to={'/Card'}>
                <li>سبدخرید</li>
              </Link>
              {cart.cartItem.length > 0 ? (
                <span className="bg-blue-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {cart.cartItem.reduce((a, c) => a + c.conter, 0)}
                </span>
              ) : (
                ''
              )}
              {userinfo.length > 0 ? (
                <li className="flex gap-3 ">
                  <FaUserAlt className="text-red-500" />:<h2>داشبورد</h2>
                  {userinfo[0].isAdmin ? (
                    <Link to={'/Dashboard'} className="text-blue-600">
                      {userinfo[0].name}
                    </Link>
                  ) : (
                    <Link to={'/DashboardUser'} className="text-blue-600">
                      {userinfo[0].name}
                    </Link>
                  )}
                  <Link
                    to={'/'}
                    className="text-red-500"
                    onClick={() => userinfo('')}
                  >
                    خروج
                  </Link>
                </li>
              ) : (
                <Link to={'/SignIn'}>
                  <li>حساب کاربری</li>
                </Link>
              )}
            </ul>
          </div>
        </div>
        <div className="text-yellow-400 text-3xl cursor-pointer md:hidden">
          <HiMenuAlt1 />
        </div>
      </div>
      <div className="flex flex-col gap-2 container m-auto md:hidden justify-between font-[yekan] mb-2 min-w-full">
        <SearchBar />
        <div className="flex bg-zinc-700 text-yellow-200  p-3  text-2xl shadow-md shadow-orange-200">
          <ul className="flex gap-1 ">
            <Link to={'/Card'}>
              <li>سبدخرید</li>
            </Link>
            {cart.cartItem.length > 0 ? (
              <span className="bg-blue-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {cart.cartItem.reduce((a, c) => a + c.conter, 0)}
              </span>
            ) : (
              ''
            )}
            {userinfo.length > 0 ? (
              <li className="flex gap-3 ">
                <FaUserAlt className="text-red-500" />:<h2>داشبورد</h2>
                {userinfo[0].isAdmin ? (
                  <Link to={'/Dashboard'} className="text-blue-600">
                    {userinfo[0].name}
                  </Link>
                ) : (
                  <Link to={'/DashboardUser'} className="text-blue-600">
                    {userinfo[0].name}
                  </Link>
                )}
                <Link
                  to={'/'}
                  className="text-red-500"
                  onClick={() => userinfo('')}
                >
                  خروج
                </Link>
              </li>
            ) : (
              <Link to={'/SignIn'}>
                <li>حساب کاربری</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
