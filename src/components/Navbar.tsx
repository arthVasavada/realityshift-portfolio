import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo192.png";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      className="h-16 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 px-4 fixed top-0 left-0 w-full z-20 shadow flex items-center justify-between"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link to="/" onClick={() => setIsMenuOpen(false)}>
        <motion.div
          className="relative h-10"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <img src={logo} alt="Logo" className="h-full w-auto logo" />
        </motion.div>
      </Link>

      {/* Right-side controls: Hamburger + Theme Toggle */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-cyan-500 dark:bg-orange-500 text-white hover:bg-cyan-600 dark:hover:bg-orange-600 transition"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <SunIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <MoonIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden z-30" onClick={toggleMenu}>
          {isMenuOpen ? (
            <XIcon className="h-6 w-6 cursor-pointer" />
          ) : (
            <MenuIcon className="h-6 w-6 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Navigation Links */}
      {isMenuOpen && (
        <ul
          className={`fixed top-16 left-0 w-full bg-gray-800 dark:bg-gray-100 md:bg-transparent md:dark:bg-transparent md:static md:flex md:items-center md:w-auto flex-col md:flex-row p-5 md:p-0 shadow-md md:shadow-none z-20`}
        >
          <li
            onClick={() => setIsMenuOpen(false)}
            className="text-center mb-4 md:mb-0 md:mr-6"
          >
            <Link
              to="/"
              className="block hover:text-cyan-200 dark:hover:text-orange-500 font-light"
            >
              Home
            </Link>
          </li>
          <li
            onClick={() => setIsMenuOpen(false)}
            className="text-center mb-4 md:mb-0 md:mr-6"
          >
            <Link
              to="/about"
              className="block hover:text-cyan-200 dark:hover:text-orange-500 font-light"
            >
              About
            </Link>
          </li>
          <li
            onClick={() => setIsMenuOpen(false)}
            className="text-center mb-4 md:mb-0 md:mr-6"
          >
            <Link
              to="/projects"
              className="block hover:text-cyan-200 dark:hover:text-orange-500 font-light"
            >
              Projects
            </Link>
          </li>
          <li
            onClick={() => setIsMenuOpen(false)}
            className="text-center mb-4 md:mb-0 md:mr-6"
          >
            <Link
              to="/contact"
              className="block hover:text-cyan-200 dark:hover:text-orange-500 font-light"
            >
              Contact
            </Link>
          </li>

          {/* Theme Toggle in Mobile Dropdown */}
          <li className="flex justify-center md:hidden">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 dark:bg-orange-500 text-white hover:bg-cyan-600 dark:hover:bg-orange-600 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <SunIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </li>
        </ul>
      )}

      {/* Theme Toggle Button for Desktop */}
      <button
        onClick={toggleTheme}
        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 dark:bg-orange-500 text-white hover:bg-cyan-600 dark:hover:bg-orange-600 transition"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <SunIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MoonIcon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </motion.nav>
  );
};

export default Navbar;
