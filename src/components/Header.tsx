
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Zap } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      // Assuming hero section is roughly viewport height (around 80vh = ~600px on average screen)
      setIsScrolledPastHero(scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-2xl shadow-2xl border-b border-white/30' 
        : 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
    } ${
      isScrolledPastHero 
        ? 'scale-90 origin-top' 
        : 'scale-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-center items-center transition-all duration-700 ${
          isScrolledPastHero ? 'h-14' : 'h-20'
        }`}>
          {/* Enhanced Centered Logo with advanced glow effect */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-engineering-blue via-tech-cyan to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
            <div className={`relative gradient-primary text-white rounded-3xl font-bold shadow-2xl flex items-center gap-4 group-hover:scale-110 transition-all duration-500 overflow-hidden ${
              isScrolledPastHero 
                ? 'px-6 py-2 text-lg' 
                : 'px-8 py-4 text-2xl'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center gap-4">
                <div className="relative">
                  <Sparkles className={`animate-pulse transition-all duration-700 ${
                    isScrolledPastHero ? 'w-5 h-5' : 'w-7 h-7'
                  }`} />
                  <div className={`absolute inset-0 animate-ping opacity-20 transition-all duration-700 ${
                    isScrolledPastHero ? 'w-5 h-5' : 'w-7 h-7'
                  }`}>
                    <Zap className={`transition-all duration-700 ${
                      isScrolledPastHero ? 'w-5 h-5' : 'w-7 h-7'
                    }`} />
                  </div>
                </div>
                <span className="bg-gradient-to-r from-yellow-200 via-white to-cyan-200 bg-clip-text text-transparent">
                  StudyHub
                </span>
                <div className={`bg-cyan-300 rounded-full animate-bounce transition-all duration-700 ${
                  isScrolledPastHero ? 'w-1.5 h-1.5' : 'w-2 h-2'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
              animation: `float ${4 + i * 0.5}s ease-in-out infinite ${i * 0.2}s`,
              boxShadow: '0 0 8px rgba(59, 130, 246, 0.4)'
            }}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
