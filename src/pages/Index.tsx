
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SubjectGrid from '../components/SubjectGrid';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden scene-3d">
      <FloatingElements />
      <Header />
      <Hero />
      <SubjectGrid />
    </div>
  );
};

export default Index;
