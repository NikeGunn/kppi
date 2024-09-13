import React, { useState } from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import EmailJS

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [errors, setErrors] = useState({}); // For form validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Only proceed if validation passes
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS credentials
      await emailjs.send('service_8pyfjbi', 'template_ipj50zs', templateParams, '9QG8VlnTnsDfMloTK');

      setResponseMessage('Thank you for reaching out! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setResponseMessage('There was an error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="container flex-grow">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 mt-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Contact Us
        </motion.h1>
        <div className="max-w-lg mx-auto mt-8 mb-8">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg py-2 px-3`}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg py-2 px-3`}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg py-2 px-3`}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              ></motion.textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </motion.button>
          </motion.form>
          {responseMessage && (
            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p>{responseMessage}</p>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
