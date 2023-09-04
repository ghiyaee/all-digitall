import { useContext, useEffect, useState } from 'react';
import { Store } from '../context/Store';
import { TiTickOutline } from 'react-icons/ti';
import moment from 'jalali-moment';
function MessageUser() {
  const { state, dispatch } = useContext(Store);
  const { message, userinfo } = state;
  const [sync, setSync] = useState(false);
  const [moveSlider, setMoveSlider] = useState({
    move: 'transform translate-x-[1000px]',
  });
  const filterMessage = message.filter(
    (f) => f.user_id._id === userinfo[0]?._id
  );
  useEffect(() => {
    setMoveSlider('transform translate-x-[0px]');
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setSync(true);
    }, 1800);
  }, []);
  return (
    <div className="flex items-center flex-col max-h-screen overflow-y-auto">
      <div className=" p-10 flex flex-col gap-5 bg-zinc-700 text-yellow-200  text-2xl ">
        {filterMessage.length === 0 ? (
          <h2 className="text-center">شما پیامی ندارید</h2>
        ) : (
          <>
            <h2 className="text-center">پیامهای ارسالی از طرف مدیریت</h2>
            {filterMessage.map((m) => (
              <div
                key={m._id}
                className={`flex justify-between items-center ${moveSlider.move} duration-1000 rounded-lg mt-5 gap-[0px] shadow shadow-yellow-100 p-5 `}
              >
                <div className="flex flex-col gap-5 ">
                  <p className=" ">{m.message}</p>
                  <div className="flex items-center gap-2">
                    <TiTickOutline
                      className={`text-green-500 text-3xl ${
                        sync ? 'block' : 'hidden'
                      } duration-[2000ms] `}
                    />
                    {moment(m.data).locale('fa').format('HH:D YYYY/MM/DD')}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default MessageUser;
