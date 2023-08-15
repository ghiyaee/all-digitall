import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function ListProducts() {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [currentPage,setCurrentPage]=useState(1)
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
  const recordPage = 8;
  const lastIndex = currentPage * recordPage;
  const fristIndex = lastIndex - recordPage;
  const records = products.slice(fristIndex, lastIndex);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post('/api/products/categorys', {category: 'mobile' });
        setProducts(res.data);
      } catch (error) {
        toast.error('ارتباط با اینترنت قطع شده است');
      }
    };
    fetchData();
  }, []);
  return (
    <div className="style_slider ">
      <div>

      </div>
      {records.map((product) => (
        <div
          key={product._id}
          className={` w-[160px] md:w-96 flex justify-center  items-center  rounded-lg 
                ${move.move} duration-1000 `}
        >
          <div className="w-[280px] h-[200px] md:h-[300px] bg-white p-6 rounded-lg flex justify-center items-center hover:scale-110 duration-700">
            <Link to={`/product/${product.slug}`}>
              <img alt="img" src={product.img} className='max-h-[290px]' />
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
        {'>'}
        <p
          className={` text-xl  text-yellow-500 bg-zinc-800 hover:bg-red-500
           hover:text-white hover:border  duration-500 w-24 h-16 ml-5 flex 
           items-center text-center rounded-lg   ${
             counter === 1 ? 'black' : 'hidden'
           }`}
        >
          <Link to={'/Products'}> مشاهده همه</Link>
        </p>
      </div>
    </div>
  );
}

export default ListProducts;
