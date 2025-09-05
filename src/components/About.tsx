import { Award, Users, Zap, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import regenLogo from "@/assets/regen-logo.png";

const About = () => {
  const navigate = useNavigate();
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Nous intégrons les dernières technologies coréennes pour des résultats révolutionnaires."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Notre équipe d'experts certifiés garantit un service de très haute qualité."
    },
    {
      icon: Users,
      title: "Sur-mesure",
      description: "Chaque traitement est personnalisé selon vos besoins et votre type de cheveux."
    },
    {
      icon: Heart,
      title: "Bien-être",
      description: "Nous créons une expérience relaxante dans un environnement luxueux."
    }
  ];

  const stats = [
    { number: "5000+", label: "Clients satisfaits" },
    { number: "15+", label: "Années d'expérience" },
    { number: "98%", label: "Taux de satisfaction" },
    { number: "3", label: "Certifications coréennes" }
  ];

  return (
    <section id="about" className="py-[clamp(3rem,8vw,5rem)] bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,6vw,3rem)] items-center mb-[clamp(3rem,8vw,5rem)] px-4 xs:px-6">
            {/* Text Content */}
            <div className="space-y-[clamp(1rem,3vw,1.5rem)]">
              <div className="flex items-center space-x-4 mb-[clamp(1.5rem,4vw,2rem)]">
                <img 
                  src={regenLogo} 
                  alt="RE-GEN Logo" 
                  className="h-[clamp(4rem,10vw,5rem)] w-[clamp(4rem,10vw,5rem)] object-contain"
                />
                <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-display font-bold text-neutral-900">
                  Notre Vision
                </h3>
              </div>

              <p className="text-[clamp(1rem,2vw,1.125rem)] text-neutral-900/70 leading-relaxed">
                RE-GEN naît de la passion pour l'excellence capillaire et l'innovation technologique. 
                Inspirés par les techniques révolutionnaires coréennes, nous avons créé un laboratoire 
                d'exception où science et art se rencontrent.
              </p>

              <p className="text-[clamp(1rem,2vw,1.125rem)] text-neutral-900/70 leading-relaxed">
                Notre mission est de régénérer et sublimer vos cheveux grâce à des traitements 
                sur-mesure, réalisés par des experts certifiés dans un environnement luxueux 
                et apaisant.
              </p>

              <div className="bg-brand-500/10 p-[clamp(1rem,3vw,1.5rem)] rounded-xl">
                <p className="text-neutral-900 font-medium text-lg italic">
                  "Chaque cheveu raconte une histoire. Notre rôle est de révéler sa beauté naturelle 
                  tout en lui offrant la protection et la régénération qu'il mérite."
                </p>
                <p className="text-neutral-900/80 mt-3 font-semibold">
                  - Équipe RE-GEN
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="glass-luxe text-center">
                <div className="mb-8">
                  <h4 className="text-[clamp(1.25rem,3vw,1.5rem)] font-display font-bold mb-4 text-neutral-900">
                    Certifications & Expertise
                  </h4>
                  <div className="grid grid-cols-2 gap-[clamp(0.75rem,2vw,1rem)]">
                    {stats.map((stat, index) => (
                      <div 
                        key={index}
                        className="bg-white/50 rounded-lg p-[clamp(0.75rem,2vw,1rem)] hover:bg-brand-500/10 hover:text-neutral-900 transition-all duration-300"
                      >
                        <div className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold mb-1">{stat.number}</div>
                        <div className="text-[clamp(0.75rem,1.5vw,0.875rem)] opacity-80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-display font-bold text-center mb-[clamp(2rem,5vw,3rem)] text-neutral-900">
              Nos Valeurs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,3vw,1.5rem)] px-4 xs:px-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index}
                    className="glass-luxe text-center group hover:scale-105 transition-all duration-300"
                  >
                    <div className="mb-6">
                      <div className="w-[clamp(3rem,8vw,4rem)] h-[clamp(3rem,8vw,4rem)] bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-500/30 transition-colors duration-300">
                        <IconComponent size={32} className="text-neutral-900" />
                      </div>
                      <h4 className="text-[clamp(1.125rem,2.5vw,1.25rem)] font-display font-bold mb-3 text-neutral-900">
                        {value.title}
                      </h4>
                      <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-neutral-900/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-[clamp(3rem,8vw,5rem)] px-4 xs:px-6">
            <div className="bg-neutral-900 rounded-2xl p-[clamp(2rem,6vw,3rem)] text-center">
              <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-display font-bold mb-6 text-white">
                Prêt à découvrir l'excellence capillaire ?
              </h3>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/80 mb-8 max-w-2xl mx-auto">
                Rejoignez les milliers de clients qui nous font confiance pour révéler 
                la beauté naturelle de leurs cheveux.
              </p>
              <button 
                onClick={() => navigate('/booking')}
                className="btn-luxe-primary text-[clamp(0.875rem,1.5vw,1rem)] px-[clamp(2rem,5vw,3rem)] py-[clamp(0.75rem,2vw,1rem)]"
              >
                Réserver une consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;