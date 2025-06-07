
import React, { useState } from 'react';
import { FileText, Download, Eye, Calendar, Search, Filter } from 'lucide-react';
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

interface SubjectNotesProps {
  subjectId: string;
  subjectName: string;
  subjectAbbreviation: string;
  notes: PDFNote[];
  onClose: () => void;
}

const SubjectNotes: React.FC<SubjectNotesProps> = ({
  subjectId,
  subjectName,
  subjectAbbreviation,
  notes,
  onClose
}) => {
  const [selectedNote, setSelectedNote] = useState<PDFNote | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(notes.map(note => note.category).filter(Boolean)))];
  
  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (note: PDFNote) => {
    const link = document.createElement('a');
    link.href = note.fileUrl;
    link.download = note.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentNoteIndex = selectedNote ? filteredNotes.findIndex(note => note.id === selectedNote.id) : -1;
  const hasNext = currentNoteIndex < filteredNotes.length - 1;
  const hasPrevious = currentNoteIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      setSelectedNote(filteredNotes[currentNoteIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      setSelectedNote(filteredNotes[currentNoteIndex - 1]);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{subjectAbbreviation} Notes</h2>
                <p className="text-gray-600">{subjectName}</p>
                <p className="text-sm text-gray-500 mt-1">{filteredNotes.length} notes available</p>
              </div>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {categories.length > 1 && (
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Notes List */}
          <div className="flex-1 overflow-y-auto p-6">
            {filteredNotes.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No notes found</h3>
                <p className="text-gray-600">
                  {searchQuery || selectedCategory !== 'all' 
                    ? 'Try adjusting your search criteria' 
                    : 'Notes will appear here when uploaded'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredNotes.map((note) => (
                  <div
                    key={note.id}
                    className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">{note.title}</h3>
                        {note.description && (
                          <p className="text-gray-600 text-sm mb-3">{note.description}</p>
                        )}
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {note.uploadDate}
                          </div>
                          {note.category && (
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {note.category}
                            </span>
                          )}
                        </div>
                        {note.tags && note.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {note.tags.map((tag, index) => (
                              <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        onClick={() => setSelectedNote(note)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownload(note)}
                        className="flex-1 border-green-300 text-green-700 hover:bg-green-50 flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
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

export default SubjectNotes;
