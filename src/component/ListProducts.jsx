import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
function ListProducts() {
  const [products, setProducts] = useState([]);
  const [move, setMove] = useState({
    move: `transform -translate-x-[26rem]`,
  });
     const handelLeft = () => {
       if (move.move === 'transform translate-x-[35rem]') {
         setMove({ move: 'transform translate-x-64' });
       }
       if (move.move === `transform translate-x-64`) {
         setMove({ move: 'transform -translate-x-[26rem]' });
       }
     };
     const handelRight = () => {
       if (move.move === `transform -translate-x-[26rem]`) {
         setMove({ move: 'transform translate-x-64' });
       }
       if (move.move === `transform translate-x-64`) {
         setMove({ move: 'transform translate-x-[35rem]' });
       }
     };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="style_slider ">
      {products.map((product) => (
        <div
          key={product.id}
          className={`h-64 w-96 flex justify-center  items-center  rounded-lg 
                ${move.move} duration-1000 `}
        >
          <div className="w-[280px] h-[280px] bg-white p-6 rounded-lg flex justify-center">
            <img alt="imag" src={product.img} />
          </div>
        </div>
      ))}
      <div
        onClick={handelRight}
        className={`style_slider_handelRight ${
          move.move === 'transform translate-x-[35rem]' ? 'hidden' : 'block'
        } `}
      >
        {'<'}
      </div>
      <div
        onClick={handelLeft}
        className={`style_slider_handelLeft ${
          move.move === `transform -translate-x-[26rem]` ? 'hidden' : 'block'
        } `}
      >
        {'>'}
      </div>
    </div>
  );
}

export default ListProducts;
