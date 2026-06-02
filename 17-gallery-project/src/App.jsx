import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [index, setIndex] = useState(1);

  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = <h2 className="text-xs text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h2>;
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    });
  }

  return (
    <div className="min-h-screen bg-black overflow-auto text-white p-4">
      <div className="flex flex-wrap gap-4 min-h-150">{printUserData}</div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        <button
         style={{opacity: index === 1 ? 0.5 : 1}}
          className="bg-amber-400 text-black font-semibold px-6 py-2 rounded m-2 cursor-pointer active:scale-95"
          onClick={() => {
            if (index > 1) {
              setUserData([]);
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>
        <h2 className="mt-3 text-xl "> Page {index}</h2>
        <button
          className="bg-amber-400 text-black font-semibold px-6 py-2 rounded m-2 cursor-pointer active:scale-95"
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
