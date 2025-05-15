
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Muhammad Ilham. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm">
              Home
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
