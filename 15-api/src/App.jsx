import React from 'react'

const App = () => {
    const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
  }
  return (
    <div className='p-10'>
      <button className='bg-blue-400 hover:bg-blue-700 rounded text-white px-2 py-1.5' onClick={getData}> Get Data </button>
    </div>
  )
}

export default App
