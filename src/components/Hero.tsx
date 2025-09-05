import { ChevronDown, Star, Crown, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroSalon from "@/assets/hero-salon.png";
import regenLogoComplet from "@/assets/regen-logo-complet.png";

const Hero = () => {
  const navigate = useNavigate();
  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[100svh] flex items-end justify-center bg-neutral-900 relative overflow-hidden">
      {/* Fond noir avec image héro ultra-nette */}
      <div className="absolute inset-0">
        <img 
          src={heroSalon} 
          alt="Salon RE-GEN" 
          className="w-full h-full object-cover opacity-30"
          loading="eager"
          decoding="sync"
          style={{
            imageRendering: 'high-quality',
            filter: 'contrast(1.1) brightness(1.1) saturate(1.2)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-neutral opacity-20"></div>
      </div>

      {/* Éléments décoratifs dorés flottants - tailles réduites */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-brand-500/20 rounded opacity-20 animate-float-gentle"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-brand-500/20 rounded-full opacity-30 animate-float-gentle hover:shimmer-luxe" style={{ animationDelay: '2s' }}></div>
      
      {/* Indicateur de scroll - aligné avec le bord de l'image */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex justify-center animate-spring" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={scrollToServices}
            className="relative w-1 h-8 bg-brand-500/30 rounded-full overflow-hidden hover:bg-brand-500/50 transition-all duration-300 rotate-180"
          >
            <div className="absolute top-0 left-0 w-full h-4 bg-brand-500 rounded-full animate-slide-vertical-slow"></div>
          </button>
        </div>
      </div>

      {/* Contenu Principal - descendu plus bas */}
      <div className="text-center max-w-6xl mx-auto px-4 xs:px-6 lg:px-8 relative z-10 pb-12">

        <div>
          {/* Titre Principal aggrandi */}
          <h1 className="text-white mb-4 animate-spring" style={{ animationDelay: '0.2s' }}>
            <span className="block mb-3 relative flex justify-center">
              <img 
                src={regenLogoComplet} 
                alt="RE-GEN" 
                className="h-[clamp(12rem,32vw,24rem)] object-contain relative z-10"
              />
              <div className="absolute -top-2 -right-2 xs:-right-4 text-brand-500 text-[clamp(0.97rem,1.94vw,1.455rem)] animate-glow-champagne" style={{ animationDelay: '1s' }}>
                ✦
              </div>
            </span>
            <span className="block text-[clamp(0.849rem,1.94vw,1.213rem)] font-body font-normal text-brand-500 tracking-[0.2em] uppercase">
              Laboratoire Capillaire
            </span>
          </h1>
          
          {/* Divider doré */}
          <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
          
          {/* Sous-titre réduit */}
          <p className="text-[clamp(0.728rem,1.455vw,0.97rem)] text-neutral-50/90 mb-6 max-w-xl mx-auto leading-relaxed animate-spring font-body" style={{ animationDelay: '0.4s' }}>
            Découvrez nos traitements révolutionnaires <span className="text-brand-500 font-semibold">coréens</span> pour une 
            régénération capillaire complète.
          </p>
        </div>

        {/* Boutons CTA Réduits */}
        <div className="flex flex-col xs:flex-row gap-3 xs:gap-2 justify-center items-center mb-8 animate-spring" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => navigate('/booking')}
            className="px-[clamp(0.97rem,2.91vw,1.455rem)] py-[clamp(0.485rem,1.455vw,0.728rem)] bg-brand-500 text-white rounded font-body font-medium text-[clamp(0.728rem,1.455vw,0.849rem)] hover:bg-brand-600 transition-all duration-300 hover-lift-luxe min-w-[clamp(7.76rem,24.25vw,9.7rem)]"
          >
            Réserver
          </button>
          <button 
            onClick={scrollToServices}
            className="px-[clamp(0.97rem,2.91vw,1.455rem)] py-[clamp(0.485rem,1.455vw,0.728rem)] border border-brand-500/40 text-brand-500 rounded font-body font-medium text-[clamp(0.728rem,1.455vw,0.849rem)] hover:border-brand-500 hover:bg-brand-500/5 transition-all duration-300 hover-lift-luxe min-w-[clamp(7.76rem,24.25vw,9.7rem)]"
          >
            Nos services
          </button>
        </div>
      </div>

      {/* Effet de particules dorées subtiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-500/30 rounded-full animate-float-gentle"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;