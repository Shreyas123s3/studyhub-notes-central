
import React from 'react';
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
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-7 border border-gray-100 cursor-pointer transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`p-4 rounded-xl ${color} text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
            {icon}
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              <Clock className="w-3 h-3" />
              {noteCount} notes
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-text-dark mb-2 group-hover:text-engineering-blue transition-colors duration-300">
            {abbreviation}
          </h3>
          <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">{name}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <button className="group/btn bg-gradient-to-r from-engineering-blue to-tech-cyan text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
            View Notes
          </button>
          <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-engineering-blue/10 transition-colors duration-300">
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-engineering-blue group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-engineering-blue/5 to-tech-cyan/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default SubjectCard;
