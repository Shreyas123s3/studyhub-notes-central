
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

// INSTRUCTIONS FOR ADDING YOUR OWN PDFs:
// 1. Create a folder called 'pdfs' in the 'public' directory
// 2. Inside 'public/pdfs', create subfolders for each subject (e.g., 'physics', 'foc', 'linux', etc.)
// 3. Place your PDF files in the appropriate subject folders
// 4. Update the entries below with your actual PDF information
// 5. The fileUrl should be '/pdfs/[subject-folder]/[your-pdf-filename].pdf'

// Example: If you have a physics PDF called "mechanics-notes.pdf"
// - Place it in: public/pdfs/physics/mechanics-notes.pdf
// - Set fileUrl to: '/pdfs/physics/mechanics-notes.pdf'

export const notesData: SubjectNotes = {
  physics: [
    {
      id: 'physics-1',
      title: 'Classical Mechanics Fundamentals',
      description: 'Introduction to Newton\'s laws, motion, and fundamental principles of mechanics',
      fileName: 'mechanics-fundamentals.pdf',
      fileUrl: '/pdfs/physics/mechanics-fundamentals.pdf', // Place your PDF here
      uploadDate: '2024-01-15',
      category: 'Mechanics',
      tags: ['mechanics', 'newton', 'motion', 'forces']
    },
    {
      id: 'physics-2',
      title: 'Thermodynamics Basics',
      description: 'Heat, temperature, and the laws of thermodynamics',
      fileName: 'thermodynamics-basics.pdf',
      fileUrl: '/pdfs/physics/thermodynamics-basics.pdf',
      uploadDate: '2024-01-20',
      category: 'Thermodynamics',
      tags: ['heat', 'temperature', 'entropy']
    }
  ],
  foc: [
    {
      id: 'foc-1',
      title: 'Programming Fundamentals',
      description: 'Basic programming concepts, variables, and control structures',
      fileName: 'programming-fundamentals.pdf',
      fileUrl: '/pdfs/foc/programming-fundamentals.pdf',
      uploadDate: '2024-01-10',
      category: 'Programming',
      tags: ['programming', 'variables', 'loops', 'functions']
    },
    {
      id: 'foc-2',
      title: 'Data Structures Introduction',
      description: 'Arrays, linked lists, stacks, and queues',
      fileName: 'data-structures-intro.pdf',
      fileUrl: '/pdfs/foc/data-structures-intro.pdf',
      uploadDate: '2024-01-25',
      category: 'Data Structures',
      tags: ['arrays', 'linked-lists', 'stacks', 'queues']
    }
  ],
  linux: [
    {
      id: 'linux-1',
      title: 'Linux Command Line Basics',
      description: 'Essential commands for navigating and managing Linux systems',
      fileName: 'linux-commands.pdf',
      fileUrl: '/pdfs/linux/linux-commands.pdf',
      uploadDate: '2024-01-12',
      category: 'Commands',
      tags: ['terminal', 'commands', 'bash', 'shell']
    }
  ],
  eee: [
    {
      id: 'eee-1',
      title: 'Circuit Analysis Fundamentals',
      description: 'Ohm\'s law, Kirchhoff\'s laws, and basic circuit analysis techniques',
      fileName: 'circuit-analysis.pdf',
      fileUrl: '/pdfs/eee/circuit-analysis.pdf',
      uploadDate: '2024-01-18',
      category: 'Circuits',
      tags: ['circuits', 'ohm', 'kirchhoff', 'analysis']
    }
  ],
  cde: [
    {
      id: 'cde-1',
      title: 'Limits and Derivatives',
      description: 'Understanding limits, continuity, and basic differentiation',
      fileName: 'limits-derivatives.pdf',
      fileUrl: '/pdfs/cde/limits-derivatives.pdf',
      uploadDate: '2024-01-14',
      category: 'Calculus',
      tags: ['limits', 'derivatives', 'calculus', 'differentiation']
    }
  ],
  eds: [
    {
      id: 'eds-1',
      title: 'Introduction to Data Science',
      description: 'Data types, data collection, and basic statistical concepts',
      fileName: 'data-science-intro.pdf',
      fileUrl: '/pdfs/eds/data-science-intro.pdf',
      uploadDate: '2024-01-16',
      category: 'Fundamentals',
      tags: ['data', 'statistics', 'analysis', 'science']
    }
  ],
  sic: [
    {
      id: 'sic-1',
      title: 'Probability Distributions',
      description: 'Normal, binomial, and Poisson distributions',
      fileName: 'probability-distributions.pdf',
      fileUrl: '/pdfs/sic/probability-distributions.pdf',
      uploadDate: '2024-01-22',
      category: 'Probability',
      tags: ['probability', 'distributions', 'normal', 'binomial']
    }
  ],
  am: [
    {
      id: 'am-1',
      title: 'Statics and Force Analysis',
      description: 'Force vectors, equilibrium, and structural analysis',
      fileName: 'statics-forces.pdf',
      fileUrl: '/pdfs/am/statics-forces.pdf',
      uploadDate: '2024-01-24',
      category: 'Statics',
      tags: ['statics', 'forces', 'equilibrium', 'vectors']
    }
  ],
  son: [
    {
      id: 'son-1',
      title: 'Ecosystem Fundamentals',
      description: 'Food chains, energy flow, and ecological relationships',
      fileName: 'ecosystem-fundamentals.pdf',
      fileUrl: '/pdfs/son/ecosystem-fundamentals.pdf',
      uploadDate: '2024-01-26',
      category: 'Ecology',
      tags: ['ecosystem', 'ecology', 'environment', 'nature']
    }
  ],
  ds: [
    {
      id: 'ds-1',
      title: 'Set Theory and Logic',
      description: 'Mathematical sets, operations, and propositional logic',
      fileName: 'set-theory-logic.pdf',
      fileUrl: '/pdfs/ds/set-theory-logic.pdf',
      uploadDate: '2024-01-28',
      category: 'Logic',
      tags: ['sets', 'logic', 'mathematics', 'discrete']
    }
  ]
};

// Function to get notes for a specific subject
export const getNotesForSubject = (subjectId: string): PDFNote[] => {
  return notesData[subjectId] || [];
};

export const addNoteToSubject = (subjectId: string, note: PDFNote): void => {
  if (!notesData[subjectId]) {
    notesData[subjectId] = [];
  }
  notesData[subjectId].push(note);
};

export const getNotesCount = (subjectId: string): number => {
  return notesData[subjectId]?.length || 0;
};

export const getTotalNotesCount = (): number => {
  return Object.values(notesData).reduce((total, notes) => total + notes.length, 0);
};

export type { PDFNote };
