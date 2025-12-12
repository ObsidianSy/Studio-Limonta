import React, { useState } from 'react';
import { Menu, X, MessageCircle, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface NavbarProps {
  onOpenSchedule: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, '_blank');
  };

  const handleLocation = () => {
    window.open(COMPANY_INFO.googleMaps, '_blank');
  };

  return (
    <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer transition-transform hover:scale-105" onClick={() => window.scrollTo(0,0)}>
            {/* 
                IMPORTANTE: Salve a imagem da logo enviada como 'logo.png' na pasta public do projeto.
            */}
            <img 
              src="/logo.png" 
              alt="Studio Limontas Logo" 
              className="h-20 md:h-24 w-auto object-contain drop-shadow-sm"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-bold transition-colors">Início</a>
              <a href="#metodologia" className="text-gray-600 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-bold transition-colors">Metodologia</a>
              <button onClick={handleLocation} className="text-gray-600 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-bold transition-colors">Localização</button>
              <button onClick={handleWhatsApp} className="text-gray-600 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-bold transition-colors">Fale Conosco</button>
              <button 
                onClick={onOpenSchedule}
                className="bg-brand-blue text-white hover:bg-brand-dark px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Agendar Aula
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-blue hover:bg-blue-50 focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Styled like the requested Linktree Card */}
      {isOpen && (
        <div className="md:hidden bg-brand-cyan/95 backdrop-blur-xl absolute top-24 left-0 w-full min-h-[calc(100vh-6rem)] border-t border-white/20 animate-fadeIn p-6 flex flex-col items-center overflow-y-auto pb-20">
            
            {/* Header com Logo e Texto (Estilo Linktree) */}
            <div className="flex flex-col items-center mb-8 mt-2 text-center">
                 <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl mb-4 p-2">
                     <img src="/logo.png" alt="Studio Limontas" className="w-full h-full object-contain rounded-full" />
                 </div>
                 <h2 className="font-display text-3xl font-bold text-white mb-2 text-shadow-sm">Studio Limonta's</h2>
                 <p className="text-white/90 text-base font-medium max-w-xs leading-relaxed">
                    Venha conhecer nosso método de aprendizado inclusivo!
                 </p>
            </div>

            <div className="w-full max-w-sm space-y-4">
                <button 
                    onClick={() => { handleWhatsApp(); setIsOpen(false); }}
                    className="w-full bg-white text-brand-dark font-bold py-4 rounded-xl shadow-lg flex items-center justify-between px-6 hover:bg-blue-50 transform active:scale-95 transition-all"
                >
                    Fale Conosco <MessageCircle size={20} className="text-brand-cyan" />
                </button>

                <button 
                    onClick={() => { onOpenSchedule(); setIsOpen(false); }}
                    className="w-full bg-white text-brand-dark font-bold py-4 rounded-xl shadow-lg flex items-center justify-between px-6 hover:bg-blue-50 transform active:scale-95 transition-all"
                >
                    Agendar Aula Experimental <span className="text-brand-cyan">⋮</span>
                </button>

                <button 
                    onClick={() => { handleLocation(); setIsOpen(false); }}
                    className="w-full bg-white text-brand-dark font-bold py-4 rounded-xl shadow-lg flex items-center justify-between px-6 hover:bg-blue-50 transform active:scale-95 transition-all"
                >
                    Localização <MapPin size={20} className="text-brand-cyan" />
                </button>

                <a 
                    href="#metodologia"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-white text-brand-dark font-bold py-4 rounded-xl shadow-lg flex items-center justify-between px-6 hover:bg-blue-50 transform active:scale-95 transition-all"
                >
                    Metodologia <span className="text-brand-cyan">⋮</span>
                </a>
            </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;