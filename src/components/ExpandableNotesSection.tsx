
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, FileText, Download, Eye, Calendar, X } from 'lucide-react';
import { Button } from './ui/button';
import PDFViewer from './PDFViewer';

interface PDFNote {
  id: string;
  title: string;
  description?: string;
  fileName: string;
  fileUrl: string;
  uploadDate: string;
  category?: string;
  tags?: string[];
}

interface ExpandableNotesSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
  subjectId: string;
  subjectName: string;
  subjectAbbreviation: string;
  notes: PDFNote[];
  color: string;
  icon: React.ReactNode;
}

const ExpandableNotesSection: React.FC<ExpandableNotesSectionProps> = ({
  isExpanded,
  onToggle,
  subjectId,
  subjectName,
  subjectAbbreviation,
  notes,
  color,
  icon
}) => {
  const [selectedNote, setSelectedNote] = useState<PDFNote | null>(null);
  const [animatedNotes, setAnimatedNotes] = useState<number>(0);

  useEffect(() => {
    if (isExpanded) {
      const timer = setInterval(() => {
        setAnimatedNotes(prev => prev < notes.length ? prev + 1 : prev);
      }, 150);
      return () => clearInterval(timer);
    } else {
      setAnimatedNotes(0);
    }
  }, [isExpanded, notes.length]);

  const handleDownload = (note: PDFNote) => {
    const link = document.createElement('a');
    link.href = note.fileUrl;
    link.download = note.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentNoteIndex = selectedNote ? notes.findIndex(note => note.id === selectedNote.id) : -1;
  const hasNext = currentNoteIndex < notes.length - 1;
  const hasPrevious = currentNoteIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      setSelectedNote(notes[currentNoteIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      setSelectedNote(notes[currentNoteIndex - 1]);
    }
  };

  return (
    <>
      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mt-8 p-8 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl">
          {/* Enhanced Header with Subject Info */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className={`p-4 rounded-2xl ${color} text-white shadow-xl transform hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
              <div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                  {subjectAbbreviation} Notes
                </h3>
                <p className="text-gray-600 text-lg font-medium">{subjectName}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {notes.length} {notes.length === 1 ? 'note' : 'notes'} available
                </p>
              </div>
            </div>
            
            <Button
              variant="outline"
              onClick={onToggle}
              className="flex items-center gap-2 bg-white/80 hover:bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <X className="w-4 h-4" />
              Close
            </Button>
          </div>

          {/* Notes Grid with Staggered Animation */}
          {notes.length === 0 ? (
            <div className="text-center py-16">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FileText className="w-12 h-12 text-gray-400" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-50 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No notes available yet</h3>
              <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                Notes for {subjectAbbreviation} will appear here once they're uploaded. 
                Check back soon for study materials!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note, index) => (
                <div
                  key={note.id}
                  className={`group relative transform transition-all duration-700 ${
                    index < animatedNotes 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150}ms` 
                  }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:bg-white/95">
                    {/* PDF Icon with Animation */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <FileText className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      </div>
                      
                      {note.category && (
                        <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
                          {note.category}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors duration-300">
                        {note.title}
                      </h4>
                      {note.description && (
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {note.description}
                        </p>
                      )}
                      
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {note.uploadDate}
                        </div>
                      </div>

                      {note.tags && note.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {note.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                          {note.tags.length > 3 && (
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">
                              +{note.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        onClick={() => setSelectedNote(note)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn"
                      >
                        <Eye className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownload(note)}
                        className="flex-1 border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn"
                      >
                        <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stats Footer */}
          {notes.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Ready to view instantly</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Download available</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedNote && (
        <PDFViewer
          note={selectedNote}
          onClose={() => setSelectedNote(null)}
          onNext={hasNext ? handleNext : undefined}
          onPrevious={hasPrevious ? handlePrevious : undefined}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
        />
      )}
    </>
  );
};

export default ExpandableNotesSection;
