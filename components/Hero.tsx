
import React from 'react';
import { ArrowRight, Trophy, ShieldCheck, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface HeroProps {
  onOpenSchedule: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-dark scroll-mt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=2000" 
          className="w-full h-full object-cover opacity-40 grayscale-[0.5] contrast-125 scale-110"
          alt="Piscina Performance"
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Main Content - No 'reveal' class, using immediate animation */}
          <div className="w-full lg:w-3/5 text-center lg:text-left opacity-0 animate-fadeIn" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-cyan rounded-full animate-ping"></span>
              <span className="text-brand-cyan font-black text-xs uppercase tracking-widest">
                Consultoria Individual Premium
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
              TRANSFORME <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cyan to-brand-blue">
                SEU NADO
              </span>
            </h1>

            <p className="text-cyan-100/80 text-lg md:text-xl mb-10 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-0 animate-fadeIn" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              Método <span className="text-white font-bold">MM Performance</span>: O equilíbrio perfeito entre biomecânica avançada e resultados reais dentro d'água.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center opacity-0 animate-fadeIn" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <button 
                onClick={onOpenSchedule}
                className="group relative px-10 py-5 bg-brand-cyan text-brand-dark font-black text-xl uppercase tracking-tighter overflow-hidden rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,180,216,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Agendar Treino <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20"></div>
              </button>

              <div className="flex flex-col items-start gap-1 px-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Trophy key={i} size={14} className="text-brand-yellow fill-current" />)}
                </div>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Atendimento 5 Estrelas</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-10 opacity-0 animate-fadeIn" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Zap size={20} />
                </div>
                <div className="text-left">
                  <p className="text-white font-black leading-none">+Performance</p>
                  <p className="text-white/40 text-[10px] uppercase font-bold mt-1">Ganhos Reais</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                  <p className="text-white font-black leading-none">Técnica Pura</p>
                  <p className="text-white/40 text-[10px] uppercase font-bold mt-1">Foco Biomecânico</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side - No 'reveal' class, using coordinated animation */}
          <div className="w-full lg:w-2/5 relative hidden lg:block opacity-0 animate-fadeIn" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1530549387631-6c129c1bab01?q=80&w=1200" 
                  alt="Natação Performance" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <p className="text-white font-black text-2xl tracking-tighter uppercase leading-none">
                    Matheus Moreira
                  </p>
                  <p className="text-brand-cyan font-bold text-xs uppercase mt-1">Head Coach & Founder</p>
                </div>
              </div>

              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-blue rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-cyan rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse delay-700"></div>
              
              <div className="absolute top-20 -left-16 z-20 bg-white p-6 rounded-3xl shadow-2xl -rotate-6 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-cyan/20 rounded-2xl flex items-center justify-center text-brand-cyan">
                    <Trophy size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-brand-dark font-black text-lg leading-none">Exclusivo</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase">Personal VIP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full leading-none z-30">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 73.3C480 66.7 600 73.3 720 83.3C840 93.3 960 106.7 1080 106.7C1200 106.7 1320 93.3 1380 86.7L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
