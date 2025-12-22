
import React from 'react';
import { Target, Trophy, MessageSquare, Image, Award } from 'lucide-react';

const highlightsData = [
  { label: "RESULTADOS", icon: Trophy, color: "from-slate-900 to-slate-700" },
  { label: "TREINOS", icon: Target, color: "from-brand-blue to-brand-dark" },
  { label: "FEEDBACK", icon: MessageSquare, color: "from-brand-cyan to-brand-blue" },
  { label: "DIA A DIA", icon: Image, color: "from-slate-800 to-slate-900" },
  { label: "MÉTODO", icon: Award, color: "from-brand-dark to-slate-950" },
];

const Highlights: React.FC = () => {
  return (
    <div className="w-full bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto hide-scroll">
        <div className="flex justify-start lg:justify-center gap-10 min-w-max px-4">
          {highlightsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer reveal">
              <div className={`p-[2px] rounded-none bg-gradient-to-tr ${item.color} mb-4 transition-transform group-hover:scale-110`}>
                <div className="bg-white p-5 rounded-none border-4 border-white">
                  <item.icon size={32} className="text-slate-950" />
                </div>
              </div>
              <span className="text-xs font-black text-slate-900 tracking-widest uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
