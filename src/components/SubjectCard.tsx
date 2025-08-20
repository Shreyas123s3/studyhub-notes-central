
import React, { useState } from 'react';
import { ArrowRight, Download, Clock, Star, BookOpen, TrendingUp, X } from 'lucide-react';
import { getNotesCount, isComingSoon } from '../data/notesData';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

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
  const [showPreview, setShowPreview] = useState(false);

  // Updated Google Drive folder links for each subject
  const googleDriveLinks: { [key: string]: string } = {
    am: 'https://drive.google.com/drive/folders/1bHxCLnJCAOwEQQCrwsw4ZdxVRr0fnohy?usp=sharing',
    eds: 'https://drive.google.com/drive/folders/1vkmrNBuCfCraUQG1wNNQjE7Y6zB2wK84?usp=sharing',
    physics: 'https://drive.google.com/drive/folders/10_fd8EEXgjae3S-aoo83-wtGTBgxNLEf?usp=sharing',
    sic: 'https://drive.google.com/drive/folders/1P6f76reWc0LiYpP96qKko5jZBb9kY62i?usp=sharing',
    son: 'https://drive.google.com/drive/folders/1KhrW1S1kDA1ulnafEM8HyCwxxruRvjVy?usp=sharing',
    eee: 'https://drive.google.com/drive/folders/1hC0EC9DIgUgKV-Kt21zZP39OCvvXs9CC?usp=sharing',
    foc: 'https://drive.google.com/drive/folders/1hC0EC9DIgUgKV-Kt21zZP39OCvvXs9CC?usp=sharing',
    linux: 'https://drive.google.com/drive/folders/1hC0EC9DIgUgKV-Kt21zZP39OCvvXs9CC?usp=sharing',
    cde: 'https://drive.google.com/drive/folders/1hC0EC9DIgUgKV-Kt21zZP39OCvvXs9CC?usp=sharing',
    ds: 'https://drive.google.com/drive/folders/1hC0EC9DIgUgKV-Kt21zZP39OCvvXs9CC?usp=sharing'
  };

  // Varied ratings for each subject (3.5 to 5.0 range)
  const ratings: { [key: string]: number } = {
    physics: 4.7,
    foc: 3.8,
    linux: 4.2,
    eee: 4.6,
    cde: 3.9,
    eds: 4.8,
    sic: 4.4,
    am: 4.5,
    son: 4.1,
    ds: 3.7
  };

  // Varied completion rates for each subject (70% to 100% range)
  const completionRates: { [key: string]: number } = {
    physics: 87,
    foc: 72,
    linux: 95,
    eee: 91,
    cde: 78,
    eds: 96,
    sic: 89,
    am: 93,
    son: 84,
    ds: 76
  };

  const actualNotesCount = getNotesCount(id);
  const driveLink = googleDriveLinks[id];
  const comingSoon = isComingSoon(id);
  const rating = ratings[id] || 4.0;
  const completionRate = completionRates[id] || 85;

  const handleDownloadNotes = () => {
    if (driveLink && !comingSoon) {
      window.open(driveLink, '_blank');
    }
  };

  const handlePreview = () => {
    if (driveLink && !comingSoon) {
      setShowPreview(true);
    }
  };

  // Convert Google Drive folder link to embed URL
  const getEmbedUrl = (driveUrl: string) => {
    const folderId = driveUrl.match(/folders\/([a-zA-Z0-9-_]+)/)?.[1];
    return folderId ? `https://drive.google.com/embeddedfolderview?id=${folderId}#list` : driveUrl;
  };

  return (
    <>
      <CardContainer containerClassName="py-0">
        <CardBody className="h-auto w-auto">
          <CardItem
            translateZ="0"
            className="w-full"
          >
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
                  <CardItem translateZ="50">
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
                  </CardItem>
                  
                  {/* Enhanced Stats */}
                  <CardItem translateZ="30">
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-gray-500 bg-gradient-to-r from-gray-50 to-blue-50 px-4 py-2 rounded-full border border-gray-100 group-hover:border-blue-200 transition-all duration-500">
                        <Clock className="w-4 h-4 group-hover:animate-spin" />
                        <span className="font-medium">
                          {actualNotesCount} {actualNotesCount === 1 ? 'note' : 'notes'}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-xs text-amber-600">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{rating}</span>
                      </div>
                    </div>
                  </CardItem>
                </div>
                
                {/* Enhanced Text Content */}
                <div className="mb-8">
                  <CardItem translateZ="40">
                    <h3 className="text-3xl font-bold text-text-dark mb-3 group-hover:text-engineering-blue transition-colors duration-500">
                      {abbreviation}
                    </h3>
                  </CardItem>
                  <CardItem translateZ="20">
                    <h4 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-300">
                      {name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {description}
                    </p>
                  </CardItem>
                </div>
                
                {/* Enhanced Action Area */}
                <div className="flex items-center justify-between">
                  <CardItem translateZ="60">
                    {comingSoon ? (
                      <div className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-8 py-4 rounded-2xl font-semibold text-sm flex items-center gap-3 cursor-not-allowed opacity-70">
                        <Clock className="w-5 h-5" />
                        <span>Coming Soon</span>
                      </div>
                    ) : (
                      <button 
                        onClick={handleDownloadNotes}
                        className="group/btn relative overflow-hidden bg-gradient-to-r from-engineering-blue via-blue-600 to-tech-cyan hover:shadow-2xl hover:scale-110 text-white px-8 py-4 rounded-2xl font-semibold text-sm flex items-center gap-3 transition-all duration-500"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                        <Download className="w-5 h-5 relative z-10 group-hover/btn:animate-bounce" />
                        <span className="relative z-10">Download Notes</span>
                      </button>
                    )}
                  </CardItem>
                  
                  <CardItem translateZ="30">
                    <div className="relative">
                      <button
                        onClick={handlePreview}
                        className={`p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 group-hover:from-engineering-blue/10 group-hover:to-tech-cyan/10 transition-all duration-500 border border-gray-100 group-hover:border-blue-200 ${comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={comingSoon}
                      >
                        <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-engineering-blue group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                      </button>
                      {isHovered && !comingSoon && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                      )}
                    </div>
                  </CardItem>
                </div>

                {/* Progress Bar */}
                <CardItem translateZ="20">
                  <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-500">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        Completion Rate
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {completionRate}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${completionRate}%` }}
                      ></div>
                    </div>
                  </div>
                </CardItem>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-engineering-blue/10 via-purple-500/10 to-tech-cyan/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-pink-400/10 to-yellow-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ animationDelay: '0.3s' }}></div>
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-all duration-500"></div>
              <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>

      {/* Preview Modal */}
      {showPreview && driveLink && !comingSoon && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl h-[80vh] relative overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{abbreviation} - {name}</h3>
                <p className="text-gray-600 text-sm">Preview notes and materials</p>
              </div>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="h-full pb-20">
              <iframe
                src={getEmbedUrl(driveLink)}
                className="w-full h-full border-0"
                title={`${abbreviation} Notes Preview`}
                style={{ width: '100%', height: '600px', border: '0' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubjectCard;
