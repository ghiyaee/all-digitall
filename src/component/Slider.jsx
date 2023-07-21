import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
function Slider() {
 const [moveSlider, setMoveSlider] = useState({
   move: 'transform translate-x-[0rem]',
   move1:'bg-yellow-500'
 });
     const [slider, setSlider] = useState([]);
     useEffect(() => {
       const fetchData = async () => {
         const res = await axios.get('/api/slider');
         setSlider(res.data);
       };
       fetchData();
     }, []);
     useEffect(() => {
       const timer = setInterval(() => {
         if (moveSlider.move === 'transform translate-x-[0rem]') {
           setMoveSlider({ move: 'transform translate-x-[100rem]' });
         }
         if (moveSlider.move === 'transform translate-x-[100rem]') {
           setMoveSlider({ move: 'transform translate-x-[200rem]' });
         }
         if (moveSlider.move === 'transform translate-x-[200rem]') {
           setMoveSlider({ move: 'transform translate-x-[300rem]' });
         }
         if (moveSlider.move === 'transform translate-x-[300rem]') {
           setMoveSlider({ move: 'transform translate-x-[400rem]' });
         }
          if (moveSlider.move === 'transform translate-x-[400rem]') {
            setMoveSlider({ move: 'transform translate-x-[0rem]' });
          }
       }, 5000);
       return () => {
         clearInterval(timer);
       };
     }, [moveSlider.move]);
  return (
    <div className=" flex flex-wrap items-center gap-[100px] text-center">
      <div className="flex flex-1 overflow-hidden gap-[65px]">
        {slider.map((product) => (
          <div key={product.id}
            className={` flex gap-[200px] items-center bg-gradient-to-b 
             from-green-700 to-yellow-200 w-full p-10 rounded-xl  ${moveSlider.move} duration-1000`}
          >
            <h1 className="text-zinc-800 text-6xl flex-1 w-[700px] font-[sogand] ">
              {product.desc}
            </h1>
            <div className="flex flex-1 justify-center w-[700px] ">
              <img src={product.img} alt="images" className="imgTop" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider