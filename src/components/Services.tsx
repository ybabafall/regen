import { Sparkles, Scissors, Palette, Zap, ArrowRight, Crown, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import regenAurea from "@/assets/regen-aurea-nova.png";
import regenFlowless from "@/assets/regen-flowless-silver.png";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      name: "AURÉA NOVA",
      subtitle: "Lissage Coréen Premium",
      description: "Traitement révolutionnaire de lissage coréen pour une transformation durable. Technologie avancée pour des cheveux soyeux et brillants.",
      price: "À partir de 280€",
      duration: "3-4 heures",
      image: regenAurea,
      icon: Zap,
      features: [
        "Lissage longue durée (6-8 mois)",
        "Réduction de 80% du volume",
        "Cheveux restructurés en profondeur",
        "Brillance exceptionnelle"
      ]
    },
    {
      id: 2,
      name: "FLOWLESS SILVER",
      subtitle: "Traitement Anti-Frisottis",
      description: "Système innovant pour éliminer les frisottis et apporter une fluidité naturelle. Idéal pour tous types de cheveux.",
      price: "À partir de 180€",
      duration: "2-3 heures",
      image: regenFlowless,
      icon: Sparkles,
      features: [
        "Contrôle des frisottis",
        "Hydratation intense",
        "Effet naturel préservé",
        "Facilite le coiffage quotidien"
      ]
    },
    {
      id: 3,
      name: "COUPE PREMIUM",
      subtitle: "Sculpture Capillaire",
      description: "Coupe personnalisée réalisée par nos experts. Analyse morphologique complète pour un résultat sur-mesure.",
      price: "À partir de 85€",
      duration: "1-2 heures",
      image: regenAurea,
      icon: Scissors,
      features: [
        "Consultation morphologique",
        "Techniques de coupe avancées",
        "Styling personnalisé",
        "Conseils d'entretien"
      ]
    },
    {
      id: 4,
      name: "COLORATION LUXE",
      subtitle: "Art Chromatique",
      description: "Colorations haute couture avec produits premium. Techniques innovantes pour des résultats époustouflants.",
      price: "À partir de 120€",
      duration: "2-4 heures",
      image: regenFlowless,
      icon: Palette,
      features: [
        "Colorations haute couture",
        "Techniques balayage premium",
        "Produits sans ammoniaque",
        "Respect de la fibre capillaire"
      ]
    }
  ];

  return (
    <section id="services" className="pt-24 pb-22 bg-accent-500 relative">
      {/* Texture de fond beige luxe */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(207, 166, 124, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          
          <h2 className="font-display text-neutral-900 mb-6 animate-spring" style={{ animationDelay: '0.2s' }}>
            Traitements d'Exception
          </h2>
          
          <div className="divider-luxe max-w-md mx-auto mb-6"></div>
          
          <p className="text-lg text-neutral-900/70 max-w-2xl mx-auto leading-relaxed font-body animate-spring" style={{ animationDelay: '0.3s' }}>
            Découvrez nos soins capillaires premium alliant savoir-faire traditionnel et innovations coréennes de pointe.
          </p>
        </div>

        <ul className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-[clamp(0.375rem,2.25vw,1.125rem)] max-w-full mx-auto px-1 xs:px-2 lg:px-3">
          {services.map((service, index) => {
            return (
              <li key={service.id} className="lv-content-push-list__item animate-spring hover:shimmer-luxe" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="lv-editorial-media lv-content-push-list__media -media-position-top">
                  <div className="lv-editorial-media__image">
                    <div className="lv-smart-picture lv-responsive-picture is-loaded lv-editorial-media__placeholder placeholder-portrait">
                      <picture>
                        <img 
                          sizes="(min-width: 48rem) 25vw, (min-width: 0rem) 50vw"
                          alt={service.name}
                          className="lv-smart-picture__object w-full h-full object-cover hover:scale-105 transition-transform duration-500 aspect-[9/16]"
                          src={service.image}
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="lv-editorial-text-block lv-content-push-list__content -center -no-text p-12">
                  <div className="lv-editorial-text-block__ctas">
                    <div>
                      <a 
                        href="#"
                        onClick={(e) => { e.preventDefault(); navigate('/booking'); }}
                        className="lv-smart-link -default text-[clamp(1rem,2.5vw,1.25rem)] font-display font-bold text-neutral-900 hover:text-brand-600 transition-colors duration-300 no-underline"
                      >
                        {service.name}
                      </a>
                      <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-neutral-900/70 mt-2 font-body leading-relaxed">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Section CTA Prestige avec glassmorphisme */}
        <div className="text-center mt-16">
          <div className="glass-luxe max-w-4xl mx-auto p-12 animate-spring hover:shimmer-luxe" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-full mb-6 animate-glow-champagne">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-neutral-900 mb-6">
                Prêt pour votre transformation d'exception ?
              </h3>
              <div className="divider-luxe max-w-sm mx-auto mb-6"></div>
              <p className="text-lg text-neutral-900/70 mb-10 leading-relaxed max-w-2xl mx-auto font-body">
                Réservez votre consultation personnalisée avec nos maîtres coiffeurs et découvrez 
                l'excellence de nos soins premium dans un cadre d'exception parisien.
              </p>
              <button 
                onClick={() => navigate('/booking')}
                className="btn-luxe-dark hover-lift-luxe hover:shimmer-luxe min-w-[320px]"
              >
                Consultation Offerte
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;