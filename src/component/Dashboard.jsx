import React from 'react'
import { useState ,useEffect,useContext} from 'react';
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Users from './Users';
import ProdcutsEdit from './ProdcutsEdit';
import axios from 'axios';
import { Store } from '../context/Store';

function Dashboard() {
  const [users, setUsers] = useState(false);
    const { userinfo } = useContext(Store);
    const handelUsers = () => {
      setUsers(true)
  }
  const handelProducts = () => {
    setUsers(false);
  };
 
  return (
    <>
      {userinfo[0].isAdmin ? (
        <div className="flex container m-auto font-[yekan] ">
          <div className="border  w-52 min-h-screen flex flex-col items-center gap-5 rounded-lg">
            <div className="mt-4  p-6 rounded-full shadow shadow-blue-400">
              <FaUserAlt className="text-red-500" />
            </div>
            <h2 className="text-2xl ">داشبورد مدیر</h2>
            <div className="flex flex-col gap-10 text-2xl  ">
              <button
                onClick={() => handelProducts()}
                className="bg-blue-500 py-3 px-6 hover:rounded-3xl hover:text-white duration-500"
              >
                محصولات
              </button>
              <button
                onClick={() => handelUsers()}
                className="bg-blue-500 py-3 px-6 hover:rounded-3xl hover:text-white duration-500 cursor-pointer  "
              >
                کاربران
              </button>
              <p className="bg-blue-500 py-3 px-6 hover:rounded-3xl hover:text-white duration-500">
                سفارشات
              </p>
            </div>
          </div>
          <div className="border w-full rounded-lg text-black">
            {users ? <Users /> : <ProdcutsEdit />}
          </div>
        </div>
      ) : (
        <div className="flex justify-center text-red-500 text-4xl">
          شما اجازه دسترسی به این بخش را ندارید...
          <Link to={'/'}>
            <p className="text-blue-500">اینجاکلیک کنید</p>
          </Link>
        </div>
      )}
    </>
  );
}

export default Dashboard