import React, { useState, useEffect } from 'react';
import { Waves } from 'lucide-react';

const logoUrl = new URL('/logo-limonta.png', import.meta.url).href;

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [stage, setStage] = useState<'loading' | 'finishing' | 'done'>('loading');

  useEffect(() => {
    // Animação de loading
    const loadingTimer = setTimeout(() => {
      setStage('finishing');
    }, 2000);

    // Finaliza e chama callback
    const finishTimer = setTimeout(() => {
      setStage('done');
      onFinish();
    }, 2800);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  if (stage === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-brand-dark via-brand-blue to-brand-cyan transition-all duration-700 ${
        stage === 'finishing' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-pulse"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Wave Pattern Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto fill-white/5"
          preserveAspectRatio="none"
        >
          <path d="M0,192L48,197.3C96,203,240,213,360,229.3C480,245,600,267,720,261.3C840,256,960,224,1080,213.3C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Animation */}
        <div className="relative mb-8">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-brand-cyan/30 rounded-full blur-3xl scale-150 animate-pulse" />

          {/* Rotating Ring */}
          <div className="absolute -inset-4 border-4 border-transparent border-t-brand-yellow border-r-brand-yellow rounded-full animate-spin" style={{ animationDuration: '2s' }} />
          <div className="absolute -inset-8 border-2 border-transparent border-b-white/30 border-l-white/30 rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />

          {/* Logo */}
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-white rounded-full p-5 shadow-2xl animate-bounce" style={{ animationDuration: '2s' }}>
            <img
              src={logoUrl}
              alt="Studio Limontas"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse">
          Studio Limontas
        </h1>
        <p className="text-white/70 text-lg mb-8 flex items-center gap-2">
          <Waves className="w-5 h-5" />
          Natação Infantil
          <Waves className="w-5 h-5" />
        </p>

        {/* Loading Bar */}
        <div className="w-48 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-yellow via-white to-brand-yellow rounded-full transition-all duration-[2000ms] ease-out"
            style={{
              width: stage === 'loading' ? '100%' : '100%',
              animation: 'loadingBar 2s ease-out forwards',
            }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-white/50 text-sm mt-4 animate-pulse">
          Preparando as piscinas...
        </p>
      </div>

      {/* CSS Animation for Loading Bar */}
      <style>{`
        @keyframes loadingBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
