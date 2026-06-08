import React from "react";
import { useNavigate } from "react-router-dom";


const Nav2 = () => {

    let navigate = useNavigate();

  return (
    <div className="bg-cyan-700 p-3">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-500 p-3 rounded-xl m-2.5 font-medium text-xl active:scale-95"
      >
        Return to Home page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-500 p-3 rounded-xl m-2.5 font-medium text-xl active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-500 p-3 rounded-xl m-2.5 font-medium text-xl active:scale-95"
      >
       Next
      </button>
    </div>
  );
};

export default Nav2;
