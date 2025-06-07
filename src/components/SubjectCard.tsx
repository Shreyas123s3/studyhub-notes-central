
import React, { useState } from 'react';
import { ArrowRight, Download, Clock } from 'lucide-react';

interface SubjectCardProps {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  noteCount: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  id,
  name,
  abbreviation,
  description,
  icon,
  color,
  noteCount
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getSubjectAnimation = (id: string) => {
    switch (id) {
      case 'foc': return 'animate-binary';
      case 'linux': return 'animate-wave';
      case 'eee': return 'animate-circuit';
      default: return 'animate-float3d';
    }
  };

  return (
    <div 
      className="group card-3d glassmorphism p-8 rounded-2xl cursor-pointer relative overflow-hidden gpu-accelerated"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(false)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Holographic Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-holographic"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
      
      {/* Content Container */}
      <div className="relative z-10 transform-gpu">
        <div className="flex items-start justify-between mb-8">
          <div className={`p-5 rounded-xl ${color} text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl neon-glow ${getSubjectAnimation(id)} relative overflow-hidden`}>
            <div className="relative z-10">
              {icon}
            </div>
            {/* Icon Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-2 text-sm text-gray-500 glassmorphism px-4 py-2 rounded-full hover-scale-3d">
              <Clock className="w-4 h-4 animate-pulse3d" />
              <span className="font-medium">{noteCount} notes</span>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-text-dark mb-3 group-hover:text-engineering-blue transition-all duration-300 text-3d animate-float3d">
            {abbreviation}
          </h3>
          <h4 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider animate-fade-in delay-1">{name}</h4>
          <p className="text-gray-600 text-sm leading-relaxed animate-fade-in delay-2">{description}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <button className="group/btn btn-3d bg-gradient-to-r from-engineering-blue to-tech-cyan text-white px-8 py-4 rounded-xl font-semibold text-sm flex items-center gap-3 hover:shadow-2xl transition-all duration-300 hover-scale-3d neon-glow">
            <Download className="w-5 h-5 group-hover/btn:animate-bounce group-hover/btn:scale-110 transition-all duration-300" />
            <span>View Notes</span>
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 rounded-xl"></div>
          </button>
          
          <div className="btn-3d p-4 rounded-xl glassmorphism group-hover:bg-engineering-blue/20 transition-all duration-300 hover-scale-3d">
            <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-engineering-blue group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 animate-float3d" />
          </div>
        </div>
      </div>
      
      {/* Subject-Specific Background Elements */}
      {id === 'foc' && (
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="text-green-400 text-xs font-mono absolute top-4 right-4 animate-binary">01001</div>
          <div className="text-green-400 text-xs font-mono absolute bottom-8 left-4 animate-binary delay-2">11010</div>
        </div>
      )}
      
      {id === 'eee' && (
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-circuit"></div>
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-circuit delay-1"></div>
        </div>
      )}
      
      {(id === 'cde' || id === 'sic') && (
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <div className="absolute top-4 right-4 text-purple-400 text-lg animate-float3d">∫</div>
          <div className="absolute bottom-4 left-4 text-blue-400 text-lg animate-float3d delay-2">∑</div>
          <div className="absolute top-1/2 left-1/2 text-cyan-400 text-sm animate-pulse3d">π</div>
        </div>
      )}
      
      {id === 'physics' && (
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-4 right-4 w-8 h-8 border-2 border-red-400 rounded-full animate-rotate3d">
            <div className="w-2 h-2 bg-red-400 rounded-full m-auto mt-2.5 animate-pulse3d"></div>
          </div>
          <div className="absolute bottom-4 left-4 text-orange-400 text-lg animate-wave">⚡</div>
        </div>
      )}
      
      {/* Floating Decorative Elements */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-engineering-blue/5 to-tech-cyan/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse3d"></div>
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float3d delay-3"></div>
      
      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float3d"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SubjectCard;
