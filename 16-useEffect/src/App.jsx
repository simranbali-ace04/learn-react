import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum]= useState(0)
  useEffect(function (){
    console.log("useEffect is running...");
  }, [])   // this will run only once when the component is mounted, because of the empty dependency array
  return (
    <div className='p-10'>
      <h1 className='text-5xl p-10'>{num}</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded" 
      onClick={()=>{
        setNum(num+1)
      }}>Increment</button>
    </div>
  )
}

export default App
