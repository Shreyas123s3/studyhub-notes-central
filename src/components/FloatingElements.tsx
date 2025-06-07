
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg animate-float3d delay-1 opacity-20 blur-sm"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45 animate-float3d delay-3 opacity-25"></div>
      <div className="absolute top-60 left-1/4 w-4 h-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-pulse3d delay-2 opacity-30"></div>
      <div className="absolute bottom-40 right-1/3 w-10 h-10 border-2 border-emerald-400 rounded-lg animate-rotate3d opacity-20"></div>
      <div className="absolute bottom-20 left-1/2 w-7 h-7 bg-gradient-to-r from-orange-400 to-pink-500 transform -rotate-12 animate-morph delay-4 opacity-25"></div>
      
      {/* Larger Background Elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-float3d"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float3d delay-5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse3d delay-3"></div>
      
      {/* Mathematical Symbols */}
      <div className="absolute top-32 right-40 text-2xl text-blue-400/30 animate-float3d delay-2 font-bold">∑</div>
      <div className="absolute bottom-32 left-40 text-xl text-purple-400/30 animate-float3d delay-4 font-bold">∫</div>
      <div className="absolute top-1/2 right-1/4 text-lg text-cyan-400/30 animate-float3d delay-1 font-bold">π</div>
      <div className="absolute bottom-1/3 left-1/3 text-xl text-emerald-400/30 animate-float3d delay-5 font-bold">∆</div>
      <div className="absolute top-1/4 left-1/5 text-lg text-pink-400/30 animate-float3d delay-3 font-bold">∞</div>
      
      {/* Code Snippets */}
      <div className="absolute top-24 left-2/3 text-sm text-green-400/25 animate-float3d delay-2 font-mono opacity-40">
        {'<div>'}
      </div>
      <div className="absolute bottom-24 right-1/5 text-sm text-blue-400/25 animate-float3d delay-4 font-mono opacity-40">
        {'console.log()'}
      </div>
      <div className="absolute top-2/3 left-1/6 text-sm text-purple-400/25 animate-float3d delay-1 font-mono opacity-40">
        {'function()'}
      </div>
      
      {/* Circuit Elements */}
      <div className="absolute top-16 right-1/3 w-12 h-1 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 animate-circuit"></div>
      <div className="absolute bottom-16 left-1/4 w-1 h-12 bg-gradient-to-b from-cyan-400/30 to-blue-400/30 animate-circuit delay-2"></div>
      <div className="absolute top-1/3 right-1/6 w-8 h-8 border border-emerald-400/30 rounded-full animate-pulse3d delay-3">
        <div className="w-2 h-2 bg-emerald-400/50 rounded-full m-auto mt-2.5 animate-pulse"></div>
      </div>
      
      {/* 3D Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
      </div>
      
      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float3d delay-${(i % 5) + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingElements;
