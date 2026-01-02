
import React, { useState } from 'react';
import { Award, ShieldCheck, BadgeCheck, User } from 'lucide-react';

interface CertificateProps {
  isFullPage?: boolean;
}

const Certificate: React.FC<CertificateProps> = ({ isFullPage = false }) => {
  const [studentName, setStudentName] = useState<string>('');

  return (
    <section className={`py-24 ${isFullPage ? 'bg-[#F3EDF7]/50 pt-44' : 'bg-[#FFFBFE]'} relative overflow-hidden`} id="certificate">
      <div className="blob w-[500px] h-[500px] bg-[#6750A4]/10 -top-20 -right-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Official Credential Preview</h2>
          <p className="text-lg text-[#79747E]">Validated certifications that represent real legal and digital expertise.</p>
        </div>

        {/* Dynamic Name Input Section */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-[#6750A4]" />
            </div>
            <input
              type="text"
              placeholder="Type your name to preview..."
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="block w-full pl-14 pr-6 py-5 bg-white border-2 border-[#F3EDF7] rounded-full text-lg font-semibold text-[#1C1B1F] placeholder-[#79747E] focus:outline-none focus:border-[#6750A4] focus:ring-4 focus:ring-[#6750A4]/10 transition-all shadow-sm"
            />
          </div>
          <p className="text-center mt-3 text-xs font-medium text-[#79747E] uppercase tracking-widest">Live Certificate Preview</p>
        </div>

        <div className="max-w-4xl mx-auto glass-card p-4 sm:p-8 rounded-[40px] shadow-2xl relative">
          <div className="cert-container shadow-inner rounded-2xl relative">
            {/* SAMPLE WATERMARK */}
            <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-[0.03] rotate-[-35deg] overflow-hidden">
               <span className="text-[120px] font-black uppercase tracking-[0.2em] whitespace-nowrap">SAMPLE SAMPLE SAMPLE</span>
            </div>
            <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-[0.03] rotate-[-35deg] translate-y-40 overflow-hidden">
               <span className="text-[120px] font-black uppercase tracking-[0.2em] whitespace-nowrap">SAMPLE SAMPLE SAMPLE</span>
            </div>
            
             <div className="cert-border relative z-0">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8">
                   <div className="w-16 h-16 bg-[#6750A4] rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                      <Award size={32} />
                   </div>
                   <h3 className="text-2xl sm:text-4xl font-serif text-[#1C1B1F] mb-1 font-bold">Certificate of Achievement</h3>
                   <div className="h-0.5 w-40 bg-[#6750A4] my-2"></div>
                   <p className="text-[#6750A4] font-bold tracking-[0.2em] uppercase text-xs">Digital Awareness & Cyber Safety</p>
                </div>

                {/* Content */}
                <div className="text-center space-y-6 mb-12">
                   <p className="italic text-[#79747E]">This acknowledges that</p>
                   <p className={`text-3xl sm:text-5xl font-serif border-b-2 border-gray-200 inline-block px-12 pb-2 transition-all duration-300 ${studentName ? 'text-[#1C1B1F]' : 'text-gray-300'}`}>
                    {studentName || "Your Name Here"}
                   </p>
                   <p className="max-w-md mx-auto text-[#1C1B1F] leading-relaxed">
                      has successfully completed age-appropriate training in <br/>
                      <span className="font-bold">Cyber Law Awareness & Responsible AI Use</span>
                   </p>
                </div>

                {/* Footer Cert */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-8 px-4">
                   <div className="text-center sm:text-left space-y-1">
                      <p className="text-xs text-[#79747E] uppercase">Issued By</p>
                      <p className="font-bold text-[#1C1B1F]">Cyber Gyan Kosh</p>
                      <p className="text-[10px] text-[#79747E]">Legal Literacy by Steppu Educare</p>
                   </div>
                   
                   <div className="relative">
                      <div className="w-24 h-24 border-4 border-[#6750A4]/20 rounded-full flex items-center justify-center bg-white shadow-md">
                         <BadgeCheck size={48} className="text-[#6750A4]" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                         <ShieldCheck size={20} className="text-green-600" />
                      </div>
                   </div>

                   <div className="text-center sm:text-right space-y-1">
                      <p className="text-xs text-[#79747E] uppercase">Certificate ID</p>
                      <p className="font-mono text-xs text-[#1C1B1F]">CGK-2024-8849-XYZ</p>
                      <p className="text-[10px] text-[#79747E]">Verify at cybergyankosh.com</p>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white/50 rounded-2xl flex items-start gap-3">
              <BadgeCheck className="text-green-600 shrink-0" size={20} />
              <p className="text-xs text-[#79747E]">Accepted for school records and academic enrichment portfolios.</p>
            </div>
            <div className="p-4 bg-white/50 rounded-2xl flex items-start gap-3">
              <BadgeCheck className="text-green-600 shrink-0" size={20} />
              <p className="text-xs text-[#79747E]">Curated and verified by LL.M qualified Advocate Mukul Jha.</p>
            </div>
          </div>
        </div>
        
        {isFullPage && (
          <div className="mt-20 text-center space-y-6">
            <h3 className="text-2xl font-bold">Why Get Certified?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-3xl border border-[#F3EDF7]">
                <h4 className="font-bold mb-2">College Readiness</h4>
                <p className="text-sm text-[#79747E]">Boost your CV for university applications with rare legal literacy skills.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-[#F3EDF7]">
                <h4 className="font-bold mb-2">Trust Signal</h4>
                <p className="text-sm text-[#79747E]">Demonstrates to parents and schools that you are a responsible digital citizen.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-[#F3EDF7]">
                <h4 className="font-bold mb-2">Legal Shield</h4>
                <p className="text-sm text-[#79747E]">Indicates you understand the boundaries of the law, protecting you from unintentional misuse.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificate;
