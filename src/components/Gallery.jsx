import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Gallery = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title, image, description } = location.state || {};

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('overlay')) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="overlay fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition duration-300 z-20"
          aria-label="Close gallery"
        >
          &times;
        </button>
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover"
          />
          <div className="p-6 bg-white">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
