import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation ,useNavigate} from 'react-router-dom';
function SignUp() {
    const navigate = useNavigate();
  const { state } = useLocation('');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (state) {
      setName(state.name);
      setEmail(state.email);
      setPassword(state.password);
    }
  },[state])
  const handelSignupEdi = async (e) => {
      e.preventDefault();
   try {
     const { user } = await axios.post('/api/user/edit', {
       name,
       email,
       password,
     });
     navigate('/Dashboard')
   } catch (error) {
    
   }
  }
  const handelSignUp = async (e) => {
   e.preventDefault()
   if (name === '' ) {
     return;
   } else { 
     try {
      const { user } = await axios.post('/api/user/signUp', {
        name,
        email,
        password,
      });
      navigate('/SignIn')
    } catch (error) {
     
    }
  }
  }
  return (
    <div className="contianer m-auto ">
      <form
        className="flex flex-col gap-8 items-center shadow-2xl rounded-lg
       shadow-orange-400 p-10 text-2xl font-[yekan] "
      >
        {state ? <h2>فرم ویرایش کاربران</h2> : <h2>فرم ثبت نام</h2>}

        <input
          value={name}
          type="text"
          required
          placeholder="نام کاربری"
          className="py-5 px-8 rounded-lg outline-none border-b"
          onChange={(e) => setName(e.target.value)}
        />
       {!state ?  <input
          value={email}
          type="email"
          required
          placeholder="ایمیل"
          className="py-5 px-8 rounded-lg outline-none border-b"
          onChange={(e) => setEmail(e.target.value)}
        /> :''}
        <input
          value={password}
          type="password"
          required
          placeholder="رمزعبور"
          className="py-5 px-8 rounded-lg outline-none border-b"
          onChange={(e) => setPassword(e.target.value)}
        />
        {state ? (
          <button
            onClick={handelSignupEdi}
            className="bg-blue-500 py-5 w-full hover:rounded-3xl duration-500 hover:text-white"
          >
            <Link to={'/Dashboard'}>ویرایش</Link>
          </button>
        ) : (
          <button
            onClick={handelSignUp}
            className="bg-blue-500 py-5 w-full hover:rounded-3xl duration-500 hover:text-white"
          >
            <Link to={'/SignIn'}>تاییدو ادامه</Link>
          </button>
        )}
      </form>
    </div>
  );
}

export default SignUp;
