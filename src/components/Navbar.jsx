import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/logo.png';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-blue-600 p-4 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          {/* Logo for "K" */}
          <Link to="/">
          <img src={logo} alt="Kriti Logo" className="w-8 h-8" /> {/* Adjust size as needed */}
          </Link>

          {/* Text for "riti Print & Pack Industries" */}
          <Link to="/" className="text-white text-2xl font-bold">
            <span  className="ml-[-1.5px]">riti</span> {/* Different font for "riti" */}
            <span className="text-white-300"> Print & Pack Industries</span> {/* Styling the rest */}
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 text-white">
          <li><Link to="/" className="hover:underline font-bold ">Home</Link></li>
          <li><Link to="/about" className="hover:underline font-bold">About Us</Link></li>
          <li><Link to="/blog" className="hover:underline font-bold">Blog</Link></li>
          <li><Link to="/services" className="hover:underline font-bold">Services</Link></li>
          <li><Link to="/contact" className="hover:underline font-bold">Contact Us</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
