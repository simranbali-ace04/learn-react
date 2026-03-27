import React from 'react'

const App = () => {

  function inputChanging(){
    console.log("User is Typing");
    
  }

  return (
    <div>
      <input onChange={inputChanging} type="text" placeholder='Enter the name' />

    </div>
  )
}

export default App
