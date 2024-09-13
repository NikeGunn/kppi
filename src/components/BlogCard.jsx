import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ title, description = '', image, link }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();

  // Function to navigate to the gallery with full description
  const openGallery = () => {
    navigate('/gallery', { state: { title, image, description } });
  };

  // Truncate description if it's longer than 100 characters
  const truncatedDescription = description.length > 100 ? description.slice(0, 100) + '...' : description;

  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onClick={openGallery} // Open gallery on click
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
      <div className="relative p-6 z-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4 h-24 overflow-hidden">{truncatedDescription}</p>
        <motion.button
          onClick={(e) => {
            e.stopPropagation(); // Prevent click event from propagating to the parent div
            openGallery();
          }}
          className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          See More
        </motion.button>
      </div>
    </motion.div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, // Pass the link for navigation
};

export default BlogCard;
