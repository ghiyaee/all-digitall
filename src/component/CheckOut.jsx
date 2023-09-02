import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Moment from 'react-moment';
function CheckOut() {
  const { state } = useLocation();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post('/api/order', { state });
      setOrder(res.data);
    };
    fetchData();
  }, []);
  console.log(order);
  return (
    <div
      className="flex flex-col gap-7 justify-center 
    items-center text-2xl font-[yekan] container m-auto
     bg-zinc-700 p-4 text-yellow-200 rounded-lg"
    >
      <h2 className="text-center">
        فاکتور خرید
        <hr className=" border-b border-yellow-200 mt-2 w-[500px]" />
      </h2>
      <div className="flex gap-5 flex-col items-center">
        <div>کد شفارش :{order._id}</div>
        <div>
          تاریخ سفارش &nbsp;
          <Moment format="HH:D YYYY/DD/MM">{new Date(order.date)}</Moment>
        </div>
      </div>
      <div className="flex gap-5 flex-col items-center">
        <div>نام محصول :{order.product_id?.name}</div>
        <div>تعداد :{order.numOrder}</div>
      </div>
      <div className="flex gap-5 flex-col items-center">
        <div> جمع فاکتور : {order.total}</div>
        <div>
          آدرس :<span>{order.address_id?.province}&nbsp;</span>
          <span>{order.address_id?.city}&nbsp;</span>
          <span>{order.address_id?.street}&nbsp;</span>
        </div>
      </div>
      <button className="bg-red-500 p-3 rounded-lg">درگاه پرداخت</button>
    </div>
  );
}

export default CheckOut;
