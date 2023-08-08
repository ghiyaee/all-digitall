import React from 'react';
import { useNavigate } from 'react-router-dom';
const link = [
  { name: 'MOBILE', catgory: 'mobile' },
  { name: 'FLASH', catgory: 'flash' },
  { name: 'LABTAB', catgory: 'labtab' },
  { name: 'AIRPAD', catgory: 'headbi' },
  { name: 'HEADPHONE', catgory: 'headba' },
];

function Navbar() {
  const navigate = useNavigate();
  const handelProduct = (name) => {
    navigate('/searchProduct', { state: name });
  };
  return (
    <div
      className="h-[100px] border flex items-center justify-center
     rounded-full bg-gradient-to-b from-green-700 to-yellow-200"
    >
      <ul className="flex gap-[180px] text-2xl text-red-500 font-bold  ">
        {link.map((product) => (
          <button onClick={() => handelProduct(product.catgory)}>
            <li className="style_navbar animate-ping duration-700 ">
              {product.name}
            </li>
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
