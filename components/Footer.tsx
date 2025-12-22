
import React from 'react';
import { Instagram, Send, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <div id="contato" className="relative pt-20 bg-white overflow-hidden scroll-mt-24">
        
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 w-full text-brand-dark z-10">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-current transform rotate-180 scale-y-75 origin-top">
            <path fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,213.3C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>

      <footer className="bg-brand-dark text-white relative z-20 pb-12 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
                {/* Brand Info */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h3 className="font-display text-3xl font-bold mb-2">{COMPANY_INFO.name}</h3>
                    <p className="text-brand-cyan font-bold tracking-[0.2em] text-xs uppercase mb-6">{COMPANY_INFO.subtitle}</p>
                    <p className="text-cyan-100/70 mb-8 max-w-xs">
                        Elevando o nível da natação individual através de ciência e atendimento humanizado.
                    </p>
                    <div className="flex gap-4">
                        <a href={`https://instagram.com/${COMPANY_INFO.instagram}`} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors">
                            <Phone size={24} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center">
                    <h4 className="font-display text-xl font-bold mb-8 uppercase tracking-widest">Navegação</h4>
                    <ul className="space-y-4 text-center">
                        <li><a href="#inicio" className="text-cyan-100/70 hover:text-white transition-colors font-bold text-sm uppercase">Início</a></li>
                        <li><a href="#metodologia" className="text-cyan-100/70 hover:text-white transition-colors font-bold text-sm uppercase">Metodologia</a></li>
                        <li><a href="#turmas" className="text-cyan-100/70 hover:text-white transition-colors font-bold text-sm uppercase">Serviços</a></li>
                        <li><a href="#contato" className="text-cyan-100/70 hover:text-white transition-colors font-bold text-sm uppercase">Contato</a></li>
                    </ul>
                </div>

                {/* Newsletter / Contact */}
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                    <h4 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                        <Send size={20} className="text-brand-cyan" />
                        Dicas de Natação
                    </h4>
                    <p className="text-cyan-100/60 text-sm mb-6">Receba conteúdos exclusivos sobre performance aquática.</p>
                    <div className="flex flex-col gap-3">
                        <input 
                            type="email" 
                            placeholder="Seu e-mail" 
                            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan"
                        />
                        <button className="bg-brand-cyan text-white font-bold py-3 rounded-xl hover:bg-brand-blue transition-colors uppercase text-xs tracking-widest">
                            Inscrever-se
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-cyan-100/40 font-bold uppercase tracking-widest">
                <p>&copy; 2024 {COMPANY_INFO.name} - Todos os direitos reservados</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span>Performance</span>
                    <span>Saúde</span>
                    <span>Resultados</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
