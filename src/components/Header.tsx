
import React, { useState } from 'react';
import { Search, Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="glassmorphism backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 floating-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <div className="btn-3d gradient-primary text-white px-6 py-3 rounded-xl font-bold text-xl shadow-lg flex items-center gap-3 neon-glow hover-scale-3d">
              <Sparkles className="w-6 h-6 animate-rotate3d" />
              <span className="text-3d">StudyHub</span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {['Home', 'All Subjects', 'About', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '')}`} 
                className={`text-text-dark hover:text-engineering-blue transition-all duration-300 font-semibold relative group btn-3d px-4 py-2 rounded-lg glassmorphism-dark hover-scale-3d delay-${index + 1}`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-engineering-blue to-tech-cyan transition-all duration-500 group-hover:w-full neon-glow"></span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-lg transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Enhanced Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-engineering-blue group-focus-within:animate-pulse3d transition-all duration-300" />
              <input
                type="text"
                placeholder="Search subjects..."
                className="pl-14 pr-6 py-4 glassmorphism border border-white/20 rounded-xl focus:ring-2 focus:ring-engineering-blue/30 focus:border-engineering-blue/50 outline-none transition-all duration-300 w-80 hover:w-96 focus:w-96 backdrop-blur-xl hover-scale-3d text-text-dark placeholder-gray-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 hover:from-blue-500/5 hover:to-cyan-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden btn-3d glassmorphism p-3 text-text-dark hover:text-engineering-blue transition-all duration-300 rounded-lg hover-scale-3d neon-glow"
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-white/10 animate-fade-in glassmorphism backdrop-blur-xl rounded-b-xl mx-4 -mx-4 mt-4">
            <nav className="flex flex-col space-y-6 px-6">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search subjects..."
                  className="w-full pl-14 pr-6 py-4 glassmorphism border border-white/20 rounded-xl focus:ring-2 focus:ring-engineering-blue/30 focus:border-engineering-blue/50 outline-none backdrop-blur-xl hover-scale-3d"
                />
              </div>
              {['Home', 'All Subjects', 'About', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '')}`} 
                  className={`text-text-dark hover:text-engineering-blue transition-all duration-300 font-semibold py-3 px-4 rounded-lg glassmorphism-dark hover-scale-3d delay-${index + 1} block`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
      
      {/* Header Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/5 to-blue-500/0 pointer-events-none"></div>
    </header>
  );
};

export default Header;
