
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { ViewState } from '../types';
import Logo from './Logo';

interface FooterProps {
  onNavigate?: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (v: ViewState) => {
    if (onNavigate) onNavigate(v);
  };

  return (
    <footer className="bg-[#F3EDF7] pt-24 pb-12 rounded-t-[64px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16 items-start">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex justify-start">
              <button onClick={() => handleNav('home')} className="text-left active:scale-95 transition-transform">
                <Logo className="h-20" />
              </button>
            </div>
            <p className="text-[#49454F] max-w-md text-lg leading-relaxed">
              <b>Cyber Gyan Kosh</b> is the official legal literacy program by <b>Steppu Educare</b>, curated by <b>Adv Mukul Jha and Team</b>. We empower the next generation to navigate the digital world with confidence and legal clarity.
            </p>
            <div className="flex gap-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#6750A4] shadow-sm hover:bg-[#6750A4] hover:text-white hover:-translate-y-1 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#1C1B1F] mb-8 text-xl">Quick Links</h4>
            <ul className="space-y-4 text-base text-[#49454F]">
              <li><button onClick={() => handleNav('experts')} className="hover:text-[#6750A4] transition-colors">Our Team</button></li>
              <li><button onClick={() => handleNav('courses')} className="hover:text-[#6750A4] transition-colors">Course Framework</button></li>
              <li><button onClick={() => handleNav('methodology')} className="hover:text-[#6750A4] transition-colors">Our Methodology</button></li>
              <li><button onClick={() => handleNav('faq')} className="hover:text-[#6750A4] transition-colors">Student FAQs</button></li>
              <li><button onClick={() => handleNav('certificate')} className="hover:text-[#6750A4] transition-colors">Verify Certificate</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1C1B1F] mb-8 text-xl">Get in Touch</h4>
            <ul className="space-y-6 text-base text-[#49454F]">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#6750A4]/10 rounded-xl flex items-center justify-center text-[#6750A4]">
                  <Mail size={20} />
                </div>
                <span>cybergyankosh@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#6750A4]/10 rounded-xl flex items-center justify-center text-[#6750A4]">
                  <Phone size={20} />
                </div>
                <span>+91 (800) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-[#79747E]/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#79747E] text-center md:text-left">
            © 2024 <b>Steppu Educare</b>. Cyber Gyan Kosh is a registered educational program. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-[#79747E]">
            <a href="#" className="hover:text-[#6750A4] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#6750A4] transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#6750A4]/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;
