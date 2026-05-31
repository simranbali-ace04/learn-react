import axios from 'axios'
import {useState} from 'react'


const App = () => {

  const [data , setData] = useState([])
  
    const getData = async () => {
      const response = await axios.get('https://picsum.photos/v2/list')
      setData(response.data);
      
  }
  return (
    <div className='p-10'>
      <button className='bg-blue-400 hover:bg-blue-700 rounded text-white px-2 py-1.5' onClick={getData}> Get Data </button>
       <div>
        {data.map(function(elem, idx){
          return <h3>{idx}:Hellooo, {elem.author}</h3>
        })}
       </div>
    </div>
  )
}

export default App
