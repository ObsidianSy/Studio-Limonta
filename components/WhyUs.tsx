
import React from 'react';
import { Star, Shield, Zap, TrendingUp } from 'lucide-react';

const WhyUs: React.FC = () => {
  const features = [
    {
        icon: Shield,
        title: "ACOMPANHAMENTO VIP",
        desc: "Foco total na sua biomecânica. Sem compartilhamento de atenção.",
        color: "text-brand-blue"
    },
    {
        icon: Zap,
        title: "MÉTODO CIENTÍFICO",
        desc: "Periodização baseada em fisiologia do exercício aquático.",
        color: "text-brand-cyan"
    },
    {
        icon: TrendingUp,
        title: "ALTA PERFORMANCE",
        desc: "Ajustes que fazem você ganhar segundos e economizar energia.",
        color: "text-slate-900"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div className="reveal">
                <span className="text-brand-blue font-black tracking-[0.3em] text-xs mb-4 uppercase inline-block">Exclusividade</span>
                <h2 className="font-display text-5xl md:text-7xl font-black text-slate-950 mb-12 tracking-tighter leading-none">
                    POR QUE <br/> TREINAR COMIGO?
                </h2>
                <div className="space-y-12">
                    {features.map((f, i) => (
                        <div key={i} className="flex gap-8 group reveal">
                            <div className={`mt-1 ${f.color} transition-transform group-hover:scale-125`}>
                                <f.icon size={40} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="font-black text-2xl text-slate-950 mb-2 tracking-tighter uppercase">{f.title}</h4>
                                <p className="text-slate-500 font-medium leading-tight max-w-sm">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative reveal">
                <div className="aspect-[4/5] bg-slate-200 border-[16px] border-white shadow-2xl relative overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200" 
                        alt="Matheus Moreira" 
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
                </div>
                {/* Float Badge */}
                <div className="absolute -bottom-10 -left-10 bg-slate-950 p-10 text-white transform -rotate-3">
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="white" />)}
                    </div>
                    <p className="font-black text-2xl tracking-tighter leading-none uppercase">10+ ANOS DE <br/> EXPERIÊNCIA</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
