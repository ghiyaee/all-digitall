import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../context/Store';
const link = [
  {
    id: 1,
    title: 'سبدخرید',
    url: '/Card',
  },
  {
    id: 3,
    title: 'حساب کاربری',
    url: '/',
  },
  {
    id: 4,
    title: 'داشبورد',
    url: '/',
  },
];
function Header() {
  const { cart } = useContext(Store)
  return (
    <div className="h-32 flex p-10 justify-between items-center  font-[yekan] border-b mb-5 sticky top-0 z-50 bg-white ">
      <Link to={'/'} className="text-3xl  text-red-500">
        دیجیتال مارکت
      </Link>
      <div className="flex gap-4 text-zinc-800 border p-2 rounded-lg text-xl">
        {cart.length > 0 ? (
          <span className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
            {cart.reduce((a, c) => a + c.conter, 0)}
          </span>
        ) : (
          ''
        )}
        {link.map((link) => (
          <Link key={link.id} to={link.url} className="">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header