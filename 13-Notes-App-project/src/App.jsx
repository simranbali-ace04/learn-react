import React from "react";

const App = () => {
  return (
    <div className="bg-rose-200 w-screen min-h-screen md:p-10 p-10 font-semibold flex flex-col lg:flex-row gap-10">
      <form className="w-full lg:w-1/3 sticky top-10 self-start ">
        <div className="bg-white rounded-xl p-6 shadow-xl flex flex-col gap-4">
          <h1 className="text-2xl">Create New Note</h1>
          <input
            type="text"
            placeholder="Note Title"
            className="bg-rose-200 p-2 rounded-lg text-black "
          />
          <textarea
            placeholder="Note Details"
            className="bg-rose-200 p-5 rounded-lg text-black "
          ></textarea>
          <button className="bg-rose-500 text-white p-2 rounded-lg hover:bg-rose-600">
            + Add Note
          </button>
        </div>
      </form>
      <div className=" flex-1 flex flex-wrap gap-4">
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