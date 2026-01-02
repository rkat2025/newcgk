
import React from 'react';
import { CheckCircle2, MessageSquare, BookOpenCheck, BrainCircuit } from 'lucide-react';

interface MethodologyProps {
  onEnrollClick?: () => void;
}

const Methodology: React.FC<MethodologyProps> = ({ onEnrollClick }) => {
  const items = [
    { title: "Age-appropriate language", icon: <MessageSquare size={24} />, desc: "Simplified concepts without legal jargon." },
    { title: "Real-life examples", icon: <CheckCircle2 size={24} />, desc: "Relatable scenarios students face daily." },
    { title: "Interactive sessions", icon: <BrainCircuit size={24} />, desc: "Engagement through activities and quizzes." },
    { title: "Case studies", icon: <BookOpenCheck size={24} />, desc: "Real courtroom examples curated by experts." }
  ];

  return (
    <section className="py-20 bg-[#F3EDF7]" id="how-we-teach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <div className="bg-white p-6 rounded-[24px] shadow-sm border border-[#6750A4]/10">
                      <div className="w-12 h-12 bg-[#6750A4]/10 rounded-xl flex items-center justify-center text-[#6750A4] mb-4">
                         {items[0].icon}
                      </div>
                      <h4 className="font-bold mb-2">{items[0].title}</h4>
                      <p className="text-xs text-[#79747E]">{items[0].desc}</p>
                   </div>
                   <div className="bg-white p-6 rounded-[24px] shadow-sm border border-[#6750A4]/10">
                      <div className="w-12 h-12 bg-[#6750A4]/10 rounded-xl flex items-center justify-center text-[#6750A4] mb-4">
                         {items[1].icon}
                      </div>
                      <h4 className="font-bold mb-2">{items[1].title}</h4>
                      <p className="text-xs text-[#79747E]">{items[1].desc}</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-white p-6 rounded-[24px] shadow-sm border border-[#6750A4]/10">
                      <div className="w-12 h-12 bg-[#6750A4]/10 rounded-xl flex items-center justify-center text-[#6750A4] mb-4">
                         {items[2].icon}
                      </div>
                      <h4 className="font-bold mb-2">{items[2].title}</h4>
                      <p className="text-xs text-[#79747E]">{items[2].desc}</p>
                   </div>
                   <div className="bg-white p-6 rounded-[24px] shadow-sm border border-[#6750A4]/10">
                      <div className="w-12 h-12 bg-[#6750A4]/10 rounded-xl flex items-center justify-center text-[#6750A4] mb-4">
                         {items[3].icon}
                      </div>
                      <h4 className="font-bold mb-2">{items[3].title}</h4>
                      <p className="text-xs text-[#79747E]">{items[3].desc}</p>
                   </div>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#6750A4]/20 blur-3xl rounded-full -z-10"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C1B1F]">How We Teach</h2>
            <p className="text-lg text-[#1C1B1F]/70">
              Our approach ensures students understand, not just memorise. We focus on building a sustainable mindset towards digital ethics.
            </p>
            <div className="space-y-4">
               {[
                 "Quizzes, worksheets, and assessments",
                 "Focus on awareness, not fear",
                 "Aligning learning with real-world digital challenges"
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-[#6750A4] flex items-center justify-center text-white">
                      <CheckCircle2 size={14} />
                   </div>
                   <span className="font-medium text-[#1C1B1F]">{text}</span>
                 </div>
               ))}
            </div>
            <button 
              onClick={onEnrollClick}
              className="bg-[#6750A4] text-white px-8 py-4 rounded-full font-medium hover:shadow-xl active:scale-95 transition-all"
            >
              School Partnership Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
