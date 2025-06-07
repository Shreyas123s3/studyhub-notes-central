
import React from 'react';
import { BookOpen, Download, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="gradient-primary text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Free Engineering Notes for
            <span className="block text-yellow-300">First-Year Students</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Download high-quality PDFs for all your core subjects. Everything you need to excel in your first year of engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-engineering-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              Browse Subjects
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-engineering-blue transition-all duration-300">
              View Sample Notes
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold mb-1">10</div>
              <div className="text-blue-200">Core Subjects</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Download className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-blue-200">PDF Notes</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold mb-1">10K+</div>
              <div className="text-blue-200">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
