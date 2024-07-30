import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}></div>
      <div className="relative container mx-auto flex flex-col items-center justify-center text-center px-4 py-16 z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Elevate Your Packaging with Kriti Print & Pack
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Discover premium packaging solutions that combine quality and design. 
        </motion.p>
        <motion.a
          href="/services"
          className="inline-block px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Explore Our Services
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
