
import React from 'react';
import { Target, Sprout } from 'lucide-react';

const MissionVision: React.FC = () => {
  const reasons = [
    {
      id: 1,
      title: "Build Cyber Awareness",
      desc: "Help students identify online threats such as phishing, hacking, cyberbullying, scams, and misinformation, and teach safe digital practices."
    },
    {
      id: 2,
      title: "Promote Safe Internet Habits",
      desc: "Encourage responsible use of social media, emails, gaming platforms, and online tools while protecting privacy and personal data."
    },
    {
      id: 3,
      title: "Legal & Ethical Awareness",
      desc: "Introduce students to India's IT Act, cybercrime laws, digital rights, responsibilities, and reporting mechanisms."
    },
    {
      id: 4,
      title: "Responsible Digital Citizenship",
      desc: "Instill values of empathy, respect, accountability, and responsible online behaviour to ensure a positive digital footprint."
    }
  ];

  return (
    <section className="py-24 bg-[#FFFBFE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#6750A4]">
            Why Cyber Awareness Matters
          </h2>
        </div>

        {/* Reason Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason) => (
            <div 
              key={reason.id} 
              className="bg-[#F3EDF7] p-8 rounded-[32px] border border-[#79747E]/10 flex flex-col items-start hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 bg-[#4285F4] text-white rounded-lg flex items-center justify-center font-black text-xl mb-6 shadow-sm">
                {reason.id}
              </div>
              <h3 className="text-xl font-bold text-[#1C1B1F] mb-4">
                {reason.title}
              </h3>
              <p className="text-[#49454F] text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Vision Blocks */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-[#6750A4] text-white p-10 md:p-14 rounded-[48px] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[48px]"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <Target size={32} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-black tracking-tight">Our Mission</h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              To equip students with essential digital skills and awareness through structured, interactive, and engaging programs that integrate cyber safety, AI understanding, and legal literacy into school education.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#DBCBFF] text-[#1C1B1F] p-10 md:p-14 rounded-[48px] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#6750A4]/5 rounded-bl-[48px]"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-[#6750A4]/10 rounded-2xl flex items-center justify-center text-[#6750A4]">
                <Sprout size={32} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-black tracking-tight">Our Vision</h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-[#49454F]">
              To make digital literacy and cyber awareness an integral part of school learning, fostering a culture of safety, curiosity, and responsibility in the digital space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
