
import React from 'react';
import SubjectCard from './SubjectCard';
import { 
  Terminal, 
  Zap, 
  Calculator, 
  BarChart3, 
  TrendingUp, 
  Cog, 
  Atom, 
  Network, 
  Code 
} from 'lucide-react';

const SubjectGrid = () => {
  const subjects = [
    {
      id: 'foc',
      name: 'Foundation of Computing',
      abbreviation: 'FOC',
      description: 'Programming fundamentals, algorithms, and computational thinking',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-blue-500',
      noteCount: 45
    },
    {
      id: 'linux',
      name: 'Linux',
      abbreviation: 'Linux',
      description: 'Operating systems, command line, and system administration',
      icon: <Terminal className="w-6 h-6" />,
      color: 'bg-gray-800',
      noteCount: 32
    },
    {
      id: 'eee',
      name: 'Electronics and Electrical Engineering',
      abbreviation: 'EEE',
      description: 'Circuit analysis, electronics principles, and electrical systems',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-yellow-500',
      noteCount: 58
    },
    {
      id: 'cde',
      name: 'Calculus and Differential Equations',
      abbreviation: 'CDE',
      description: 'Advanced mathematics, derivatives, integrals, and differential equations',
      icon: <Calculator className="w-6 h-6" />,
      color: 'bg-purple-500',
      noteCount: 67
    },
    {
      id: 'eds',
      name: 'Essentials of Data Science',
      abbreviation: 'EDS',
      description: 'Data analysis, statistics, and machine learning fundamentals',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-teal-500',
      noteCount: 41
    },
    {
      id: 'sic',
      name: 'Statistics and Integral Calculus',
      abbreviation: 'SIC',
      description: 'Statistical methods, probability, and integral calculus',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-green-500',
      noteCount: 39
    },
    {
      id: 'am',
      name: 'Applied Mechanics',
      abbreviation: 'AM',
      description: 'Statics, dynamics, and mechanical engineering principles',
      icon: <Cog className="w-6 h-6" />,
      color: 'bg-orange-500',
      noteCount: 52
    },
    {
      id: 'son',
      name: 'Science of Nature',
      abbreviation: 'SON',
      description: 'Environmental science, ecology, and natural phenomena',
      icon: <Atom className="w-6 h-6" />,
      color: 'bg-emerald-600',
      noteCount: 34
    },
    {
      id: 'ds',
      name: 'Discrete Structures',
      abbreviation: 'DS',
      description: 'Logic, sets, graphs, and discrete mathematical structures',
      icon: <Network className="w-6 h-6" />,
      color: 'bg-indigo-500',
      noteCount: 43
    },
    {
      id: 'physics',
      name: 'Physics',
      abbreviation: 'Physics',
      description: 'Mechanics, thermodynamics, waves, and modern physics',
      icon: <Atom className="w-6 h-6" />,
      color: 'bg-red-500',
      noteCount: 61
    }
  ];

  return (
    <section id="subjects" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Choose Your Subject
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our comprehensive collection of first-year engineering subjects. 
            Each subject contains carefully curated notes and study materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div key={subject.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <SubjectCard {...subject} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-lg px-6 py-4 shadow-sm">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-engineering-blue">472</span> total notes available
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="text-sm text-gray-600">
              Updated <span className="font-semibold">weekly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectGrid;
