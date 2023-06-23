import React from 'react';
import Slider from './Slider';
import Prodcuts from './Prodcuts';
import ListProducts from './ListProducts';
function Main() {
  return (
    <div className="  flex flex-col  gap-28 container m-auto ">
      <Slider/>
      <ListProducts/>
      <Prodcuts/>
    </div>
  );
}

export default Main;
