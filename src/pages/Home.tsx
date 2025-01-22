import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Home: React.FC = () => {
  const [targetPage, setTargetPage] = useState<string | null>(null); // Track the target page
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme(); // Access the theme and toggle function

  const handleNavigate = (path: string) => {
    setTargetPage(path); // Set the target page
    setTimeout(() => navigate(path), 300); // Delay navigation to allow animation to play
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen pt-16 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 flex flex-col md:flex-row justify-center items-center gap-6 px-4 overflow-hidden transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
        <h1 className="text-4xl sm:text-5xl font-extralight mb-4 sm:mb-5 leading-tight">
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 dark:from-orange-300 to-blue-500 dark:to-orange-500 animate-gradient bg-[length:200%_200%]">
            Arth Vasavada
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-400 dark:text-gray-600 mb-5 sm:mb-6 leading-relaxed">
          A Full-Stack Developer creating interactive web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => handleNavigate("/projects")} // Navigate to Projects
            className="bg-teal-400 dark:bg-orange-400 text-gray-900 px-6 py-2 rounded hover:bg-teal-500 dark:hover:bg-orange-500"
          >
            View Projects
          </button>
          <button
            onClick={() => handleNavigate("/contact")} // Navigate to Contact
            className="border-2 border-teal-400 dark:border-orange-400 text-teal-400 dark:text-orange-400 px-6 py-2 rounded hover:bg-teal-500 hover:text-gray-900 dark:hover:bg-orange-500"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Right Section: Clickable Image */}
      <motion.div
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-teal-400 dark:border-orange-400 shadow-lg cursor-pointer"
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

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 px-4 py-2 rounded text-white dark:text-gray-900 bg-cyan-500 dark:bg-orange-500 hover:bg-cyan-600 dark:hover:bg-orange-600 transition"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </motion.section>
  );
};

export default Home;
