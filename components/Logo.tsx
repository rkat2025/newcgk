
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://img.icons8.com/color/96/owl.png" 
        alt="Cyber Gyan Kosh Logo" 
        className="h-full w-auto object-contain"
      />
      <div className="flex flex-col leading-[0.85]">
        <span className="text-xs font-bold text-[#6750A4] tracking-[0.4em] uppercase">
          cyber
        </span>
        <span className="text-xl font-black text-[#1C1B1F] tracking-tighter uppercase whitespace-nowrap">
          gyan kosh
        </span>
      </div>
    </div>
  );
};

export default Logo;
