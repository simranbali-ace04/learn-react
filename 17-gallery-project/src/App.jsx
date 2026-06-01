import React, { useState } from "react";
import axios from "axios";

const App = () => {

  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=3&limit=30");
    setUserData(response.data);
    console.log(response.data);
    
  };

  let printUserData = 'No User Available';
  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){
      return <div className="h-60 w-60 rounded-xl mb-8" key={idx}>
        <img className="h-full w-full object-fill" src={elem.download_url} alt={elem.author} />
        <div className="font-bold text-xl overflow-hidden text-ellipsis whitespace-nowrap">
          {elem.author}
        </div>
      </div>
    })

    
  }

  return (
    <div className="min-h-screen bg-black overflow-auto text-white p-5">
      <button
        className="bg-green-500 active:scale-95 text-white font-bold mb-3 py-2 px-4 rounded"
        onClick={getData}
      >
        Get Data
      </button>

      <div className="flex flex-wrap gap-4">
        {printUserData}
      </div>
    </div>
  );
};

export default App;
