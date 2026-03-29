import React, { useState, useEffect, useRef } from 'react';
import { CLASSES } from '../constants';
import { X, CheckCircle2, Clock, Calendar, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { ClassType } from '../types';

const CLASS_ICONS: Record<string, React.ReactNode> = {
  ondinha: (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
      <path d="M8 36c4-6 12-6 16 0s12 6 16 0 12-6 16 0" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="24" cy="22" r="6" fill="#ffd60a" opacity="0.9"/>
      <path d="M24 16v-2m5 4l1.5-1.5m-13 1.5L16 16.5m12 9.5v2m-5-4l-1.5 1.5m13-1.5l1.5 1.5" stroke="#ffd60a" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="44" r="2.5" fill="#FF8E8E" opacity="0.4"/>
      <circle cx="50" cy="42" r="2" fill="#FF8E8E" opacity="0.3"/>
      <circle cx="34" cy="46" r="1.5" fill="#FF6B6B" opacity="0.3"/>
    </svg>
  ),
  bolhinha: (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
      <circle cx="32" cy="32" r="10" stroke="#FF9F43" strokeWidth="3" fill="#FFC076" fillOpacity="0.2"/>
      <circle cx="18" cy="20" r="6" stroke="#FF9F43" strokeWidth="2" fill="#FFC076" fillOpacity="0.15"/>
      <circle cx="46" cy="22" r="5" stroke="#FF9F43" strokeWidth="2" fill="#FFC076" fillOpacity="0.15"/>
      <circle cx="22" cy="46" r="4" stroke="#FFC076" strokeWidth="2" fill="#FFC076" fillOpacity="0.1"/>
      <circle cx="44" cy="44" r="7" stroke="#FF9F43" strokeWidth="2" fill="#FFC076" fillOpacity="0.15"/>
      <circle cx="30" cy="30" r="1.5" fill="white" opacity="0.7"/>
      <circle cx="17" cy="18" r="1" fill="white" opacity="0.6"/>
      <circle cx="45" cy="20" r="1" fill="white" opacity="0.6"/>
      <circle cx="43" cy="42" r="1.2" fill="white" opacity="0.6"/>
    </svg>
  ),
  correnteza: (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
      <path d="M8 32c4-6 12-6 16 0s12 6 16 0 12-6 16 0" stroke="#0077b6" strokeWidth="4" strokeLinecap="round"/>
      <path d="M8 44c4-6 12-6 16 0s12 6 16 0 12-6 16 0" stroke="#00b4d8" strokeWidth="3" strokeLinecap="round"/>
      <path d="M8 20c4-6 12-6 16 0s12 6 16 0 12-6 16 0" stroke="#90e0ef" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="20" cy="14" r="2" fill="#ffd60a"/>
      <circle cx="44" cy="50" r="1.5" fill="#ffd60a"/>
    </svg>
  ),
  mare: (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
      <path d="M6 28c6-8 14-8 20 0s14 8 20 0 8-4 12-2" stroke="#0077b6" strokeWidth="4" strokeLinecap="round"/>
      <path d="M6 40c6-6 14-6 20 0s14 6 20 0" stroke="#00b4d8" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
      <path d="M32 10v12m-4-4l4 4 4-4" stroke="#ffd60a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="48" r="3" fill="#90e0ef" opacity="0.5"/>
      <circle cx="46" cy="46" r="2" fill="#90e0ef" opacity="0.5"/>
      <circle cx="32" cy="52" r="2.5" fill="#90e0ef" opacity="0.4"/>
    </svg>
  ),
  rio: (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
      <path d="M32 4c-4 10-12 16-4 26s-4 16-4 26" stroke="#0077b6" strokeWidth="4" strokeLinecap="round"/>
      <path d="M38 8c-4 10-10 14-2 24s-4 14-4 24" stroke="#00b4d8" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
      <path d="M26 6c-4 10-8 14-2 24s-6 16-4 26" stroke="#90e0ef" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <circle cx="44" cy="20" r="3" fill="#10ac84" opacity="0.6"/>
      <circle cx="18" cy="36" r="2.5" fill="#10ac84" opacity="0.5"/>
      <path d="M46 18l-4 4m4-4l4 4" stroke="#10ac84" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  cachoeira: (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
      <path d="M16 8h32v4H16z" fill="#0077b6" rx="2"/>
      <path d="M22 12v20c0 4-6 8-6 16" stroke="#00b4d8" strokeWidth="3" strokeLinecap="round"/>
      <path d="M32 12v24c0 4-4 6-4 12" stroke="#0077b6" strokeWidth="4" strokeLinecap="round"/>
      <path d="M42 12v20c0 4 4 8 4 16" stroke="#00b4d8" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="18" cy="54" r="2" fill="#90e0ef" opacity="0.6"/>
      <circle cx="30" cy="56" r="2.5" fill="#90e0ef" opacity="0.5"/>
      <circle cx="44" cy="54" r="2" fill="#90e0ef" opacity="0.6"/>
      <path d="M10 58c8-4 16 2 24-2s14 2 20-1" stroke="#90e0ef" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  tsunami: (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
      <path d="M6 44c0 0 4-24 18-24 8 0 10 8 16 8 8 0 12-8 18-4" stroke="#0077b6" strokeWidth="4" strokeLinecap="round" fill="#00b4d8" fillOpacity="0.15"/>
      <path d="M6 44c10-2 18 4 28 2s14-4 24-2" stroke="#00b4d8" strokeWidth="3" strokeLinecap="round"/>
      <path d="M6 52c10-2 18 2 28 0s14-2 24 0" stroke="#90e0ef" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <circle cx="36" cy="26" r="2" fill="white" opacity="0.8"/>
      <circle cx="30" cy="30" r="1.5" fill="white" opacity="0.6"/>
      <path d="M42 20c2-4 4-2 4 0" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    </svg>
  ),
  oceano: (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
      <circle cx="32" cy="28" r="16" fill="#03045e" fillOpacity="0.15" stroke="#0077b6" strokeWidth="3"/>
      <path d="M16 36c4-4 8 0 12-4s8 0 12-4 8 2 8 2" stroke="#00b4d8" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M12 44c6-4 12 0 18-4s12 2 18-2" stroke="#0077b6" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <path d="M8 52c8-4 16 2 24-2s14 2 20-1" stroke="#90e0ef" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
      <circle cx="32" cy="24" r="4" fill="#ffd60a" opacity="0.8"/>
      <path d="M32 16v-4m6 6l2-3m-14 3l-2-3" stroke="#ffd60a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M28 30l2-1 2 1 2-1 2 1" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
};

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
    <section id="turmas" className="py-20 bg-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 reveal">
          <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-2 block">Minhas Turmas</span>
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
                  <div className="w-24 h-24 mb-3 bg-white rounded-full flex items-center justify-center text-5xl shadow-inner border-2 border-brand-yellow transform transition-transform overflow-hidden">
                    {CLASS_ICONS[cls.id] || cls.mascot}
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
            <div className="flex justify-center -mt-8 relative z-10">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-xl border-3 border-brand-yellow overflow-hidden">
                 {CLASS_ICONS[selectedClass.id] || selectedClass.mascot}
               </div>
            </div>
            <div className="px-8 pb-8 pt-4 text-center">
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
                   O que seu filho aprende brincando:
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