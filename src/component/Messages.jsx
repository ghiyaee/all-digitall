import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import moment from 'jalali-moment'
function Messages() {
    const [message,setMessage]=useState([])
    useEffect(() => {
        const fetchData = async () => {
            const msg = await axios.get('/api/message/all')
            setMessage(msg.data)
        }
        fetchData()
    }, [])
    console.log(message);
  return (
    <div className="text-xl p-10 text-yellow-200 font-[yekan] flex flex-col    gap-3 max-h-screen overflow-y-auto">
      <h2 className="text-center">پیامهای ارسال شده</h2>
      {message.map((i) => (
        <div key={i._id} className="border p-8 text-2xl rounded-lg">
          <p>
            ارسال شده به کاربر :{' '}
            <span className="text-blue-300">{i.user_id.name} </span>
          </p>
          <br />
          <p>{i.message}</p>
         
          {moment (i.data).locale('fa').format('HH:D YYYY/MM/DD')}
        </div>
      ))}
    </div>
  );
}

export default Messages