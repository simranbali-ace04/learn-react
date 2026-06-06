import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="flex gap-6 items-center justify-center">
        <button className="px-4 py-2 bg-amber-500 rounded-2xl active:scale-95 font-semibold">
          <a href="/"></a>
          Home
        </button>
        <button className="px-4 py-2 bg-amber-500 rounded-2xl active:scale-95 font-semibold">
          <a href="/about"></a>
          About
        </button>
      </div>
    </div>
  );
};

export default Contact;
