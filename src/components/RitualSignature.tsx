import { useMemo } from "react";
import { motion } from "framer-motion";
import { Scan, FlaskConical, Waves, Gem } from "lucide-react";

const RitualSignature = () => {
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

  const ritualSteps = [
    {
      id: 1,
      number: "01",
      name: "Le Diagnostic\nMoléculaire",
      description: "Analyse microscopique de la structure capillaire pour définir un protocole sur mesure.",
      icon: Scan,
    },
    {
      id: 2,
      number: "02",
      name: "Le Traitement RE‑GEN",
      description: "Application d'actifs coréens innovants qui pénètrent au cœur de la fibre.",
      icon: FlaskConical,
    },
    {
      id: 3,
      number: "03",
      name: "La Restructuration\nThermique",
      description: "Technologie de lissage et modelage qui fixe les résultats.",
      icon: Waves,
    },
    {
      id: 4,
      number: "04",
      name: "Le Sérum d'Excellence",
      description: "Finition par un sérum hautement concentré.",
      icon: Gem,
    }
  ];

  return (
    <section id="services" className="relative isolate overflow-hidden bg-laboratory-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: noise }}
      />

      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 pt-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-display-lg font-semibold tracking-tight text-neutral-900"
        >
          Le Rituel Signature
        </motion.h2>

        <div className="divider-luxe max-w-xs mx-auto mt-6"></div>

        <p className="mx-auto mt-6 max-w-3xl text-balance text-body-base text-neutral-700 font-body leading-relaxed">
          Un protocole en quatre temps alliant diagnostic de précision, actifs coréens avancés
          et techniques de restructuration thermique.
        </p>
      </div>

      {/* Steps */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-24 pt-14 sm:grid-cols-2 lg:grid-cols-4">
        {ritualSteps.map((step, i) => {
          const IconComponent = step.icon;
          return (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group relative rounded-3xl bg-white/70 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-white/70 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.3xl)-1px)] before:bg-gradient-to-b before:from-white/60 before:to-white/10 before:opacity-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Badge */}
              <div className="absolute -left-3 -top-3 rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium tracking-wider text-white shadow-black/20">
                {step.number}
              </div>

              {/* Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-white to-white/40 text-neutral-800 ring-1 ring-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_18px_rgba(0,0,0,0.06)]">
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <IconComponent className="h-7 w-7" strokeWidth={1.25} />
                </div>
                <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/70" />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/[0.02] opacity-70" />
              </div>

              {/* Title */}
              <h3 className="mt-6 whitespace-pre-line font-display text-heading-md font-semibold leading-tight text-neutral-900">
                {step.name}
              </h3>

              {/* Divider luxe */}
              <div className="mt-4 flex items-center gap-2">
                <span className="h-px flex-1 bg-neutral-200" />
                <span className="h-1 w-8 rounded-full bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 opacity-80" />
                <span className="h-px flex-1 bg-neutral-200" />
              </div>

              {/* Description */}
              <p className="mt-4 text-body-sm text-neutral-700 font-body leading-relaxed">
                {step.description}
              </p>

              {/* Liseré or au survol */}
              <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-brand-400/60 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          );
        })}
      </div>

      {/* Fine bottom border */}
      <div className="mx-auto mb-2 h-px w-[92%] max-w-6xl bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  );
};

export default RitualSignature;