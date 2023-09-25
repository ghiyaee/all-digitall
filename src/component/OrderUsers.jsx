import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'jalali-moment';
function OrderUsers() {
    const [orders, setOrders] = useState([]);
    const handelOrderSend = async (order) => {
      const fetchData = await axios.post('/api/order/send', { order })
      setOrders(fetchData.data)
    };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/order');
      setOrders(res.data);
    };
    fetchData();
  }, []);
  return (
    <div
      className="flex flex-col gap-7 justify-center 
    items-center text-xl font-[yekan] container m-auto
     bg-zinc-700 p-4 text-yellow-200 rounded-lg"
    >
      <h2 className="text-2xl">سفارشات کاربران</h2>

      <div className="overflow-y-auto h-[450px] ">
        <>
          <table className="border-collapse w-full ">
            <thead>
              <tr className="text-red-500">
                <th className="style_table sticky top-0 ">تاریخ سفارش</th>
                <th className="style_table sticky top-0 ">شماره سفارش</th>
                <th className="style_table sticky top-0">نام محصول</th>
                <th className="style_table sticky top-0">نام کاربر</th>
                <th className="style_table sticky top-0">وضعیت</th>
                <th className="style_table sticky top-0">تاریخ ارسال</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((orders) => (
                <tr key={orders._id}>
                  <>
                    <td className="style_table">
                      {moment(orders.dateOrder)
                        .locale('fa')
                        .format('HH:DD YYYY/MM/DD')}
                    </td>
                    <td className="style_table ">{orders._id}</td>
                    <td className="style_table ">
                      <ul>
                        {orders.product_id?.map((i) => (
                          <li key={i.name}>{i.name}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="style_table ">{orders.user_id?.name}</td>
                    <td className="style_table ">
                      {orders.status ? 'ارسال شد' : 'در حال ارسال'}
                    </td>
                    <td
                      className="style_table cursor-pointer"
                      onClick={() => handelOrderSend(orders)}
                    >
                      {orders.dateSend
                        ? moment(orders.dateSend)
                            .locale('fa')
                            .format('HH:D YYYY/MM/DD')
                        : 0}
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
