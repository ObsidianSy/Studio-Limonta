
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Classes from './components/Classes';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SchedulingModal from './components/SchedulingModal';
import CookieConsent from './components/CookieConsent';
import { COMPANY_INFO } from './constants';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [schedulePrefill, setSchedulePrefill] = useState('');

  const handleOpenSchedule = (prefill?: string) => {
    setSchedulePrefill(prefill || '');
    setIsScheduleOpen(true);
  };

  return (
    <main className="min-h-screen font-sans bg-white selection:bg-brand-cyan selection:text-white">
      <Navbar onOpenSchedule={() => handleOpenSchedule()} />
      <Hero onOpenSchedule={() => handleOpenSchedule()} />
      
      <Highlights />
      <Features />
      <Classes onOpenSchedule={handleOpenSchedule} />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Footer />
      
      <SchedulingModal 
        isOpen={isScheduleOpen} 
        onClose={() => setIsScheduleOpen(false)} 
        prefilledDescription={schedulePrefill}
      />
      
      <CookieConsent />

      {/* Botão Flutuante WhatsApp Ajustado */}
      <a 
        href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)] transition-all duration-300 group flex items-center justify-center hover:scale-110 active:scale-90 border-4 border-white"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></span>
        <MessageCircle size={30} className="fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </main>
  );
};

export default App;
