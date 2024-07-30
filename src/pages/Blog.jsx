import React from 'react';
import BlogCard from '../components/BlogCard'; // Ensure this path is correct
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Innovations in Packaging for 2024',
      description: 'Discover the latest trends and innovations in packaging technology that are shaping the industry this year.',
      image: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image4.jpg?raw=true',
    },
    {
      title: 'How Custom Packaging Enhances Brand Identity',
      description: 'Learn how customized packaging can significantly boost your brand’s visibility and appeal.',
      image: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image2.jpg?raw=true',
    },
    {
      title: 'The Importance of Sustainable Packaging',
      description: 'Explore why sustainable packaging is crucial for the environment and how it benefits your business.',
      image: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image1.jpg?raw=true',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <section className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}  // Faster fade-in and slide-up
        >
          Our Blog
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}  // Slightly raised initial Y position
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}  // Faster entrance with less delay
            >
              <BlogCard
                title={post.title}
                description={post.description}
                image={post.image}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
