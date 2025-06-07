
import React, { useState } from 'react';
import { Search, Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="gradient-primary text-white px-4 py-2 rounded-xl font-bold text-xl shadow-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              StudyHub
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-text-dark hover:text-engineering-blue transition-all duration-300 font-semibold relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-engineering-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#subjects" className="text-text-dark hover:text-engineering-blue transition-all duration-300 font-semibold relative group">
              All Subjects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-engineering-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-text-dark hover:text-engineering-blue transition-all duration-300 font-semibold relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-engineering-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-text-dark hover:text-engineering-blue transition-all duration-300 font-semibold relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-engineering-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-engineering-blue transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search subjects..."
                className="pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-engineering-blue/20 focus:border-engineering-blue outline-none transition-all duration-300 w-72 bg-gray-50/50 hover:bg-white focus:bg-white"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-text-dark hover:text-engineering-blue transition-colors duration-300 rounded-lg hover:bg-gray-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 animate-fade-in bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-6">
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search subjects..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-engineering-blue/20 focus:border-engineering-blue outline-none bg-gray-50/50"
                />
              </div>
              <a href="#" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-semibold py-2">
                Home
              </a>
              <a href="#subjects" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-semibold py-2">
                All Subjects
              </a>
              <a href="#about" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-semibold py-2">
                About
              </a>
              <a href="#contact" className="text-text-dark hover:text-engineering-blue transition-colors duration-300 font-semibold py-2">
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
