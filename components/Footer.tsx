import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const logoUrl = new URL('/logo-limonta.png', import.meta.url).href;

const Footer: React.FC = () => {
  return (
    <div className="relative pt-32 bg-white overflow-hidden">
        
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 w-full text-brand-dark z-10">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-current transform rotate-180 scale-y-75 origin-top">
            <path fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,213.3C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>

      <footer id="contato" className="bg-brand-dark text-white relative z-20 pb-10 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Content: CTA + Kid Image */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-20">
                <div className="md:w-1/2 mb-10 md:mb-0 relative">
                    <div className="bg-brand-cyan/20 absolute -top-10 -left-10 w-32 h-32 rounded-full blur-3xl"></div>
                    <h3 className="font-display text-4xl font-bold mb-4">Venha nos conhecer</h3>
                    <p className="text-cyan-100 mb-8 max-w-md text-lg">
                        Uma nova experiência de aprendizado para o seu filho! Aqui mostramos que aprender é divertido.
                    </p>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="bg-brand-card hover:bg-brand-cyan text-white px-8 py-3 rounded-full font-bold shadow-lg transition-colors inline-flex items-center gap-2">
                        Falar no WhatsApp
                    </a>
                </div>
                
                {/* Logo Circle */}
                <div className="md:w-1/2 flex justify-center md:justify-end relative">
                     <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden border-8 border-brand-cyan shadow-2xl relative z-10 flex items-center justify-center p-8">
                        <img
                            src={logoUrl}
                            alt="Studio Limontas Logo"
                            className="w-full h-full object-contain"
                        />
                     </div>
                     {/* Decorative Elements */}
                     <div className="absolute top-0 right-0 text-brand-yellow animate-bounce"><StarIcon /></div>
                     <div className="absolute bottom-10 left-10 text-brand-cyan animate-pulse"><StarIcon /></div>
                </div>
            </div>

            {/* Newsletter & Location Section */}
            <div className="bg-white rounded-3xl p-6 md:p-8 mb-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-yellow via-brand-cyan to-brand-yellow"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Newsletter */}
                    <div className="flex flex-col justify-center">
                        <h4 className="font-display text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                            <Send size={24} className="text-brand-cyan" />
                            Assine nossa newsletter
                        </h4>
                        <p className="text-gray-500 mb-4 text-sm">Receba dicas e novidades sobre natação infantil.</p>
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Digite seu melhor e-mail" 
                                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-brand-cyan"
                            />
                            <button className="bg-brand-dark text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-blue transition-colors">
                                Inscrever
                            </button>
                        </div>
                    </div>

                    {/* Location / Map */}
                    <div className="rounded-xl overflow-hidden border-4 border-slate-100 shadow-inner h-64 lg:h-full min-h-[250px] relative">
                         {/* Google Maps Embed */}
                         <iframe 
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.992641212285!2d-47.40106582498776!3d-20.523576680998634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a7540e821791%3A0xf84dbc4df8feff71!2sLimonta&#39;s%20Nata%C3%A7%C3%A3o%20Infantil!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                           width="100%" 
                           height="100%" 
                           style={{border:0}} 
                           allowFullScreen={true} 
                           loading="lazy" 
                           referrerPolicy="no-referrer-when-downgrade"
                           title="Mapa Studio Limontas"
                         ></iframe>
                         <a 
                            href={COMPANY_INFO.googleMaps} 
                            target="_blank" 
                            rel="noreferrer"
                            className="absolute bottom-2 right-2 bg-white/90 px-3 py-1 text-xs font-bold text-brand-blue rounded shadow hover:bg-white"
                         >
                            Abrir no GPS
                         </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Links */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cyan-100">
                <div className="flex gap-6 mb-4 md:mb-0">
                    <a href="#" className="hover:text-white transition-colors">Berçário</a>
                    <a href="#" className="hover:text-white transition-colors">Educação Infantil</a>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                </div>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/limontasnatacaoinfantil/" className="hover:text-white transition-colors"><Instagram /></a>
                    <a href="#" className="hover:text-white transition-colors"><Facebook /></a>
                </div>
                <div className="mt-4 md:mt-0 opacity-60 text-xs">
                    &copy; 2025 Studio Limontas
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

const StarIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
);

export default Footer;