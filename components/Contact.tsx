
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import EducatorCTA from './EducatorCTA';

interface ContactProps {
  onPartnerClick?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onPartnerClick }) => {
  const partnershipEmail = "cybergyankosh@gmail.com";
  
  const handleEmailRedirect = () => {
    window.location.href = `mailto:${partnershipEmail}?subject=Contact Inquiry - Cyber Gyan Kosh`;
  };

  return (
    <section className="pt-44 pb-24 px-4 bg-[#FFFBFE] relative overflow-hidden">
      {/* Background decoration */}
      <div className="blob w-[600px] h-[600px] bg-[#6750A4]/10 -top-20 -left-20"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1C1B1F] mb-6">Contact Us</h1>
          <p className="text-xl text-[#49454F] max-w-2xl mx-auto leading-relaxed">
            Have questions? Reach out to us for school partnerships, course enrollments, or guest lectures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Get in Touch Card */}
          <div className="bg-[#6750A4] text-white p-10 md:p-14 rounded-[48px] shadow-2xl flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Email Us</p>
                  <p className="text-xl font-bold">info@cybergyankosh.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Visit Us</p>
                  <p className="text-xl font-bold">New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Call Us</p>
                  <p className="text-xl font-bold">+91 (800) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours of Operation Card */}
          <div className="bg-[#F3EDF7] p-10 md:p-14 rounded-[48px] border border-[#79747E]/10 flex flex-col">
            <h2 className="text-3xl font-bold mb-10 text-[#1C1B1F]">Hours of Operation</h2>
            
            <div className="space-y-8 flex-grow">
              <div className="flex justify-between items-center pb-6 border-b border-[#79747E]/20">
                <span className="text-lg text-[#49454F] font-medium">Monday – Friday</span>
                <span className="text-lg font-bold text-[#1C1B1F]">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-6 border-b border-[#79747E]/20">
                <span className="text-lg text-[#49454F] font-medium">Saturday</span>
                <span className="text-lg font-bold text-[#1C1B1F]">10:00 AM – 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-6">
                <span className="text-lg text-[#49454F] font-medium">Sunday</span>
                <span className="text-lg font-bold text-[#6750A4]">Closed</span>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white/50 backdrop-blur-sm rounded-[32px] border border-white">
              <p className="text-sm italic text-[#49454F] text-center leading-relaxed font-medium">
                For urgent queries, please email us directly and we will respond as soon as possible.
              </p>
            </div>
          </div>
        </div>

        {/* New Educator CTA */}
        <EducatorCTA onPartnerClick={handleEmailRedirect} />
      </div>
    </section>
  );
};

export default Contact;
