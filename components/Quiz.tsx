
import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../constants';
import { CheckCircle2, RefreshCw, ArrowLeft, Trophy, ShieldAlert, BookOpen, UserCheck, ShieldQuestion } from 'lucide-react';

interface QuizProps {
  onBack: () => void;
  onEnrollClick: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onBack, onEnrollClick }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Shuffle the 115 questions and pick 50
    const shuffled = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 50));
    
    // Simulate a very brief "init" for UX (feels professional)
    const timer = setTimeout(() => setInitializing(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (index: number) => {
    const newAnswers = [...userAnswers, index];
    setUserAnswers(newAnswers);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((acc, ans, idx) => {
      return ans === questions[idx].correctAnswerIndex ? acc + 1 : acc;
    }, 0);
  };

  const getPerformanceMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { title: "Cyber Guardian", desc: "Exceptional literacy! Your grasp of digital law and safety is professional grade.", color: "text-green-600" };
    if (percentage >= 70) return { title: "Digital Scout", desc: "Great job! You have a solid foundation but can sharpen your understanding of specific IT Act sections.", color: "text-[#6750A4]" };
    if (percentage >= 50) return { title: "Cyber Apprentice", desc: "Good start! There's plenty more to learn about staying safe and legal online in modern India.", color: "text-orange-500" };
    return { title: "Digital Novice", desc: "You're at high risk. Our foundational courses are strongly recommended to help you stay protected.", color: "text-red-500" };
  };

  if (initializing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#FFFBFE] text-center">
        <ShieldQuestion className="w-16 h-16 text-[#6750A4] animate-bounce mb-4" />
        <h2 className="text-2xl font-black text-[#1C1B1F]">Initializing Assessment...</h2>
        <p className="text-sm text-[#79747E] mt-2">Preparing your customized 50-question diagnostic.</p>
      </div>
    );
  }

  if (isFinished) {
    const score = calculateScore();
    const perf = getPerformanceMessage(score);
    return (
      <div className="min-h-screen pt-44 pb-24 px-4 bg-[#FFFBFE]">
        <div className="max-w-3xl mx-auto bg-white rounded-[56px] border-2 border-[#F3EDF7] shadow-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3EDF7] rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <div className="w-24 h-24 bg-[#F3EDF7] rounded-3xl flex items-center justify-center mx-auto mb-8 text-[#6750A4] shadow-inner">
               <Trophy size={48} />
            </div>
            
            <h2 className="text-sm font-black text-[#6750A4] uppercase tracking-widest mb-2">Final Diagnostic Results</h2>
            <h1 className="text-5xl md:text-7xl font-black text-[#1C1B1F] mb-6">
              {score}<span className="text-3xl text-[#79747E]">/50</span>
            </h1>
            
            <div className={`text-2xl font-black mb-4 ${perf.color}`}>{perf.title}</div>
            <p className="text-lg text-[#49454F] max-w-lg mx-auto leading-relaxed mb-12">
              {perf.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="p-6 bg-[#F3EDF7]/50 rounded-3xl border border-[#6750A4]/10 text-left">
                <ShieldAlert className="text-[#6750A4] mb-3" size={24} />
                <h4 className="font-bold text-[#1C1B1F] mb-1">Expert Insight</h4>
                <p className="text-sm text-[#49454F]">Your performance suggests strengths in <b>Digital Manners</b> but requires focus on <b>IT Act Regulations</b>.</p>
              </div>
              <div className="p-6 bg-[#F3EDF7]/50 rounded-3xl border border-[#6750A4]/10 text-left">
                <BookOpen className="text-[#6750A4] mb-3" size={24} />
                <h4 className="font-bold text-[#1C1B1F] mb-1">Recommendation</h4>
                <p className="text-sm text-[#49454F]">Consider enrolling in <b>Level {score > 35 ? '3' : score > 20 ? '2' : '1'}</b> to master advanced cyber litigation.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onEnrollClick}
                className="bg-[#6750A4] text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                Enroll in Recommended Level
              </button>
              <button 
                onClick={onBack}
                className="bg-white border-2 border-[#F3EDF7] text-[#1C1B1F] px-10 py-5 rounded-full font-bold hover:bg-[#F3EDF7] transition-all"
              >
                Back to Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="min-h-screen pt-44 pb-24 px-4 bg-[#FFFBFE]">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="mb-8 flex items-center gap-2 text-[#6750A4] font-bold hover:-translate-x-1 transition-transform group">
          <ArrowLeft size={20} /> Exit Assessment
        </button>

        <div className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="text-xs font-black text-[#6750A4] uppercase tracking-widest">Question {currentIndex + 1} of 50</span>
              <h3 className="text-xl font-bold text-[#1C1B1F]">Cyber Literacy Diagnostic</h3>
            </div>
            <span className="text-xl font-black text-[#6750A4]">{Math.round((currentIndex / 50) * 100)}%</span>
          </div>
          <div className="w-full h-3 bg-[#F3EDF7] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#6750A4] transition-all duration-500 ease-out rounded-full" 
              style={{ width: `${(currentIndex / 50) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-[48px] border-2 border-[#F3EDF7] shadow-xl p-8 md:p-14 mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-[#1C1B1F] mb-12 leading-snug">
            {q.question}
          </h2>

          <div className="grid gap-4">
            {q.options.map((option, idx) => (
              <button 
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="group flex items-center gap-6 text-left p-6 rounded-3xl border-2 border-[#F3EDF7] hover:border-[#6750A4] hover:bg-[#F3EDF7]/30 transition-all active:scale-[0.98]"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F3EDF7] text-[#6750A4] font-black flex items-center justify-center shrink-0 group-hover:bg-[#6750A4] group-hover:text-white transition-colors">
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="text-lg font-bold text-[#49454F] group-hover:text-[#1C1B1F]">{option}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-xs font-bold text-[#79747E] uppercase tracking-[0.2em]">
           <UserCheck size={16} />
           Professional Standard Assessment
        </div>
      </div>
    </div>
  );
};

export default Quiz;
