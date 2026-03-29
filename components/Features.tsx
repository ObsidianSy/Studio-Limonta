import React, { useRef, useState, useEffect } from 'react';
import { GraduationCap, Award, Users, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const Features: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Loop logic
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
           scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
      }
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 220;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="metodologia" className="bg-brand-cyan pt-16 pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10 text-white reveal">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">Nossa Metodologia</h2>
          <p className="text-cyan-50 text-lg font-medium max-w-2xl mx-auto">
            Ensino estruturado com amor e técnica.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
            className="relative group mb-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            {/* Navigation Arrows (Mobile) */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-1.5 rounded-full border border-white/30 md:hidden -ml-2"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-1.5 rounded-full border border-white/30 md:hidden -mr-2"
            >
              <ChevronRight size={20} />
            </button>

            {/* Icons Grid / Scroll */}
            <div 
                ref={scrollRef}
                className="
                    flex overflow-x-auto snap-x snap-mandatory gap-4 px-2 pb-4
                    md:grid md:grid-cols-4 md:gap-6 md:pb-0 md:px-0
                    hide-scroll
                "
            >
               {[
                 { icon: GraduationCap, label: "Professores Certificados", desc: "Equipe em constante atualização técnica." },
                 { icon: Award, label: "Método Exclusivo", desc: "Sistema de ensino próprio e validado." },
                 { icon: Users, label: "Família na Água", desc: "Participação ativa no desenvolvimento." },
                 { icon: Heart, label: "Autonomia Infantil", desc: "Foco na confiança e autoestima." },
               ].map((item, idx) => (
                 <div 
                    key={idx} 
                    className="
                        min-w-[200px] md:min-w-0 snap-center flex-shrink-0
                        bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 
                        flex flex-col items-center text-center 
                        hover:bg-white/20 transition-all duration-300 reveal group
                    "
                    style={{ transitionDelay: `${idx * 100}ms` }}
                 >
                    <div className="bg-white text-brand-cyan p-3 rounded-full mb-3 shadow-lg group-hover:scale-110 transition-transform">
                        <item.icon size={24} />
                    </div>
                    <h3 className="text-white font-display font-bold text-base mb-1 leading-tight">{item.label}</h3>
                    <p className="text-cyan-100 text-xs leading-snug">{item.desc}</p>
                 </div>
               ))}
            </div>
        </div>

        {/* Kids Illustration (Image) */}
        <div className="relative w-full flex justify-center reveal">
           <div className="relative w-full max-w-3xl">
               <div className="absolute inset-0 bg-brand-yellow rounded-full blur-3xl opacity-20 animate-pulse"></div>
               <img 
                 src="https://img.freepik.com/free-vector/happy-children-jumping-summer-meadow_74855-5852.jpg?w=1380&t=st=1690000000~exp=1690000000~hmac=xyz" 
                 alt="Crianças felizes aprendendo a nadar" 
                 className="rounded-[3rem] w-full border-8 border-white/30 shadow-2xl relative z-10"
                 style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
               />
           </div>
        </div>
      </div>
      
      {/* Wave Divider to White */}
      <div className="absolute -bottom-1 left-0 w-full text-white z-20">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-24 md:h-48 fill-current">
            <path fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
         </svg>
      </div>
    </section>
  );
};

export default Features;