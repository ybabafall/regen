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
          className="w-full h-full object-cover opacity-35"
          loading="eager"
          decoding="sync"
          style={{
            imageRendering: 'high-quality',
            filter: 'contrast(1.2) brightness(1.6) saturate(0.15) hue-rotate(5deg) sepia(0.05)'
          }}
        />
        {/* Overlay sombre pour augmenter le contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-neutral-900/30"></div>
      </div>

      {/* Refined Luxury Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold-primary/15 rounded opacity-20 animate-float-gentle"></div>
      <div className="absolute bottom-40 right-16 w-16 h-16 border border-gold-primary/20 rounded-full opacity-25 animate-float-gentle" style={{ animationDelay: '2s' }}></div>


      {/* Contenu Principal - descendu plus bas */}
      <div className="text-center max-w-6xl mx-auto px-4 xs:px-6 lg:px-8 relative z-10 pb-12">

        <div>
          {/* Titre Principal aggrandi */}
          <h1 className="text-white mb-4 animate-spring" style={{ animationDelay: '0.2s', textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6)' }}>
            <span className="block mb-3 relative flex justify-center">
              <img
                src={regenLogoComplet}
                alt="RE-GEN"
                className="h-[clamp(12rem,32vw,24rem)] object-contain relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.2)) drop-shadow(0 4px 20px rgba(0, 0, 0, 0.8))'
                }}
              />
              <div className="absolute -top-2 -right-2 xs:-right-4 text-brand-500 text-[clamp(0.97rem,1.94vw,1.455rem)] animate-glow-champagne" style={{ animationDelay: '1s', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}>
                ✦
              </div>
            </span>
            <span className="block text-heading-sm font-body font-normal text-brand-500 tracking-[0.2em] uppercase" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.9), 0 4px 20px rgba(0, 0, 0, 0.7)' }}>
              Laboratoire Capillaire
            </span>
          </h1>

          {/* Divider doré */}
          <div className="divider-luxe max-w-xs mx-auto mb-6"></div>

          {/* Sous-titre réduit */}
          <p className="text-body-base text-neutral-50/95 mb-8 max-w-2xl mx-auto leading-relaxed animate-spring font-body" style={{ animationDelay: '0.4s', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}>
            Une expertise sur mesure qui révèle votre chevelure idéale<br />et régénère la fibre en profondeur.
          </p>
        </div>

        {/* Dual Glass Buttons */}
        <div className="flex flex-col xs:flex-row justify-center items-center gap-4 mb-8 animate-spring" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => navigate('/booking')}
            className="relative group px-[clamp(2rem,5vw,2.75rem)] py-[clamp(0.4rem,1.2vw,0.6rem)] text-ui-base font-medium transition-all duration-500 overflow-hidden bg-white/10 backdrop-blur-[2px] text-white hover:bg-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_6px_rgba(71,85,105,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12),0_3px_8px_rgba(71,85,105,0.18)] rounded-full hover:scale-105"
          >
            <span className="relative z-10">
              Réserver mon rituel
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          </button>
          <button
            onClick={() => {
              const servicesElement = document.getElementById('services');
              if (servicesElement) {
                servicesElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="relative group px-[clamp(2rem,5vw,2.75rem)] py-[clamp(0.4rem,1.2vw,0.6rem)] text-ui-base font-medium transition-all duration-500 overflow-hidden bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-full hover:scale-105"
          >
            <span className="relative z-10">
              Notre savoir-faire
            </span>
          </button>
        </div>

      </div>


      {/* Refined Premium Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-primary/30 rounded-full animate-float-gentle"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}

        {/* Subtle accent lines */}
        <div className="absolute top-1/4 left-1/4 w-px h-12 bg-gold-primary/10 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-px h-8 bg-gold-primary/15 -rotate-45"></div>
      </div>
    </section>
  );
};

export default Hero;