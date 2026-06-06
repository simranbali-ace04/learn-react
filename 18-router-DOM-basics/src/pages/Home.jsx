import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex gap-6 items-center justify-center">
        <button className="px-4 py-2 bg-amber-500 rounded-2xl active:scale-95 font-semibold">
          <a href="/contact"></a>
          Contact
        </button>
        <button className="px-4 py-2 bg-amber-500 rounded-2xl active:scale-95 font-semibold">
          <a href="/about"></a>
          About
        </button>
      </div>
    </div>
  );
};

export default Home;
