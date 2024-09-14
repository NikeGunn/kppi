import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        {/* Left Side */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-4 lg:mb-0 lg:mr-8">
          <div className="text-center lg:text-left">
            <p className="text-2xl font-bold mb-2">Kriti Print & Pack Industries</p>
            <p className="text-sm mb-2">
              Katahari, Biratnagar, Morang, NEPAL 
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg"
                alt="Nepal Flag"
                className="inline-block w-6 h-6 ml-1 mb-2"
              />
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-center lg:text-right lg:ml-auto">
          <p className="text-sm mb-2">&copy; 2024 Kriti Print & Pack Industries. All rights reserved.</p>
          <p className="text-sm">
            Follow us on{' '}
            <a href="https://twitter.com" className="text-blue-400 hover:underline">
              Twitter
            </a>{' '}
            |{' '}
            <a
              href="https://www.facebook.com/sweta.agrawal.3958"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
