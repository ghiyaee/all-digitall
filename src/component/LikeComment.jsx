import React, { useEffect } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';
function LikeComment({ comment }) {
  console.log(comment.like);
  const [like, setLike] = useState();
  const [disLike, setDisLike] = useState();
  const handelLike = async (comment) => {
    comment.like++;
    const fetchData = await axios.post('/api/comment/like', { comment });
    console.log(fetchData.data.like);
    setLike(fetchData.data.like);
  };
  const handelDisLike = async (comment) => {
    comment.disLike++;
    const fetchData = await axios.post('/api/comment/dislike', { comment });
    setDisLike(fetchData.data.disLike);
  };

  return (
    <div className="flex justify-around items-center  gap-5">
      <p>نظردیگران در مورد دیدگاه شما</p>
      <div className="flex items-center gap-1">
        <span>{comment.disLike}</span>
        <AiOutlineDislike
          className="cursor-pointer text-red-500"
          onClick={() => handelDisLike(comment)}
        />
      </div>
      <div className="flex items-center gap-1 ">
        <span>{comment.like}</span>
        <AiOutlineLike
          className="cursor-pointer text-green-500"
          onClick={() => handelLike(comment)}
        />
      </div>
    </div>
  );
}

export default LikeComment;
