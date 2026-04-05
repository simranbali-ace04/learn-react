import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState([10,20,30])

  const btnClicked = () => {
    const newNum = [...num];
    newNum.push(40);
    setNum(newNum);
    console.log(newNum);
    
    
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
