import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  
  return (
    <div className='h-full w-2/3 p-5 flex items-center justify-center gap-5'>
      {props.users.map(function(elem){
        return <RightCard img={elem.img} tag={elem.tag} num={elem.num} color={elem.color} />
      })}
    </div>
  )
}

export default RightContent
