import React from 'react';
import { Play, ChevronDown, Waves } from 'lucide-react';

interface HeroProps {
  onOpenSchedule: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=2069&auto=format&fit=crop")'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40" />

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Bubbles Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bubble" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
        <div className="bubble" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
        <div className="bubble" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
        <div className="bubble" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
        <div className="bubble" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">

          {/* Left: Text Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left animate-fadeIn">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 bg-brand-yellow text-brand-dark font-bold text-xs sm:text-sm mb-4 sm:mb-8 rounded-full shadow-lg">
              <span className="w-2 h-2 bg-brand-dark rounded-full animate-pulse"></span>
              Matrículas Abertas 2025
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-[1.1]">
              Onde nadar é<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-yellow to-brand-cyan">
                aprender brincando
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-sm sm:text-lg lg:text-xl mb-6 sm:mb-10 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              Natação infantil com amor, técnica e segurança.
              Desenvolvemos o potencial do seu filho em um ambiente acolhedor e divertido.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12 px-2 sm:px-0">
              <button
                onClick={onOpenSchedule}
                className="group bg-brand-yellow text-brand-dark px-5 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm sm:text-lg tracking-wide flex items-center justify-center gap-2"
              >
                <Waves className="w-4 h-4 sm:w-5 sm:h-5" />
                Agendar Aula Experimental
              </button>
              <a
                href="#metodologia"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-5 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white/20 transition-all text-sm sm:text-lg flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                Ver Como Funciona
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-white/70 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-base sm:text-lg">👶</span>
                </div>
                <span>A partir de 6 meses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-base sm:text-lg">🏊</span>
                </div>
                <span>+500 alunos formados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-base sm:text-lg">⭐</span>
                </div>
                <span>5.0 no Google</span>
              </div>
            </div>
          </div>

          {/* Right: Featured Card */}
          <div className="w-full lg:w-2/5 hidden lg:block animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl" />

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=600&auto=format&fit=crop"
                    alt="Criança nadando feliz"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-display text-2xl text-white font-bold mb-2">
                    Primeira aula grátis!
                  </h3>
                  <p className="text-white/70 mb-4">
                    Venha conhecer nossa metodologia sem compromisso
                  </p>
                  <button
                    onClick={onOpenSchedule}
                    className="w-full bg-brand-cyan text-white py-3 rounded-full font-bold hover:bg-brand-blue transition-colors"
                  >
                    Quero Experimentar
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#destaques" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-medium">Conheça mais</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>

      {/* Wave Bottom Decoration */}
      <div className="absolute -bottom-1 left-0 w-full text-slate-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-current">
          <path fillOpacity="1" d="M0,192L60,197.3C120,203,240,213,360,229.3C480,245,600,267,720,261.3C840,256,960,224,1080,213.3C1200,203,1320,213,1380,218.7L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
