import React, { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(title);
    console.log(details);
    
    setTitle('');
    setDetails('');
  }


  return (
    <div className="bg-rose-200 w-screen min-h-screen md:p-10 p-10 font-semibold flex flex-col lg:flex-row gap-10">
      <form onSubmit={handleSubmit} className="w-full lg:w-1/3 sticky top-10 self-start ">
        <div className="bg-white rounded-xl p-6 shadow-xl flex flex-col gap-4">
          <h1 className="text-2xl">Create New Note</h1>
          <input
            type="text"
            placeholder="Note Title"
            className="bg-rose-200 p-2 rounded-lg text-black "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Note Details"
            className="bg-rose-200 p-5 rounded-lg text-black "
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          ></textarea>
          <button className="bg-rose-500 text-white p-2 rounded-lg hover:bg-rose-600">
            + Add Note
          </button>
        </div>
      </form>
      <h1 className="text-2xl font-semibold sticky top-10 self-start">Your Notes</h1>
      <div className=" flex-1 flex flex-wrap gap-4 mt-5">
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl"></div>
      </div>
    </div>
  );
};

export default App;