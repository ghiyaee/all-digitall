import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../context/Store';
import { useContext } from 'react';
import { toast } from 'react-toastify';
function SignIn() {
  const {state,dispatch, userinfo ,setUserInFo} = useContext(Store);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('ایمیل یا پسورد معتبر نیست');
  const navigate = useNavigate();
  const [move, setMove] = useState({
    move: `translate-y-48`,
  });
  const handelSignin = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
     setMove({move:`translate-y-60`});
      return;
    }
    try {
      const {data} = await axios.post('/api/user/signin', {
        email,
        password,
      });
      // setUserInFo(userinfo.concat({ ...data }))
      // setUserInFo([...userinfo, { ...data }])
      dispatch({type:'LOGIN',payload:{...data}})
     navigate('/') 
     
    } catch (error) {
     toast.error('نام کاربری یا رمز عبور اشتباه است')
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
       setMove({ move: `translate-y-48` });
    }, 1900);
    return () => {
      clearTimeout(timer);
    };
  }, [move]);
  return (
    <div className="contianer m-auto ">
      <form
        className="flex flex-col gap-8 items-center shadow-2xl rounded-lg
       shadow-orange-400 p-10 text-2xl font-[yekan] "
      >
        <h2>فرم ورود</h2>
        <input
          value={email}
          type="email"
          required
          placeholder="ایمیل"
          className="py-5 px-8 rounded-lg outline-none border-b"
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />
        <input
          value={password}
          type="password"
          required
          placeholder="رمزعبور"
          className="py-5 px-8 rounded-lg outline-none border-b relative z-50"
          onChange={(e) =>
            setPassword(e.target.value.toLowerCase())
          }
        />
        {message ? (
          <p
            className={`text-red-500  transform ${move.move} absolute duration-500 z-0`}
          >
            {message}
          </p>
        ) : (
          ''
        )}
        <button
          className="bg-blue-500 py-5 w-full  hover:rounded-3xl hover:text-white duration-700"
          onClick={handelSignin}
        >
          ورود
        </button>
        <div className="flex gap-2">
          <p>ثبت نام نکردید؟</p>
          <Link to={'/SignUp'}>
            <span className="text-blue-500">اینجا کلیک کنید</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
