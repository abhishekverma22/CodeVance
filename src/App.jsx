import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={<div className="pt-40 text-white text-center text-3xl">About Page</div>} />
        <Route path="/contact" element={<div className="pt-40 text-white text-center text-3xl">Contact Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
