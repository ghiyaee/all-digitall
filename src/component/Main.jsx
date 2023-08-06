import React from 'react';
import Slider from './Slider';
import ListProducts from './ListProducts';
import Categories from './Categories';
import SpecialOffers from './SpecialOffers';
function Main() {
  return (
    <div className="  flex flex-col  gap-28 container m-auto ">
      <Slider />
      <ListProducts />
      <Categories />
      <SpecialOffers />
    </div>
  );
}

export default Main;
