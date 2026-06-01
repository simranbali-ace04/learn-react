import React from "react";
import axios from "axios";

const App = () => {
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
    console.log(response.data);
    
  };

  return (
    <div className="h-screen bg-black text-white p-5">
      <button
        className="bg-green-500 active:scale-95 text-white font-bold mb-3 py-2 px-4 rounded"
        onClick={getData}
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
