
import React from 'react';
import { Download, Clock, Shield, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Instant Downloads',
      description: 'Download PDFs instantly with a single click. No registration required.',
      color: 'bg-blue-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Always Updated',
      description: 'Fresh content added weekly. Stay current with the latest materials.',
      color: 'bg-green-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'All notes are reviewed by experts and fellow engineering students.',
      color: 'bg-purple-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Friendly',
      description: 'Access notes from any device. Optimized for mobile and tablet viewing.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Why Choose StudyHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've designed the perfect platform for engineering students to access high-quality study materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`${feature.color} text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
