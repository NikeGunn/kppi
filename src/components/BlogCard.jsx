import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ title, description, image }) => {
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
      <div className="relative p-6 z-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          {description}
        </p>
        <motion.a
          href="#"
          className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Read More
        </motion.a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
