import React, { useState, useEffect } from 'react';
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
  Code,
  Sparkles,
  ArrowRight,
  Search,
  X
} from 'lucide-react';

const SubjectGrid = () => {
  const [visibleCards, setVisibleCards] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSubjects, setFilteredSubjects] = useState([]);

  const subjects = [
    {
      id: 'foc',
      name: 'Foundation of Computing',
      abbreviation: 'FOC',
      description: 'Programming fundamentals, algorithms, and computational thinking for modern software development',
      icon: <Code className="w-7 h-7" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      noteCount: 45
    },
    {
      id: 'linux',
      name: 'Linux',
      abbreviation: 'Linux',
      description: 'Operating systems, command line mastery, and advanced system administration techniques',
      icon: <Terminal className="w-7 h-7" />,
      color: 'bg-gradient-to-br from-gray-800 to-gray-900',
      noteCount: 32
    },
    {
      id: 'eee',
      name: 'Electronics and Electrical Engineering',
      abbreviation: 'EEE',
      description: 'Circuit analysis, electronics principles, and cutting-edge electrical systems design',
      icon: <Zap className="w-7 h-7" />,
      color: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      noteCount: 58
    },
    {
      id: 'cde',
      name: 'Calculus and Differential Equations',
      abbreviation: 'CDE',
      description: 'Advanced mathematics, derivatives, integrals, and complex differential equation solving',
      icon: <Calculator className="w-7 h-7" />,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      noteCount: 67
    },
    {
      id: 'eds',
      name: 'Essentials of Data Science',
      abbreviation: 'EDS',
      description: 'Data analysis, statistics, machine learning fundamentals, and predictive modeling',
      icon: <BarChart3 className="w-7 h-7" />,
      color: 'bg-gradient-to-br from-teal-500 to-cyan-500',
      noteCount: 41
    },
    {
      id: 'sic',
      name: 'Statistics and Integral Calculus',
      abbreviation: 'SIC',
      description: 'Statistical methods, probability theory, and advanced integral calculus applications',
      icon: <TrendingUp className="w-7 h-7" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      noteCount: 39
    },
    {
      id: 'am',
      name: 'Applied Mechanics',
      abbreviation: 'AM',
      description: 'Statics, dynamics, and mechanical engineering principles for real-world applications',
      icon: <Cog className="w-7 h-7" />,
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      noteCount: 52
    },
    {
      id: 'son',
      name: 'Science of Nature',
      abbreviation: 'SON',
      description: 'Environmental science, ecology, and natural phenomena understanding',
      icon: <Atom className="w-7 h-7" />,
      color: 'bg-gradient-to-br from-emerald-600 to-green-600',
      noteCount: 34
    },
    {
      id: 'ds',
      name: 'Discrete Structures',
      abbreviation: 'DS',
      description: 'Logic, sets, graphs, and discrete mathematical structures for computer science',
      icon: <Network className="w-7 h-7" />,
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500',
      noteCount: 43
    },
    {
      id: 'physics',
      name: 'Physics',
      abbreviation: 'Physics',
      description: 'Mechanics, thermodynamics, waves, quantum physics, and modern physics concepts',
      icon: <Atom className="w-7 h-7" />,
      color: 'bg-gradient-to-br from-red-500 to-pink-500',
      noteCount: 61
    }
  ];

  // Filter subjects based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredSubjects(subjects);
    } else {
      const filtered = subjects.filter(subject =>
        subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.abbreviation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSubjects(filtered);
    }
  }, [searchQuery]);

  // Reset animation when search results change
  useEffect(() => {
    setVisibleCards(0);
    const timer = setInterval(() => {
      setVisibleCards(prev => prev < filteredSubjects.length ? prev + 1 : prev);
    }, 200);

    return () => clearInterval(timer);
  }, [filteredSubjects]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section id="subjects" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-600/20"></div>
        
        {/* 3D Geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl" style={{ animation: 'float 12s ease-in-out infinite 2s' }}></div>
        
        {/* 3D Cube Elements */}
        <div className="absolute top-32 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 transform rotate-45 rounded-lg blur-sm" style={{ animation: 'float 10s ease-in-out infinite 1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 transform rotate-12 rounded-xl blur-lg" style={{ animation: 'float 14s ease-in-out infinite 3s' }}></div>
        <div className="absolute top-2/3 right-20 w-20 h-20 bg-gradient-to-br from-purple-400/40 to-pink-400/40 transform -rotate-12 rounded-lg blur-sm" style={{ animation: 'float 9s ease-in-out infinite 4s' }}></div>
        
        {/* 3D Pyramid/Triangle shapes */}
        <div className="absolute top-1/4 left-1/2 w-0 h-0 border-l-16 border-r-16 border-b-24 border-transparent border-b-blue-400/20 blur-sm" style={{ animation: 'float 11s ease-in-out infinite 2.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-0 h-0 border-l-20 border-r-20 border-b-32 border-transparent border-b-purple-400/20 blur-md" style={{ animation: 'float 13s ease-in-out infinite 1.5s' }}></div>
        
        {/* 3D Hexagon shapes */}
        <div className="absolute top-1/3 left-16 w-16 h-16 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 transform rotate-45 rounded-full blur-sm" style={{ animation: 'float 15s ease-in-out infinite 3.5s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-20 h-20 bg-gradient-to-r from-purple-400/25 to-pink-400/25 transform -rotate-30 rounded-lg blur-md" style={{ animation: 'float 16s ease-in-out infinite 4.5s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
        
        {/* Enhanced floating particles with 3D effect */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full animate-float shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.2)'
            }}
          />
        ))}
        
        {/* 3D Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(20deg)',
            transformOrigin: 'center bottom'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header with better contrast for dark background */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="relative mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl hover:scale-105 transition-all duration-500 group">
              <div className="relative">
                <Sparkles className="w-4 h-4 animate-spin" />
                <div className="absolute inset-0 w-4 h-4 animate-pulse opacity-50">
                  <span className="w-2 h-2 bg-cyan-300 rounded-full block mx-auto mt-1"></span>
                </div>
              </div>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-semibold">
                {filteredSubjects.length} {filteredSubjects.length === 1 ? 'Subject' : 'Subjects'} Available
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Choose Your{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Subject
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-2xl -z-10 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Browse through our comprehensive collection of first-year engineering subjects. 
            Each subject contains <span className="text-cyan-300 font-semibold">carefully curated notes</span> and 
            study materials <span className="text-blue-300 font-semibold">reviewed by experts</span>.
          </p>

          {/* Search Bar with enhanced styling for dark background */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center">
                  <div className="pl-6">
                    <Search className="w-6 h-6 text-blue-200 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search subjects by name, abbreviation, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-6 px-6 bg-transparent text-white placeholder-blue-200 focus:outline-none focus:ring-0 text-lg"
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="pr-6 hover:scale-110 transition-transform duration-300"
                    >
                      <X className="w-5 h-5 text-blue-200 hover:text-red-400" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {searchQuery && (
              <div className="mt-4 text-sm text-blue-200">
                {filteredSubjects.length === 0 ? (
                  <p className="text-red-300">No subjects found matching "{searchQuery}"</p>
                ) : (
                  <p>
                    Found {filteredSubjects.length} {filteredSubjects.length === 1 ? 'subject' : 'subjects'} matching "{searchQuery}"
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Interactive Preview Stats with enhanced styling */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { label: 'Active Students', value: '2.5K+', color: 'from-blue-400 to-cyan-400' },
              { label: 'Success Rate', value: '94%', color: 'from-green-400 to-emerald-400' },
              { label: 'Updated Daily', value: '100%', color: 'from-purple-400 to-pink-400' }
            ].map((stat, index) => (
              <div key={stat.label} className="group">
                <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className={`text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-xs">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Grid - keep existing code */}
        {filteredSubjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {filteredSubjects.map((subject, index) => (
              <div 
                key={subject.id} 
                className={`transition-all duration-700 ${
                  index < visibleCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <SubjectCard {...subject} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-white/20 to-blue-200/30 rounded-full flex items-center justify-center backdrop-blur-lg">
              <Search className="w-12 h-12 text-blue-200" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No subjects found</h3>
            <p className="text-blue-200 mb-6">Try adjusting your search terms or browse all subjects.</p>
            <button
              onClick={clearSearch}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              Show All Subjects
            </button>
          </div>
        )}

        {/* Enhanced Stats Section with updated styling */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-xl rounded-3xl px-12 py-8 shadow-2xl border border-white/30 hover:bg-white/15 transition-all duration-500 group">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <span className="text-white font-bold text-xl">472</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-lg">Total Notes</div>
                <div className="text-sm text-blue-200">Ready to download instantly</div>
              </div>
            </div>
            
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <Sparkles className="w-8 h-8 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-lg">Weekly Updates</div>
                <div className="text-sm text-blue-200">Fresh content added regularly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectGrid;
