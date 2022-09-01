import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Routes, Route } from "react-router-dom";


const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>
  );
};

export default Body;
