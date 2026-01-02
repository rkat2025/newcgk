
import React, { useState } from 'react';
import { COURSE_LEVELS } from '../constants';
import { ChevronDown, ChevronUp, BookOpen, Target, Briefcase, Info, BrainCircuit, ArrowRight } from 'lucide-react';

interface CoursesProps {
  onEnrollClick?: () => void;
  onQuizClick?: () => void;
  isFullPage?: boolean;
}

const Courses: React.FC<CoursesProps> = ({ onEnrollClick, onQuizClick, isFullPage = false }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className={`${isFullPage ? 'pt-32 pb-32' : 'py-24'} bg-[#FFFBFE]`} id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quiz CTA Section */}
        {isFullPage && (
          <div className="mb-20 bg-gradient-to-br from-[#6750A4] to-[#4F378B] rounded-[48px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest border border-white/20">
                  <BrainCircuit size={16} />
                  Official Assessment
                </div>
                <h3 className="text-3xl md:text-5xl font-black leading-tight">Check your cyber literacy score here!</h3>
                <p className="text-lg opacity-90">Take our comprehensive 50-question assessment to test your knowledge on Cyber Law, safety, and digital ethics. Get instant results and a professional performance breakdown.</p>
              </div>
              <button 
                onClick={onQuizClick}
                className="bg-white text-[#6750A4] px-12 py-6 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl whitespace-nowrap flex items-center gap-3 group/btn"
              >
                Start Quiz Now
                <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Removed the header section (Our Course Framework) as requested */}

        <div className="grid lg:grid-cols-3 gap-8">
          {COURSE_LEVELS.map((level) => (
            <div 
              key={level.id}
              className={`rounded-[40px] border-2 transition-all duration-500 overflow-hidden flex flex-col ${expandedId === level.id ? 'border-[#6750A4] bg-white shadow-2xl scale-[1.02]' : 'border-[#F3EDF7] bg-[#F3EDF7]/30 hover:bg-white hover:border-[#6750A4]/20 hover:shadow-xl'}`}
            >
              <div className="p-8 pb-0">
                <span className="inline-block px-5 py-2 rounded-2xl bg-[#6750A4] text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg shadow-[#6750A4]/20">
                  {level.target}
                </span>
                <h3 className="text-3xl font-bold mb-3 text-[#1C1B1F] leading-tight">{level.title}</h3>
                <p className="text-sm text-[#49454F] mb-6 font-medium leading-relaxed">{level.subtitle}</p>
              </div>

              <div className="p-8 pt-0 flex-grow">
                 <div className="bg-[#FFFBFE] rounded-3xl p-5 mb-8 border border-[#F3EDF7] shadow-inner">
                    <p className="text-[10px] font-black text-[#6750A4] mb-2 uppercase tracking-widest">Core Objective</p>
                    <p className="text-base italic text-[#1C1B1F] leading-relaxed">"{level.outcome}"</p>
                 </div>

                 <button 
                  onClick={() => setExpandedId(expandedId === level.id ? null : level.id)}
                  className="w-full flex items-center justify-between p-5 rounded-[24px] bg-[#6750A4] text-white font-bold hover:bg-[#5a4691] active:scale-95 transition-all shadow-lg shadow-[#6750A4]/20"
                 >
                   <span className="flex items-center gap-3">
                    <BookOpen size={20} />
                    {expandedId === level.id ? 'Close Details' : 'Full Syllabus & Details'}
                   </span>
                   {expandedId === level.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                 </button>

                 <div className={`mt-8 space-y-8 transition-all duration-700 ease-in-out overflow-hidden ${expandedId === level.id ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                   
                   <div className="p-4 bg-[#F3EDF7]/40 rounded-3xl border border-[#6750A4]/10">
                     <h4 className="flex items-center gap-2 text-[#6750A4] font-black text-xs uppercase tracking-widest mb-4">
                       <Info size={16} /> Course Overview
                     </h4>
                     <p className="text-sm text-[#49454F] leading-relaxed">
                       {level.description}
                     </p>
                   </div>

                   <div className="px-2">
                     <h4 className="flex items-center gap-2 text-[#6750A4] font-black text-xs uppercase tracking-widest mb-4">
                       <Target size={16} /> Learning Goals
                     </h4>
                     <ul className="space-y-3">
                        {level.learningObjectives.map((obj, i) => (
                          <li key={i} className="text-sm text-[#49454F] flex gap-3 leading-relaxed">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#6750A4] mt-2 shrink-0"></div>
                             {obj}
                          </li>
                        ))}
                     </ul>
                   </div>

                   <div className="px-2">
                     <h4 className="flex items-center gap-2 text-[#6750A4] font-black text-xs uppercase tracking-widest mb-4">
                       <BookOpen size={16} /> Structured Modules
                     </h4>
                     <div className="space-y-3">
                       {level.modules.map((module, i) => (
                         <div key={i} className="flex gap-4 text-sm text-[#1C1B1F] bg-[#F3EDF7] p-4 rounded-2xl border border-[#6750A4]/5 hover:bg-white hover:border-[#6750A4]/20 transition-colors">
                           <span className="font-black text-[#6750A4] opacity-50">{String(i+1).padStart(2, '0')}</span>
                           <span className="font-semibold">{module}</span>
                         </div>
                       ))}
                     </div>
                   </div>

                   <div className="px-2">
                     <h4 className="flex items-center gap-2 text-[#6750A4] font-black text-xs uppercase tracking-widest mb-4">
                       <Briefcase size={16} /> Career Pathways
                     </h4>
                     <div className="flex flex-wrap gap-2">
                        {level.careerPaths.map((path, i) => (
                          <span key={i} className="text-[10px] bg-white border border-[#6750A4]/20 text-[#6750A4] px-4 py-2 rounded-xl font-black uppercase tracking-wider shadow-sm">
                            {path}
                          </span>
                        ))}
                     </div>
                   </div>
                 </div>
              </div>
              
              <div className="bg-[#F3EDF7]/50 p-8 mt-auto text-center border-t border-[#F3EDF7]">
                 <button 
                  onClick={onEnrollClick} 
                  className="w-full py-4 rounded-2xl bg-white border-2 border-[#6750A4]/10 text-[#6750A4] font-bold hover:bg-[#6750A4] hover:text-white transition-all shadow-sm"
                 >
                  Secure Enrollment for {level.title.split(' ')[0]} →
                 </button>
              </div>
            </div>
          ))}
        </div>

        {isFullPage && (
          <div className="mt-32 p-12 bg-[#6750A4] rounded-[48px] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-4">Ready to empower your students?</h3>
              <p className="text-xl opacity-90">Join 50+ schools across India in implementing the Cyber Gyan Kosh curriculum.</p>
            </div>
            <button 
              onClick={onEnrollClick}
              className="bg-white text-[#6750A4] px-12 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl whitespace-nowrap"
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
