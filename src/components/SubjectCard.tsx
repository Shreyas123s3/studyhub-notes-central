
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

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
    <div className="bg-white rounded-xl shadow-md card-hover p-6 border border-gray-100 group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${color} text-white group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">{noteCount} notes</div>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-text-dark mb-1 group-hover:text-engineering-blue transition-colors duration-300">
          {abbreviation}
        </h3>
        <h4 className="text-sm font-medium text-gray-600 mb-2">{name}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <button className="btn-primary text-sm flex items-center gap-2">
          <Download className="w-4 h-4" />
          View Notes
        </button>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-engineering-blue group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </div>
  );
};

export default SubjectCard;
