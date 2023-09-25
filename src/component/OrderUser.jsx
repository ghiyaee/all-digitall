import React from 'react';
import moment from 'jalali-moment';
import { useState } from 'react';
import { useContext } from 'react';
import { Store } from '../context/Store';
import { useEffect } from 'react';
import axios from 'axios';
function OrderUser() {
  const { state, dispatch } = useContext(Store);
  const { userinfo } = state;
  const [orders, setOrders] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      const order = await axios.post('/api/order/user', { userinfo })
      setOrders(order.data)
    }
    fetchData()
  }, [])
  return (
    <>
      {orders.length > 0 ? (
        <div
          className="flex flex-col gap-7 justify-center 
    items-center text-xl font-[yekan] container m-auto
     bg-zinc-700 p-4 text-yellow-200 rounded-lg"
        >
          <h2 className="text-3xl">سفارشات شما</h2>

          <div className=" ">
            <>
              <table className="border-collapse w-full">
                <thead>
                  <tr className="text-red-500">
                    <th className="style_table sticky top-0">تاریخ سفارش</th>
                    <th className="style_table sticky top-0">شماره سفارش</th>
                    <th className="style_table sticky top-0">نام محصول</th>
                    <th className="style_table sticky top-0">وضعیت</th>
                    <th className="style_table sticky top-0">تاریخ ارسال</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((orders) => (
                    <tr>
                      <>
                        <td className="style_table">
                          {moment(orders.dateOrder)
                            .locale('fa')
                            .format('HH:DD YYYY/MM/DD')}
                        </td>
                        <td className="style_table">{orders._id}</td>
                        <td className="style_table">
                          <ul>
                            {orders.product_id?.map((n) => (
                              <li key={n.name}>{n.name}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="style_table">
                          {orders.status ? 'ارسال شد' : 'در حال ارسال'}
                        </td>
                        <td className="style_table ">
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
      ) : (
        <p className="text-yellow-400">شما هیچ سفارش ثبت شده ای ندارید</p>
      )}
    </>
  );
}

export default OrderUser;
