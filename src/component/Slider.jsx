import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Slider() {
  const [moveSlider, setMoveSlider] = useState({
    move: 'transform translate-x-[0rem]',
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
      if (moveSlider.move ==='transform translate-x-[0rem]') {
        setMoveSlider({ move:'transform translate-x-[84rem]' });
      }
      if (moveSlider.move ==='transform translate-x-[84rem]') {
        setMoveSlider({ move:'transform translate-x-[168rem]' });
      }
      if (moveSlider.move ==='transform translate-x-[168rem]') {
        setMoveSlider({ move:'transform translate-x-[252rem]' });
      }
      if (moveSlider.move ==='transform translate-x-[252rem]') {
        setMoveSlider({ move:'transform translate-x-[336rem]' });
      }
      if (moveSlider.move ==='transform translate-x-[336rem]') {
        setMoveSlider({ move:'transform translate-x-[0rem]' });
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [moveSlider.move]);


  return (
    <div className=" md:inline-flex ">
      <div className=" flex flex-1 overflow-hidden gap-5 md:gap-[65px]">
        {slider.map((product) => (
          <div
            key={product.id}
            className={` flex gap-[50px]  md:gap-[200px] items-center bg-gradient-to-b 
             from-green-700 to-yellow-200 w-[100%] md:w-full py-2
             md:p-6 mx-0 md:rounded-xl ${moveSlider.move}    duration-[2000ms]`}
          >
            <h1 className="text-zinc-800 text-xl md:text-6xl flex-1 w-[300px] md:w-[700px] font-[sogand] text-center md:text-center ">
              {product.desc}
            </h1>
            <div className="flex flex-1 justify-center w-[400px] md:w-[700px] ">
              <img src={product.img} alt="images" className="imgTop" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

//       setMoveSlider({ move1: 'transform translate-x-[30rem]' });
// let transformCN = useMemo(() => {
//   return moveSlider ? moveSlider.move : moveSlider.move1;
// }, [moveSlider]);
// move1: 'transform translate-x-[0rem]',


  //     }
  //     if (moveSlider.move1 === 'transform translate-x-[84rem]') {
  //       setMoveSlider({ 1: 'transform translate-x-[168rem]' });
  //     }
  //     if (moveSlider.move1 === 'transform translate-x-[168rem]') {
  //       setMoveSlider({ move1: 'transform translate-x-[252rem]' });
  //     }
  //     if (moveSlider.move1 === 'transform translate-x-[252rem]') {
  //       setMoveSlider({ move1: 'transform translate-x-[336rem]' });
  //     }
  //     if (moveSlider.move1 === 'transform translate-x-[336rem]') {
  //       setMoveSlider({ move1: 'transform translate-x-[0rem]' });
  //     }
  //   }, 5000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [moveSlider.move1]);