
import React from 'react';
import { UserCheck, ShieldAlert, Scale } from 'lucide-react';

interface AboutProps {
  onExpertsClick?: () => void;
}

const About: React.FC<AboutProps> = ({ onExpertsClick }) => {
  const points = [
    {
      icon: <UserCheck className="text-[#6750A4]" />,
      title: "Digital Smart Citizens",
      desc: "Moving beyond basic usage to intelligent, safe navigation."
    },
    {
      icon: <ShieldAlert className="text-[#6750A4]" />,
      title: "Cyber Safe",
      desc: "Protecting students from bullying, phishing, and online harm."
    },
    {
      icon: <Scale className="text-[#6750A4]" />,
      title: "Legally Informed",
      desc: "Understanding rights and duties under the IT Act 2000."
    }
  ];

  const handleExpertsClick = () => {
    if (onExpertsClick) onExpertsClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#F3EDF7]/30" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Why Cyber Gyan Kosh?</h2>
          <p className="text-lg text-[#49454F] leading-relaxed">
            In an age where children grow up online—using smartphones, social media, gaming platforms, and AI tools—it is crucial for them to understand not just how technology works, but also how to use it safely, legally, and responsibly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F3EDF7]">
              <div className="w-16 h-16 bg-[#F3EDF7] rounded-2xl flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
              <p className="text-[#79747E] leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#6750A4] text-white p-8 md:p-12 rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-4">A Professional Touch</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Cyber Gyan Kosh is the official legal literacy program by <b>Steppu Educare</b>, curated by <b>Adv Mukul Jha and Team</b> and supported by a team of cyber veterans. We bridge the gap between technology use and legal understanding.
            </p>
          </div>
          <button 
            onClick={handleExpertsClick}
            className="bg-white text-[#6750A4] px-10 py-5 rounded-full font-bold hover:shadow-2xl transition-all whitespace-nowrap active:scale-95 text-lg"
          >
            Meet Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;