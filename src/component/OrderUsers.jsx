import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'jalali-moment';
function OrderUsers() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/order');
      setOrders(res.data);
    };
    fetchData();
  }, []);
  console.log(orders);
  return (
    <div
      className="flex flex-col gap-7 justify-center 
    items-center text-2xl font-[yekan] container m-auto
     bg-zinc-700 p-4 text-yellow-200 rounded-lg"
    >
      <h2 className="text-3xl">سفارشات کاربران</h2>

      <div className=" ">
        <>
          <table className="border-collapse w-full">
            <thead>
              <tr className="text-red-500">
                <th className="style_table">تاریخ سفارش</th>
                <th className="style_table">شماره سفارش</th>
                <th className="style_table">نام محصول</th>
                <th className="style_table">نام کاربر</th>
                <th className="style_table">وضعیت</th>
                <th className="style_table">تاریخ ارسال</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((orders) => (
                <tr>
                  <>
                    <td className="style_table">
                      {moment(orders.dateOrder)
                        .locale('fa')
                        .format('HH:D YYYY/MM/DD')}
                    </td>
                    <td className="style_table">{orders._id}</td>
                    <td className="style_table">{orders.product_id?.name}</td>
                    <td className="style_table">{orders.user_id?.name}</td>
                    <td className="style_table">
                      {orders.status ? 'ارسال شد' : 'در حال ارسال'}
                    </td>
                    <td className="style_table">
                      {orders.dateSend ?  moment(orders.dateSend)
                        .locale('fa')
                        .format('HH:D YYYY/MM/DD'):0}
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
}

export default OrderUsers;
