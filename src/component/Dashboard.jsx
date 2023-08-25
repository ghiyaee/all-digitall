import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import Users from './Users';
import ProdcutsEdit from './ProdcutsEdit';
import { Store } from '../context/Store';
import Comments from './Comments';
import DashboardUser from './Dashboarduser';
import NewProduct from './NewProduct';
import Messages from './Messages';

function Dashboard() {
  const { state } = useContext(Store);
  const { userinfo } = state;
  const [users, setUsers] = useState(false);
  const [comments, setComments] = useState(false);
  const [product, setProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState(false);
  const handelUsers = () => {
    setUsers(true);
  };
  const handelProducts = () => {
    setUsers(false);
    setComments(false);
    setProduct(false);
    setMessages(false)
  };
  const handelComments = () => {
    setComments(true);
    setUsers(false);
    setProduct(false);
    setMessages(false);
  };
  const handelNewProduct = () => {
    setProduct(true);
    setComments(false);
    setUsers(false);
     setMessages(false);
  };
  const handelMessages = () => {
    setMessages(true)
     setUsers(false);
     setComments(false);
     setProduct(false); 
  }
  return (
    <>
      {userinfo[0].isAdmin ? (
        <div className="flex container m-auto font-[yekan] mt-5 ">
          <div className="border  w-52 min-h-screen flex flex-col items-center gap-5 rounded-lg bg-zinc-700">
            <div className="mt-4  p-6 rounded-full shadow shadow-red-400 bg-white">
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
                onClick={() => handelNewProduct()}
                className="style-button p-4 duration-500 cursor-pointer"
              >
                ثبت محصول
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
                onClick={() => handelMessages()}
                className="style-button p-4 duration-500 cursor-pointer"
              >
              پیامهای ارسالی
              </button>
            </div>
          </div>
          <div
            className={`flex justify-center  border w-full rounded-lg
           text-black items-center bg-zinc-700`}
          >
            {users === true ? (
              <Users />
            ) : comments === true ? (
              <Comments />
            ) : product === true ? (
              <NewProduct />
            ) : messages === true ? (
              <Messages />
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
