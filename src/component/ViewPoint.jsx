import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../context/Store';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import moment from 'jalali-moment';
import LikeComment from "./LikeComment"
function ViewPoint({ product }) {
  const navigate = useNavigate();
  const {
    state,
  } = useContext(Store);
  const {userinfo}=state
  const [newComment, setNewComment] = useState('');
  const [comment, setComment] = useState();
  const [user, setUser] = useState(userinfo[0]._id);

  const handelViewPoint = async (e) => {
    e.preventDefault();
    if (userinfo.length > 0) {
      if (newComment === '') {
         return;
      } else {
       const fetchText = await axios.post('/api/comment/newComment', {
         product,
         newComment,
         user,
       });
       setComment(fetchText.data);
       setNewComment('');
      }
    } else {
      navigate('/SignIn');
    }
  };
  useEffect(() => {
    const fetchComment = async () => {
      const fetchText = await axios.post('/api/comment/search', { product });
      setComment(fetchText.data);
    };
    fetchComment();
  }, [product]);
  return (
    <div className="font-[yekan]">
      <div className="flex flex-col gap-5 ">
        <p className="text-xl">
          خوشحال میشویم نظر خود را در مورد این محصول با دیگران به اشتراک بگذارید
        </p>
        <form className="flex flex-col gap-5">
          <textarea
            cols="30"
            rows="10"
            value={newComment}
            className="border  w-[600px] rounded-lg outline-none text-xl resize-none"
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="نظرخودرااینجابنویسید"
          />
          <button
            className="bg-blue-500 text-white py-2 rounded-lg text-xl w-[110px]"
            onClick={handelViewPoint}
          >
            ارسال نظر
          </button>
        </form>
      </div>
      {comment?.length == 0 ? (
        <div className="text-xl mt-4">هیچ دیدگاهی ثبت نشده</div>
      ) : (
        <div className="flex flex-col gap-5 mt-5">
          <h2 className="text-2xl ">دیدگاه کاربران</h2>
          {comment?.map((comment, ind) => (
            <div
              className="border p-5 text-xl flex flex-col gap-5 rounded-xl"
              key={ind}
            >
              <p className="text-red-500">
                کاربر :
                <span className="text-blue-500">{comment.user_id.name}</span>
              </p>
              <p className="text-justify">{comment.text}</p>
              <div className="flex flex-wrap justify-between items-center">
                {moment((comment.date)).locale('fa').format('HH:D YYYY/MM/DD')}
                <LikeComment comment={comment} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewPoint;

