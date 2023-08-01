import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Store } from '../context/Store';
import { Link, useNavigate } from 'react-router-dom';


function User() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const { state } = useContext(Store);
  const [user, setUser] = useState(state.userinfo[0]._id);
  const handelUserDel = async (user) => {
    const fetchUser = await axios.post('/api/user/del', { user });
    setUsers([...users, ...fetchUser]);
  };
  const handelUserEdi = (user) => {
    navigate('/SignUp', {state:user});
  };
  useEffect(() => {
    const fetchuser = async () => {
      const res = await axios.post('/api/comment/user',{user});
      setUsers(res.data);
    };
    fetchuser();
  }, [user]);
  console.log(users);
  return (
    <>
      <div className="flex items-center  flex-col gap-[30px] font-bold font-[yekan] ">
        <h2 className="text-3xl mt-5"> ویرایش کامنت</h2>
        <div className=" ">
          {users?.map((user) => (
            <div
              key={user._id}
              className=" p-10 rounded-lg text-black shadow-xl shadow-orange-200 m-4 "
            >
              <div className="flex flex-col gap-5 text-xl">
                <div className="flex  gap-5">
                  <p className="">کاربر:</p>
                  <span className='text-blue-500'>
                    <p>{user.user_id.name}</p>
                  </span>
                </div>
                <p className=" w-[100%] block "> {user.text}</p>
              <div className='flex gap-5'>
                <button
                  className="text-blue-700  bg-[#ffea00] p-2 rounded-lg w-[100px] "
                  onClick={() => handelUserEdi(user)}
                >
                  ویرایش
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded-lg w-[100px]"
                  onClick={() => handelUserDel(user._id)}
                >
                  حذف
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default User;
