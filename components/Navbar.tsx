
import React, { useState } from 'react';
import { Menu, X, MessageCircle, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface NavbarProps {
  onOpenSchedule: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Serviços', href: '#turmas' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Name as Logo */}
          <div className="flex-shrink-0 flex flex-col cursor-pointer group" onClick={handleLogoClick}>
             <span className="font-display text-2xl font-black text-slate-950 tracking-tighter leading-none group-hover:text-brand-cyan transition-colors">
               {COMPANY_INFO.name}
             </span>
             <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-blue">
               {COMPANY_INFO.subtitle}
             </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-slate-500 hover:text-slate-950 text-sm font-black uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button 
              onClick={onOpenSchedule}
              className="bg-slate-950 text-white hover:bg-brand-cyan px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:shadow-brand-cyan/20 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Consultoria VIP
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-slate-950 bg-slate-50 rounded-2xl"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-x-0 top-24 bottom-0 shadow-2xl p-8 border-t border-slate-100 animate-fadeIn z-50 overflow-y-auto">
            <div className="flex flex-col gap-2 h-full">
                <span className="text-slate-300 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Navegação</span>
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="py-6 font-display text-4xl font-black text-slate-950 border-b border-slate-50 flex items-center justify-between group"
                  >
                    {link.name}
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-white transition-all">
                      <Instagram size={18} />
                    </div>
                  </a>
                ))}
                
                <div className="mt-auto pt-10">
                  <button 
                      onClick={() => { onOpenSchedule(); setIsOpen(false); }}
                      className="w-full bg-slate-950 text-white font-black py-6 rounded-3xl shadow-2xl text-xl uppercase tracking-tighter mb-8"
                  >
                      Agendar Agora
                  </button>
                  
                  <div className="flex justify-center gap-10">
                      <a href={`https://instagram.com/${COMPANY_INFO.instagram}`} className="text-slate-400 hover:text-brand-cyan transition-colors">
                        <Instagram size={28} />
                      </a>
                      <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="text-slate-400 hover:text-brand-cyan transition-colors">
                        <MessageCircle size={28} />
                      </a>
                  </div>
                </div>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
