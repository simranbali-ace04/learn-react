import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  
  return (
    <div className='h-[90vh] px-18 py-10 flex items-center gap-8'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1content
