import React from "react";
import Home from "./pages/home/Home";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "./pages/projects/Projects.jsx";
import Skills from "./pages/skills/Skills.jsx";
import About from "./pages/about/About.jsx";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact.jsx";

const pageVariants = {
  initial: { opacity: 0, y: "-100%" },
  animate: { opacity: 1, y: "0%", transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeIn" } },
};

const MotionWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      zIndex: 0,
    }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const location = useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div className="page-container" style={{ position: "relative", flex: 1 }}>
        <AnimatePresence mode="wait">
        <MotionWrapper key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-works" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </MotionWrapper>
        </AnimatePresence>
      </div>
      <Contact/>
    </div>
  );
};

export default App;
