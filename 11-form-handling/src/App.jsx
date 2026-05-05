import React from 'react'

const App = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

