import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Slider() {
  const [slider, setSlider] = useState([]);
  const [color, setColor] = useState('red');
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/slider');
      setSlider(res.data);
    };
    fetchData();
  }, []);
 ; useEffect(() => {
    let timer = setInterval(() => {
      setColor((prev) => {
        return prev === 'red' ? 'yellow' : 'red';
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [])
  return (
    <div className="container m-auto flex flex-col gap-[60px] items-center my-10">
      <div className="flex flex-wrap flex-col md:flex-row justify-center gap-[70px] ">
        {slider.map((link) => (
          <div key={link.id}>
            <button
              className="w-40 h-40 bg-zinc-700 rounded-full flex-col
                    flex items-center justify-center text-black text-2xl
                    font-[yekan]   cursor-pointer relative"
            >
              <span
                className={`border-[8px] border-${color}-500  absolute top-0
               w-40 h-40 rounded-full duration-700 `}
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
