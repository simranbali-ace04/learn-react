import React from 'react'

const App = () => {

   const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
