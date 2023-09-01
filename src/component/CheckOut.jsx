import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function CheckOut() {
  const { state } = useLocation()
  const [order,setOrder]=useState()
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post('/api/order', { state})
      setOrder(res.data);
    }
    fetchData()
  }, [])
  console.log(order);
  return (
    <div className='flex justify-center text-2xl font-[yekan]'
    >در حال آماده سازی درگاه پرداخت
    </div>

  )
}

export default CheckOut