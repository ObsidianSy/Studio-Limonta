import React, { useState, useEffect, useRef } from 'react';
import { CLASSES } from '../constants';
import { X, CheckCircle2, Clock, Calendar, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { ClassType } from '../types';

interface ClassesProps {
  onOpenSchedule: (prefill: string) => void;
}

const Classes: React.FC<ClassesProps> = ({ onOpenSchedule }) => {
  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedClass) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedClass]);

  // Auto-scroll Effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Se chegou no fim (com uma margem de erro), volta para o começo
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
           scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           // Senão, rola um card para o lado (aprox 280px)
           scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 3500); // 3.5 segundos para passar

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScheduleClass = () => {
    if (selectedClass) {
        const text = `Interesse na turma ${selectedClass.title} (${selectedClass.ageRange})`;
        setSelectedClass(null);
        setTimeout(() => onOpenSchedule(text), 100);
    }
  };

  return (
    <section id="turmas" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 reveal">
          <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-2 block">Nossas Turmas</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-4">Tudo em um só lugar</h2>
          <p className="text-gray-500 font-medium text-base md:text-lg max-w-2xl mx-auto">
            Do bebê ao atleta, a metodologia certa para cada fase.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            
            {/* Mobile Navigation Arrows */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm text-brand-dark p-2 rounded-full shadow-lg border border-slate-100 md:hidden -ml-2 hover:bg-white"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm text-brand-dark p-2 rounded-full shadow-lg border border-slate-100 md:hidden -mr-2 hover:bg-white"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>

            {/* Scrollable Area */}
            <div 
              ref={scrollRef}
              className="
                flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-2 
                md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:px-0
                hide-scroll
              "
            >
              {CLASSES.map((cls, idx) => (
                <div 
                  key={cls.id} 
                  className="
                    min-w-[260px] md:min-w-0 
                    snap-center flex-shrink-0 h-full
                    bg-brand-card rounded-2xl p-5 flex flex-col items-center text-center shadow-lg 
                    transition-all duration-300 relative overflow-hidden border-b-4 border-icon-bg
                    reveal
                  "
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Decoration */}
                  <div className="absolute top-2 left-2 text-white/20 scale-75"><svg width="40" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 12c.3 0 .5 0 .8.1.5-2.6 2.8-4.6 5.5-4.6 1.1 0 2.1.3 3 .9.8-3.6 4-6.4 7.7-6.4 3.1 0 5.8 1.9 7 4.6.8-.4 1.7-.6 2.7-.6 3.9 0 7 3.1 7 7 0 .5-.1 1-.2 1.5 2.2.7 3.8 2.8 3.8 5.2 0 3-2.5 5.5-5.5 5.5h-32c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c.3 0 .7 0 1 .1 1.2-2.5 3.7-4.2 6.6-4.2z"/></svg></div>
                  
                  {/* Mascot - Smaller Size */}
                  <div className="w-24 h-24 mb-3 bg-white rounded-full flex items-center justify-center text-5xl shadow-inner border-2 border-brand-yellow transform transition-transform">
                    {cls.mascot}
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-0.5">{cls.title}</h3>
                  <p className="text-cyan-100 text-xs font-bold mb-3 h-8 flex items-center justify-center leading-tight px-2">{cls.subtitle}</p>
                  
                  <div className="bg-white/10 rounded-lg p-2 w-full mb-4 backdrop-blur-sm">
                    <p className="text-white text-[10px] font-bold uppercase tracking-wide">{cls.ageRange}</p>
                  </div>

                  <button 
                    onClick={() => setSelectedClass(cls)}
                    className="mt-auto bg-brand-yellow text-brand-dark px-6 py-2 rounded-full font-bold shadow-comic active:scale-95 transition-all w-full uppercase text-xs tracking-wide"
                  >
                    Ver Detalhes
                  </button>
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {selectedClass && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedClass(null)}
          ></div>
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar relative animate-float z-10 border-4 border-white">
            <div className={`relative h-40 ${selectedClass.color} flex items-center justify-center overflow-hidden`}>
               <button 
                 onClick={() => setSelectedClass(null)}
                 className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors backdrop-blur-md"
               >
                 <X size={24} />
               </button>
               <div className="text-center relative z-10 mt-4">
                 <h2 className="font-display text-4xl font-bold text-white drop-shadow-md tracking-wide uppercase">{selectedClass.title}</h2>
                 <p className="text-white font-medium text-lg opacity-90">{selectedClass.subtitle}</p>
               </div>
            </div>
            <div className="absolute top-28 left-1/2 transform -translate-x-1/2">
               <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-7xl shadow-xl border-4 border-brand-yellow">
                 {selectedClass.mascot}
               </div>
            </div>
            <div className="px-8 pb-8 pt-16 text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                 <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                    <Calendar size={16} />
                    {selectedClass.ageRange}
                 </div>
                 <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                    <Clock size={16} />
                    {selectedClass.duration}
                 </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                {selectedClass.description}
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-100 mb-8">
                 <h4 className="font-display text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                   <Star className="text-brand-yellow fill-current" />
                   O que aprendemos brincando:
                 </h4>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedClass.learnings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 font-medium text-sm">
                        <CheckCircle2 size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
              <button 
                onClick={handleScheduleClass}
                className="inline-block w-full bg-brand-dark hover:bg-brand-blue text-white font-bold py-4 rounded-xl shadow-comic hover:shadow-none hover:translate-y-1 transition-all uppercase tracking-wider"
              >
                Agendar Aula Experimental
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Classes;