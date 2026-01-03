
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
  onEnrollClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick, onEnrollClick }) => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#FFFBFE]" id="hero">
      {/* Background Blobs for Material You effect */}
      <div className="blob w-[600px] h-[600px] bg-[#6750A4]/10 -top-20 -left-20"></div>
      <div className="blob w-80 h-80 bg-[#B69DF8]/15 bottom-0 right-10 delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="md:col-span-7 space-y-10 text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F3EDF7] text-[#6750A4] font-bold text-xs uppercase tracking-wider shadow-sm">
              <ShieldCheck size={16} strokeWidth={3} />
              India's Premier Cyber Safety Course
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1C1B1F] leading-[1.1] tracking-tight">
              Learning to Stay <br />
              <span className="text-[#6750A4]">Safe, Smart</span> <br />
              & Responsible
            </h1>
            
            <p className="text-xl text-[#49454F] leading-relaxed max-w-xl">
              Empowering students with essential knowledge of Cyber Law, Artificial Intelligence, and Cyber Security. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={onExploreClick}
                className="bg-[#6750A4] text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl hover:bg-[#5a4691] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg group"
              >
                Explore Courses 
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onEnrollClick}
                className="bg-white border-2 border-[#79747E]/30 text-[#1C1B1F] px-10 py-5 rounded-full font-bold hover:bg-[#F3EDF7] hover:border-[#6750A4]/30 transition-all text-lg shadow-sm"
              >
                Enroll Now
              </button>
            </div>
            
            <p className="text-sm font-medium text-[#79747E] italic">
              *Cyber Gyan Kosh is the official legal literacy program by Steppu Educare.
            </p>
          </div>

          {/* Right Column: Hero Visual - Clean Logo Only */}
          <div className="md:col-span-5 relative flex items-center justify-center">
            {/* Ambient Glow behind the logo */}
            <div className="absolute w-80 h-80 bg-[#6750A4]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            
            <div className="relative flex items-center justify-center w-full h-full animate-float">
              <img 
                src="https://github.com/rkat2025/imgs/blob/main/54645638036.png?raw=true" 
                alt="Cyber Gyan Kosh Logo" 
                className="w-full max-w-[420px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(103,80,164,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
