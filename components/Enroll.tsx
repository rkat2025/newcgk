
import React from 'react';
import { Check, FileText, Mail, GraduationCap, Trophy, Target } from 'lucide-react';
import EducatorCTA from './EducatorCTA';

interface EnrollProps {
  onPartnerClick?: () => void;
}

const Enroll: React.FC<EnrollProps> = ({ onPartnerClick }) => {
  const email = "cybergyankosh@gmail.com";
  
  const handleEmailRedirect = (type: 'School' | 'Student') => {
    const subject = type === 'School' ? 'School Partnership Inquiry' : 'Individual Student Enrollment Inquiry';
    window.location.href = `mailto:${email}?subject=${subject} - Cyber Gyan Kosh`;
  };

  const schoolBenefits = [
    "Integration with Computer Science or Social Science",
    "Structured, Certified Learning Outcomes",
    "Expert Guest Lectures & Workshops",
    "Webinars by Forensic & Legal Professionals"
  ];

  const studentBenefits = [
    "Official Certificate of Completion",
    "Foundation in Indian Cyber Law (IT Act)",
    "Practical AI Ethics & Safety Training",
    "Early preparation for Cyber Security careers"
  ];

  return (
    <section className="pt-44 pb-24 px-4 bg-[#FFFBFE] relative overflow-hidden">
      {/* Background decoration */}
      <div className="blob w-[600px] h-[600px] bg-[#6750A4]/10 -top-20 -left-20"></div>
      <div className="blob w-[400px] h-[400px] bg-[#6750A4]/5 bottom-20 right-0"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#1C1B1F] leading-tight">
            Start Your <span className="text-[#6750A4]">Digital Journey</span>
          </h1>
          <p className="text-xl text-[#49454F] max-w-2xl mx-auto">
            Choose your pathway to becoming a legally aware and cyber-safe digital citizen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Path 1: Schools/Institutions */}
          <div className="bg-white p-10 md:p-14 rounded-[56px] shadow-xl border border-[#F3EDF7] relative overflow-hidden group hover:border-[#6750A4]/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3EDF7] rounded-bl-[56px] -z-10 group-hover:bg-[#6750A4]/5 transition-colors"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#F3EDF7] rounded-2xl flex items-center justify-center text-[#6750A4] shrink-0">
                <FileText size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-[#1C1B1F]">For Schools</h2>
                <p className="text-[#6750A4] font-bold text-sm tracking-widest uppercase">Institutional MoU</p>
              </div>
            </div>

            <p className="text-[#49454F] text-lg leading-relaxed mb-10">
              Bring Cyber Gyan Kosh to your entire student body through a formal Memorandum of Understanding (MoU).
            </p>

            <div className="space-y-5 mb-12">
              {schoolBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#F3EDF7] flex items-center justify-center shrink-0">
                    <Check className="text-[#6750A4]" size={14} strokeWidth={4} />
                  </div>
                  <span className="text-base font-medium text-[#49454F]">{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => handleEmailRedirect('School')}
              className="w-full bg-[#6750A4] text-white py-6 rounded-3xl font-bold text-xl shadow-xl shadow-[#6750A4]/20 hover:bg-[#5a4691] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Partner with Us
            </button>
          </div>

          {/* Path 2: Individual Students */}
          <div className="bg-[#1C1B1F] p-10 md:p-14 rounded-[56px] shadow-2xl relative overflow-hidden group">
             {/* Subtle gradient accent for dark mode card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#6750A4]/20 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                <GraduationCap size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-white">For Students</h2>
                <p className="text-[#B69DF8] font-bold text-sm tracking-widest uppercase">Individual Enrollment</p>
              </div>
            </div>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Join our program individually and gain a competitive edge in the digital world with professional certification.
            </p>

            <div className="space-y-5 mb-12">
              {studentBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Check className="text-[#B69DF8]" size={14} strokeWidth={4} />
                  </div>
                  <span className="text-base font-medium text-white/80">{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => handleEmailRedirect('Student')}
              className="w-full bg-white text-[#1C1B1F] py-6 rounded-3xl font-bold text-xl shadow-xl hover:bg-gray-100 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Enroll as Student
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 text-center space-y-4 py-12 px-8 bg-[#F3EDF7]/50 rounded-[40px] border border-[#6750A4]/10">
          <p className="text-[#49454F] font-medium">Have questions about which path is right for you?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
             <div className="flex items-center gap-2">
                <Mail className="text-[#6750A4]" size={20} />
                <a href={`mailto:${email}`} className="font-bold text-[#1C1B1F] hover:text-[#6750A4] transition-colors">{email}</a>
             </div>
             <div className="hidden sm:block w-1.5 h-1.5 bg-[#79747E]/30 rounded-full"></div>
             <div className="flex items-center gap-2">
                <Trophy className="text-[#6750A4]" size={20} />
                <span className="font-bold text-[#1C1B1F]">Verified Certification</span>
             </div>
          </div>
        </div>

        {/* Educator CTA Section */}
        <EducatorCTA onPartnerClick={() => handleEmailRedirect('School')} />
      </div>
    </section>
  );
};

export default Enroll;
