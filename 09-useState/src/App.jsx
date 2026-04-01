import React, { useActionState, useState, useSyncExternalStore } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function changeNum() {
    setNum(30)
    
  }

  return (
    <div>
      <h1>Value of num is {num} </h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
