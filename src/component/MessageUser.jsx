import React from 'react'
import { useContext } from 'react'
import { Store } from '../context/Store'
function MessageUser() {
    const { state } = useContext(Store)
    const { message, userinfo } = state;
    console.log(userinfo[0]?._id);
    const filterMessage = message.filter((f) => f.user_id._id === userinfo[0]?._id);
  return (
    <div className="flex items-center flex-col justify-center h-screen  ">
      <div className='border p-10 flex flex-col gap-5 bg-zinc-700 text-yellow-200 w-[700px] text-2xl'>
      <h2 className='text-center'>پیامهای ارسالی از طرف مدیریت</h2>
        {filterMessage?.map((m) => (
          <div key={m._id} className="flex border gap-5 p-4 ">
            {m.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageUser