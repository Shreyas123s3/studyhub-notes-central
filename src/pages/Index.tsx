
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
      
      {/* The Team Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
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
