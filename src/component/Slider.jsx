import React from 'react';
import axios from 'axios';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';

function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/slider');
      setSlider(res.data);
    };
    fetchData();
  }, []);


  return (
    <div className="container m-auto flex flex-col gap-[60px] items-center my-10">
      <div className="flex flex-wrap flex-col md:flex-row justify-center gap-[70px] ">
        {slider.map((link) => (
          <div key={link.name}>
            <button
              className="w-40 h-40 bg-zinc-700 rounded-full flex-col
                    flex items-center justify-center text-black text-2xl
                    font-[yekan] animate-bounce  cursor-pointer relative"
            >
              <span
                className="border-[8px] border-red-500  absolute top-0
               w-40 h-40 rounded-full animate-ping "
              ></span>
              <img src={link.img} alt="img" className="imgw " />
            </button>
            <p className="text-center text-lg font-[yekan] "> {link.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
