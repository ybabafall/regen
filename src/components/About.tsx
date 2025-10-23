import { useMemo } from "react";
import { motion } from "framer-motion";
import { Home, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // SVG noise pour la texture papier
  const noise = useMemo(
    () =>
      `url('data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
          <filter id="n">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.035"/>
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#n)"/>
        </svg>
      `)}')`,
    []
  );

  const homeServiceFeatures = [
    {
      icon: Home,
      title: "À votre domicile",
      description: "Nos experts se déplacent avec tout le matériel nécessaire",
    },
    {
      icon: Star,
      title: "Même excellence",
      description: "Le rituel signature RE·GEN dans le confort de votre intérieur",
    },
    {
      icon: Clock,
      title: "Flexibilité",
      description: "Réservez aux horaires qui vous conviennent",
    },
  ];

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">

          {/* Notre Histoire Section */}
          <div className="py-20 px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-display font-semibold text-neutral-900 mb-6 animate-spring tracking-tight">
                Notre Histoire
              </h2>
              <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-body-base text-neutral-900/80 leading-relaxed font-body">
                RE·GEN est né d'une vision audacieuse : unir le savoir-faire traditionnel de la coiffure parisienne aux innovations capillaires les plus avancées de Corée du Sud. Après plusieurs années de recherche et de collaboration avec des laboratoires de Séoul reconnus pour leur excellence, nous avons développé un protocole unique qui régénère la fibre capillaire en profondeur.
              </p>

              <p className="text-body-base text-neutral-900/80 leading-relaxed font-body">
                Aujourd'hui, RE·GEN s'impose comme une référence dans l'univers du soin capillaire haut de gamme. Notre laboratoire parisien allie diagnostic scientifique de pointe, formulations exclusives et gestes experts pour offrir une expérience de transformation sans équivalent.
              </p>

              <div className="bg-white/80 rounded-xl p-8 border border-neutral-900/10">
                <p className="text-body-base text-neutral-900 font-medium italic leading-relaxed font-body text-center">
                  « Chaque chevelure est unique. Notre mission est de révéler son plein potentiel par une approche sur mesure qui respecte et sublime sa nature profonde. »
                </p>
              </div>
            </div>
          </div>

          {/* Expérience à Domicile Section */}
          <div className="py-20 px-6 bg-laboratory-50 -mx-6 relative isolate overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: noise }}
            />

            <div className="relative z-10">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-display-lg font-display font-semibold text-neutral-900 mb-6 tracking-tight"
                >
                  L'Expérience RE·GEN à Domicile
                </motion.h2>
                <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
                <p className="text-body-base text-neutral-700 max-w-3xl mx-auto leading-relaxed font-body">
                  Pour celles et ceux qui privilégient l'intimité de leur intérieur, RE·GEN propose désormais son rituel signature directement chez vous.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                {homeServiceFeatures.map((feature, i) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.article
                      key={i}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                      className="group relative rounded-3xl bg-white/70 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-white/70 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.3xl)-1px)] before:bg-gradient-to-b before:from-white/60 before:to-white/10 before:opacity-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center"
                    >
                      {/* Icon */}
                      <div className="relative flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-gradient-to-b from-white to-white/40 text-neutral-800 ring-1 ring-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_18px_rgba(0,0,0,0.06)]">
                        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <IconComponent className="h-7 w-7" strokeWidth={1.25} />
                        </div>
                        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/70" />
                        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/[0.02] opacity-70" />
                      </div>

                      {/* Title */}
                      <h3 className="mt-6 whitespace-pre-line font-display text-2xl leading-tight text-neutral-900">
                        {feature.title}
                      </h3>

                      {/* Divider luxe */}
                      <div className="mt-4 flex items-center gap-2">
                        <span className="h-px flex-1 bg-neutral-200" />
                        <span className="h-1 w-8 rounded-full bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 opacity-80" />
                        <span className="h-px flex-1 bg-neutral-200" />
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-sm/6 text-neutral-700">
                        {feature.description}
                      </p>

                      {/* Liseré or au survol */}
                      <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-brand-400/60 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-body-base text-neutral-900/80 leading-relaxed font-body text-center mb-8">
                Nos experts se déplacent avec l'intégralité du matériel et des formulations nécessaires. Vous bénéficiez du même diagnostic moléculaire, du même protocole en quatre temps et de la même qualité de service que dans notre laboratoire parisien.
              </p>
              <p className="text-body-base text-neutral-900/70 leading-relaxed font-body text-center italic">
                Disponible sur Paris et sa proche banlieue · Supplément selon la zone géographique
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white/80 rounded-xl p-12 text-center shadow-laboratory-medium">
              <h3 className="text-heading-xl font-display font-semibold text-neutral-900 mb-6 tracking-tight leading-tight">
                Découvrez le rituel RE·GEN
              </h3>
              <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
              <p className="text-body-base text-neutral-900/85 mb-8 leading-relaxed max-w-2xl mx-auto font-body">
                Réservez votre consultation gratuite en laboratoire ou à domicile. Nos experts établiront votre diagnostic capillaire personnalisé.
              </p>
              <button
                onClick={() => navigate('/booking')}
                className="relative group px-[clamp(2rem,5vw,2.75rem)] py-[clamp(0.4rem,1.2vw,0.6rem)] text-ui-base font-medium transition-all duration-500 overflow-hidden bg-white/10 backdrop-blur-sm text-neutral-900 hover:bg-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_6px_rgba(71,85,105,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12),0_3px_8px_rgba(71,85,105,0.18)] rounded-full hover:scale-105"
              >
                <span className="relative z-10">
                  Réserver mon rituel
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;