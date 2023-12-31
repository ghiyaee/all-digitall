import React from 'react';
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import User from './User';
import MessageUser from './MessageUser';
import { Store } from '../context/Store';
import { useContext } from 'react';
import axios from 'axios';
import AddressEdit from './AddresseEdit';
import OrderUser from './OrderUser';
function DashboardUser() {
  const { state } = useContext(Store);
  const { message, userinfo } = state;
  const [user, setUser] = useState(false);
  const [address, setAddress] = useState(false);
  const [msg, setMessage] = useState(false);
  const [order, setOrder] = useState(false);
  const [allmsg,setAllmsg]=useState(false)
  const handelMessage = async () => {
    setAddress(false)
    setMessage(false)
    setMessage(true);
    await axios.post('/api/message/edit', { userinfo });
  };

  const handelOrder = () => {
      setAddress(false);
    setMessage(false);
    setOrder(true)
  };
  const handelAddress = () => {
    setUser(false);
    setMessage(false);
    setAddress(true);
  };
   const handelAllMessage = () => {
     setUser(false);
     setMessage(false);
     setAddress(false);
     setMessage(false);
     setAllmsg(true)
   };
  return (
    <>
      <div className="flex container m-auto font-[yekan] ">
        <div className="border p-5 w-52 min-h-screen flex flex-col items-center gap-5 rounded-lg text-yellow-200 bg-zinc-700">
          <div className="mt-4  p-6 rounded-full shadow shadow-blue-400 bg-white">
            <FaUserAlt className="text-red-500" />
          </div>
          <h2 className="text-2xl ">داشبورد کاربر</h2>
          <div className="flex flex-col gap-5 text-2xl  ">
            <button
              onClick={() => handelMessage()}
              className="style-button p-4 "
            >
              نمایش پیام جدید
            </button>
            <button
              onClick={() => handelAllMessage()}
              className="style-button p-4 "
            >
              نمایش پیامها
            </button>
            <button
              onClick={() => handelAddress()}
              className="style-button p-4"
            >
              آدرس
            </button>

            <button onClick={() => handelOrder()} className="style-button p-4">
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
          ) : address === true ? (
            <AddressEdit />
          ) : msg === true ? (
            <MessageUser />
          ) : order === true ? (
            <OrderUser />
          ) :(
            ''
          )}
        </div>
      </div>
    </>
  );
}

export default DashboardUser;
