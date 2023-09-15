import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Store } from '../context/Store';
import { Link, useNavigate } from 'react-router-dom';

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const { state } = useContext(Store);
  const [loading, setLoading] = useState(true);
  const { userinfo } = state;
  const handelUserDel = async (user) => {
    const fetchUser = await axios.post('/api/user/del', { user });
    setUsers([...users, ...fetchUser]);
  };
  const handelUserEdi = (user) => {
    navigate('/Message', { state: user });
  };
  useEffect(() => {
    const users = async () => {
      const res = await axios.get('/api/user/users');
      setUsers(res.data);
      setLoading(false)
    };
    users();
  }, [users]);
  return (
    <>
      {loading ? (
        <p className="flex justify-center items-center text-2xl font-[yekan] text-yellow-400">
          لطفا صبر کنید...
        </p>
      ) : (
        <div>
          {' '}
          {userinfo[0].isAdmin ? (
            <div className="flex items-center  flex-col gap-[30px] font-bold font-[yekan] max-h-screen  overflow-y-auto ">
              <h2 className="text-2xl mt-5 text-yellow-400">   لیست کاربران</h2>
                <div className=" py-2 px-0 text-lg w-[900px] bg-zinc-700 text-yellow-100 shadow
               shadow-orange-400 overflow-x-hidden ">
                {users?.map((user) => (
                  <div
                    key={user._id}
                  >
                    {user.isAdmin ? (
                      ''
                    ) : (
                      <div className='flex gap-5 py-2 justify-between items-center'>
                        <div className='flex gap-5'>
                          <p className="text-2xl">{user.name}</p>
                          <p className="text-2xl">{user.email}</p>
                        </div>
                        <div className="flex gap-5">
                          <button
                            className="text-blue-700  bg-[#ffea00] p-1 rounded-lg w-[100px]"
                            onClick={() => handelUserEdi(user)}
                          >
                           ارسال پیام
                          </button>
                          <button
                            className="bg-red-500 text-white p-1 rounded-lg w-[100px]"
                            onClick={() => handelUserDel(user._id)}
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-center text-red-500 text-4xl">
                شما اجازه دسترسی به این بخش را ندارید...
                <Link to={'/'}>
                  <p className="text-blue-500">اینجاکلیک کنید</p>
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Users;
