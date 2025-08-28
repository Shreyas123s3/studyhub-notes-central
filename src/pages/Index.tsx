import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SubjectGrid from '../components/SubjectGrid';
import ColourfulText from '../components/ui/colourful-text';
import TeamCarousel from '../components/ui/testimonial';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SubjectGrid />
      
      {/* The Team Section */}
      <section id="team" className="relative w-full py-10 md:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <h2 className="text-center text-4xl font-extrabold mb-8 md:mb-10">
            The Team
          </h2>
          {/* The carousel fills ~80% of this section; keep background transparent */}
          <TeamCarousel />
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
