import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div >
      <h1>Product Page</h1>
      {/* Not so much preferred method of nested routes*/}
      <div className='flex justify-center gap-6 text-2xl p-5 font-medium hover:underline'>
      <Link to='/product/men'>Men</Link>
      <Link to='/product/women'>Women</Link>
      </div>
    </div>
  )
}

export default Product
