import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/logo.png'; // Import your logo

const Navbar = () => {
  // State to handle the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Detect route changes using useLocation
  const location = useLocation();

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu whenever the route changes
  React.useEffect(() => {
    setIsOpen(false); // Close the menu on page navigation
  }, [location]);

  return (
    <motion.nav
      className="bg-blue-600 p-4 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2">
          {/* Responsive logo size for mobile and desktop */}
          <Link to="/">
            <img
              src={logo}
              alt="Kriti Logo"
              className="w-13 h-13 md:w-10 md:h-10"  // Small for mobile, larger for desktop
            />
          </Link>
          {/* Responsive text size */}
          <Link to="/" className="text-white text-lg md:text-2xl font-bold ">
            <span className="text-white-300 ml-[-4px]">Kriti Print & Pack Industries</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${isOpen ? 'block' : 'hidden'
            } lg:flex space-y-2 lg:space-y-0 lg:space-x-4 lg:static absolute top-14 right-0 bg-blue-600 lg:bg-transparent text-white p-4 lg:p-0 w-full lg:w-auto z-50`}
        >
          <li>
            <Link to="/" className="hover:underline font-bold" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline font-bold" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:underline font-bold" onClick={() => setIsOpen(false)}>Blog</Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline font-bold" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline font-bold" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
