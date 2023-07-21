import bcrypt from 'bcryptjs'
const data = {
  user: [
    {
      name: 'manoochehr',
      email: 'ghiyaee47@gmail.com',
      password: 12345678,
      isAdmin: false,
    },
    {
      name: 'admin',
      email: 'admin@gmail.com',
      password:12345678,
      isAdmin: true,
    },
  ],
  products: [
    {
      // _id: 1,
      name: 'apple14',
      slug: 'apple14',
      category: 'mobile',
      img: '/img/app14.png',
      price: 55000000,
      countInStock: 3,
      brand: 'apple',
      rating: 4.5,
      numReviews: 5,
      description: 'hight quality',
    },
    {
      // _id: 2,
      name: 'apple14p',
      slug: 'apple14p',
      category: 'mobile',
      img: '/img/app14b.png',
      price: 55000000,
      countInStock: 2,
      brand: 'apple',
      rating: 4.0,
      numReviews: 5,
      description: 'hight quality',
    },
    {
      // _id: 3,
      name: 'motorolaz',
      slug: 'motorolaz',
      category: 'mobile',
      img: '/img/motorz.png',
      price: 10000000,
      countInStock: 5,
      brand: 'motorola',
      rating: 5.0,
      numReviews: 5,
      description: 'hight quality',
    },
    {
      // _id: 4,
      name: 'motorola1',
      slug: 'motorolaz1',
      category: 'mobile',
      img: '/img/motorzb.png',
      price: 11000000,
      countInStock: 4,
      brand: 'motorola',
      rating: 3.5,
      numReviews: 5,
      description: 'hight quality',
    },
    {
      // _id: 5,
      name: 'pixel',
      slug: 'pixel',
      category: 'mobile',
      img: '/img/pixel7.png',
      price: 15000000,
      countInStock: 2,
      brand: 'pixel',
      rating: 3.0,
      numReviews: 5,
      description: 'hight quality',
    },
    {
      // _id: 6,
      name: 'pixelp',
      slug: 'pixelp',
      category: 'mobile',
      img: '/img/pixel7b.png',
      price: 17000000,
      countInStock: 3,
      brand: 'pixel',
      rating: 5.5,
      numReviews: 5,
      description: 'hight quality',
    },
    {
      // _id: 7,
      name: 'samsungf',
      slug: 'samsungf',
      category: 'mobile',
      img: '/img/samflip.png',
      price: 18000000,
      countInStock: 4,
      brand: 'samsung',
      rating: 2.5,
      numReviews: 5,
      description: 'hight quality',
    },
    {
      // _id: 8,
      name: 'samsungp',
      slug: 'samsungp',
      category: 'mobile',
      img: '/img/samflipb.png',
      price: 22000000,
      countInStock: 2,
      brand: 'samsung',
      rating: 4.5,
      numReviews: 5,
      description: 'hight quality',
    },
  ],
};

export default data
