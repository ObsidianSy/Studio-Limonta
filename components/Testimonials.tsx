import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2 block">Depoimentos</span>
          <h2 className="font-display text-4xl font-bold text-brand-dark">O que os pais dizem</h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow relative reveal group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 text-brand-cyan/20 w-12 h-12" />
              
              <div className="flex gap-1 mb-4 text-brand-yellow">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-600 mb-6 italic relative z-10 font-medium leading-relaxed">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-200 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white font-bold font-display">
                    {t.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-brand-dark text-sm">{t.name}</h4>
                    <span className="text-xs text-brand-cyan font-bold uppercase">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;