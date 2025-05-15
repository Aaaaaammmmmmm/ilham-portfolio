
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary-700">Muhammad Ilham</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium">
            About
          </a>
          <a href="#technologies" className="text-gray-700 hover:text-primary-600 font-medium">
            Technologies
          </a>
          <a href="#projects" className="text-gray-700 hover:text-primary-600 font-medium">
            Projects
          </a>
          <a href="#contact">
            <Button className="rounded-full">Contact Me</Button>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in-up">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#technologies" 
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Technologies
            </a>
            <a 
              href="#projects" 
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full rounded-full">Contact Me</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
