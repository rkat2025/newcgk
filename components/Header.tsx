
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';
import Logo from './Logo';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links: { name: string; view: ViewState }[] = [
    { name: 'Home', view: 'home' },
    { name: 'Courses', view: 'courses' },
    { name: 'Experts', view: 'experts' },
    { name: 'FAQ', view: 'faq' },
    { name: 'Certificate', view: 'certificate' },
  ];

  const handleLinkClick = (view: ViewState) => {
    setIsOpen(false);
    
    // homeSections are targets on the landing page
    const homeSections = ['home', 'faq'];
    
    if (homeSections.includes(view)) {
      if (currentView !== 'home') {
        onNavigate('home');
        // Wait for render, then scroll
        setTimeout(() => {
          const id = view === 'home' ? 'hero' : view;
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const id = view === 'home' ? 'hero' : view;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } else {
      onNavigate(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FFFBFE]/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={() => handleLinkClick('home')} className="transition-transform active:scale-95 focus:outline-none">
             <Logo className={scrolled ? "h-10 md:h-12" : "h-14 md:h-16"} />
          </button>
          
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <button 
                key={link.view} 
                onClick={() => handleLinkClick(link.view)}
                className={`text-sm font-bold transition-all relative group ${currentView === link.view ? 'text-[#6750A4]' : 'text-[#1C1B1F] hover:text-[#6750A4]'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#6750A4] transition-all ${currentView === link.view ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('enroll')}
              className="bg-[#6750A4] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all text-sm tracking-wide"
            >
              Enroll Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1C1B1F] p-2 hover:bg-[#F3EDF7] rounded-full transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 w-full h-screen bg-[#FFFBFE] z-[60] flex flex-col p-8 space-y-10 animate-in fade-in slide-in-from-top duration-300">
          <div className="flex justify-between items-center">
            <Logo className="h-16" />
            <button onClick={() => setIsOpen(false)} className="p-3 bg-[#F3EDF7] rounded-full">
              <X size={32} className="text-[#6750A4]" />
            </button>
          </div>
          <div className="flex flex-col space-y-8 pt-12">
            {links.map((link) => (
              <button 
                key={link.view} 
                onClick={() => handleLinkClick(link.view)}
                className={`text-left text-3xl font-extrabold ${currentView === link.view ? 'text-[#6750A4]' : 'text-[#1C1B1F]'}`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('enroll')}
              className="w-full bg-[#6750A4] text-white py-5 rounded-full font-bold text-xl shadow-xl active:scale-95 transition-all mt-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
