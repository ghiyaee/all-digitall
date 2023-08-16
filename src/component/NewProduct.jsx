import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function NewProduct() {
  const [name, setName] = useState();
  const [slug, setSlug] = useState();
  const [img, setImg] = useState();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const [descritp, setDescritp] = useState();
  const [price, setPrice] = useState();
  const [countInStock, setCountInStock] = useState();
  const [rating, setRating] = useState();
  const [numReviews, setNumReviews] = useState();
    const handelProduct = async (e) => {
        e.preventDefault()
        const fetchData = await axios.post('/api/products/newProduct', {
            name, slug, img, brand, category,
            descritp, price, countInStock,
            rating, numReviews
        })
        setName('')
        setSlug('')
        setImg('')
        setBrand('')
        setCategory('')
        setDescritp('')
        setPrice('')
        setCountInStock()
        setRating('')
        setNumReviews('')
  };
  return (
    <div className="contianer m-auto flex justify-center">
      <form
        className="flex flex-col gap-8 items-center shadow-2xl rounded-lg
          bg-gradient-to-b from-zinc-800 to-zinc-600   shadow-orange-400 p-10 text-2xl font-[yekan] "
      >
        <h2 className="text-yellow-50">فرم ثبت محصول</h2>
        <input
          type="text"
          placeholder="نام کالا"
          className="py-3 px-8 rounded-lg outline-none border-b"
          value={name}
          onChange={(e) => setName(e.target.value.toLocaleLowerCase())}
        />
        <input
          type="text"
          placeholder="نشان کالا"
          className="py-3 px-8 rounded-lg outline-none border-b"
          value={slug}
          onChange={(e) => setSlug(e.target.value.toLocaleLowerCase())}
        />
        <input
          type="text"
          placeholder="نام برند"
          className="py-3 px-8 rounded-lg outline-none border-b"
          value={brand}
          onChange={(e) => setBrand(e.target.value.toLocaleLowerCase())}
        />
        <input
          type="text"
          placeholder="نام دسته بندی"
          className="py-3 px-8 rounded-lg outline-none border-b"
          value={category}
          onChange={(e) => setCategory(e.target.value.toLocaleLowerCase())}
        />
        <input
          type="text"
          placeholder="توضیحات"
          className="py-3 px-8 rounded-lg outline-none border-b"
          value={descritp}
          onChange={(e) => setDescritp(e.target.value.toLocaleLowerCase())}
        />
        <input
          type="text"
          placeholder="قیمت محصول"
          className="py-3 px-8 rounded-lg outline-none border-b"
          value={price}
          onChange={(e) => setPrice(e.target.value.toLocaleLowerCase())}
        />
        <input
          type="text"
          placeholder="تعداد محصول"
          className="py-3 px-8 rounded-lg outline-none border-b"
          value={countInStock}
          onChange={(e) => setCountInStock(e.target.value.toLocaleLowerCase())}
        />
        <input
          type="text"
          placeholder="امیتازگرفته شده"
          className="py-3 px-8 rounded-lg outline-none border-b"
          value={rating}
          onChange={(e) => setRating(e.target.value.toLocaleLowerCase())}
        />
        <input
          type="text"
          placeholder="تعدادمشاهده شده"
          className="py-3 px-8 rounded-lg outline-none border-b"
          value={numReviews}
          onChange={(e) => setNumReviews(e.target.value.toLocaleLowerCase())}
        />
        <label htmlFor="" className="text-yellow-100">
          انتخاب تصویر
        </label>
        <input
          type="file"
          className="py-3 px-8 rounded-lg outline-none border-b text-yellow-100"
          accept="png,jpg"
          onChange={(e) => setImg(e.target.value.toLocaleLowerCase())}
        />
        <button className="style-button " onClick={(e) => handelProduct(e)}>
          ورود
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
