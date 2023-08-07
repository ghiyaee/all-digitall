import React from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';
function Like({ product }) {
    const [like, setLike] = useState();
    const [disLike, setDisLike] = useState();
     const handelLike = async (product) => {
       product.like++;
       const fetchData = await axios.post('/api/products/like', { product });
       setLike(fetchData.data.like);
    };
     const handelDisLike = async (product) => {
       product.disLike++;
       const fetchData = await axios.post('/api/products/dislike', { product });
         setDisLike(fetchData.data.disLike);
         console.log(fetchData);
     };
  return (
    <div className="flex justify-around mt-5">
      <div className="flex items-center gap-1 ">
        <span>{product.disLike}</span>
        <AiOutlineDislike
          className="cursor-pointer text-red-500"
          onClick={() => handelDisLike(product)}
        />
      </div>
      <div className="flex gap-1">
        <span>{product.like}</span>
        <AiOutlineLike
          className="cursor-pointer text-green-500"
          onClick={() => handelLike(product)}
        />
      </div>
    </div>
  );
}

export default Like