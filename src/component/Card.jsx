import React, { useContext } from 'react';
import { Store } from '../context/Store';
import { Link } from 'react-router-dom';
function Card() {
  const { cart, setCart } = useContext(Store);
  const handelInc = (item) => {
    const newCart = [...cart];
    const index = newCart.findIndex((f) => f.id === item.id);
    if (newCart[index].countInStock > newCart[index].conter)
      newCart[index].conter += 1;
    setCart([...newCart]);
  };
  const handelDec = (item) => {
    const exits = cart.indexOf(item);
    const newItem = cart;
    if (newItem[exits].conter > 0) {
      newItem[exits].conter -= 1;
      setCart([...newItem]);
    } else {
      return;
    }
  };
  const handelDell = (item) => {
    const NewItem = cart.filter((f) => f.id !== item.id);
    setCart([...NewItem]);
  };
  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex gap-[100px] items-center justify-center font-[yekan]">
          <div className="flex flex-col gap-10">
            {cart.map((item) => (
              <div className="flex items-center gap-10 border p-8 font-bold text-xl rounded-lg relative ">
                <div className="w-12  ">
                  <img src={item.img} alt="img" />
                </div>
                <div className="flex gap-5 items-center justify-between w-[400px] ">
                  <div className="absolute left-[20%] -transform translate-x-[50%] top-[-35px]  text-blue-500 text-2xl">
                    موجودی{item.countInStock}
                  </div>
                  <p className="w-40">قیمت : {item.price}</p>
                  <div className="flex gap-4 items-center">
                    <span
                      className="border py-0 px-1 cursor-pointer"
                      onClick={() => handelDec(item)}
                    >
                      -
                    </span>
                    {item.conter}
                    <span
                      className="border py-0 px-1 cursor-pointer "
                      onClick={() => handelInc(item)}
                    >
                      +
                    </span>
                  </div>
                  <button
                    className="bg-red-500 py-2 px-6 rounded-lg text-yellow-50"
                    onClick={() => handelDell(item)}
                  >
                    انصراف
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className=" border p-5 h-3/4 font-[yekan] text-2xl flex flex-col gap-8 items-center">
            <h2>فاکتور خرید</h2>
            <div className="flex flex-col gap-5">
              <p>تعداد :{cart.reduce((a, c) => a + c.conter, 0)} </p>
              <p>
                {' '}
                جمع اقلام:{cart.reduce(
                  (a, c) => a + c.conter * c.price,
                  0
                )}{' '}
              </p>
              <p>
                مالیات ارزش برافزوده به تومان :
                {cart.reduce((a, c) => a + (c.conter * c.price * 9) / 100, 0)}
              </p>
              <p>
                جمع کالا با احتساب مالیات بر ارزش افزوده به تومان :
                {cart.reduce(
                  (a, c) =>
                    a + c.conter * c.price + (c.conter * c.price * 9) / 100,
                  0
                )}
              </p>
              <button className="bg-green-500 p-4 text-white rounded-lg w-full ">
                تایید نهایی
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex  justify-center   text-5xl text-red-500 ">
          سبد خرید شما خالی است .
          <Link to={'/'} className="text-blue-500">
            برگشت
          </Link>
        </div>
      )}
    </div>
  );
}
export default Card;
