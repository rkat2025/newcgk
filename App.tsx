
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Methodology from './components/Methodology';
import Certificate from './components/Certificate';
import LegalDefinitions from './components/LegalDefinitions';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ExpertCard from './components/ExpertCard';
import Contact from './components/Contact';
import Enroll from './components/Enroll';
import MissionVision from './components/MissionVision';
import Quiz from './components/Quiz';
import { EXPERTS } from './constants';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero 
              onExploreClick={() => setCurrentView('courses')} 
              onEnrollClick={() => setCurrentView('enroll')} 
            />
            <About onExpertsClick={() => setCurrentView('experts')} />
            <MissionVision />
            <LegalDefinitions />
            <Methodology onEnrollClick={() => setCurrentView('enroll')} />
            <FAQ />
          </>
        );
      case 'courses':
        return (
          <Courses 
            isFullPage={true} 
            onEnrollClick={() => setCurrentView('enroll')} 
            onQuizClick={() => setCurrentView('quiz')}
          />
        );
      case 'quiz':
        return (
          <Quiz 
            onBack={() => setCurrentView('courses')} 
            onEnrollClick={() => setCurrentView('enroll')} 
          />
        );
       case 'experts':
        return (
          <section className="pt-44 pb-24 px-4 bg-[#FFFBFE]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#1C1B1F] mb-6">Our Experts</h1>
                <p className="text-xl text-[#49454F] max-w-2xl mx-auto leading-relaxed">
                  Learn from qualified High Court Advocates and Cyber Forensics specialists with decades of combined experience.
                </p>
              </div>
              <div className="flex flex-col gap-12">
                {EXPERTS.map((expert, idx) => (
                  <ExpertCard key={idx} expert={expert} />
                ))}
              </div>
            </div>
          </section>
        );
      
      case 'methodology':
        return (
          <div className="pt-24">
            <Methodology onEnrollClick={() => setCurrentView('enroll')} />
          </div>
        );
      case 'faq':
        return (
          <div className="pt-24">
            <FAQ />
          </div>
        );
      case 'certificate':
        return <Certificate isFullPage={true} />;
      case 'contact':
        return <Contact onPartnerClick={() => setCurrentView('enroll')} />;
      case 'enroll':
        return <Enroll onPartnerClick={() => setCurrentView('enroll')} />;
      default:
        return <Hero onExploreClick={() => setCurrentView('courses')} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main>
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
