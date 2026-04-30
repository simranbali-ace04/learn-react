import React from 'react'

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name'
        onChange={(e)=>{
          console.log(e.target.value);
          
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
