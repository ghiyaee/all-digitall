import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function ProductEdit() {
  const { state } = useLocation('');
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [countInStock, setCountInStock] = useState();
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [result, setResult] = useState();
  useEffect(() => {
    if (state) {
      setPrice(state.price);
      setCountInStock(state.countInStock);
      setId(state._id);
      setName(state.name);
    }
  }, [state]);
  const handelProductEdit = async (e) => {
    e.preventDefault();
    try {
      const { fetchData } = await axios.post('/api/products/Edit', {
        price,
        countInStock,
        id,
        name,
      });
      setResult(true);
      // navigate('/Dashboard');
    } catch (error) {}
  };
  useEffect(() => {
    setTimeout(() => {
      setResult(false);
    }, 3000);
  }, [result]);
  return (
    <>
      {' '}
      {result ? (
        <div
          className={`flex items-center rounded-lg text-xl p-4
         bg-green-500 w-62 h-24 text-yellow-200 justify-center : ''`}
        >
          محصول ویرایش گردید
        </div>
      ) : (
        ''
      )}
      <div
        className="flex flex-col bg-zinc-700 items-center container m-auto shadow-2xl rounded-lg
       shadow-orange-400 p-10 text-2xl font-[yekan] text-yellow-200 gap-10"
      >
        <h2>ویرایش محصول</h2>
        <img src={state.img} alt="img" className="w-24" />
        <form className="flex gap-5">
          <div>
            <label htmlFor="">نام کالا:</label>
            <input
              value={name}
              type="text"
              required
              className="text-zinc-700 py-5 px-8 rounded-lg outline-none border-b text-center"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">قیمت :</label>
            <input
              value={price}
              type="text"
              required
              className="text-zinc-700 py-5 px-8 rounded-lg outline-none border-b text-center"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">تعداد :</label>
            <input
              value={countInStock}
              type="text"
              required
              className="text-zinc-700 py-5 px-8 rounded-lg outline-none border-b text-center"
              onChange={(e) => setCountInStock(e.target.value)}
            />
          </div>
          <button
            className="text-blue-700  bg-[#ffea00] p-2 rounded-lg"
            onClick={handelProductEdit}
          >
            تایید ویرایش
          </button>
        </form>
      </div>
    </>
  );
}

export default ProductEdit;
