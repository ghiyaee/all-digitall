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
    <footer className="flex flex-col md:flex-row  justify-around  h-40 items-center border-t mt-5 bg-gradient-to-b from-zinc-800 to-zinc-600 ">
      <div className="flex flex-wrap items-center gap-10">
        <ul className="flex flex-wrap justify-center gap-[30px] text-2xl ">
          {link.map((product) => (
            <li className="style_navbar  font-[yekan] duration-700 " key={product.title}>
              {product.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center gap-3 w-10">
        <p className='text-yellow-400 text-2xl'>&copy;1402</p>
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
    </footer>
  );
}

export default Footer