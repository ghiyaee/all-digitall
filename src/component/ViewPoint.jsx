import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../context/Store';
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
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
  const handelLike = () => {
    // if (!likeComment) {
    //   setLikeComment(likeComment + 1);
    // }
    // if (likeComment) {
    //   setLikeComment(likeComment - 1);
    // }
  };
  const handeDislLike = () => {
    // if (!dislikeComment) {
    //   setDisLikeComment(dislikeComment + 1);
    // }
    // if (dislikeComment) {
    //   setDisLikeComment(dislikeComment - 1);
    // }
  };
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
  console.log(comment);
  return (
    <div className="font-[yekan]">
      <div className="flex flex-col gap-5 ">
        <p className="text-xl">
          خوشحال میشویم نظر خود را در مورد این محصول با دیگران در باکس زیر به
          اشتراک بگذارید
        </p>
        <form className="flex flex-col gap-5">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={newComment}
            className="border w-[600px] rounded-lg outline-none text-xl"
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg text-xl w-24"
            onClick={handelViewPoint}
          >
            ارسال
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <h2 className="text-2xl ">دیدگاه کاربران</h2>

        {comment?.map((comment, ind) => (
          <div
            className="border p-5 text-xl flex flex-col gap-5 rounded-xl"
            key={ind}
          >
            <p className="text-red-500">
              کاربر :{' '}
              <span className="text-blue-500">{comment.user_id.name}</span>
            </p>
            <p className="text-justify">{comment.text}</p>
            <div className="flex justify-between items-center">
              <Moment format='HH:D YYYY/DD/MM'>
                {new Date(comment.date)}
              </Moment>
              <LikeComment product={comment.product_id}/>
              {/* <div className="flex gap-5 items-center">
                <span>{comment.disLike}</span>
                <AiOutlineDislike
                  className="cursor-pointer text-red-500"
                  onClick={() => handeDislLike()}
                />
                <span>{comment.like}</span>
                <AiOutlineLike
                  className="cursor-pointer text-green-500"
                  onClick={() => handelLike()}
                />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewPoint;

