import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex gap-6 items-center justify-center">
        <button className="px-4 py-2 bg-amber-500 rounded-2xl active:scale-95 font-semibold">
          <Link to="/contact">
          Contact
          </Link>
        </button>
        <button className="px-4 py-2 bg-amber-500 rounded-2xl active:scale-95 font-semibold">
          <Link to="/about">
          About
          </Link>
          
        </button>
      </div>
    </div>
  );
};

export default Home;
