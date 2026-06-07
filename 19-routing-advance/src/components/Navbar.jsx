import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-cyan-800 text-2xl p-5'>
      <div className='flex justify-between items-center'>
      <h2 className='font-semibold text-3xl'>Sheriyans</h2>
      <div className='flex gap-4 hover:underline'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar
