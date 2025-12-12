import React from 'react';
import { Users, Star, Trophy, Building2, Heart } from 'lucide-react';
import { HighlightProps } from '../types';

const highlightsData: HighlightProps[] = [
  { label: "Dia a Dia", icon: Heart, color: "from-pink-500 to-rose-500" },
  { label: "Equipe", icon: Users, color: "from-blue-500 to-cyan-500" },
  { label: "Feedbacks", icon: Star, color: "from-yellow-400 to-orange-500" },
  { label: "Turmas", icon: Trophy, color: "from-green-400 to-emerald-500" },
  { label: "Estrutura", icon: Building2, color: "from-purple-500 to-indigo-500" },
];

const Highlights: React.FC = () => {
  return (
    <div className="relative w-full bg-slate-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto hide-scroll relative z-10">
        <div className="flex justify-start md:justify-center gap-6 sm:gap-10 min-w-max px-2">
          {highlightsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              {/* Ring Container - Mimics Instagram Story Ring */}
              <div className={`p-[3px] rounded-full bg-gradient-to-tr ${item.color} mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <div className="bg-white p-4 rounded-full border-4 border-white">
                  {/* Using generic icons but colored to match the theme */}
                  <item.icon 
                    size={28} 
                    className="text-gray-700 group-hover:text-brand-blue transition-colors" 
                  />
                </div>
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-600 tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave Bottom Decoration - Transitions to Features (Cyan) */}
      <div className="absolute -bottom-1 left-0 w-full text-brand-cyan z-0">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 fill-current">
            <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>
    </div>
  );
};

export default Highlights;