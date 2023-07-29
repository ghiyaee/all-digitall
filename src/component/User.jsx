import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Store } from '../context/Store';
import { Link, useNavigate } from 'react-router-dom';


function User() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const { userinfo } = useContext(Store);
  const {user}=userinfo[0]._id
  const handelUserDel = async (user) => {
    const fetchUser = await axios.post('/api/user/del', { user });
    setUsers([...users, ...fetchUser]);
  };
  const handelUserEdi = (user) => {
    navigate('/SignUp', {state:user});
  };
  useEffect(() => {
    const users = async () => {
      const res = await axios.post('/api/comment/user',{user});
      setUsers(res.data);
    };
    users();
  }, [user]);
  console.log(users);
  return (
    <>
      {userinfo[0].isAdmin ? (
        <div className="flex items-center  flex-col gap-[30px] font-bold font-[yekan] ">
          <h2 className="text-3xl mt-5"> کاربران</h2>
          <div className="border py-3 px-10 text-lg w-[700px] shadow-2xl shadow-orange-400 ">
            {users?.map((user) => (
              <div
                key={user._id}
                className="flex justify-between items-center mt-5 gap-[50px] "
              >
                {user.isAdmin ? (
                  ''
                ) : (
                  <>
                    <div>
                      <p className="text-2xl">{user.name}</p>
                      <p className="text-2xl">{user.email}</p>
                    </div>
                    <div className="flex gap-5">
                      <button
                        className="text-blue-700  bg-[#ffea00] p-2 rounded-lg w-[100px]"
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
                  </>
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
    </>
  );
}

export default User;
