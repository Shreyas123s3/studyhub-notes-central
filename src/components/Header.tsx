
import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="gradient-primary text-white px-3 py-1 rounded-lg font-bold text-xl">
              StudyHub
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#subjects" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-medium">
              All Subjects
            </a>
            <a href="#about" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#contact" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search subjects..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engineering-blue focus:border-transparent outline-none transition-all duration-300 w-64"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-text-dark hover:text-engineering-blue transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search subjects..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engineering-blue focus:border-transparent outline-none"
                />
              </div>
              <a href="#" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-medium py-2">
                Home
              </a>
              <a href="#subjects" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-medium py-2">
                All Subjects
              </a>
              <a href="#about" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-medium py-2">
                About
              </a>
              <a href="#contact" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-medium py-2">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
