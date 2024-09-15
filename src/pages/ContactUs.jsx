import React, { useState } from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

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
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };

      await emailjs.send('service_8pyfjbi', 'template_ipj50zs', templateParams, '9QG8VlnTnsDfMloTK');
      toast.success('Thank you for reaching out! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast.error('There was an error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <div className="container flex-grow px-4 py-8 mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-8 mt-8  ml-1.5 text-left" // Updated className for left alignment
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Contact Us
      </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto mb-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
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

          {/* Leaflet Map with Marker */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg h-96 md:h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <MapContainer
              center={[26.46126698841187, 87.30080595284348]}
              zoom={15}
              className="h-full w-full rounded-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={[26.46126698841187, 87.30080595284348]}
                icon={customIcon}
              >
                <Popup>Kriti Print & Pack Industries, Katahari, Biratnagar, Morang, NEPAL <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg"
                alt="Nepal Flag"
                className="inline-block w-6 h-6 ml-1 mb-2"
              /></Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
