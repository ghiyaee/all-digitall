import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../context/Store';
import {FaUserAlt} from 'react-icons/fa'
function Header() {
  const { state, cart,  } = useContext(Store);
  const { userinfo } = state
  console.log(userinfo);
  return (
    <div className="h-24 flex p-10 justify-between items-center  font-[yekan] border-b mb-5 sticky top-0 z-50 bg-white  ">
      <Link to={'/'} className="text-3xl  text-red-500">
        دیجیتال مارکت
      </Link>
      <div className="flex  text-zinc-800 border p-3 rounded-lg text-2xl ">
        <ul className="flex gap-5">
          <Link to={'/Card'}>
            <li>سبدخرید</li>
          </Link>
          {cart.length > 0 ? (
            <span className="bg-blue-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">
              {cart.reduce((a, c) => a + c.conter, 0)}
            </span>
          ) : (
            ''
          )}
          {userinfo.length > 0 ? (
            <li className="flex gap-3">
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
  );
}

export default Header;
