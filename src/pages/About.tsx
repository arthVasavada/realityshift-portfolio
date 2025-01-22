import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-16 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 px-4 overflow-hidden transition-colors duration-300"
    >
      {/* Image Animation */}
      <motion.div
        layoutId="profile-image"
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-teal-400 dark:border-orange-400 shadow-lg cursor-pointer flex-shrink-0"
        transition={{ type: "spring", stiffness: 50 }}
        whileHover={{ scale: 1.05 }}
      >
        <Link to="/">
          <img
            src="/assets/Arth.jpg"
            alt="About Me"
            className="w-full h-full object-cover"
          />
        </Link>
      </motion.div>

      {/* About Info */}
      <motion.div
        className="text-center md:text-left max-w-lg"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.4 }}
      >
        <h1 className="text-2xl sm:text-3xl font-extralight mb-4 text-teal-400 dark:text-orange-400">
          About Me
        </h1>
        <p className="text-gray-300 dark:text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
          I am a passionate Full Stack Developer with over 5 years of freelance
          experience delivering dynamic, scalable web applications, complemented
          by a background in crafting high-quality visual effects for film and
          television.
        </p>
        <p className="text-gray-300 dark:text-gray-600 text-base sm:text-lg leading-relaxed">
          My expertise spans React, Node.js, Firebase, and Vite, enabling me to
          build end-to-end solutions that prioritize performance, security, and
          user experience.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
