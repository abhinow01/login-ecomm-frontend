'use client'
import React from 'react'
const Navbar = () => {
  return (
    <>
    <div className='h-16 bg-white flex items-center justify-around'>
      <div className='text-lg text-bold'><h1>ECOMMERCE</h1></div>
   <div className='flex gap-8 px-4'>
    <div>Categories</div>
     <div>Sale</div>
     <div>Trending</div>
     <div>New stock</div>
     <div>Trending</div>
   </div>
   <div className='flex gap-8 px-4'>
    <div>icon1</div>
    <div>icon1</div>
   </div>
    </div>
    <div className='bg-gray-200 h-6 flex justify-center items-center'>
      <h6 className='text-xs p-2'>Get 10% off on business signup </h6>
    </div>
    </>
  )
}

export default Navbar