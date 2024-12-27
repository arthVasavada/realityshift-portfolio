import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [targetPage, setTargetPage] = useState<string | null>(null); // Track the target page
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setTargetPage(path); // Set the target page
    setTimeout(() => navigate(path), 300); // Delay navigation to allow animation to play
  };

  return (
    <motion.section
      id="home"
      className="h-screen-minus-navbar pt-16 bg-gray-800 text-white flex flex-col md:flex-row justify-center items-center gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // Universal Home Page exit animation
      transition={{ duration: 1 }}
    >
      {/* Left Section: Text Content */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extralight mb-5">
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-blue-500 animate-gradient bg-[length:200%_200%]">
            Arth Vasavada
          </span>
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          A Full-Stack Developer creating interactive web applications.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button
            onClick={() => handleNavigate("/projects")} // Navigate to Projects
            className="bg-teal-400 text-gray-900 px-6 py-2 rounded hover:bg-teal-500"
          >
            View Projects
          </button>
          <button
            onClick={() => handleNavigate("/contact")} // Navigate to Contact
            className="border-2 border-teal-400 text-teal-400 px-6 py-2 rounded hover:bg-teal-500 hover:text-gray-900"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Right Section: Clickable Image */}
      <motion.div
        className="w-64 h-64 rounded-full overflow-hidden border-2 border-teal-400 shadow-lg cursor-pointer"
        layoutId="profile-image" // Always apply layoutId for About
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 50 }}
        exit={
          targetPage === "/projects" || targetPage === "/contact" // Same animation for both
            ? { opacity: 0, y: -100 }
            : undefined // No exit animation for About
        }
      >
        <button onClick={() => handleNavigate("/about")}>
          <img
            src="/assets/Arth.jpg"
            alt="Arth Vasavada"
            className="w-full h-full object-cover"
          />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Home;
