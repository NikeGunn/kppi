import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero
        title="Welcome to Kriti Print & Pack Industries"
        subtitle="We bring your favorite cartoons to life!"
        buttonLabel="Explore Our Stories"
        buttonLink="/blog"
      />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
        <div className="flex flex-wrap justify-center">
          <BlogCard
            title="Exciting New Project"
            excerpt="Learn more about our latest cartoon packaging project."
            image="https://github.com/NikeGunn/kritiassets/blob/main/blog-image4.jpg?raw=true"
            link="/blog/1"
          />
          <BlogCard
            title="Industry Insights"
            excerpt="Discover the latest trends in cartoon packaging."
            image="https://github.com/NikeGunn/kritiassets/blob/main/blog-image1.jpg?raw=true"
            link="/blog/2"
          />
          <BlogCard
            title="Behind the Scenes"
            excerpt="A sneak peek into our creative process."
            image="https://via.placeholder.com/150"
            link="/blog/3"
          />
          <BlogCard
            title="Behind the Scenes"
            excerpt="A sneak peek into our creative process."
            image="https://via.placeholder.com/150"
            link="/blog/4"
          />
          <BlogCard
            title="Behind the Scenes"
            excerpt="A sneak peek into our creative process."
            image="https://via.placeholder.com/150"
            link="/blog/4"
          />
          <BlogCard
            title="Behind the Scenes"
            excerpt="A sneak peek into our creative process."
            image="https://via.placeholder.com/150"
            link="/blog/5"
          />
          <BlogCard
            title="Behind the Scenes"
            excerpt="A sneak peek into our creative process."
            image="https://via.placeholder.com/150"
            link="/blog/6"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
