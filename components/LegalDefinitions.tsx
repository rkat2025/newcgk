
import React from 'react';
import { DEFINITIONS } from '../constants';

const LegalDefinitions: React.FC = () => {
  return (
    <section className="py-24 bg-[#F3EDF7]/50" id="legal-definitions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#1C1B1F]">Key Legal Definitions</h2>
            <p className="text-[#49454F] text-lg max-w-2xl mx-auto">
              Master the terminology of the digital age with our expert-curated glossary, designed for clarity and legal precision.
            </p>
          </div>

          <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-[#6750A4]/10 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3EDF7] rounded-bl-[100px] -z-10 opacity-50"></div>
            
            <div className="space-y-12">
              {DEFINITIONS.map((def, idx) => (
                <div key={idx} className="group">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-black text-[#6750A4] mb-3 flex items-start gap-3">
                      <span className="bg-[#6750A4] text-white w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm mt-1">Q</span>
                      What is {def.term}?
                    </h3>
                  </div>
                  <div className="pl-11 border-l-2 border-[#F3EDF7] group-hover:border-[#6750A4]/30 transition-colors duration-500">
                    <p className="text-[#1C1B1F] text-lg leading-relaxed flex items-start gap-3">
                      <span className="text-[#6750A4] font-black shrink-0 pt-1">A:</span>
                      {def.meaning}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center p-10 bg-[#F3EDF7] rounded-[40px] border border-white">
              <p className="text-lg italic text-[#49454F] leading-relaxed font-medium">
                "Understanding these terms is the first step toward compliance with the <b className="text-[#6750A4]">IT Act 2000</b>. Our course specifically focuses on the inverted pyramid style of learning, giving you the core answers first followed by professional context." 
                <br /><br />
                <span className="not-italic font-extrabold text-[#1C1B1F]">— Adv. Mukul Jha and Team</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDefinitions;
