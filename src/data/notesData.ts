
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

interface SubjectNotes {
  [subjectId: string]: PDFNote[];
}

// This will store all the notes data
// You can add PDFs here as you provide them
export const notesData: SubjectNotes = {
  physics: [
    // Physics PDFs will be added here as you provide them
    // Example structure:
    // {
    //   id: 'physics-1',
    //   title: 'Mechanics Fundamentals',
    //   description: 'Introduction to classical mechanics and motion',
    //   fileName: 'physics-mechanics.pdf',
    //   fileUrl: '/pdfs/physics/mechanics.pdf',
    //   uploadDate: '2024-01-15',
    //   category: 'Mechanics',
    //   tags: ['mechanics', 'motion', 'forces']
    // }
  ],
  foc: [
    // Foundation of Computing PDFs will be added here
  ],
  linux: [
    // Linux PDFs will be added here
  ],
  eee: [
    // Electronics and Electrical Engineering PDFs will be added here
  ],
  cde: [
    // Calculus and Differential Equations PDFs will be added here
  ],
  eds: [
    // Essentials of Data Science PDFs will be added here
  ],
  sic: [
    // Statistics and Integral Calculus PDFs will be added here
  ],
  am: [
    // Applied Mechanics PDFs will be added here
  ],
  son: [
    // Science of Nature PDFs will be added here
  ],
  ds: [
    // Discrete Structures PDFs will be added here
  ]
};

// Function to get notes for a specific subject
export const getNotesForSubject = (subjectId: string): PDFNote[] => {
  return notesData[subjectId] || [];
};

// Function to add a new note to a subject
export const addNoteToSubject = (subjectId: string, note: PDFNote): void => {
  if (!notesData[subjectId]) {
    notesData[subjectId] = [];
  }
  notesData[subjectId].push(note);
};

// Function to get total notes count for a subject
export const getNotesCount = (subjectId: string): number => {
  return notesData[subjectId]?.length || 0;
};

// Function to get total notes count across all subjects
export const getTotalNotesCount = (): number => {
  return Object.values(notesData).reduce((total, notes) => total + notes.length, 0);
};

export type { PDFNote };
