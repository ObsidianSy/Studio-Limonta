import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Calendar, Home, BookOpen, Waves } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const logoUrl = new URL('/logo-limonta.png', import.meta.url).href;

interface NavbarProps {
  onOpenSchedule: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, '_blank');
  };

  const handleLocation = () => {
    window.open(COMPANY_INFO.googleMaps, '_blank');
  };

  const navLinks = [
    { label: 'Início', href: '#inicio', icon: Home },
    { label: 'Metodologia', href: '#metodologia', icon: BookOpen },
    { label: 'Localização', onClick: handleLocation, icon: MapPin },
    { label: 'Contato', onClick: handleWhatsApp, icon: Phone },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-transparent">

        {/* Top Bar - Info */}
        <div className="hidden lg:block bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center gap-6 text-white/80">
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                  <Phone size={14} />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <button onClick={handleLocation} className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                  <MapPin size={14} />
                  <span>Franca, SP</span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/limontasnatacaoinfantil/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-brand-yellow transition-colors"
                >
                  @limontasnatacaoinfantil
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <div
              className="flex-shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                  src={logoUrl}
                  alt="Studio Limontas Logo"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-lg"
                />
              <div className="hidden sm:block text-white">
                <span className="font-display text-lg sm:text-xl font-bold block leading-tight">Studio</span>
                <span className="font-display text-lg sm:text-xl font-bold text-brand-cyan">Limontas</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                link.href ? (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <link.icon size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={index}
                    onClick={link.onClick}
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <link.icon size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                )
              ))}

              {/* CTA Button */}
              <button
                onClick={onOpenSchedule}
                className="ml-4 group relative overflow-hidden bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-dark px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar size={18} />
                  Agendar Aula
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 sm:p-3 rounded-xl text-white hover:bg-white/10 transition-all"
              >
                {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-gradient-to-br from-brand-dark via-brand-blue to-brand-cyan shadow-2xl transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col h-full pt-20 pb-8 px-8">

            {/* Logo & Title */}
            <div className="flex flex-col items-center mb-10">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl mb-4 p-2">
                <img src={logoUrl} alt="Studio Limontas" className="w-full h-full object-contain" />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">Studio Limontas</h2>
              <p className="text-white/60 text-sm mt-1">Natação Infantil</p>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 space-y-3">
              {navLinks.map((link, index) => (
                link.href ? (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 px-5 py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-white font-semibold transition-all active:scale-95"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <link.icon size={20} />
                    </div>
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={index}
                    onClick={() => { link.onClick?.(); setIsOpen(false); }}
                    className="w-full flex items-center gap-4 px-5 py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-white font-semibold transition-all active:scale-95"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <link.icon size={20} />
                    </div>
                    {link.label}
                  </button>
                )
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => { onOpenSchedule(); setIsOpen(false); }}
              className="w-full bg-brand-yellow text-brand-dark py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <Waves size={24} />
              Agendar Aula Experimental
            </button>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-white/50 text-sm">Fale conosco</p>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-semibold">
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
