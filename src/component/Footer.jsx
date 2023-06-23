import React from 'react'
import { Link } from 'react-router-dom';
const link = [
  {
    id: 1,
    title: 'درباره ما',
    url: '/about',
  },
  {
    id: 2,
    title: 'تماس با ما',
    url: '/contactUs',
  },
];
function Footer() {
  return (
    <div className="flex justify-around h-32 items-center ">
      <div className="text-white text-3xl flex gap-10">
        {link.map((link) => (
          <Link key={link.id} to={'/'}>
            {link.title}
          </Link>
        ))}
        &copy;2023
      </div>
      <div className="flex gap-6 w-10">
        <img
          src={'/img/face.png'}
          alt={'facebook'}
       
          className="cursor-pointer opacity-75"
        />
        <img
          src={'/img/insta.svg'}
          alt={'facebook'}
      
          className="cursor-pointer opacity-75"
        />
        <img
          src={'/img/Tele.webp'}
          alt={'facebook'}
        
          className="cursor-pointer opacity-75"
        />
        <img
          src={'/img/whats.webp'}
          alt={'facebook'}
          className="cursor-pointer opacity-75"
        />
      </div>
    </div>
  );
}

export default Footer