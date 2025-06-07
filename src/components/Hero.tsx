
import React from 'react';
import FloatingElements from './FloatingElements';

const Hero = () => {
  return (
    <section className="gradient-primary text-white py-32 px-4 relative overflow-hidden scene-3d">
      <FloatingElements />
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float3d"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-xl animate-float3d delay-3"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/15 rounded-full blur-2xl animate-pulse3d delay-2"></div>
      
      {/* Holographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block glassmorphism text-white px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm hover-scale-3d">
              <span className="mr-2 animate-pulse">🎓</span>
              Free Engineering Resources
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-10 leading-tight text-3d">
            <span className="block animate-float3d">Free Engineering Notes for</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-holographic delay-1">
              First-Year Students
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-14 text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-2">
            Download high-quality PDFs for all your core subjects. Everything you need to excel in your first year of engineering - completely free and always updated.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <button className="group btn-3d glassmorphism text-white px-12 py-6 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover-scale-3d flex items-center gap-3 neon-glow">
              <span>Browse Subjects</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 animate-float3d" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button className="group btn-3d border-2 border-white/50 glassmorphism text-white px-12 py-6 rounded-xl font-bold text-lg hover:border-white hover-scale-3d backdrop-blur-sm flex items-center gap-3">
              <span>View Sample Notes</span>
              <svg className="w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-pulse3d" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-12 text-blue-200 animate-fade-in delay-3">
            <div className="flex items-center gap-3 glassmorphism px-6 py-3 rounded-full hover-scale-3d">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse3d neon-glow"></div>
              <span className="text-sm font-medium">Always Updated</span>
            </div>
            <div className="flex items-center gap-3 glassmorphism px-6 py-3 rounded-full hover-scale-3d delay-1">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse3d neon-glow"></div>
              <span className="text-sm font-medium">No Registration Required</span>
            </div>
            <div className="flex items-center gap-3 glassmorphism px-6 py-3 rounded-full hover-scale-3d delay-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse3d neon-glow"></div>
              <span className="text-sm font-medium">Instant Downloads</span>
            </div>
          </div>
          
          {/* Floating 3D Elements */}
          <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rounded-lg animate-rotate3d opacity-30"></div>
          <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full animate-float3d delay-4"></div>
          <div className="absolute bottom-32 left-1/4 w-8 h-20 bg-gradient-to-t from-purple-500/20 to-pink-500/20 rounded-lg animate-float3d delay-2"></div>
          <div className="absolute bottom-20 right-1/4 text-4xl text-white/20 animate-rotate3d delay-5">⚡</div>
        </div>
      </div>
      
      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default Hero;
