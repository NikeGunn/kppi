import React, { useState } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet'; // Import react-helmet

const Home = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cardsData = [
    {
      title: 'Exciting New Project',
      description: 'We are thrilled to announce our latest cartoon packaging project that will revolutionize the industry.',
      image: 'https://github.com/NikeGunn/imagess/blob/main/kriti-print/1.jpg?raw=true',
    },
    {
      title: 'Behind the Scenes',
      description: 'Take a sneak peek into our creative process and see how we bring cartoons to life.',
      image: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image4.jpg?raw=true',
    },
    {
      title: 'Industry Insights',
      description: 'Stay updated with the latest trends and insights into cartoon and packaging design.',
      image: 'https://github.com/NikeGunn/kritiassets/blob/main/blog-image1.jpg?raw=true',
    },
    {
      title: 'New Innovations',
      description: 'Our team is constantly pushing the boundaries with new innovations in packaging design.',
      image: 'https://github.com/NikeGunn/imagess/blob/main/kriti-print/2.jpg?raw=true',
    },
    {
      title: 'Creative Designs',
      description: 'Explore the artistic journey behind our unique packaging designs for popular cartoon brands.',
      image: 'https://github.com/NikeGunn/imagess/blob/main/kriti-print/3.jpg?raw=true',
    },
    {
      title: 'Future Trends',
      description: 'Discover what’s next in the world of cartoon packaging and creative designs.',
      image: 'https://github.com/NikeGunn/imagess/blob/main/kriti-print/4.png?raw=true',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Home | Kriti Print & Pack Industries</title>
        <meta name="description" content="Welcome to Kriti Print & Pack Industries, where we bring your favorite cartoons to life with innovative packaging solutions. Explore our latest blog posts to stay updated on industry trends and insights." />
        <meta name="keywords" content="cartoon packaging, packaging design, Kriti Print & Pack, industry insights, creative designs" />
        <meta property="og:title" content="Home | Kriti Print & Pack Industries" />
        <meta property="og:description" content="Discover Kriti Print & Pack Industries' latest projects and insights into the world of cartoon packaging. Stay informed about new innovations and creative designs." />
        <meta property="og:image" content="https://github.com/NikeGunn/kritiassets/blob/main/blog-image4.jpg?raw=true" />
        <meta property="og:url" content="https://www.kritiprintpack.com/" />
      </Helmet>
      <Hero
        title="Welcome to Kriti Print & Pack Industries"
        subtitle="We bring your favorite cartoons to life!"
        buttonLabel="Explore Our Stories"
        buttonLink="/blog"
      />
      <div className="container mx-auto p-4 m-4">
        <h2 className="text-4xl font-bold text-center mb-8 mt-4">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {cardsData.map((card, index) => (
            <div 
              key={index} 
              className="group relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 transition-opacity duration-500 opacity-100 group-hover:opacity-90">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {card.title}
                </h3>
                <p className="text-gray-700">
                  {expandedCard === index
                    ? card.description
                    : `${card.description.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-600 mt-4 hover:text-blue-800"
                >
                  {expandedCard === index ? 'See Less' : 'See More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
