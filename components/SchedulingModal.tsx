import React, { useState } from 'react';
import { X, Calendar, User, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledDescription?: string;
}

const DAYS = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
const TIMES = ['Manhã (08h - 11h)', 'Tarde (13h - 18h)', 'Noite (18h - 20h)'];

const SchedulingModal: React.FC<SchedulingModalProps> = ({ isOpen, onClose, prefilledDescription = '' }) => {
  const [step, setStep] = useState(1);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState(prefilledDescription);

  // Update description if prop changes
  React.useEffect(() => {
    if (prefilledDescription) setDescription(prefilledDescription);
  }, [prefilledDescription]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && selectedDay && selectedTime) {
      setStep(2);
    }
  };

  const handleConfirm = () => {
    if (!name || !description) return;

    const message = `Olá! Gostaria de agendar uma aula experimental.%0A%0A📅 *Disponibilidade:* ${selectedDay} - ${selectedTime}%0A👤 *Nome:* ${name}%0A📝 *Sobre:* ${description}`;
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
    // Reset form
    setStep(1);
    setSelectedDay('');
    setSelectedTime('');
    setName('');
    setDescription('');
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl relative flex flex-col max-h-[90vh] animate-float">
        
        {/* Header (Fixed) */}
        <div className="bg-brand-cyan p-6 flex justify-between items-center text-white shrink-0 rounded-t-[2rem]">
          <div>
            <h3 className="font-display text-2xl font-bold">Agendar Aula</h3>
            <p className="text-cyan-100 text-sm">Passo {step} de 2</p>
          </div>
          <button onClick={onClose} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content (Scrollable) */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {step === 1 ? (
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-brand-dark font-bold mb-3">
                  <Calendar size={20} className="text-brand-yellow" />
                  Escolha o melhor dia:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {DAYS.map(day => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`py-2 px-3 rounded-xl text-sm font-bold border-2 transition-all ${
                        selectedDay === day 
                        ? 'border-brand-blue bg-blue-50 text-brand-blue' 
                        : 'border-slate-100 text-slate-500 hover:border-brand-cyan'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-brand-dark font-bold mb-3">
                  <ClockIcon />
                  Preferência de horário:
                </label>
                <div className="flex flex-col gap-2">
                  {TIMES.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border-2 text-left transition-all ${
                        selectedTime === time 
                        ? 'border-brand-blue bg-blue-50 text-brand-blue' 
                        : 'border-slate-100 text-slate-500 hover:border-brand-cyan'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={!selectedDay || !selectedTime}
                onClick={handleNext}
                className="w-full bg-brand-yellow text-brand-dark font-bold py-3 rounded-xl shadow-comic disabled:opacity-50 disabled:shadow-none hover:translate-y-1 transition-all flex items-center justify-center gap-2 mt-4"
              >
                Continuar <ArrowRight size={20} />
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-brand-dark font-bold mb-2">
                  <User size={20} className="text-brand-yellow" />
                  Seu Nome (Responsável):
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-cyan"
                  placeholder="Ex: Maria Silva"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-brand-dark font-bold mb-2">
                  <FileText size={20} className="text-brand-yellow" />
                  Nome da Criança / Objetivo:
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-cyan h-24 resize-none"
                  placeholder="Ex: Pedro, 5 anos. Quer aprender a nadar e perder o medo."
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-xl text-sm text-brand-blue">
                <p><strong>Resumo:</strong> {selectedDay} - {selectedTime}</p>
              </div>

              <button
                disabled={!name || !description}
                onClick={handleConfirm}
                className="w-full bg-brand-green-500 hover:bg-green-600 bg-[#25D366] text-white font-bold py-3 rounded-xl shadow-comic hover:shadow-none hover:translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Confirmar no WhatsApp <CheckCircle size={20} />
              </button>
              
              <button 
                onClick={() => setStep(1)} 
                className="w-full text-slate-400 text-sm font-bold hover:text-slate-600"
              >
                Voltar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-yellow"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

export default SchedulingModal;