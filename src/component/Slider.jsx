import React from 'react';
import axios from 'axios';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';

function Slider() {
  const [moveSlider, setMoveSlider] = useState(0);
  const [slider, setSlider] = useState([]);
  let maxSlides = useMemo(() => slider.length - 1, [slider]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/slider');
      setSlider(res.data);
    };
    fetchData();
  }, []);
  let trans = useMemo(() => { return moveSlider * 84}, [moveSlider] )

  useEffect(() => {
    const timer = setInterval(() => {
      setMoveSlider((prev) => (prev === maxSlides ? 0 : prev + 1));
       
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [maxSlides]);

  return (
    
      <div className=" flex  overflow-x-hidden gap-[65px] ">
        {slider.map((product) => (
          <div
            key={product.id}
            className={` flex gap-[200px]   items-center bg-gradient-to-b 
             from-green-700 to-yellow-200  w-full 
              p-6 mx-0  transform translate-x-[${trans}rem] duration-[2000ms]`}
          >
            <h1
              className="text-zinc-800  text-6xl   
            w-[700px] font-[sogand] text-center "
            >
              {product.desc}
            </h1>
            <div className="flex  justify-center w-[700px] ">
              <img src={product.img} alt="images" className="imgTop" />
            </div>
          </div>
        ))}
      </div>
   );
}

export default Slider;

