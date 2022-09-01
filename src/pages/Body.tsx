import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Resume from "./Resume";
import { Routes, Route } from "react-router-dom";


const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/resume" element={<Resume />}></Route>
    </Routes>
  );
};

export default Body;
