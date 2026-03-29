import React from 'react';
import { ShieldCheck, Heart, Medal, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const WhyUs: React.FC = () => {
  const features = [
    {
        icon: ShieldCheck,
        title: "Segurança Total",
        desc: "Piscinas tratadas, ambiente monitorado e professores certificados em salvamento.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: Heart,
        title: "Metodologia Afetiva",
        desc: "Respeitamos o tempo de cada criança, criando vínculo e confiança antes da técnica.",
        color: "bg-red-100 text-red-500"
    },
    {
        icon: UserCheck,
        title: "Turmas Reduzidas",
        desc: "Atenção individualizada para garantir a evolução correta de cada peixinho.",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: Medal,
        title: "Evolução Constante",
        desc: "Sistema de níveis estruturado (do Tetéia ao Tida) para acompanhar o crescimento.",
        color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Visual Illustration */}
            <div className="relative h-96 w-full rounded-[40px] bg-gradient-to-br from-brand-blue to-brand-cyan overflow-hidden shadow-2xl flex items-center justify-center group reveal">
                {/* Decorative Circles */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                
                {/* Central Text/Icon */}
                <div className="text-center text-white relative z-10 p-8">
                    <h3 className="font-display text-4xl font-bold mb-2">Venha fazer parte!</h3>
                    <p className="text-cyan-100 text-lg">Agende uma aula experimental gratuita</p>
                    <button 
                        onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, '_blank')}
                        className="mt-8 bg-white text-brand-blue font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-glow"
                    >
                        Falar no WhatsApp
                    </button>
                </div>
                
                {/* Animated Wave overlay */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-white/20 rounded-t-full translate-y-12 animate-float"></div>
            </div>

            {/* Right Side: Features */}
            <div className="reveal">
                <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-2 block">Diferenciais</span>
                <h2 className="font-display text-4xl font-bold text-brand-dark mb-8">Por que escolher o Limonta's?</h2>
                <div className="space-y-6">
                    {features.map((f, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-slate-200">
                            <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center shrink-0 shadow-sm`}>
                                <f.icon size={28} />
                            </div>
                            <div>
                                <h4 className="font-display text-xl font-bold text-gray-800 mb-1">{f.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm font-medium">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;