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
import NewProduct from './NewProduct';

function Dashboard() {
  const [users, setUsers] = useState(false);
  const [comments, setComments] = useState(false);
  const [product, setProduct] = useState(false);
  // const [productEdit, setProductEdit] = useState(true);
  const { state } = useContext(Store);
  const [isLoading, setIsLoading] = useState(true);
  const { userinfo } = state;
  const handelUsers = () => {
    setUsers(true);
  };
  const handelProducts = () => {
    setUsers(false);
    setComments(false);
    setProduct(false);
  };
  const handelComments = () => {
    setComments(true);
    setUsers(false);
  };
  const handelNewProduct = () => {
    setComments(false);
    setUsers(false);
    setProduct(true);
  };
  return (
    <>
      {userinfo[0].isAdmin ? (
        <div className="flex container m-auto font-[yekan] ">
          <div className="border  w-52 min-h-screen flex flex-col items-center gap-5 rounded-lg bg-zinc-700">
            <div className="mt-4  p-6 rounded-full shadow shadow-blue-400 bg-white">
              <FaUserAlt className="text-red-500" />
            </div>
            <h2 className="text-2xl text-yellow-100 ">داشبورد مدیر</h2>
            <div className="flex flex-col gap-10 text-2xl  ">
              <button
                onClick={() => handelProducts()}
                className="style-button duration-500"
              >
                محصولات
              </button>
              <button
                onClick={() => handelUsers()}
                className="style-button duration-500 cursor-pointer  "
              >
                کاربران
              </button>
              <button
                onClick={() => handelComments()}
                className="style-button p-4 duration-500 cursor-pointer"
              >
                نظرات کاربران
              </button>
              <button
                onClick={() => handelNewProduct()}
                className="style-button p-4 duration-500 cursor-pointer"
              >
                ثبت محصول
              </button>
            </div>
          </div>
          <div className="flex justify-center border w-full rounded-lg text-black">
            {users === true ? (
              <Users />
            ) : comments === true ? (
              <Comments />
            ) : product === true ? (
              <NewProduct />
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
