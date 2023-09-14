import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
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
  const [result, setResult] = useState();
  const handelProduct = async (e) => {
    e.preventDefault();
       try {
      const fetchData = await axios.post('/api/products/newProduct', {
        name,
        slug,
        img,
        brand,
        category,
        descritp,
        price,
        countInStock,
        rating,
        numReviews,
      });
      setResult(fetchData.data.msg);
      setName('');
      setSlug('');
      setImg('');
      setBrand('');
      setCategory('');
      setDescritp('');
      setPrice('');
      setCountInStock();
      setRating('');
      setNumReviews('');
    } catch (error) {
         setResult(error.response.data.msg);
    }
      
  };
  const convertToBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.onerror = (error) => {
      console.log('error', error);
    };
  };
  useEffect(() => {
    setTimeout(() => {
      setResult(false);
    }, 4000);
  }, [result]);
  return (
    <>
      {result ? (
        <div
          className={`flex items-center rounded-lg text-xl p-4
          ${result == 'ثبت محصول با موفقیت انجام شد' ? 'bg-green-500 w-62 h-24 text-yellow-200 justify-center' :
         'bg-red-500 text-yellow-200 justify-center' }
           `}
        >
          {result}
        </div>
      ) : (
        <div className="contianer m-auto flex flex-col gap-5  items-center">
          <h2 className="text-black text-2xl text-yellow-400">فرم ثبت محصول</h2>
          <form
            className="flex gap-8 items-center shadow rounded-lg
          bg-gradient-to-b from-zinc-800 to-zinc-600   shadow-orange-400 p-5 text-2xl font-[yekan] "
          >
            <div className="flex flex-col gap-5">
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
                onChange={(e) =>
                  setCategory(e.target.value.toLocaleLowerCase())
                }
              />
              <input
                type="text"
                placeholder="قیمت محصول"
                className="py-3 px-8 rounded-lg outline-none border-b"
                value={price}
                onChange={(e) => setPrice(e.target.value.toLocaleLowerCase())}
              />
            </div>
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="تعداد محصول"
                className="py-3 px-8 rounded-lg outline-none border-b"
                value={countInStock}
                onChange={(e) =>
                  setCountInStock(e.target.value.toLocaleLowerCase())
                }
              />
              <input
                type="text"
                placeholder="توضیحات"
                className="py-3 px-8 rounded-lg outline-none border-b"
                value={descritp}
                onChange={(e) =>
                  setDescritp(e.target.value.toLocaleLowerCase())
                }
              />
              <input
                type="text"
                placeholder="امیتازگرفته شده"
                className="py-3 px-8 rounded-lg outline-none border-b"
                value={rating}
                onChange={(e) => setRating(e.target.value.toLocaleLowerCase())}
              />
              <div className="flex items-center border bg-yellow-100  rounded-lg">
                انتخاب تصویر
                <input
                  type="file"
                  className="py-3 px-8 outline-none"
                  accept="png,jpg"
                  onChange={(e) => convertToBase64(e)}
                />
                {img == '' || img == null ? (
                  ''
                ) : (
                  <img src={img} alt="img" className="w-20 h-20" />
                )}
              </div>
              <button
                className="style-button "
                onClick={(e) => handelProduct(e)}
              >
                ارسال و ثبت
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default NewProduct;
