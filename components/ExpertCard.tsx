
import React from 'react';
import { Expert } from '../types';
import { Linkedin, Mail } from 'lucide-react';

const ExpertCard: React.FC<{ expert: Expert }> = ({ expert }) => {
  return (
    <div className="group bg-white rounded-[40px] overflow-hidden border border-[#F3EDF7] hover:border-[#6750A4]/20 transition-all duration-500 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={expert.image} 
          alt={expert.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">{expert.specialty}</p>
          <h3 className="text-2xl font-bold">{expert.name}</h3>
        </div>
      </div>
      <div className="p-8">
        <p className="text-sm font-bold text-[#6750A4] mb-3">{expert.role}</p>
        <p className="text-[#49454F] text-sm leading-relaxed mb-6">
          {expert.bio}
        </p>
        <div className="flex gap-4">
          <a 
            href={expert.linkedin || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#F3EDF7] text-[#6750A4] hover:bg-[#6750A4] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#6750A4]"
            aria-label={`${expert.name}'s LinkedIn Profile`}
          >
            <Linkedin size={18} />
          </a>
          <a 
            href={expert.email ? `mailto:${expert.email}` : "#"} 
            className="p-3 rounded-full bg-[#F3EDF7] text-[#6750A4] hover:bg-[#6750A4] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#6750A4]"
            aria-label={`Email ${expert.name}`}
          >
            <Mail size={18} />
          </a>
        </div>
        <div className="flex gap-4">
          <button className="p-3 rounded-full bg-[#F3EDF7] text-[#6750A4] hover:bg-[#6750A4] hover:text-white transition-all">
            <Linkedin size={18} />
          </button>
          <button className="p-3 rounded-full bg-[#F3EDF7] text-[#6750A4] hover:bg-[#6750A4] hover:text-white transition-all">
            <Mail size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
