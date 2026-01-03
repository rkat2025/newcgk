
import React from 'react';
import { Expert } from '../types';
import { Linkedin, Mail } from 'lucide-react';

const ExpertCard: React.FC<{ expert: Expert }> = ({ expert }) => {
  return (
    <div className="group bg-white rounded-[48px] overflow-hidden border border-[#F3EDF7] hover:border-[#6750A4]/20 transition-all duration-500 hover:shadow-2xl flex flex-col md:flex-row h-full">
      {/* Left Side: Photo */}
      <div className="md:w-2/5 relative overflow-hidden min-h-[320px] md:min-h-0">
        <img 
          src={expert.image} 
          alt={expert.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Right Side: Details */}
      <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-xl bg-[#F3EDF7] text-[#6750A4] text-[10px] font-black uppercase tracking-widest mb-4">
            {expert.specialty}
          </div>
          <h3 className="text-3xl font-black text-[#1C1B1F] leading-tight mb-1">{expert.name}</h3>
          <p className="text-sm font-bold text-[#6750A4] mb-6">{expert.role}</p>
          <p className="text-[#49454F] text-base leading-relaxed mb-8">
            {expert.bio}
          </p>
        </div>
        
        {/* Buttons below details */}
        <div className="flex flex-wrap gap-4 mt-auto">
          <a 
            href={expert.linkedin || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#6750A4] text-white font-bold text-sm hover:bg-[#5a4691] hover:scale-105 transition-all shadow-lg shadow-[#6750A4]/20"
            aria-label={`${expert.name}'s LinkedIn Profile`}
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
          <a 
            href={expert.email ? `mailto:${expert.email}` : "#"} 
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#F3EDF7] text-[#6750A4] font-bold text-sm hover:bg-[#6750A4] hover:text-white transition-all hover:scale-105"
            aria-label={`Email ${expert.name}`}
          >
            <Mail size={20} />
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
