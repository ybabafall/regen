import { useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
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

  const pricingTiers = [
    {
      id: 1,
      length: "Courts",
      detail: "au-dessus des épaules",
      price: "180€",
    },
    {
      id: 2,
      length: "Mi-longs",
      detail: "jusqu'aux omoplates",
      price: "200€",
    },
    {
      id: 3,
      length: "Longs",
      detail: "au-delà des omoplates",
      price: "220€",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="relative isolate overflow-hidden bg-laboratory-50">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: noise }}
          />

          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-display-lg font-display font-semibold text-neutral-900 mb-6 tracking-tight"
                >
                  Un tarif juste, selon vos cheveux
                </motion.h1>
                <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
                <p className="text-body-base text-neutral-700 max-w-3xl mx-auto leading-relaxed font-body mb-4">
                  Chez RE·GEN, nous valorisons la singularité.<br />
                  Notre tarif ne varie pas selon la nature ou la texture de vos cheveux, mais uniquement selon leur longueur réelle :
                </p>
              </div>

              {/* Pricing Tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                {pricingTiers.map((tier, i) => (
                  <motion.article
                    key={tier.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                    className="group relative rounded-3xl bg-white/70 p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-white/70 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.3xl)-1px)] before:bg-gradient-to-b before:from-white/60 before:to-white/10 before:opacity-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center"
                  >
                    <h3 className="text-heading-lg font-display font-semibold text-neutral-900 mb-3 tracking-tight">
                      {tier.length}
                    </h3>

                    {/* Divider luxe */}
                    <div className="my-4 flex items-center gap-2 justify-center">
                      <span className="h-px w-12 bg-neutral-200" />
                      <span className="h-1 w-8 rounded-full bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 opacity-80" />
                      <span className="h-px w-12 bg-neutral-200" />
                    </div>

                    <p className="text-body-sm text-neutral-700 font-body mb-6">
                      {tier.detail}
                    </p>
                    <div className="text-display-xl font-display font-bold text-neutral-900">
                      {tier.price}
                    </div>

                    {/* Liseré or au survol */}
                    <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-brand-400/60 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.article>
                ))}
              </div>

              {/* Additional Info */}
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <p className="text-body-base text-neutral-900/80 font-body leading-relaxed">
                  La coupe des pointes est incluse.
                </p>
                <p className="text-body-base text-neutral-900/70 font-body leading-relaxed">
                  Un acompte de <strong>40 €</strong> est demandé pour confirmer votre réservation.
                </p>
              </div>

              {/* What's Included Section */}
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-12 border border-neutral-900/10 mb-16">
                <h2 className="text-heading-xl font-display font-semibold text-neutral-900 mb-8 text-center tracking-tight">
                  Le rituel RE·GEN inclut
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                    {
                      title: "Le diagnostic moléculaire",
                      description: "Analyse microscopique de votre structure capillaire pour définir le protocole sur mesure."
                    },
                    {
                      title: "Le traitement RE·GEN",
                      description: "Application d'actifs coréens innovants qui pénètrent au cœur de la fibre."
                    },
                    {
                      title: "La restructuration thermique",
                      description: "Technologie de lissage et modelage qui fixe les résultats durablement."
                    },
                    {
                      title: "La coupe des pointes",
                      description: "Finition soignée pour sublimer votre nouvelle chevelure et éliminer les fourches."
                    }
                  ].map((item, i) => (
                    <motion.article
                      key={i}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                      className="group relative rounded-3xl bg-white/70 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-white/70 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.3xl)-1px)] before:bg-gradient-to-b before:from-white/60 before:to-white/10 before:opacity-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                    >
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                        {item.title}
                      </h3>

                      {/* Divider luxe */}
                      <div className="mb-4 flex items-center gap-2">
                        <span className="h-px flex-1 bg-neutral-200" />
                        <span className="h-1 w-8 rounded-full bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 opacity-80" />
                        <span className="h-px flex-1 bg-neutral-200" />
                      </div>

                      <p className="text-sm/6 text-neutral-700 leading-relaxed font-body">
                        {item.description}
                      </p>

                      {/* Liseré or au survol */}
                      <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-brand-400/60 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <div className="max-w-4xl mx-auto bg-white/80 rounded-xl p-12 shadow-laboratory-medium">
                  <h3 className="text-heading-xl font-display font-semibold text-neutral-900 mb-6 tracking-tight leading-tight">
                    Prêt à découvrir votre rituel ?
                  </h3>
                  <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
                  <p className="text-body-base text-neutral-900/85 mb-8 leading-relaxed max-w-2xl mx-auto font-body">
                    Réservez votre consultation gratuite. Une experte RE·GEN se déplace chez vous avec tout le matériel nécessaire.
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
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
