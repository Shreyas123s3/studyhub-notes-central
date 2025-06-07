
import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, Zap, Star } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-cyan-600/30"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" style={{ animation: 'pulse 4s infinite' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" style={{ animation: 'pulse 6s infinite' }}></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent" 
             style={{
               backgroundImage: `radial-gradient(circle at ${mousePosition.x / window.innerWidth * 100}% ${mousePosition.y / window.innerHeight * 100}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
             }}>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="animate-fade-in">
          {/* Enhanced Badge */}
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
          
          {/* Enhanced Main Heading */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
            <span className="block text-white mb-4">
              Free Engineering Notes for
            </span>
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent relative">
              First-Year Students
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 blur-2xl -z-10"></div>
            </span>
          </h1>
          
          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Download <span className="text-yellow-300 font-semibold">high-quality PDFs</span> for all your core subjects. 
            Everything you need to <span className="text-cyan-300 font-semibold">excel in your first year</span> of engineering - 
            completely <span className="text-green-300 font-semibold">free and always updated</span>.
          </p>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center gap-3">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <span>Browse Subjects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
            
            <button className="group relative overflow-hidden border-2 border-white/50 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-500 backdrop-blur-sm hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>View Sample Notes</span>
              </div>
            </button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200">
            {[
              { text: 'Always Updated', icon: '🔄' },
              { text: 'No Registration Required', icon: '🚀' },
              { text: 'Instant Downloads', icon: '⚡' }
            ].map((item, index) => (
              <div key={item.text} className="flex items-center gap-3 group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-sm">{item.icon}</span>
                  </div>
                  <div className="absolute inset-0 w-8 h-8 bg-green-400 rounded-full opacity-20 animate-ping"></div>
                </div>
                <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Floating Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '10+', label: 'Core Subjects', icon: '📚' },
              { number: '500+', label: 'Study Materials', icon: '📄' },
              { number: '24/7', label: 'Access Available', icon: '🕒' }
            ].map((stat, index) => (
              <div key={stat.label} className="group">
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(5px) rotate(-5deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
