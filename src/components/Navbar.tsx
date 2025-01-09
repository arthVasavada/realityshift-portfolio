import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo192.png"; // Ensure this is a transparent PNG
import { useTheme } from "../context/ThemeContext"; // Assuming ThemeContext is implemented
import { SunIcon, MoonIcon } from "@heroicons/react/outline"; // Import Heroicons


const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Get the theme and toggle function from ThemeContext

  return (
    <motion.nav
      className="h-16 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 flex justify-between items-center px-5 fixed top-0 left-0 w-full z-10 shadow"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link to="/">
        <motion.div
          className="relative h-10 pt-2 chromatic-logo"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <img src={logo} alt="Logo" className="h-full w-auto logo" />
        </motion.div>
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-11">
        <li>
          <Link to="/" className="hover:text-cyan-200 dark:hover:text-orange-500 font-light">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-cyan-200 dark:hover:text-orange-500 font-light">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-cyan-200 dark:hover:text-orange-500 font-light">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-cyan-200 dark:hover:text-orange-500 font-light">
            Contact
          </Link>
        </li>
      </ul>

      {/* Theme Toggle Button */}
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
    </motion.nav>
  );
};

export default Navbar;
