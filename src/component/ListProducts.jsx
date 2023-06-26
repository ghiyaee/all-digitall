import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function ListProducts() {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [move, setMove] = useState({
    move: `transform -translate-x-[26rem]`,
  });
  const handelLeft = () => {
    if (move.move === 'transform translate-x-[35rem]') {
      setMove({ move: 'transform translate-x-64' });
         setCounter((prve) => prve - 1);
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
      setCounter(prve=> prve +1)
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
          <div className="w-[280px] h-[300px] bg-white p-6 rounded-lg flex justify-center">
            <Link to={`/product/${product.slug}`}>
              <img alt="imag" src={product.img} />
            </Link>
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
        className={`style_slider_handelLeft flex items-center ${
          move.move === `transform -translate-x-[26rem]` ? 'hidden' : 'block'
        } `}
      >
        <p
          className={`text-xl p-2 text-red-500 bg-white hover:bg-red-500
           hover:text-white hover:border  duration-1000 w-24 h-24 flex 
           items-center text-center rounded-full  ${
             counter === 1 ? 'black' : 'hidden'
           }`}
        >
          <Link to={'/Products'}> مشاهده همه</Link>
        </p>
        {'>'}
      </div>
    </div>
  );
}

export default ListProducts;
