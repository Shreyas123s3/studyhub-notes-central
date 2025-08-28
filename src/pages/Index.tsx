
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SubjectGrid from '../components/SubjectGrid';
import ColourfulText from '../components/ui/colourful-text';
import Component from '../components/ui/testimonial';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SubjectGrid />
      
      {/* The Team Section - Reduced height by 50% and matching background */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background particles/dots animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-50">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-cyan-300/25 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
            <div className="absolute bottom-1/4 left-1/6 w-2 h-2 bg-blue-300/20 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-purple-300/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              The{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Team
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-2xl -z-10 animate-pulse"></div>
              </span>
            </h2>
          </div>
          
          <Component />
        </div>
      </section>
      
      {/* Footer with animated text */}
      <footer className="py-8 text-center">
        <div className="text-4xl font-medium">
          <ColourfulText text="Built by Declutters" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
