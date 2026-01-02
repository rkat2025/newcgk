
import React from 'react';

interface EducatorCTAProps {
  onPartnerClick?: () => void;
}

const EducatorCTA: React.FC<EducatorCTAProps> = ({ onPartnerClick }) => {
  const email = "cybergyankosh@gmail.com";

  const handleDefaultClick = () => {
    if (onPartnerClick) {
      onPartnerClick();
    } else {
      window.location.href = `mailto:${email}?subject=Educator Partnership Inquiry - Cyber Gyan Kosh`;
    }
  };

  return (
    <div className="mt-24 max-w-7xl mx-auto px-4">
      <div className="bg-gradient-to-r from-[#6750A4] to-[#5a4691] rounded-[48px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-20 -mb-20"></div>
        
        <div className="text-left space-y-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Are you an educator?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Bring Cyber Gyan Kosh to your school and empower your students with life-long digital skills.
          </p>
        </div>

        <button 
          onClick={handleDefaultClick}
          className="bg-white text-[#6750A4] px-12 py-5 rounded-full font-bold hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-xl whitespace-nowrap shadow-xl relative z-10"
        >
          Partner with Us
        </button>
      </div>
    </div>
  );
};

export default EducatorCTA;
