import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user: "Rishika", age: 22})

  const btnClicked = () => {
    setNum(prev=>({...prev,age:20}))
    
    
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
