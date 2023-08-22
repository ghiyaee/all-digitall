import React from 'react'
import { useContext } from 'react'
import { Store } from '../context/Store'
function MessageUser() {
    const { state } = useContext(Store)
    const { message, userinfo } = state;
    const filterMessage = message.filter((f) => f.user_id._id === userinfo[0]?._id);
  return (
    <div className="flex items-center flex-col justify-center h-screen  ">
      <div className="shadow shadow-yellow-100 p-10 flex flex-col gap-5 bg-zinc-700 text-yellow-200 w-[700px] text-2xl">
        <h2 className="text-center">پیامهای ارسالی از طرف مدیریت</h2>
        {filterMessage.map((m) => (
          <div
            key={m._id}
            className="flex justify-between items-center mt-5 gap-[0px] border p-5 "
          >
            <p>{m.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageUser