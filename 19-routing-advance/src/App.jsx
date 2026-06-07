import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About"
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/about" element={<About/> }/>
        <Route path="/contact" element={<Contact/> }/>
        {/*The suggested method for nested routes */}
        <Route path="/product" element={<Product/> }>
        <Route path="/product/men" element={<Men/>}/>
        <Route path="/product/women" element={<Women/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>


        {/* The '*' is used to define the non-existing routes */}
        {/* The below method is not so technically preferred */}
        {/*<Route path="/product/men" element={<Men/>}/>
        <Route path="/product/women" element={<Women/>}/>*/}


      </Routes>
      <Footer />
      
    </div>
  );
};

export default App;
