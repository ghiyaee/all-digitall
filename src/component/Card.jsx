import React, { useContext, useState } from 'react';
import { Store } from '../context/Store';
import { Link } from 'react-router-dom';
function Card() {
  const { setCart, state, dispatch } = useContext(Store);
  const { userinfo, cart } = state;
  const [conter, setConter] = useState(cart.cartItem);
  const handelInc = (item) => {
    if (item.countInStock > item.conter) {
      dispatch({ type: 'ADD_ITEM_CONTER', payload: { ...item, conter } });
    } else {
      return;
    }
  };
  const handelDec = (item) => {
    if (item.conter > 1) {
      dispatch({ type: 'DEC_ITEM_CONTER', payload: { ...item, conter } });
    } else {
      return;
    }
  };
  const handelDele = (item) => {
    dispatch({ type: 'DELE_ITEM', payload: { ...item } });
  };
  console.log(cart);
  return (
    <div className="flex justify-center font-[yekan]">
      {cart.cartItem.length > 0 ? (
        <div className="flex flex-wrap gap-[50px]  items-center justify-center  ">
          <div className="flex flex-col gap-10 ">
            {cart.cartItem.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-0 mg-gap-10 border p:0 md:p-8 h-[190px] font-bold text-xl rounded-lg relative  shadow-2xl shadow-orange-400 "
              >
                <div className="w-[120px] ">
                  <img src={item.img} alt="img" />
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-between w-[200px] md:w-[400px] ">
                  <div className="hidden absolute left-[20%] -transform translate-x-[50%] top-[-35px]  text-blue-500 text-2xl">
                    موجودی{item.countInStock}
                  </div>
                  <p className="w-40 text-zinc-600">قیمت : {item.price}</p>
                  <div className="flex gap-4 items-center">
                    <span
                      className="border bg-yellow-50  cursor-pointer w-9 h-9 flex items-center justify-center rounded-full "
                      onClick={() => handelDec(item)}
                    >
                      -
                    </span>
                    <span className="text-black"> {item.conter}</span>
                    <span
                      className="border bg-yellow-50   cursor-pointer w-9 h-9 flex items-center justify-center rounded-full "
                      onClick={() => handelInc(item)}
                    >
                      +
                    </span>
                  </div>
                  <button
                    className="bg-blue-500 py-2 px-6 rounded-lg text-yellow-50  hover:scale-105 hover:rounded-3xl duration-500"
                    onClick={() => handelDele(item)}
                  >
                    انصراف
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className=" border p-8 h-4/4 font-[yekan] text-2xl flex flex-col gap-4 md:gap-10 items-center rounded-lg text-black shadow-2xl shadow-orange-400">
            <h2>فاکتور خرید</h2>
            <div className="flex flex-col gap-5">
              <p>تعداد :{cart.cartItem.reduce((a, c) => a + c.conter, 0)} </p>
              <p>
                جمع اقلام:
                {cart.cartItem.reduce((a, c) => a + c.conter * c.price, 0)}
              </p>
              <p>
                %9 مالیات ارزش برافزوده به تومان :
                {cart.cartItem.reduce(
                  (a, c) => a + (c.conter * c.price * 9) / 100,
                  0
                )}
              </p>
              <p>
                جمع کالا با احتساب مالیات بر ارزش افزوده به تومان :
                {cart.cartItem.reduce(
                  (a, c) =>
                    a + c.conter * c.price + (c.conter * c.price * 9) / 100,
                  0
                )}
              </p>
              <Link to={'/AddressUsers'}>
                <button
                  className="bg-blue-500 p-4 text-white w-full
                  hover:scale-105 hover:rounded-3xl duration-500 "
                >
                  تایید نهایی
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex  justify-center p-10 w-[450px] text-2xl
         text-yellow-50 bg-gradient-to-b from-zinc-800 to-zinc-600
           shadow-lg shadow-orange-200 rounded-lg "
        >
          سبد خرید شما خالی است .
          <Link to={'/'} className="text-yellow-400">
            برگشت
          </Link>
        </div>
      )}
    </div>
  );
}
export default Card;
