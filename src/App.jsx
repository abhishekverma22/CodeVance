import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="pt-40 text-white text-center text-3xl">Home Page</div>} />
        <Route path="/about" element={<div className="pt-40 text-white text-center text-3xl">About Page</div>} />
        <Route path="/contact" element={<div className="pt-40 text-white text-center text-3xl">Contact Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
