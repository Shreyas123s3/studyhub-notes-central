
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-white/20' 
        : 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo with glow effect */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-engineering-blue via-tech-cyan to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative gradient-primary text-white px-6 py-3 rounded-2xl font-bold text-xl shadow-2xl flex items-center gap-3 group-hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                  <div className="absolute inset-0 w-6 h-6 animate-ping opacity-20">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                  StudyHub
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'All Subjects', 'About', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '')}`} 
                className="relative text-text-dark hover:text-engineering-blue transition-all duration-500 font-semibold group py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-engineering-blue to-tech-cyan transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-engineering-blue/10 to-tech-cyan/10 rounded-lg transition-all duration-500 group-hover:w-full -z-10"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 text-text-dark hover:text-engineering-blue transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 group"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-gradient-to-r from-gray-100 to-purple-100 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-xl rounded-b-3xl animate-fade-in">
            <nav className="flex flex-col space-y-6">
              {['Home', 'All Subjects', 'About', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '')}`}
                  className="relative text-text-dark hover:text-engineering-blue transition-all duration-500 font-semibold py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-engineering-blue to-tech-cyan transition-all duration-500 group-hover:w-8 transform -translate-y-1/2"></span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-25" style={{ animation: 'pulse 3s infinite' }}></div>
      </div>
    </header>
  );
};

export default Header;
