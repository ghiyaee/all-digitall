import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function ProductEdit() {
  const { state } = useLocation('');
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [countInStock, setCountInStock] = useState();
  const [img, setImg] = useState();
  console.log(price, countInStock);
  useEffect(() => {
    if (state) {
      setPrice(state.price);
      setCountInStock(state.countInStock);
      setId(state._id)
    }
  }, [state]);
  const handelProductEdit = async (e) => {
    e.preventDefault();
    try {
      const {fetchData} = await axios.post('/api/products/Edit', {
        price,
        countInStock,
        id
      });
      navigate('/Dashboard');
    } catch (error) {}
  };
  return (
    <div
      className="flex flex-col items-center container m-auto shadow-2xl rounded-lg
       shadow-orange-400 p-10 text-2xl font-[yekan]  gap-10"
    >
      <h2>ویرایش محصول</h2>
      <img src={state.img} alt="img" className='w-24'/>
      <form className="flex flex-col gap-5">
        <div>
          <label htmlFor="">قیمت :</label>
          <input
            value={price}
            type="text"
            required
            className="py-5 px-8 rounded-lg outline-none border-b text-center"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">تعداد :</label>
          <input
            value={countInStock}
            type="text"
            required
            className="py-5 px-8 rounded-lg outline-none border-b text-center"
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
  );
}

export default ProductEdit;
