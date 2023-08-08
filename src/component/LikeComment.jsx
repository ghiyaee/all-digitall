import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';
function LikeComment({ product }) {
  console.log(product);
  const [like, setLike] = useState();
  const [disLike, setDisLike] = useState();
  const handelLike = async (product) => {
    product.likeComment++;
    const fetchData = await axios.post('/api/products/likeComment', { product });
    setLike(fetchData.data.likeComment);
  };
  const handelDisLike = async (product) => {
    product.disLikeComment++;
    const fetchData = await axios.post('/api/products/dislikeComment', { product });
    setDisLike(fetchData.data.disLikeComment);
  };
  return (
    <div className="flex justify-around mt-5 gap-5">
      <div className="flex items-center gap-1 ">
        <span>{product.likeComment}</span>
        <AiOutlineDislike
          className="cursor-pointer text-red-500"
          onClick={() => handelLike(product)}
        />
      </div>
      <div className="flex gap-1">
        <span>{product.disLikeComment}</span>
        <AiOutlineLike
          className="cursor-pointer text-green-500"
          onClick={() => handelDisLike(product)}
        />
      </div>
    </div>
  );
}

export default LikeComment;
