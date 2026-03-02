import React from 'react'

const Card = (props) => {
  console.log(props.user, props.age);
  
  return (
    <div className='parent'>
    <div className="card">
      <img src={props.img} alt="User" />
      <h1>{props.user}, {props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    </div>
  )
}

export default Card

