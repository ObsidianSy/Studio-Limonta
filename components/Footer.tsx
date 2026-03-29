import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Mail, Clock, ChevronRight, Waves } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const logoUrl = new URL('/logo-math.jpeg', import.meta.url).href;

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-brand-dark text-white relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/3 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* CTA Section */}
        <div className="py-16 border-b border-white/10">
          <div className="bg-gradient-to-r from-brand-blue to-brand-cyan rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-brand-cyan/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>

              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl overflow-hidden shadow-xl flex-shrink-0 p-1 rotate-3 hover:rotate-0 transition-transform">
                      <img src={logoUrl} alt="Matheus Moreira Logo" className="w-full h-full object-contain scale-125" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Agende sua aula experimental</h3>
                      <p className="text-cyan-100/80 md:text-lg max-w-lg">
                          Primeira aula grátis! Venha conhecer minha metodologia e ver seu filho se divertindo na água.
                      </p>
                  </div>
                  <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white text-brand-dark px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
                  >
                      <MessageCircle size={20} />
                      Falar no WhatsApp
                  </a>
              </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">

            {/* Brand */}
            <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-5">
                    <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden flex-shrink-0 p-1 shadow-lg">
                        <img src={logoUrl} alt="Logo" className="w-full h-full object-contain scale-150" />
                    </div>
                    <div>
                        <h4 className="font-display text-lg font-bold leading-tight">{COMPANY_INFO.name}</h4>
                        <p className="text-brand-cyan text-[10px] font-bold uppercase tracking-widest">{COMPANY_INFO.subtitle}</p>
                    </div>
                </div>
                <p className="text-cyan-100/50 text-sm leading-relaxed mb-6">
                    Natação infantil com técnica, diversão e carinho. Do bebê ao atleta, cada criança no seu ritmo.
                </p>
                <div className="flex gap-3">
                    <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan transition-all">
                        <Instagram size={18} />
                    </a>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all">
                        <MessageCircle size={18} />
                    </a>
                </div>
            </div>

            {/* Links Rápidos */}
            <div>
                <h4 className="font-display text-sm font-bold mb-5 text-white uppercase tracking-widest">Navegação</h4>
                <ul className="space-y-3">
                    {[
                        { label: 'Início', href: '#inicio' },
                        { label: 'Metodologia', href: '#metodologia' },
                        { label: 'Turmas', href: '#turmas' },
                        { label: 'Perguntas Frequentes', href: '#faq' },
                    ].map((link, i) => (
                        <li key={i}>
                            <a href={link.href} className="text-cyan-100/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                <ChevronRight size={14} className="text-brand-cyan/50 group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contato */}
            <div>
                <h4 className="font-display text-sm font-bold mb-5 text-white uppercase tracking-widest">Contato</h4>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 group">
                        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan/20 transition-colors">
                            <Phone size={14} className="text-brand-cyan" />
                        </div>
                        <div>
                            <p className="text-sm text-white font-medium">{COMPANY_INFO.phone}</p>
                            <p className="text-[11px] text-cyan-100/40">WhatsApp</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan/20 transition-colors">
                            <Instagram size={14} className="text-brand-cyan" />
                        </div>
                        <div>
                            <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noreferrer" className="text-sm text-white font-medium hover:text-brand-cyan transition-colors">
                                {COMPANY_INFO.instagram}
                            </a>
                            <p className="text-[11px] text-cyan-100/40">Instagram</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan/20 transition-colors">
                            <MapPin size={14} className="text-brand-cyan" />
                        </div>
                        <div>
                            <p className="text-sm text-white font-medium">Franca, SP</p>
                            <p className="text-[11px] text-cyan-100/40">Atendimento Exclusivo</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Horários + Newsletter */}
            <div>
                <h4 className="font-display text-sm font-bold mb-5 text-white uppercase tracking-widest">Horários</h4>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock size={14} className="text-brand-cyan" />
                        </div>
                        <div>
                            <p className="text-sm text-white font-medium">Seg - Sex</p>
                            <p className="text-[11px] text-cyan-100/40">06h às 21h</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock size={14} className="text-brand-cyan" />
                        </div>
                        <div>
                            <p className="text-sm text-white font-medium">Sábado</p>
                            <p className="text-[11px] text-cyan-100/40">08h às 12h</p>
                        </div>
                    </li>
                </ul>

                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[11px] text-cyan-100/50 mb-2 font-medium">Receba novidades:</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-brand-cyan transition-colors"
                        />
                        <button className="bg-brand-cyan text-white px-3 py-2 rounded-lg hover:bg-brand-blue transition-colors">
                            <Mail size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2 text-cyan-100/30 text-xs">
                <Waves size={12} />
                <span>&copy; 2026 {COMPANY_INFO.name} - {COMPANY_INFO.subtitle}</span>
            </div>
            <p className="text-cyan-100/20 text-xs">
                Franca, SP - Brasil
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
