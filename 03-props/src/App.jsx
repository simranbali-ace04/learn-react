import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="NewUser" age={20} img='https://images.unsplash.com/photo-1516222338250-863216ce01ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvb2x8ZW58MHx8MHx8fDA%3D'/>
      <Card user="AnotherUser" age={28} img='https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user="OneMoreUser" age={23} img='https://images.unsplash.com/photo-1531875506263-dfcc69e73475?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2x8ZW58MHx8MHx8fDA%3D'/>
    </div>
  )
}

export default App
