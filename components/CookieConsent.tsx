import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('limontas_cookie_consent');
    if (!consent) {
      // Small delay to not annoy immediately
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('limontas_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-[60] animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-slate-100 flex flex-col gap-4">
        <div className="flex items-start gap-3">
           <div className="p-2 bg-brand-yellow/20 rounded-full text-brand-dark shrink-0">
             <Cookie size={24} />
           </div>
           <div>
             <h4 className="font-display font-bold text-brand-dark mb-1">Nós usamos cookies!</h4>
             <p className="text-sm text-gray-600 leading-snug">
               Utilizamos cookies para melhorar sua experiência no nosso site. Ao continuar navegando, você concorda com nossa política.
             </p>
           </div>
        </div>
        <div className="flex gap-2">
           <button 
             onClick={handleAccept}
             className="flex-1 bg-brand-blue text-white font-bold py-2 rounded-lg hover:bg-brand-dark transition-colors text-sm shadow-md"
           >
             Aceitar
           </button>
           <button 
             onClick={() => setIsVisible(false)}
             className="px-4 py-2 text-gray-500 font-bold hover:text-gray-700 text-sm"
           >
             Agora não
           </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;