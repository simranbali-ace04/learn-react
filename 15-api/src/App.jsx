import axios from 'axios'

const App = () => {
    const getData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = response.data;
      console.log(data);
      
  }
  return (
    <div className='p-10'>
      <button className='bg-blue-400 hover:bg-blue-700 rounded text-white px-2 py-1.5' onClick={getData}> Get Data </button>
    </div>
  )
}

export default App
