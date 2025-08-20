
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
    // Physics PDFs - 3 notes
    {
      id: 'physics-1',
      title: 'Mechanics Fundamentals',
      description: 'Introduction to classical mechanics and motion',
      fileName: 'physics-mechanics.pdf',
      fileUrl: '/pdfs/physics/mechanics.pdf',
      uploadDate: '2024-01-15',
      category: 'Mechanics',
      tags: ['mechanics', 'motion', 'forces']
    },
    {
      id: 'physics-2',
      title: 'Thermodynamics',
      description: 'Heat and energy transfer principles',
      fileName: 'physics-thermodynamics.pdf',
      fileUrl: '/pdfs/physics/thermodynamics.pdf',
      uploadDate: '2024-01-16',
      category: 'Thermodynamics',
      tags: ['heat', 'energy', 'temperature']
    },
    {
      id: 'physics-3',
      title: 'Waves and Oscillations',
      description: 'Wave motion and harmonic oscillations',
      fileName: 'physics-waves.pdf',
      fileUrl: '/pdfs/physics/waves.pdf',
      uploadDate: '2024-01-17',
      category: 'Waves',
      tags: ['waves', 'oscillations', 'frequency']
    }
  ],
  foc: [
    // Foundation of Computing PDFs - Coming Soon (0 notes)
  ],
  linux: [
    // Linux PDFs - Coming Soon (0 notes)
  ],
  eee: [
    // Electronics and Electrical Engineering PDFs - 5 notes
    {
      id: 'eee-1',
      title: 'Circuit Analysis',
      description: 'Basic circuit analysis techniques',
      fileName: 'eee-circuits.pdf',
      fileUrl: '/pdfs/eee/circuits.pdf',
      uploadDate: '2024-01-10',
      category: 'Circuits',
      tags: ['circuits', 'analysis', 'current']
    },
    {
      id: 'eee-2',
      title: 'Electronics Fundamentals',
      description: 'Introduction to electronic components',
      fileName: 'eee-electronics.pdf',
      fileUrl: '/pdfs/eee/electronics.pdf',
      uploadDate: '2024-01-11',
      category: 'Electronics',
      tags: ['electronics', 'components', 'diodes']
    },
    {
      id: 'eee-3',
      title: 'Electrical Machines',
      description: 'Motors and generators principles',
      fileName: 'eee-machines.pdf',
      fileUrl: '/pdfs/eee/machines.pdf',
      uploadDate: '2024-01-12',
      category: 'Machines',
      tags: ['motors', 'generators', 'transformers']
    },
    {
      id: 'eee-4',
      title: 'Power Systems',
      description: 'Electrical power generation and distribution',
      fileName: 'eee-power.pdf',
      fileUrl: '/pdfs/eee/power.pdf',
      uploadDate: '2024-01-13',
      category: 'Power',
      tags: ['power', 'generation', 'distribution']
    },
    {
      id: 'eee-5',
      title: 'Control Systems',
      description: 'Automatic control theory and applications',
      fileName: 'eee-control.pdf',
      fileUrl: '/pdfs/eee/control.pdf',
      uploadDate: '2024-01-14',
      category: 'Control',
      tags: ['control', 'feedback', 'automation']
    }
  ],
  cde: [
    // Calculus and Differential Equations PDFs - Coming Soon (0 notes)
  ],
  eds: [
    // Essentials of Data Science PDFs - 5 notes
    {
      id: 'eds-1',
      title: 'Data Analysis Fundamentals',
      description: 'Introduction to data analysis techniques',
      fileName: 'eds-analysis.pdf',
      fileUrl: '/pdfs/eds/analysis.pdf',
      uploadDate: '2024-01-20',
      category: 'Analysis',
      tags: ['data', 'analysis', 'statistics']
    },
    {
      id: 'eds-2',
      title: 'Machine Learning Basics',
      description: 'Introduction to machine learning algorithms',
      fileName: 'eds-ml.pdf',
      fileUrl: '/pdfs/eds/ml.pdf',
      uploadDate: '2024-01-21',
      category: 'Machine Learning',
      tags: ['ml', 'algorithms', 'prediction']
    },
    {
      id: 'eds-3',
      title: 'Data Visualization',
      description: 'Creating effective data visualizations',
      fileName: 'eds-visualization.pdf',
      fileUrl: '/pdfs/eds/visualization.pdf',
      uploadDate: '2024-01-22',
      category: 'Visualization',
      tags: ['visualization', 'charts', 'graphs']
    },
    {
      id: 'eds-4',
      title: 'Statistical Methods',
      description: 'Statistical techniques for data science',
      fileName: 'eds-statistics.pdf',
      fileUrl: '/pdfs/eds/statistics.pdf',
      uploadDate: '2024-01-23',
      category: 'Statistics',
      tags: ['statistics', 'hypothesis', 'testing']
    },
    {
      id: 'eds-5',
      title: 'Python for Data Science',
      description: 'Using Python for data science projects',
      fileName: 'eds-python.pdf',
      fileUrl: '/pdfs/eds/python.pdf',
      uploadDate: '2024-01-24',
      category: 'Programming',
      tags: ['python', 'pandas', 'numpy']
    }
  ],
  sic: [
    // Statistics and Integral Calculus PDFs - 5 notes
    {
      id: 'sic-1',
      title: 'Probability Theory',
      description: 'Fundamentals of probability and random variables',
      fileName: 'sic-probability.pdf',
      fileUrl: '/pdfs/sic/probability.pdf',
      uploadDate: '2024-01-25',
      category: 'Probability',
      tags: ['probability', 'random', 'variables']
    },
    {
      id: 'sic-2',
      title: 'Integral Calculus',
      description: 'Integration techniques and applications',
      fileName: 'sic-integration.pdf',
      fileUrl: '/pdfs/sic/integration.pdf',
      uploadDate: '2024-01-26',
      category: 'Integration',
      tags: ['integration', 'calculus', 'area']
    },
    {
      id: 'sic-3',
      title: 'Statistical Distributions',
      description: 'Common probability distributions',
      fileName: 'sic-distributions.pdf',
      fileUrl: '/pdfs/sic/distributions.pdf',
      uploadDate: '2024-01-27',
      category: 'Distributions',
      tags: ['distributions', 'normal', 'binomial']
    },
    {
      id: 'sic-4',
      title: 'Hypothesis Testing',
      description: 'Statistical hypothesis testing methods',
      fileName: 'sic-testing.pdf',
      fileUrl: '/pdfs/sic/testing.pdf',
      uploadDate: '2024-01-28',
      category: 'Testing',
      tags: ['hypothesis', 'testing', 'p-value']
    },
    {
      id: 'sic-5',
      title: 'Multiple Integrals',
      description: 'Double and triple integrals applications',
      fileName: 'sic-multiple.pdf',
      fileUrl: '/pdfs/sic/multiple.pdf',
      uploadDate: '2024-01-29',
      category: 'Multiple Integrals',
      tags: ['multiple', 'integrals', 'volume']
    }
  ],
  am: [
    // Applied Mechanics PDFs - 5 notes
    {
      id: 'am-1',
      title: 'Statics Fundamentals',
      description: 'Static equilibrium and force analysis',
      fileName: 'am-statics.pdf',
      fileUrl: '/pdfs/am/statics.pdf',
      uploadDate: '2024-01-30',
      category: 'Statics',
      tags: ['statics', 'equilibrium', 'forces']
    },
    {
      id: 'am-2',
      title: 'Dynamics and Motion',
      description: 'Kinematics and kinetics of particles',
      fileName: 'am-dynamics.pdf',
      fileUrl: '/pdfs/am/dynamics.pdf',
      uploadDate: '2024-01-31',
      category: 'Dynamics',
      tags: ['dynamics', 'motion', 'kinematics']
    },
    {
      id: 'am-3',
      title: 'Strength of Materials',
      description: 'Stress, strain, and material properties',
      fileName: 'am-strength.pdf',
      fileUrl: '/pdfs/am/strength.pdf',
      uploadDate: '2024-02-01',
      category: 'Strength',
      tags: ['strength', 'stress', 'strain']
    },
    {
      id: 'am-4',
      title: 'Beam Analysis',
      description: 'Bending moments and shear forces',
      fileName: 'am-beams.pdf',
      fileUrl: '/pdfs/am/beams.pdf',
      uploadDate: '2024-02-02',
      category: 'Beams',
      tags: ['beams', 'bending', 'shear']
    },
    {
      id: 'am-5',
      title: 'Trusses and Frames',
      description: 'Analysis of structural systems',
      fileName: 'am-trusses.pdf',
      fileUrl: '/pdfs/am/trusses.pdf',
      uploadDate: '2024-02-03',
      category: 'Structures',
      tags: ['trusses', 'frames', 'structures']
    }
  ],
  son: [
    // Science of Nature PDFs - 5 notes
    {
      id: 'son-1',
      title: 'Environmental Systems',
      description: 'Understanding natural environmental systems',
      fileName: 'son-environment.pdf',
      fileUrl: '/pdfs/son/environment.pdf',
      uploadDate: '2024-02-04',
      category: 'Environment',
      tags: ['environment', 'systems', 'ecology']
    },
    {
      id: 'son-2',
      title: 'Climate and Weather',
      description: 'Weather patterns and climate change',
      fileName: 'son-climate.pdf',
      fileUrl: '/pdfs/son/climate.pdf',
      uploadDate: '2024-02-05',
      category: 'Climate',
      tags: ['climate', 'weather', 'atmosphere']
    },
    {
      id: 'son-3',
      title: 'Biodiversity and Conservation',
      description: 'Species diversity and conservation efforts',
      fileName: 'son-biodiversity.pdf',
      fileUrl: '/pdfs/son/biodiversity.pdf',
      uploadDate: '2024-02-06',
      category: 'Biodiversity',
      tags: ['biodiversity', 'conservation', 'species']
    },
    {
      id: 'son-4',
      title: 'Natural Resources',
      description: 'Management of natural resources',
      fileName: 'son-resources.pdf',
      fileUrl: '/pdfs/son/resources.pdf',
      uploadDate: '2024-02-07',
      category: 'Resources',
      tags: ['resources', 'management', 'sustainability']
    },
    {
      id: 'son-5',
      title: 'Earth Sciences',
      description: 'Geology and earth processes',
      fileName: 'son-earth.pdf',
      fileUrl: '/pdfs/son/earth.pdf',
      uploadDate: '2024-02-08',
      category: 'Earth Sciences',
      tags: ['geology', 'earth', 'processes']
    }
  ],
  ds: [
    // Discrete Structures PDFs - Coming Soon (0 notes)
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

// Function to check if subject is coming soon
export const isComingSoon = (subjectId: string): boolean => {
  const comingSoonSubjects = ['ds', 'cde', 'linux', 'foc'];
  return comingSoonSubjects.includes(subjectId);
};

export type { PDFNote };
