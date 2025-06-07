
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
    <section id="subjects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-engineering-blue/10 text-engineering-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-engineering-blue rounded-full"></span>
            10 Core Subjects Available
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
            Choose Your <span className="bg-gradient-to-r from-engineering-blue to-tech-cyan bg-clip-text text-transparent">Subject</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse through our comprehensive collection of first-year engineering subjects. 
            Each subject contains carefully curated notes and study materials reviewed by experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <div key={subject.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <SubjectCard {...subject} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-engineering-blue to-tech-cyan rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">472</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-text-dark">Total Notes</div>
                <div className="text-sm text-gray-500">Ready to download</div>
              </div>
            </div>
            
            <div className="w-px h-12 bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-success-green to-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-text-dark">Weekly Updates</div>
                <div className="text-sm text-gray-500">Fresh content added</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectGrid;
