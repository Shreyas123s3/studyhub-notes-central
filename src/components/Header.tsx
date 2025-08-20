
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Zap } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-second-color/90 backdrop-blur-2xl shadow-2xl border-b border-fourth-color/30' 
        : 'bg-second-color/95 backdrop-blur-xl shadow-lg border-b border-fourth-color/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          {/* Enhanced Centered Logo with new color palette */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-first-color via-third-color to-fourth-color rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-first-color via-third-color to-fourth-color text-gray-800 px-8 py-4 rounded-3xl font-bold text-2xl shadow-2xl flex items-center gap-4 group-hover:scale-110 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center gap-4">
                <div className="relative">
                  <Sparkles className="w-7 h-7 animate-pulse text-gray-700" />
                  <div className="absolute inset-0 w-7 h-7 animate-ping opacity-20">
                    <Zap className="w-7 h-7 text-gray-700" />
                  </div>
                </div>
                <span className="text-gray-800 font-bold">
                  StudyHub
                </span>
                <div className="w-2 h-2 bg-first-color rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced floating particles effect with new colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-first-color to-third-color rounded-full opacity-30"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
              animation: `float ${4 + i * 0.5}s ease-in-out infinite ${i * 0.2}s`,
              boxShadow: '0 0 8px rgba(166, 228, 231, 0.4)'
            }}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
