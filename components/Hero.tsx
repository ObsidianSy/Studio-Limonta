import React from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  onOpenSchedule: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-40 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      
      {/* Floating Bubbles Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="bubble"></div>
         <div className="bubble"></div>
         <div className="bubble"></div>
         <div className="bubble"></div>
         <div className="bubble"></div>
         <div className="bubble"></div>
         <div className="bubble"></div>
         <div className="bubble"></div>
         <div className="bubble"></div>
         <div className="bubble"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-brand-blue/10 animate-float pointer-events-none">
         <svg width="150" height="90" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 12c.3 0 .5 0 .8.1.5-2.6 2.8-4.6 5.5-4.6 1.1 0 2.1.3 3 .9.8-3.6 4-6.4 7.7-6.4 3.1 0 5.8 1.9 7 4.6.8-.4 1.7-.6 2.7-.6 3.9 0 7 3.1 7 7 0 .5-.1 1-.2 1.5 2.2.7 3.8 2.8 3.8 5.2 0 3-2.5 5.5-5.5 5.5h-32c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c.3 0 .7 0 1 .1 1.2-2.5 3.7-4.2 6.6-4.2z"/></svg>
      </div>
      <div className="absolute top-40 right-10 text-brand-cyan/10 animate-float-delayed scale-150 pointer-events-none">
         <svg width="100" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 12c.3 0 .5 0 .8.1.5-2.6 2.8-4.6 5.5-4.6 1.1 0 2.1.3 3 .9.8-3.6 4-6.4 7.7-6.4 3.1 0 5.8 1.9 7 4.6.8-.4 1.7-.6 2.7-.6 3.9 0 7 3.1 7 7 0 .5-.1 1-.2 1.5 2.2.7 3.8 2.8 3.8 5.2 0 3-2.5 5.5-5.5 5.5h-32c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c.3 0 .7 0 1 .1 1.2-2.5 3.7-4.2 6.6-4.2z"/></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Video Placeholder (Visual Anchor) */}
          <div className="w-full md:w-1/2 order-2 md:order-1 reveal">
             <div className="relative aspect-video bg-black rounded-[2rem] shadow-2xl flex items-center justify-center group cursor-pointer overflow-hidden border-8 border-white ring-1 ring-slate-100 transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=2000&auto=format&fit=crop")'}}></div>
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors"></div>
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-blue shadow-lg group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-300 relative z-10">
                   <Play fill="currentColor" size={32} className="ml-1" />
                </div>
             </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2 reveal">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/20 text-brand-dark font-bold text-sm mb-6 rounded-full border border-brand-yellow/30">
                <span className="w-2 h-2 bg-brand-dark rounded-full animate-pulse"></span>
                Matrículas Abertas 2024
             </div>
             <h1 className="font-display text-5xl lg:text-6xl font-bold text-brand-dark mb-6 leading-[1.1]">
               Bem-vindo ao <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Studio Limontas</span>
             </h1>
             <p className="text-gray-600 text-lg md:text-xl mb-10 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
               Faça parte dessa família! Ensinamos com amor, técnica e segurança, priorizando o desenvolvimento do seu bem mais precioso.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <button 
                 onClick={onOpenSchedule}
                 className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold shadow-comic hover:shadow-none hover:translate-y-1 transition-all text-lg tracking-wide"
               >
                  Agendar Visita
               </button>
               <a 
                 href="#metodologia"
                 className="bg-white text-brand-dark border-2 border-brand-dark/10 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors text-lg"
               >
                 Conhecer Método
               </a>
             </div>
          </div>

        </div>
      </div>
      
      {/* Wave Bottom Decoration - Transitions to Highlights (Slate-50) */}
      <div className="absolute -bottom-1 left-0 w-full text-slate-50">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-current">
            <path fillOpacity="1" d="M0,192L60,197.3C120,203,240,213,360,229.3C480,245,600,267,720,261.3C840,256,960,224,1080,213.3C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
         </svg>
      </div>
    </section>
  );
};

export default Hero;