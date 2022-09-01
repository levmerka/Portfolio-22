import React from "react";
import logo from "./logo.svg";
import Navbar from "./pages/Navbar";
import Body from "./pages/Body";
import Footer from "./pages/Footer";
import Resume from './pages/Resume';
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Body />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
