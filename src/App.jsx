import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import AuthPage from "./pages/AuthPage"
import Documentaions from "./pages/Documentaions";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/docs" element={<Documentaions/>} />
        <Route path="/get-started" element={<AuthPage />}/>
        </Routes>
    </Router>
  );
}

export default App;
