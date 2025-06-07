
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
    <section id="subjects" className="py-24 relative overflow-hidden scene-3d">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float3d"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 rounded-full blur-3xl animate-float3d delay-4"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/3 to-blue-500/3 rounded-full blur-3xl animate-pulse3d delay-2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 glassmorphism text-engineering-blue px-6 py-3 rounded-full text-sm font-medium mb-8 hover-scale-3d neon-glow">
            <span className="w-3 h-3 bg-engineering-blue rounded-full animate-pulse3d"></span>
            10 Core Subjects Available
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-text-dark mb-8 leading-tight text-3d">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-engineering-blue via-purple-500 to-tech-cyan bg-clip-text text-transparent animate-holographic">
              Subject
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-2">
            Browse through our comprehensive collection of first-year engineering subjects. 
            Each subject contains carefully curated notes and study materials reviewed by experts.
          </p>
        </div>

        {/* 3D Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-1000">
          {subjects.map((subject, index) => (
            <div 
              key={subject.id} 
              className="animate-scale-in gpu-accelerated" 
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateZ(${index % 2 === 0 ? '0px' : '20px'})`,
              }}
            >
              <SubjectCard {...subject} />
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-12 glassmorphism rounded-2xl px-12 py-8 shadow-2xl border border-white/20 hover-scale-3d backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-engineering-blue to-tech-cyan rounded-full flex items-center justify-center shadow-lg animate-pulse3d neon-glow">
                <span className="text-white font-bold text-xl text-3d">472</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-text-dark text-lg">Total Notes</div>
                <div className="text-sm text-gray-500">Ready to download</div>
              </div>
            </div>
            
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-success-green to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse3d neon-glow delay-2">
                <svg className="w-8 h-8 text-white animate-float3d" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-text-dark text-lg">Weekly Updates</div>
                <div className="text-sm text-gray-500">Fresh content added</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Mathematical Elements */}
        <div className="absolute top-32 right-20 text-4xl text-blue-400/20 animate-float3d delay-1">∑</div>
        <div className="absolute bottom-32 left-20 text-3xl text-purple-400/20 animate-float3d delay-3">∫</div>
        <div className="absolute top-1/2 right-1/4 text-2xl text-cyan-400/20 animate-rotate3d delay-2">π</div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl text-emerald-400/20 animate-float3d delay-5">∆</div>
      </div>
    </section>
  );
};

export default SubjectGrid;
