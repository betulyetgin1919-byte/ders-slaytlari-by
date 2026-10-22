export type ViewMode = 'slides' | 'simulations' | 'games' | 'exam' | 'cheatsheet' | 'flashcards';

export interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Metaller' | 'Seramikler' | 'Polimerler' | 'Kompozitler' | 'Atomik Yapı' | 'Bağlar' | 'Enerjetik' | 'Patlayıcılar' | 'Tarihçe';
  badge?: string;
  keyTakeaway: string;
  examTip?: string; // "VİZE / FİNALDE KESİN ÇIKAR"
  contentPoints: string[];
  visualType?: 'lattice' | 'comparison' | 'speed_meter' | 'formula' | 'armor' | 'timeline' | 'molecule' | 'periodic_table' | 'pyramid';
  visualData?: Record<string, any>;
  quizCheck?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface CourseModule {
  id: number;
  code: string;
  title: string;
  instructor: string;
  institution: string;
  description: string;
  slideCount: number;
  pdfFilename: string;
  slides: SlideContent[];
}

export interface ExamQuestion {
  id: string;
  moduleId: number;
  category: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor' | 'Efsane';
  examType: 'vize' | 'final' | 'all';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  formulaNote?: string;
}

export interface Flashcard {
  id: string;
  moduleId: number;
  category: string;
  front: string;
  back: string;
  examWarning?: string;
}
