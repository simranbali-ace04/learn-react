import React from "react";

const App = () => {
  return (
    <div className="bg-rose-200 w-screen h-screen p-10 font-semibold gap-10">
      <form>
        <div className="bg-white rounded-xl p-6 shadow-xl w-1/2 flex flex-col gap-4">
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
      <div className="flex flex-wrap p-10">
      <div className="bg-white h-50 w-50 rounded-xl border-2 border-rose-300 shadow-2xl">

      </div>
      </div>
    </div>
  );
};

export default App;
