import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
