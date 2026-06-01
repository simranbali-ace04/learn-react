import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('A is changing');
  }

  function bChanging(){
    console.log('B is changing');
  }

  useEffect(function(){
    aChanging()
    console.log('useEffect is running');
  }, [b])

  return (
    <div className='p-10 text-2xl'>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button className='bg-blue-400 rounded p-2 m-2' onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button className='bg-blue-400 rounded p-2 m-2' onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App
