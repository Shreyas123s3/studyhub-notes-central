
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SampleNotesModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Get the file ID from environment variable or use fallback
  const fileId = process.env.NEXT_PUBLIC_SAMPLE_DRIVE_FILE_ID;
  const previewUrl = fileId 
    ? `https://drive.google.com/file/d/${fileId}/preview`
    : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  
  const downloadUrl = fileId 
    ? `https://drive.google.com/file/d/${fileId}/view`
    : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  return (
    <>
      {/* Button trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden border-2 border-white/50 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-500 backdrop-blur-sm hover:scale-105 hover:-translate-y-1"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="relative flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-sm">✨</span>
          </div>
          <span>View Sample Notes</span>
        </div>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal card */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 text-white text-2xl font-bold hover:text-gray-300 bg-black/20 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm"
                >
                  ✕
                </button>

                {/* PDF Embed */}
                <div className="w-full h-[500px]">
                  {fileId ? (
                    <iframe
                      src={previewUrl}
                      width="100%"
                      height="100%"
                      allow="autoplay"
                      className="rounded-t-2xl"
                      title="Sample Notes Preview"
                    ></iframe>
                  ) : (
                    <embed
                      src={previewUrl}
                      width="100%"
                      height="100%"
                      type="application/pdf"
                      className="rounded-t-2xl"
                    />
                  )}
                </div>

                {/* Footer with download button */}
                <div className="p-6 flex justify-center bg-white/5">
                  <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
                  >
                    Download Full Notes
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
