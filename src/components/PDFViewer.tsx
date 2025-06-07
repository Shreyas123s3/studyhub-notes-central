
import React, { useState } from 'react';
import { Download, Eye, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from './ui/button';

interface PDFNote {
  id: string;
  title: string;
  description?: string;
  fileName: string;
  fileUrl: string;
  uploadDate: string;
}

interface PDFViewerProps {
  note: PDFNote;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  note,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = note.fileUrl;
    link.download = note.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePDFLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handlePDFError = () => {
    setIsLoading(false);
    setError('Failed to load PDF. Please try downloading the file instead.');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{note.title}</h2>
            {note.description && (
              <p className="text-gray-600 text-sm">{note.description}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">Uploaded: {note.uploadDate}</p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Navigation */}
            {(hasPrevious || hasNext) && (
              <div className="flex items-center gap-2 mr-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onPrevious}
                  disabled={!hasPrevious}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onNext}
                  disabled={!hasNext}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
            
            {/* Actions */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-2 bg-green-50 hover:bg-green-100 border-green-200 text-green-700"
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="flex items-center gap-2 bg-red-50 hover:bg-red-100 border-red-200 text-red-700"
            >
              <X className="w-4 h-4" />
              Close
            </Button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 relative overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading PDF...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center max-w-md">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to display PDF</h3>
                <p className="text-gray-600 mb-4">{error}</p>
                <Button onClick={handleDownload} className="flex items-center gap-2 mx-auto">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          )}

          <iframe
            src={note.fileUrl}
            className="w-full h-full border-0"
            title={note.title}
            onLoad={handlePDFLoad}
            onError={handlePDFError}
            style={{ display: error ? 'none' : 'block' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
