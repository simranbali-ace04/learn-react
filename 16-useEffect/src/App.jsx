import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum]= useState(0)
  const [num2, setNum2] = useState(100)
  useEffect(function (){
    console.log("useEffect is running...");
  }, [num2])   // this will run when num2 changes
  return (
    <div className='p-10'>
      <h1 className='text-5xl p-10'>{num}</h1>
      <h1 className='text-5xl p-10'>{num2}</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded" 
      onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}>Click</button>
    </div>
  )
}

export default App
