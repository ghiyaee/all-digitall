import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Users from './Users';
import ProdcutsEdit from './ProdcutsEdit';
import axios from 'axios';
import { Store } from '../context/Store';
import Comments from './Comments';
import DashboardUser from './Dashboarduser';

function Dashboard() {
  const [users, setUsers] = useState(false);
  const [comments, setComments] = useState(false);
  const { state } = useContext(Store);
  const { userinfo } = state;
  const handelUsers = () => {
    setUsers(true);
  };
  const handelProducts = () => {
    setUsers(false);
    setComments(false);
  };
  const handelComments = () => {
    setComments(true);
    setUsers(false);
  };
  return (
    <>
      {userinfo[0].isAdmin ? (
        <div className="flex container m-auto font-[yekan] ">
          <div className="border  w-52 min-h-screen flex flex-col items-center gap-5 rounded-lg bg-[#ffea00]">
            <div className="mt-4  p-6 rounded-full shadow shadow-blue-400 bg-white">
              <FaUserAlt className="text-red-500" />
            </div>
            <h2 className="text-2xl ">داشبورد مدیر</h2>
            <div className="flex flex-col gap-10 text-2xl  ">
              <button
                onClick={() => handelProducts()}
                className="bg-blue-400 py-3 px-6 hover:rounded-3xl hover:text-white duration-500"
              >
                محصولات
              </button>
              <button
                onClick={() => handelUsers()}
                className="bg-blue-400 py-3 px-6 hover:rounded-3xl hover:text-white duration-500 cursor-pointer  "
              >
                کاربران
              </button>
              <p
                onClick={() => handelComments()}
                className="bg-blue-400 py-3 px-6 hover:rounded-3xl hover:text-white duration-500 cursor-pointer"
              >
                نظرات کاربران
              </p>
            </div>
          </div>
          <div className="border w-full rounded-lg text-black">
            {users === true ? (
              <Users />
            ) : comments === true ? (
              <Comments />
            ) : (
              <ProdcutsEdit />
            )}
          </div>
        </div>
      ) : (
        <DashboardUser />
      )}
    </>
  );
}

export default Dashboard;
