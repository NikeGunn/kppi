import React from 'react';
import { ClipboardCopyIcon } from '@heroicons/react/outline';

import toast from 'react-hot-toast'; // Import toast for notifications

const Footer = () => {
  const handleCopy = () => {
    // Copy VAT number to clipboard
    navigator.clipboard.writeText('603395831').then(() => {
      // Show toast notification
      toast.success('VAT number copied to clipboard');
    }).catch((error) => {
      toast.error('Failed to copy VAT number');
    });
  };

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        {/* Left Side */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-4 lg:mb-0 lg:mr-8">
          <div className="text-center lg:text-left">
            <p className="text-2xl font-bold mb-2">Kriti Print & Pack Industries</p>
            <p className="text-sm mb-2">Katahari, Biratnagar, Morang</p>
            <p className="text-sm mb-2 flex items-center">
              VAT No:
              <span
                className="ml-2 bg-gray-700 p-1 rounded cursor-pointer hover:bg-gray-600 flex items-center"
                onClick={handleCopy}
                title="Click to copy VAT number"
              >
                603395831
                <ClipboardCopyIcon className="w-5 h-5 inline ml-2" />
                <span className="text-xs ml-1">Copy to clipboard</span>
              </span>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-center lg:text-right lg:ml-auto">
          <p className="text-sm mb-2">&copy; 2024 Kriti Print & Pack Industries. All rights reserved.</p>
          <p className="text-sm">
            Follow us on{' '}
            <a href="https://twitter.com" className="text-blue-400 hover:underline">Twitter</a>{' '}
            |{' '}
            <a href="https://www.facebook.com/sweta.agrawal.3958" target="_blank" className="text-blue-400 hover:underline">Facebook</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

