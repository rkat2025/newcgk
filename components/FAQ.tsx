
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#FFFBFE]" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1B1F]">Frequently Asked Questions</h2>
          <p className="text-[#79747E]">Get direct answers to common queries about our program.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-3xl border transition-all duration-300 ${openIndex === idx ? 'bg-[#F3EDF7] border-[#6750A4]/20' : 'bg-white border-[#F3EDF7] hover:border-[#6750A4]/20'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4"
              >
                <span className="font-bold text-[#1C1B1F] text-lg">{faq.question}</span>
                <div className={`p-2 rounded-full transition-all ${openIndex === idx ? 'bg-[#6750A4] text-white' : 'bg-[#F3EDF7] text-[#6750A4]'}`}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 pb-8 px-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-[#79747E] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
