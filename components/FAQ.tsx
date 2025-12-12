import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "A piscina é aquecida e tratada?",
    answer: "Sim! Nossa piscina possui temperatura controlada ideal para bebês e crianças (entre 30°C e 32°C). Utilizamos tratamento de ozônio e sal, que é muito mais saudável para a pele e olhos sensíveis das crianças."
  },
  {
    question: "A partir de qual idade meu filho pode começar?",
    answer: "Recebemos bebês a partir dos 6 meses de idade na turma Tetéia. É uma fase essencial para adaptação e desenvolvimento motor."
  },
  {
    question: "Os pais precisam entrar na água?",
    answer: "Nas turmas de bebês (Tetéia e Tico-Tico), é obrigatória a presença de um responsável na água para fortalecer o vínculo e dar segurança. A partir da turma Coral (aprox. 2 anos e meio), as crianças já entram com os professores."
  },
  {
    question: "Como funcionam as aulas experimentais?",
    answer: "A aula experimental é gratuita e serve para conhecermos o nível da criança e apresentarmos nossa metodologia. Basta agendar pelo botão de WhatsApp aqui no site."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-brand-yellow mb-4 backdrop-blur-sm border border-white/20">
                <HelpCircle size={16} /> <span className="text-sm font-bold uppercase tracking-wider">Dúvidas Comuns</span>
            </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-cyan-100">Tire suas dúvidas sobre nosso funcionamento</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className={`font-display font-bold text-lg ${openIndex === idx ? 'text-brand-blue' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-brand-blue text-white' : 'bg-slate-100 text-gray-500'}`}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-slate-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave removed intentionally to blend with Footer top wave */}
    </section>
  );
};

export default FAQ;