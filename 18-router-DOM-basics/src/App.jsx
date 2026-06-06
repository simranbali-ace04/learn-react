import React from "react";
import { Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl">
        This will remain in each page as it is not included in any routing
        specifically
        
        <div className="navbar bg-mauve-200 flex justify-center gap-10 p-2.5 hover:underline">
          <a href="/">Home</a>
          <Link to="/about">About</Link> {/* Using Link the page isn't reloading but using <a> tag will reload  */}
          <a href="/contact">Contact</a>
        </div>
      </h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
