import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet'; // Import react-helmet

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>About Us | Kriti Print & Pack Industries</title>
        <meta name="description" content="Learn about Kriti Print & Pack Industries, our mission, values, and commitment to providing innovative packaging solutions. Discover how we help businesses stand out with high-quality, customized packaging." />
        <meta name="keywords" content="about us, packaging solutions, Kriti Print & Pack, innovative packaging, company values, customer focus" />
        <meta property="og:title" content="About Us | Kriti Print & Pack Industries" />
        <meta property="og:description" content="Discover Kriti Print & Pack Industries' mission, values, and dedication to delivering exceptional packaging solutions. Learn more about how we innovate and focus on quality and customer satisfaction." />
        <meta property="og:image" content="https://www.yourwebsite.com/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
      </Helmet>
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            At Kriti Print & Pack Industries, we are committed to providing innovative and high-quality packaging solutions. Our mission is to help businesses stand out with customized packaging that combines functionality and aesthetics. With years of experience and a dedicated team, we deliver exceptional service and products tailored to your needs.
          </motion.p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We strive to bring fresh and innovative solutions to the packaging industry, ensuring that our clients receive cutting-edge designs and technology.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-700">
                We are dedicated to maintaining the highest standards of quality in every aspect of our operations, from materials to finished products.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-700">
                Our clients are at the heart of everything we do. We listen to their needs and work closely with them to deliver personalized and effective packaging solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
