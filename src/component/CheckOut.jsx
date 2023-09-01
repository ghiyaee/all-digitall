import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function CheckOut() {
  const { state } = useLocation()
 
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post('/api/order', { state})
      console.log(res.data);
    }
    fetchData()
  },[])
  return (
    <div className='flex justify-center text-2xl font-[yekan]'
    >در حال آماده سازی درگاه پرداخت
    </div>

  )
}

export default CheckOut