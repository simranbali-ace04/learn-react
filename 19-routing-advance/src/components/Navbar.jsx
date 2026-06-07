import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-cyan-800 text-2xl p-5'>
      <div className='flex justify-between items-center'>
      <h2 className='font-semibold text-3xl'>Sheriyans</h2>
      <div className='flex gap-4 hover:underline'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/product">Product</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar
