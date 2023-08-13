import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { Store } from '../context/Store';
function Comments() {
  const { state } = useContext(Store)
  const {userinfo}=state
  const [comment, setComment] = useState([])
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(userinfo[0]._id);
  const handelDeleteProduct = async (id) => {
    const fetchData = await axios.post('/api/comment/del', { id })
    setComment(fetchData.data)
  }
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get('/api/comment/allComments');
         setComment(res.data);
        } catch (error) {
          toast.error('ارتباط با سرور قطع شده است');
        }
      };
      fetchData()
      setLoading(false)
    }, [comment]);
  return (
    <>
      {loading && (
        <p className="flex justify-center items-center text-2xl font-[yekan] ">
          لطفا صبر کنید...
        </p>
      )}

      <div className=" flex flex-col gap-6 font-[yekan] p-10">
        <h2 className="text-black text-center text-3xl font-bold mt-5">
          ویرایش دیدگاه ها
        </h2>
        {comment.length > 0 ? (
          <div>
            {comment?.map((comment) => (
              <div
                className=" p-10 rounded-lg text-black shadow-xl shadow-orange-200 "
                key={comment._id}
              >
                <div className="text-xl font-bold flex flex-col  gap-5 w-full">
                  <div className="flex  gap-5">
                    <p className="">کاربر:</p>
                    <span>
                      <p>{comment.user_id.name}</p>
                    </span>
                  </div>
                  <p className=" w-[100%] "> {comment.text}</p>
                  <button
                    onClick={() => handelDeleteProduct(comment._id)}
                    className="text-white  bg-red-500 py-2  
                      w-[100px] rounded-lg"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center mt-[100px] text-2xl text-red-500">
            هیچ دیدگاهی ثبت نشده است
          </div>
        )}
      </div>
    </>
  );
}

export default Comments