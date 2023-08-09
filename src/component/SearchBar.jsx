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
        <form className=" ">
          <div className="relative">
            <input
              type="text"
              className=" p-3 w-[400px] rounded-lg  outline-none text-2xl shadow-md shadow-red-200"
              onChange={(e) => setProduct(e.target.value.toLowerCase())}
              value={product}
              placeholder=" جستجوکنید"
            />
            <button
              onClick={handelSearch}
              className="text-2xl text-blue-500 absolute transform -translate-y-[50%] left-0 top-[50%] p-4"
            >
              <GiClick />
            </button>
          </div>
        </form>
      </div>
    );
}
export default SearchBar