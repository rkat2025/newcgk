export interface CourseLevel {
  id: string;
  title: string;
  subtitle: string;
  target: string;
  outcome: string;
  modules: string[];
  description: string;
  learningObjectives: string[];
  careerPaths: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface Definition {
  term: string;
  meaning: string;
}

export interface Expert {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
  linkedin?: string;
  email?: string;
}

export type ViewState = 'home' | 'courses' | 'experts' | 'methodology' | 'faq' | 'certificate' | 'contact' | 'enroll' | 'quiz';
