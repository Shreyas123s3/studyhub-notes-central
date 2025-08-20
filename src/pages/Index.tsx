
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SubjectGrid from '../components/SubjectGrid';
import ColourfulText from '../components/ui/colourful-text';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SubjectGrid />
      
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
