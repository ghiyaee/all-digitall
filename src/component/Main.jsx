import React from 'react';
import Slider from './Slider';
import ListProducts from './ListProducts';
import Categories from './Categories';
import SpecialOffers from './SpecialOffers';
import { CgScrollV } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Main() {

  const [scroll, setScroll] = useState(false);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <>
      
      {scroll && (
        <CgScrollV
          onClick={scrollUp}
          className=" fixed bottom-10  right-2 text-red-500  text-5xl"
        />
      )}
      <main className="flex flex-col  gap-28 container m-auto ">
        <Navbar />
        <Slider />
        <ListProducts />
        <Categories />
        <SpecialOffers />
      </main>
    </>
  );
}

export default Main;
