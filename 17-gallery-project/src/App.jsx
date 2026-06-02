import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [index, setIndex] = useState(1);

  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`,
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = <h2 className="text-xs text-white">No User Available</h2>;
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div className="h-60 w-60 rounded-xl mb-8" key={idx}>
          <a href={elem.url}>
            <img
              className="h-full w-full object-fill"
              src={elem.download_url}
              alt={elem.author}
            />
            <div className="font-bold text-xl overflow-hidden text-ellipsis whitespace-nowrap">
              {elem.author}
            </div>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="min-h-screen bg-black overflow-auto text-white p-4">
      <h1 className="bg-amber-400 fixed p-2 rounded-2xl text-black font-bold text-2xl">{index}</h1>
      <div className="flex flex-wrap gap-4">{printUserData}</div>
      <div className="flex flex-wrap justify-center gap-6">
        <button
          className="bg-amber-400 text-black font-semibold px-6 py-2 rounded m-2"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>
        <button
          className="bg-amber-400 text-black font-semibold px-6 py-2 rounded m-2"
          onClick={() => {
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
