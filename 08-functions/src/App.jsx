import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("Button is clicked!");
    
  }

  return (
    <div>
      <h1>Hello, Simran</h1>
      {/* Calling a function onClick (btnClicked()) will result in already action perform , call the function with braces */}
      <button onClick={btnClicked}>Change User</button>  
    </div>
  )
}

export default App
