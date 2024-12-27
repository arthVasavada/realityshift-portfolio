import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <div className="overflow-hidden">
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />
      {/* Animated routes */}
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
