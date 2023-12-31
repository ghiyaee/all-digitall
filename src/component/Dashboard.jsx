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
import OrderUsers from './OrderUsers';
import Statistics from './Statistics ';
import StatisticsSlice from './StatisticsSlice';
function Dashboard() {
  const { state } = useContext(Store);
  const { userinfo } = state;
  const [users, setUsers] = useState(false);
  const [comments, setComments] = useState(false);
  const [product, setProduct] = useState(false);
  const [messages, setMessages] = useState(false);
  const [order, setOrder] = useState(false);
  const [statistics, setsStatistics] = useState(false);
  const [statisticsSlice, setsStatisticsSlice] = useState(false);
  const handelUsers = () => {
    setUsers(true);
  };
  const handelProducts = () => {
    setUsers(false);
    setComments(false);
    setProduct(false);
    setMessages(false);
    setOrder(false);
    setsStatistics(false);
    setsStatisticsSlice(false);
  };
  const handelComments = () => {
    setComments(true);
    setUsers(false);
    setProduct(false);
    setMessages(false);
    setOrder(false);
    setsStatisticsSlice(false);
  };
  const handelNewProduct = () => {
    setProduct(true);
    setComments(false);
    setUsers(false);
    setMessages(false);
    setOrder(false);
    setsStatisticsSlice(false);
  };
  const handelMessages = () => {
    setMessages(true);
    setUsers(false);
    setComments(false);
    setProduct(false);
    setOrder(false);
    setsStatisticsSlice(false);
  };
  const handelOreder = () => {
    setOrder(true);
    setMessages(false);
    setUsers(false);
    setComments(false);
    setProduct(false);
    setsStatisticsSlice(false);
  };
  const handelStatistics = () => {
    setsStatisticsSlice(false);
    setOrder(false);
    setMessages(false);
    setUsers(false);
    setComments(false);
    setProduct(false);
    setsStatistics(true);
  };
  const handelStatisticsSlice = () => {
    setOrder(false);
    setMessages(false);
    setUsers(false);
    setComments(false);
    setProduct(false);
    setsStatistics(false);
    setsStatisticsSlice(true);
  };
  return (
    <>
      {userinfo[0].isAdmin ? (
        <div className="flex container m-auto font-[yekan] mt-5 ">
          <div className="border  w-[250px] min-h-screen flex flex-col items-center gap-5 rounded-lg bg-zinc-700">
            <div className="mt-4  p-6 rounded-full shadow shadow-red-400 bg-white">
              <FaUserAlt className="text-red-500" />
            </div>
            <h2 className="text-2xl text-yellow-100 ">داشبورد مدیر</h2>
            <div className="flex flex-col gap-5 text-2xl p-2 overflow-y-auto h-[700px]">
              <button
                onClick={() => handelProducts()}
                className="style-button duration-500"
              >
                محصولات
              </button>
              <button
                onClick={() => handelNewProduct()}
                className="style-button p-2 duration-500 cursor-pointer"
              >
                ثبت محصول
              </button>
              <button
                onClick={() => handelOreder()}
                className="style-button p-2 duration-500 cursor-pointer"
              >
                سفارشات
              </button>
              <button
                onClick={() => handelUsers()}
                className="style-button duration-500 cursor-pointer  "
              >
                کاربران
              </button>
              <button
                onClick={() => handelComments()}
                className="style-button p-2 duration-500 cursor-pointer"
              >
                نظرات کاربران
              </button>
              <button
                onClick={() => handelMessages()}
                className="style-button p-2 duration-500 cursor-pointer"
              >
                پیامهای ارسالی
              </button>
              <button
                onClick={() => handelStatistics()}
                className="style-button p-2 duration-500 cursor-pointer"
              >
                آمار محصولات
              </button>
              <button
                onClick={() => handelStatisticsSlice()}
                className="style-button p-2 duration-500 cursor-pointer"
              >
                آمارتفکیکی کالا
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
            ) : order === true ? (
              <OrderUsers />
            ) : statistics === true ? (
              <Statistics />
            ) : statisticsSlice === true ? (
              <StatisticsSlice />
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
