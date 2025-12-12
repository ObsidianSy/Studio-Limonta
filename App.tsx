import React, { useState, useCallback } from 'react';
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
import SplashScreen from './components/SplashScreen';
import { COMPANY_INFO } from './constants';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [schedulePrefill, setSchedulePrefill] = useState('');
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  const handleOpenSchedule = (prefill?: string) => {
    setSchedulePrefill(prefill || '');
    setIsScheduleOpen(true);
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      <main className="min-h-screen font-sans bg-slate-50 selection:bg-brand-yellow selection:text-brand-dark">
      <Navbar onOpenSchedule={() => handleOpenSchedule()} />
      <Hero onOpenSchedule={() => handleOpenSchedule()} />
      
      {/* Highlights (Stories Style) */}
      <Highlights />
      
      {/* Methodology (Cyan Bg) */}
      <Features />
      
      {/* Classes / Turmas (Cards) - Moved here as requested */}
      <Classes onOpenSchedule={handleOpenSchedule} />
      
      {/* Why Choose Us (Slate Bg) */}
      <WhyUs />
      
      {/* Social Proof */}
      <Testimonials />

      {/* FAQ (Dark Bg) */}
      <FAQ />
      
      {/* Footer */}
      <Footer />
      
      <SchedulingModal 
        isOpen={isScheduleOpen} 
        onClose={() => setIsScheduleOpen(false)} 
        prefilledDescription={schedulePrefill}
      />
      
      <CookieConsent />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-glow transition-all duration-300 group flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
        <span className="absolute right-full mr-3 bg-white text-slate-800 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
          Fale Conosco
        </span>
        {/* Notification Badge */}
        <span className="absolute -top-0.5 -right-0.5 sm:top-0 sm:right-0 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 border-2 border-white rounded-full"></span>
      </a>
    </main>
    </>
  );
};

export default App;