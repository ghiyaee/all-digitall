import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../context/Store';
import { useNavigate } from 'react-router-dom';
function ViewPoint({ product }) {
  const navigate = useNavigate();
  const { userinfo } = useContext(Store);
  const [text, setText] = useState();
  const [comment, setComment] = useState('');
  const handelViewPoint = async (e) => {
    if (userinfo.length > 0) {
      e.preventDefault();
      const fetchText = await axios.post('/api/products/comment', {
        product,
        text,
      });
      setComment((prev) => {
        return {
          ...prev,
          comment: [...prev.comment, { ...fetchText.data }],
        };
      });
      setText('');
    } else {
      navigate('/SignIn');
    }
  };

  useEffect(() => {
    setComment(product);
  }, [product]);
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
            value={text}
            className="border w-[600px] rounded-lg outline-none "
            onChange={(e) => setText(e.target.value)}
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
        {product.comment?.map((t) => (
          <div className="border p-5 text-xl " key={t.text}>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewPoint;

{
  /* {newText?.map((t) => (
          <div className="border p-5 text-xl" key={t._id}>
            {t.comment.map((t) => (
              <div className="border p-5 text-xl flex m-4">{t}</div>
            ))}
          </div>
        ))} */
}
