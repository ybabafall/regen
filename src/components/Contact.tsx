import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import regenLogo from "@/assets/regen-logo.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: [
        "123 Avenue des Champs-Élysées",
        "75008 Paris, France"
      ]
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: [
        "+33 1 42 56 78 90",
        "Service client disponible"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "contact@regen-salon.fr",
        "info@regen-salon.fr"
      ]
    },
    {
      icon: Clock,
      title: "Horaires",
      details: [
        "Lun - Sam: 9h00 - 19h00",
        "Dimanche: Fermé"
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, url: "#", label: "@regen_salon" },
    { icon: Facebook, url: "#", label: "RE-GEN Salon" }
  ];

  return (
    <section id="contact" className="py-[clamp(3rem,8vw,5rem)] bg-accent-500/30">
      <div className="container mx-auto px-[clamp(1rem,4vw,1.5rem)]">
        <div className="text-center mb-[clamp(3rem,8vw,6rem)]">
          <h2 className="font-display text-[clamp(2rem,6vw,3rem)] text-neutral-900 mb-[clamp(1rem,3vw,1.5rem)] animate-spring" style={{ animationDelay: '0.2s' }}>
            Contact
          </h2>
          <div className="divider-luxe max-w-[clamp(16rem,50vw,28rem)] mx-auto mb-[clamp(1rem,3vw,1.5rem)]"></div>
          <p className="text-[clamp(1rem,2.5vw,1.125rem)] text-neutral-900/70 max-w-[clamp(20rem,80vw,32rem)] mx-auto leading-relaxed font-body animate-spring" style={{ animationDelay: '0.3s' }}>
            Venez nous rencontrer dans notre salon d'exception au cœur de Paris. 
            Notre équipe vous accueille dans un cadre luxueux et apaisant.
          </p>
        </div>

        <div className="max-w-[clamp(60rem,90vw,72rem)] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,6vw,3rem)]">
            {/* Contact Information */}
            <div className="space-y-[clamp(1.5rem,4vw,2rem)]">
              <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-display font-bold mb-[clamp(1.5rem,4vw,2rem)] text-neutral-900">
                Informations de contact
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(1rem,3vw,1.5rem)]">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="glass-luxe">
                      <div className="flex items-start space-x-[clamp(0.75rem,2vw,1rem)]">
                        <div className="w-[clamp(2.5rem,6vw,3rem)] h-[clamp(2.5rem,6vw,3rem)] bg-brand-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent size={24} className="text-neutral-900" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-[clamp(0.25rem,1vw,0.5rem)] text-[clamp(0.875rem,2vw,1rem)]">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-neutral-900/70 text-[clamp(0.75rem,1.5vw,0.875rem)]">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="card-premium">
                <h4 className="font-semibold text-neutral-900 mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-12 h-12 bg-gradient-metallic rounded-lg flex items-center justify-center hover:bg-gold-accent transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <IconComponent size={20} className="text-black-deep group-hover:text-background" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-sm text-neutral-900/70 mt-3">
                  Découvrez nos dernières créations et actualités
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card-premium">
              <h3 className="text-2xl font-display font-bold mb-6 text-neutral-900">
                Localisation
              </h3>
              <div className="bg-gradient-hero rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
                {/* Map Placeholder with Metallic Effect */}
                <div className="absolute inset-0 bg-gradient-metallic opacity-20"></div>
                <div className="text-center z-10">
                  <MapPin size={48} className="text-silver-light mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-background mb-2">
                    123 Avenue des Champs-Élysées
                  </h4>
                  <p className="text-silver-light">
                    75008 Paris, France
                  </p>
                  <button className="btn-metallic mt-6">
                    Voir sur Google Maps
                  </button>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h5 className="font-semibold text-neutral-900 mb-2">Accès</h5>
                <ul className="text-sm text-neutral-900/70 space-y-1">
                  <li>• Métro: Franklin D. Roosevelt (Lignes 1, 9)</li>
                  <li>• Bus: Lignes 42, 73, 80</li>
                  <li>• Parking: Parking Champs-Élysées à 100m</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <img 
                src={regenLogo} 
                alt="RE-GEN Logo" 
                className="h-[clamp(3rem,6vw,4rem)] w-[clamp(3rem,6vw,4rem)] object-contain"
              />
              <div>
                <h3 className="text-xl font-display font-bold text-metallic">
                  RE-GEN
                </h3>
                <p className="text-sm text-neutral-900/70">
                  Laboratoire Capillaire d'Excellence
                </p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-neutral-900/70 mb-2">
                © {new Date().getFullYear()} RE-GEN Salon. Tous droits réservés.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs text-neutral-900/70">
                <a href="#" className="hover:text-silver-metallic transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-silver-metallic transition-colors">
                  Politique de confidentialité
                </a>
                <a href="#" className="hover:text-silver-metallic transition-colors">
                  CGV
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-xs text-neutral-900/70">
              Conçu avec ❤️ pour l'excellence capillaire • Produits coréens certifiés • Équipe d'experts qualifiés
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;