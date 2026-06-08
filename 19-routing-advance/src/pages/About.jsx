import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  {
    /* Navigate is used to redirect to some other path */
  }
  let navigate = useNavigate();

  return (
    <div>
      <h1>About Page</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-emerald-800 p-3 rounded-xl m-2.5 font-medium text-xl active:scale-95"
      >
        Return to Home Page
      </button>
    </div>
  );
};

export default About;
