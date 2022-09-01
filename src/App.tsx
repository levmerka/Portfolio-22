import React from "react";
import logo from "./logo.svg";
import Navbar from "./pages/Navbar";
import Body from "./pages/Body";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
