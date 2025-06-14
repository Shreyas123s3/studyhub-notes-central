
import React, { useState } from 'react';
import { ArrowRight, Download, Clock, Star, BookOpen, TrendingUp } from 'lucide-react';
import SubjectNotes from './SubjectNotes';
import { getNotesForSubject, getNotesCount } from '../data/notesData';

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
  const [isHovered, setIsHovered] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const actualNotesCount = getNotesCount(id);
  const hasNotes = actualNotesCount > 0;

  const handleViewNotes = () => {
    if (hasNotes) {
      setShowNotes(true);
    } else {
      // You can show a toast or message that notes will be available soon
      console.log(`No notes available for ${abbreviation} yet`);
    }
  };

  return (
    <>
      <div 
        className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 cursor-pointer transition-all duration-700 hover:-translate-y-4 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
        
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
        <div className="absolute inset-[1px] rounded-3xl bg-white"></div>
        
        {/* Content */}
        <div className="relative z-10 p-8">
          <div className="flex items-start justify-between mb-8">
            {/* Enhanced Icon */}
            <div className="relative">
              <div className={`p-5 rounded-2xl ${color} text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl`}>
                <div className="relative z-10">
                  {icon}
                </div>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Floating particles around icon */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ animationDelay: '0.2s' }}></div>
            </div>
            
            {/* Enhanced Stats */}
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-gradient-to-r from-gray-50 to-blue-50 px-4 py-2 rounded-full border border-gray-100 group-hover:border-blue-200 transition-all duration-500">
                <Clock className="w-4 h-4 group-hover:animate-spin" />
                <span className="font-medium">
                  {hasNotes ? `${actualNotesCount} PDFs` : `${noteCount} notes`}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-amber-600">
                <Star className="w-3 h-3 fill-current" />
                <span>4.9</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Text Content */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-text-dark mb-3 group-hover:text-engineering-blue transition-colors duration-500">
              {abbreviation}
            </h3>
            <h4 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-300">
              {name}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
          </div>
          
          {/* Enhanced Action Area */}
          <div className="flex items-center justify-between">
            <button 
              onClick={handleViewNotes}
              className={`group/btn relative overflow-hidden ${
                hasNotes 
                  ? 'bg-gradient-to-r from-engineering-blue via-blue-600 to-tech-cyan hover:shadow-2xl hover:scale-110' 
                  : 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed'
              } text-white px-8 py-4 rounded-2xl font-semibold text-sm flex items-center gap-3 transition-all duration-500`}
              disabled={!hasNotes}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              <Download className="w-5 h-5 relative z-10 group-hover/btn:animate-bounce" />
              <span className="relative z-10">
                {hasNotes ? 'View Notes' : 'Coming Soon'}
              </span>
            </button>
            
            <div className="relative">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 group-hover:from-engineering-blue/10 group-hover:to-tech-cyan/10 transition-all duration-500 border border-gray-100 group-hover:border-blue-200">
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-engineering-blue group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
              </div>
              {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-500">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                Completion Rate
              </span>
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                94%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                style={{ width: '94%' }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-engineering-blue/10 via-purple-500/10 to-tech-cyan/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"></div>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-pink-400/10 to-yellow-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ animationDelay: '0.3s' }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-all duration-500"></div>
        <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700" style={{ animationDelay: '0.4s' }}></div>
      </div>

      {/* Notes Modal */}
      {showNotes && hasNotes && (
        <SubjectNotes
          subjectId={id}
          subjectName={name}
          subjectAbbreviation={abbreviation}
          notes={getNotesForSubject(id)}
          onClose={() => setShowNotes(false)}
        />
      )}
    </>
  );
};

export default SubjectCard;
