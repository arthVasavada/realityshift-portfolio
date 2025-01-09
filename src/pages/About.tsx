import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="h-screen-minus-navbar pt-16 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 flex justify-center items-center gap-8 transition-colors duration-300"
    >
      {/* Image Animation */}
      <motion.div
        layoutId="profile-image"
        className="w-80 h-80 rounded-full overflow-hidden border-2 border-teal-400 dark:border-orange-400 shadow-lg cursor-pointer"
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
        <h1 className="text-3xl font-extralight mb-4 text-teal-400 dark:text-orange-400">
          About Me
        </h1>
        <p className="text-gray-300 dark:text-gray-600 text-lg mb-4">
          I am a passionate Full Stack Developer with over 5 years of freelance
          experience delivering dynamic, scalable web applications, complemented
          by a background in crafting high-quality visual effects for film and
          television.
        </p>
        <p className="text-gray-300 dark:text-gray-600 text-lg">
          My expertise spans React, Node.js, Firebase, and Vite, enabling me to
          build end-to-end solutions that prioritize performance, security, and
          user experience.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
