import React from 'react'
import { Link } from 'react-router-dom';
const link = [
  {
    id: 1,
    title: 'سبدخرید',
    url: '/',
  },
  {
    id: 2,
    title: '',
    url: '/',
  },
  {
    id: 3,
    title: 'حساب کاربری',
    url: '/account',
  },
  {
    id: 4,
    title: 'داشبورد',
    url: '/dashboard',
  },
];
function Header() {
  return (
    <div className="h-32 flex p-10 justify-between items-center  font-[yekan] ">
      <Link to={'/'} className="text-3xl  text-red-500">
        دیجیتال مارکت
      </Link>
      <div className="flex gap-4 text-zinc-800 border p-2 rounded-lg text-xl">
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