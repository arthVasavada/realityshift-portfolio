import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo192.png'; // Adjust the path if necessary


const Navbar: React.FC = () => {
  return (
    <motion.nav
      className="h-16 bg-gray-800 text-white flex justify-between items-center px-5 fixed top-0 left-0 w-full z-10"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5}}
    >
      <Link to="/">
        <motion.img src={logo} alt="Logo" className="h-10 pt-2" whileHover={{scale:1.5}} transition={{type: "spring", stiffness: 50}}  /> {/* Adjust `h-10` for the desired size */}
      </Link>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-cyan-200 font-light">Home</Link></li>
        <li><Link to="/about" className="hover:text-cyan-200 font-light">About</Link></li>
        <li><Link to="/projects" className="hover:text-cyan-200 font-light">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-cyan-200 font-light">Contact</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
