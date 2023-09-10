import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {GiClick} from 'react-icons/gi'
function SearchBar() {
  const navigate = useNavigate()
  const [product, setProduct] = useState('')
  const handelSearch = (e) => {
    e.preventDefault()
    if (product) {
       navigate('/SearchItem', { state: product })
    }
    setProduct('')
  }
    return (
      <div>
        <form className='relative'>
          {/* <div className="relative flex "> */}
            <input
              type="text"
              className=" p-4 w-[385px] md:w-[400px] rounded-lg  outline-none text-xl shadow-md shadow-red-200"
              onChange={(e) => setProduct(e.target.value.toLowerCase())}
              value={product}
              placeholder=" جستجوکنید"
            />
            <button
              onClick={handelSearch}
              className="text-xl text-blue-500 absolute transform -translate-y-[50%] left-0 top-[50%] px-2"
            >
              <GiClick />
            </button>
          {/* </div> */}
        </form>
      </div>
    );
}
export default SearchBar