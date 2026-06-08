import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About"
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Nav2 from "./components/Nav2";

const App = () => {

  let navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen w-full text-white">
      <Navbar />
      <Nav2 />
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/about" element={<About/> }/>
        <Route path="/contact" element={<Contact/> }/>

        <Route path="/courses" element={<Courses/> }/>

        {/* Dynamic Routing */}
        <Route path="/courses/:CourseId" element={<CourseDetails/>} />

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
