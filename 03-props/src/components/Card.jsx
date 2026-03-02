import React from 'react'

const Card = (props) => {
  console.log(props.user, props.age);
  
  return (
    <div className='parent'>
    <div className="card">
      <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>Simran Bali</h1>
      <p>Focused on fundamentals, driven by long-term vision.</p>
      <button>View Profile</button>
    </div>
    </div>
  )
}

export default Card

 