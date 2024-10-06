import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import Gallery from '../components/Gallery';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet'; // Import react-helmet

const Blog = () => {
  const [showGallery, setShowGallery] = useState(false);

  const blogPosts = [
        {
      title: 'How Custom Packaging Enhances Brand Identity',
      description: 'Learn how customized packaging can significantly boost your brand’s visibility and appeal.',
      image: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image2.jpg?raw=true',
    },
    {
      title: 'Innovations in Packaging for 2024',
      description: 'Discover the latest trends and innovations in packaging technology that are shaping the industry this year.',
      image: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image4.jpg?raw=true',
    },
    {
      title: 'The Importance of Sustainable Packaging',
      description: 'Explore why sustainable packaging is crucial for the environment and how it benefits your business.',
      image: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image1.jpg?raw=true',
    },
    {
      title: 'The Future of Packaging',
      description: 'A glimpse into what the future holds for packaging design and innovations in the next decade.',
      image: 'https://github.com/NikeGunn/imagess/blob/main/kriti-print/4.png?raw=true',
    },
    {
      title: 'Eco-friendly Packaging Trends',
      description: 'Explore the growing demand for eco-friendly packaging and its impact on global sustainability.',
      image: 'https://github.com/NikeGunn/imagess/blob/main/kriti-print/5.png?raw=true',
    },
    {
      title: 'The Role of Technology in Packaging',
      description: 'How technological advancements are transforming the packaging industry.',
      image: 'https://raw.githubusercontent.com/NikeGunn/imagess/refs/heads/main/kriti-print/6.webp',
    },
    {
      title: 'Packaging Design and Branding',
      description: 'Why great packaging design is essential for building a powerful brand identity.',
      image: 'https://raw.githubusercontent.com/NikeGunn/imagess/refs/heads/main/kriti-print/6.webp',
    },
    {
      title: 'Maximizing Efficiency with Smart Packaging',
      description: 'How smart packaging solutions are improving supply chain efficiency.',
      image: 'https://github.com/NikeGunn/imagess/blob/main/kriti-print/8.png?raw=true',
    },
    {
      title: 'Consumer Preferences in Packaging',
      description: 'Understand the latest consumer packaging preferences to stay ahead in the market.',
      image: 'https://raw.githubusercontent.com/NikeGunn/imagess/refs/heads/main/kriti-print/10.webp',
    },
  ];

  const openGallery = () => {
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Helmet>
        <title>Our Blog | Kriti Print & Pack Industries</title>
        <meta name="description" content="Explore our blog to stay updated on the latest trends and innovations in packaging, branding, and sustainability. Read about how custom and eco-friendly packaging can enhance your business." />
        <meta name="keywords" content="blog, packaging innovations, custom packaging, eco-friendly packaging, packaging trends, branding, technology in packaging" />
        <meta property="og:title" content="Our Blog | Kriti Print & Pack Industries" />
        <meta property="og:description" content="Discover our latest blog posts on packaging trends, custom designs, and more. Stay informed on how packaging innovations can benefit your business." />
        <meta property="og:image" content="https://www.yourwebsite.com/path/to/your/blog-image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/blog" />
      </Helmet>
      <section className="container mx-auto px-4 flex-grow">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-5 text-blue-600 mt-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Our Blog
        </motion.h1>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              <BlogCard
                title={post.title}
                description={post.description}
                image={post.image}
                onClick={openGallery} // Pass onClick correctly
              />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />

      {showGallery && <Gallery blogPosts={blogPosts} onClose={closeGallery} />}
    </div>
  );
};

export default Blog;
