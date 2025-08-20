
import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, Zap, Star } from 'lucide-react';
import { useParallaxEffect } from '../hooks/useScrollAnimation';
import ScrollReveal from '../components/ScrollReveal';
import SampleNotesModal from './SampleNotesModal';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const parallaxOffset1 = useParallaxEffect(0.3);
  const parallaxOffset2 = useParallaxEffect(0.5);
  const parallaxOffset3 = useParallaxEffect(0.7);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Enhanced Animated Background with Parallax */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-cyan-600/30"></div>
        
        {/* Parallax floating orbs */}
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${parallaxOffset1}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" 
          style={{ 
            animation: 'pulse 4s infinite',
            transform: `translateY(${parallaxOffset2}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" 
          style={{ 
            animation: 'pulse 6s infinite',
            transform: `translate(-50%, -50%) translateY(${parallaxOffset3}px)`
          }}
        ></div>
        
        {/* Dynamic mouse-following gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent transition-all duration-300"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x / window.innerWidth * 100}% ${mousePosition.y / window.innerHeight * 100}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        >
        </div>
        
        {/* Enhanced floating particles with parallax */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
                transform: `translateY(${parallaxOffset1 * (0.5 + Math.random() * 0.5)}px)`,
                boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
              }}
            />
          ))}
        </div>

        {/* Advanced geometric shapes with parallax */}
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-cyan-400/30 rounded-3xl transform rotate-45"
          style={{ 
            transform: `rotate(45deg) translateY(${parallaxOffset2}px)`,
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-purple-400/40 rounded-full"
          style={{ 
            transform: `translateY(${parallaxOffset3}px)`,
            animation: 'float 12s ease-in-out infinite 2s'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
        {/* Enhanced Badge with Scroll Reveal */}
        <ScrollReveal direction="fade" delay={0.2}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium shadow-2xl hover:scale-105 transition-all duration-500 group">
              <div className="relative">
                <Sparkles className="w-4 h-4 animate-spin" />
                <div className="absolute inset-0 w-4 h-4 animate-pulse opacity-50">
                  <Star className="w-4 h-4" />
                </div>
              </div>
              <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent font-semibold">
                🎓 Free Engineering Resources
              </span>
              <Zap className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </ScrollReveal>
        
        {/* Enhanced Main Heading with Staggered Animation */}
        <ScrollReveal direction="up" delay={0.4}>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
            <span className="block text-white mb-4">
              Free Engineering Notes for
            </span>
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent relative">
              First-Year Students
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 blur-2xl -z-10 animate-pulse"></div>
            </span>
          </h1>
        </ScrollReveal>
        
        {/* Enhanced Description with Reveal Animation */}
        <ScrollReveal direction="up" delay={0.6}>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Download <span className="text-yellow-300 font-semibold">high-quality PDFs</span> for all your core subjects. 
            Everything you need to <span className="text-cyan-300 font-semibold">excel in your first year</span> of engineering - 
            completely <span className="text-green-300 font-semibold">free and always updated</span>.
          </p>
        </ScrollReveal>
        
        {/* Enhanced Action Buttons with Staggered Animation */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() =>
                document.getElementById("subjects")?.scrollIntoView({ 
                  behavior: "smooth" 
                })
              }
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center gap-3">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <span>Browse Subjects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
            
            <SampleNotesModal />
          </div>
        </ScrollReveal>

        {/* Enhanced Trust Indicators with Staggered Reveal */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200">
          {[
            { text: 'Always Updated', icon: '🔄' },
            { text: 'No Registration Required', icon: '🚀' },
            { text: 'Instant Downloads', icon: '⚡' }
          ].map((item, index) => (
            <ScrollReveal key={item.text} direction="up" delay={1.0 + index * 0.2}>
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-sm">{item.icon}</span>
                  </div>
                  <div className="absolute inset-0 w-8 h-8 bg-green-400 rounded-full opacity-20 animate-ping"></div>
                </div>
                <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">{item.text}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
