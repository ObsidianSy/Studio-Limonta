
import React from 'react';
import { Target, Zap, Activity, ShieldCheck } from 'lucide-react';
import { METHODOLOGY_INTRO } from '../constants';

const Features: React.FC = () => {
  const items = [
    { icon: Target, label: "PRECISÃO", desc: "Correção milimétrica de cada fase do nado." },
    { icon: Activity, label: "FISIOLOGIA", desc: "Treinos baseados em sua capacidade real." },
    { icon: Zap, label: "VELOCIDADE", desc: "Protocolos para ganho de potência explosiva." },
    { icon: ShieldCheck, label: "SEGURANÇA", desc: "Domínio técnico para situações adversas." },
  ];

  return (
    <section id="metodologia" className="bg-slate-950 py-32 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="reveal">
                <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-8 leading-none tracking-tighter">
                    TÉCNICA É <br/><span className="text-brand-cyan">PODER.</span>
                </h2>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">
                    {METHODOLOGY_INTRO.text}
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
                {items.map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-8 border-l-4 border-brand-cyan reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                        <item.icon size={32} className="text-brand-cyan mb-4" />
                        <h3 className="text-white font-black text-xl mb-2 tracking-tighter uppercase">{item.label}</h3>
                        <p className="text-slate-500 text-sm leading-tight">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full h-[60vh] bg-slate-900 overflow-hidden relative rounded-[3rem] border border-white/5 reveal">
            <img 
                src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=2000" 
                className="w-full h-full object-cover opacity-60 grayscale" 
                alt="Treino"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
                <p className="font-display text-white text-center text-4xl md:text-6xl font-black tracking-tighter max-w-4xl">
                    "O RESULTADO É A CONSEQUÊNCIA DIRETA DA EXCELÊNCIA TÉCNICA."
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
