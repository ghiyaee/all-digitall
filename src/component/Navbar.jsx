import React from 'react';
import { useNavigate } from 'react-router-dom';
const link = [
  { name: 'موبایل', catgory: 'mobile' },
  { name: 'فلش مموری', catgory: 'flash' },
  { name: 'لب تاب', catgory: 'labtab' },
  { name: 'هدفون بیسم', catgory: 'headbi' },
  { name: 'هدفون باسیم', catgory: 'headba' },
];

function Navbar() {
  const navigate = useNavigate();
  const handelProduct = (name) => {
    navigate('/searchProduct', { state: name });
  };
  return (
    <navbar
      className=" h-[100px] relative flex items-center justify-center 
     rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-600 transform translate-y-3 scale-105  "
    >
      <ul className="flex gap-[150px] text-2xl ">
        {link.map((product) => (
          <button onClick={() => handelProduct(product.catgory)}>
            <li className="style_navbar  font-[yekan] duration-700 ">
              {product.name}
            </li>
          </button>
        ))}
      </ul>
      <div className="absolute  -left-6 w-6 h-16 border-b-4  border-l-4 border-red-600 transform -translate-y-[50%] rounded-bl-lg "></div>
      <div className="absolute  -right-6 w-6 h-16 border-b-4 border-r-4 border-red-600 transform -translate-y-[50%] rounded-br-lg "></div>
    </navbar>
  );
}

export default Navbar;
