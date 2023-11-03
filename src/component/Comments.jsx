import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CgSearchLoading } from 'react-icons/cg';
function Comments() {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);

  const handelDeleteComment = async (id) => {
    const fetchData = await axios.post('/api/comment/del', { id });
    setComment(fetchData.data);
  };
  const handelConfirmationComment = async (id) => {
    const fetchData = await axios.post('/api/comment/confirmation', { id });
    setComment(fetchData.data);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/comment/allComments');
        setComment(res.data);
        setLoading(false);
      } catch (error) {
        toast.error('ارتباط با سرور قطع شده است');
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <p className="flex justify-center items-center text-xl font-[yekan] text-yellow-400">
            لطفا صبرکنید...
            <CgSearchLoading />
          </p>
        </>
      ) : (
        <div>
          <h2 className="text-center text-xl font-bold mt-5 text-yellow-400">
            ویرایش دیدگاه ها
          </h2>
          {comment.length > 0 ? (
            <div className=" flex flex-col gap-6 font-[yekan] p-10 max-h-screen  overflow-y-auto">
              {comment?.map((comment) => (
                <div
                  className=" p-5 rounded-lg bg-zinc-700 text-yellow-100 shadow shadow-orange-200 "
                  key={comment._id}
                >
                  <div className="text-xl font-bold flex flex-col  gap-5 w-full">
                    <div className="flex  gap-5">
                      <span className="flex gap-5 items-center">
                        <p className="text-yellow-400">
                          نظرکاربر :{comment.user_id.name}
                        </p>
                        <p className="text-yellow-400">{}</p>
                        <p className="text-yellow-400">
                          {comment.product_id.name}
                        </p>
                        <img
                          src={comment.product_id.img}
                          alt=""
                          className="w-16"
                        />
                      </span>
                    </div>
                    <p className=" w-[100%] "> {comment.text}</p>
                    <div className="flex gap-5">
                      <button
                        onClick={() => handelDeleteComment(comment._id)}
                        className="text-white  bg-red-500 py-1 
                      w-[100px] rounded-lg"
                      >
                        حذف
                      </button>
                      <button
                        onClick={() => handelConfirmationComment(comment._id)}
                        className="text-white  bg-green-500 py-1 
                         w-[100px] rounded-lg"
                      >
                        {comment.show_comment ? 'تاییدشد' : 'منتظرتایید'}
                      </button>
                    </div>
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
      )}
    </>
  );
}
export default Comments;
