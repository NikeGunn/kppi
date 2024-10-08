import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer'; // Ensure the path is correct
import { Helmet } from 'react-helmet'; // Import react-helmet

const Services = () => {
  const services = [
    {
      title: 'Custom Packaging Solutions',
      description: 'We offer tailored packaging solutions designed to meet your specific needs and enhance your product’s appeal.',
      icon: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image4.jpg?raw=true'
    },
    {
      title: 'Sustainable Packaging',
      description: 'Our eco-friendly packaging options are designed to minimize environmental impact while maintaining high quality.',
      icon: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image2.jpg?raw=true'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Get quick prototypes for your packaging designs to ensure they meet your standards before full-scale production.',
      icon: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image1.jpg?raw=true'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen"> {/* Flex column layout with full screen height */}
      <Helmet>
        <title>Our Services | Kriti Print & Pack Industries</title>
        <meta name="description" content="Explore the diverse range of services we offer, including custom packaging solutions, sustainable packaging options, and rapid prototyping to meet all your packaging needs." />
        <meta name="keywords" content="custom packaging, sustainable packaging, rapid prototyping, packaging solutions, eco-friendly packaging" />
        <meta property="og:title" content="Our Services | Kriti Print & Pack Industries" />
        <meta property="og:description" content="Discover our custom packaging solutions, sustainable packaging options, and rapid prototyping services tailored to enhance your products and meet your needs." />
        <meta property="og:image" content="https://www.yourwebsite.com/path/to/your/service-image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/services" />
      </Helmet>

      {/* Main content section with flex-grow to push footer down */}
      <section className="container mx-auto px-4 py-16 flex-grow"> 
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-600 mt-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }} // Faster fade-in and slide-up
        >
          Our Services
        </motion.h1>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 px-4 mb-8"
              initial={{ opacity: 0, scale: 0.95 }} // Slightly reduced initial scale
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }} // Faster entrance animation
            >
              <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <img src={service.icon} alt={service.title} className="w-16 h-16" />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
