import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/Models";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/models" element={<Models/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/testimonials" element={<Testimonials/>}/>

    </Routes>
      
    </>
  );
}

export default App;
