import React from 'react'

const App = () => {

  const user = {
    name: 'Anonymous',
    age: 30,
    city: 'Bangalore'
  }
  
  localStorage.setItem('user', JSON.stringify(user))
  const printIt = JSON.parse(localStorage.getItem('user'))
  console.log(printIt);
  


  return (
    <div>
      <h1>Local Storage</h1>
    </div>
  )
}

export default App
