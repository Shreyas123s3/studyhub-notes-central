import React, { useState, useEffect } from 'react';
import SubjectCard from './SubjectCard';
import ScrollReveal from './ScrollReveal';
import { useParallaxEffect } from '../hooks/useScrollAnimation';
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
  ArrowRight
} from 'lucide-react';

const SubjectGrid = () => {
  const [visibleCards, setVisibleCards] = useState(0);
  const parallaxOffset = useParallaxEffect(0.2);

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

  // Animation for showing cards
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards(prev => prev < subjects.length ? prev + 1 : prev);
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="subjects" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced 3D Background Effects with Parallax */}
      <div className="absolute inset-0">
        {/* Gradient overlays with parallax */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-600/20"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        ></div>
        
        {/* 3D Geometric shapes with enhanced parallax */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${parallaxOffset * 0.7}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          style={{ 
            animation: 'float 8s ease-in-out infinite',
            transform: `translateY(${parallaxOffset * 0.5}px)`
          }}
        ></div>
        
        {/* Enhanced floating particles with 3D effect and parallax */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full animate-float shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.2)',
              transform: `translateY(${parallaxOffset * (0.3 + Math.random() * 0.4)}px)`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header with Scroll Reveal */}
        <ScrollReveal direction="fade" delay={0.2}>
          <div className="text-center mb-20">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl hover:scale-105 transition-all duration-500 group">
                <div className="relative">
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <div className="absolute inset-0 w-4 h-4 animate-pulse opacity-50">
                    <span className="w-2 h-2 bg-cyan-300 rounded-full block mx-auto mt-1"></span>
                  </div>
                </div>
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-semibold">
                  {subjects.length} Subjects Available
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4}>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight text-center">
            Choose Your{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Subject
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-2xl -z-10 animate-pulse"></div>
            </span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.6}>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 text-center">
            Browse through our comprehensive collection of first-year engineering subjects. 
            Each subject contains <span className="text-cyan-300 font-semibold">carefully curated notes</span> and 
            study materials <span className="text-blue-300 font-semibold">reviewed by experts</span>.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.8}>
          {/* Interactive Preview Stats with enhanced styling */}
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-20">
            {[
              { label: 'Active Students', value: '2.5K+', color: 'from-blue-400 to-cyan-400' },
              { label: 'Success Rate', value: '94%', color: 'from-green-400 to-emerald-400' },
              { label: 'Updated Daily', value: '100%', color: 'from-purple-400 to-pink-400' }
            ].map((stat, index) => (
              <div key={stat.label} className="group">
                <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                  <div className={`text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-xs">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Subject Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {subjects.map((subject, index) => (
            <ScrollReveal 
              key={subject.id}
              direction="up" 
              delay={0.1 * index}
              className={`transition-all duration-700 ${
                index < visibleCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <SubjectCard {...subject} />
            </ScrollReveal>
          ))}
        </div>

        {/* Enhanced Stats Section with Scroll Reveal */}
        <ScrollReveal direction="up" delay={1.2}>
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-xl rounded-3xl px-12 py-8 shadow-2xl border border-white/30 hover:bg-white/15 transition-all duration-500 group hover:scale-105 hover:-translate-y-2">
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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SubjectGrid;
