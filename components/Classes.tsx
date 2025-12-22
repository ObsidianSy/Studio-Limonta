
import React, { useState, useEffect, useRef } from 'react';
import { CLASSES } from '../constants';
import { X, ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { ClassType } from '../types';

interface ClassesProps {
  onOpenSchedule: (prefill: string) => void;
}

const CLASS_IMAGES: Record<string, string> = {
  'performance': 'https://images.unsplash.com/photo-1530549387631-6c129c1bab01?q=80&w=1200',
  'zero-medo': 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1200',
  'kids-exclusive': 'https://images.unsplash.com/photo-1507034589631-9433c6bc453e?q=80&w=1200',
  'reab': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200'
};

const Classes: React.FC<ClassesProps> = ({ onOpenSchedule }) => {
  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | null>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const handleScheduleClass = () => {
    if (selectedClass) {
        const text = `Gostaria de agendar uma consultoria para a modalidade: ${selectedClass.title}`;
        setSelectedClass(null);
        setTimeout(() => onOpenSchedule(text), 100);
    }
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;
    const targetScroll = index * cardWidth;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const next = (activeIndex + 1) % CLASSES.length;
    scrollTo(next);
  };

  const prevSlide = () => {
    const prev = (activeIndex - 1 + CLASSES.length) % CLASSES.length;
    scrollTo(prev);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = window.setInterval(() => {
      nextSlide();
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [activeIndex]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    stopAutoPlay();
  };

  const onMouseLeave = () => {
    if (isDragging) {
        setIsDragging(false);
        handleSnap();
        startAutoPlay();
    }
  };

  const onMouseUp = () => {
    if (isDragging) {
        setIsDragging(false);
        handleSnap();
        startAutoPlay();
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 5) setHasMoved(true);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleSnap = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    scrollTo(index);
  };

  return (
    <section id="turmas" className="py-32 bg-slate-50 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl reveal">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-12 h-[2px] bg-brand-cyan"></div>
               <span className="text-brand-blue font-black uppercase tracking-[0.3em] text-xs">Nossos Serviços</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-black text-slate-950 mb-6 tracking-tighter uppercase leading-[0.85]">
              DOMINE A <br/> <span className="text-brand-cyan">PISCINA</span>
            </h2>
          </div>
        </div>

        <div className="relative group/carousel">
          {/* Subtle Navigation Arrows - Desktop Only */}
          <div className="hidden lg:block">
            <button 
              onClick={() => { stopAutoPlay(); prevSlide(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center text-slate-900 opacity-0 group-hover/carousel:opacity-100 hover:bg-white hover:shadow-xl transition-all duration-300 -translate-x-4 group-hover/carousel:translate-x-0"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={() => { stopAutoPlay(); nextSlide(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center text-slate-900 opacity-0 group-hover/carousel:opacity-100 hover:bg-white hover:shadow-xl transition-all duration-300 translate-x-4 group-hover/carousel:translate-x-0"
              aria-label="Próximo"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className={`flex overflow-x-auto hide-scroll snap-x snap-mandatory ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none py-10 reveal`}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {CLASSES.map((cls, idx) => (
              <div 
                key={cls.id} 
                className="min-w-full md:min-w-full lg:min-w-full snap-center px-4"
              >
                <div 
                    onClick={() => !hasMoved && setSelectedClass(cls)}
                    className="bg-white rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-stretch gap-12 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] relative overflow-hidden h-full cursor-pointer"
                >
                    <span className="absolute -top-10 -right-10 text-[12rem] md:text-[15rem] font-black text-slate-50 pointer-events-none leading-none select-none">
                        0{idx + 1}
                    </span>

                    <div className="w-full lg:w-1/2 relative z-10 flex flex-col">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-cyan/10 rounded-[2rem] flex items-center justify-center text-5xl md:text-6xl mb-8 shadow-inner">
                            {cls.mascot}
                        </div>
                        <h3 className="font-display text-4xl md:text-6xl font-black text-slate-950 mb-3 tracking-tighter uppercase leading-none">
                            {cls.title}
                        </h3>
                        <p className="text-brand-blue font-black text-xs md:text-sm mb-6 md:mb-8 uppercase tracking-[0.4em]">
                            {cls.subtitle}
                        </p>
                        <p className="text-slate-500 text-lg md:text-xl mb-8 md:mb-10 leading-relaxed font-medium">
                            {cls.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                            {cls.learnings.slice(0, 3).map((l, i) => (
                                <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 text-slate-400 font-bold text-[10px] md:text-xs uppercase rounded-xl border border-slate-100">
                                    {l}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto flex items-center gap-3 font-black text-slate-950 uppercase tracking-widest text-xs md:text-sm border-b-4 border-brand-cyan self-start pb-2 hover:text-brand-cyan transition-colors">
                            VER DETALHES <ArrowRight size={20} />
                        </div>
                    </div>

                    <div className="hidden lg:block w-1/2 min-h-[400px] rounded-[2rem] bg-slate-100 overflow-hidden relative">
                         <img 
                            src={CLASS_IMAGES[cls.id]} 
                            alt={cls.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply"></div>
                    </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center mt-6 px-4 gap-2">
            <button onClick={prevSlide} className="md:hidden w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-slate-900"><ChevronLeft size={24} /></button>
            
            <div className="flex gap-2 mx-4">
              {CLASSES.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`transition-all duration-500 rounded-full ${
                  activeIndex === i ? 'w-10 h-2 bg-brand-cyan shadow-glow' : 'w-2 h-2 bg-slate-300'
                  }`}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={nextSlide} className="md:hidden w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-slate-900"><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>

      {/* Modal remains the same */}
      {selectedClass && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4">
          <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-md" onClick={() => setSelectedClass(null)}></div>
          <div className="bg-white w-full h-full md:h-auto md:max-w-2xl relative z-10 animate-fadeIn md:rounded-[3rem] flex flex-col overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
            
            <div className={`p-8 md:p-16 ${selectedClass.color} text-white relative shrink-0`}>
               <button 
                  onClick={() => setSelectedClass(null)} 
                  className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white p-2 bg-white/10 rounded-full transition-all z-20"
                >
                  <X size={24} />
                </button>
               <span className="text-white/40 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-2 md:mb-4 block">Ficha Técnica</span>
               <h2 className="font-display text-3xl md:text-6xl font-black uppercase tracking-tighter leading-tight">{selectedClass.title}</h2>
               <p className="font-bold opacity-70 tracking-[0.2em] mt-2 md:mt-4 text-[10px] md:text-sm">{selectedClass.subtitle}</p>
            </div>

            <div className="p-8 md:p-16 overflow-y-auto flex-1 custom-scrollbar bg-white">
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-10 md:mb-12">
                {selectedClass.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
                 {selectedClass.learnings.map((item, idx) => (
                   <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-brand-cyan/30 transition-all">
                     <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0">
                        <Check size={18} strokeWidth={3} />
                     </div>
                     <span className="text-slate-800 font-black text-[10px] md:text-xs uppercase tracking-wider">{item}</span>
                   </div>
                 ))}
              </div>

              <div className="sticky bottom-0 bg-white pt-4 pb-4 md:static">
                <button 
                  onClick={handleScheduleClass}
                  className="group w-full bg-slate-950 text-white font-black py-5 md:py-7 rounded-2xl text-lg md:text-xl uppercase tracking-widest hover:bg-brand-blue transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4"
                >
                  SOLICITAR AGENDAMENTO <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Classes;
