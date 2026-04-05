import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user: 'Sam', age: 18})

  const btnClicked = () => {
    const newNum = {...num};
    newNum.user= 'Sim'
    console.log(newNum);
    setNum(newNum)
    
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
