import { useMemo } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Microscope, Sparkles } from "lucide-react";

const Innovation = () => {
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

  const expertisePoints = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Expertise sur mesure",
      description: "Nos maîtres coiffeurs analysent avec précision chaque chevelure pour définir le protocole idéal.",
    },
    {
      id: 2,
      icon: Microscope,
      title: "Technologie coréenne avancée",
      description: "Des formulations exclusives élaborées par les meilleurs laboratoires de Séoul.",
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Résultats exceptionnels",
      description: "Une transformation visible et durable qui sublime votre beauté naturelle.",
    },
  ];

  return (
    <section id="innovation" className="relative isolate overflow-hidden bg-laboratory-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: noise }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-display-lg font-display font-semibold text-neutral-900 mb-6 tracking-tight"
            >
              L'alliance de l'expertise et l'innovation
            </motion.h2>
            <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
            <p className="text-body-base text-neutral-700 max-w-3xl mx-auto leading-relaxed font-body">
              Chez RE·GEN, nous conjuguons le savoir-faire exceptionnel de nos maîtres coiffeurs parisiens avec les avancées scientifiques les plus pointues venues de Corée du Sud. Une synergie unique qui garantit des résultats d'une qualité inégalée.
            </p>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {expertisePoints.map((point, i) => {
              const IconComponent = point.icon;
              return (
                <motion.article
                  key={point.id}
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
                    {point.title}
                  </h3>

                  {/* Divider luxe */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-px flex-1 bg-neutral-200" />
                    <span className="h-1 w-8 rounded-full bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 opacity-80" />
                    <span className="h-px flex-1 bg-neutral-200" />
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm/6 text-neutral-700">
                    {point.description}
                  </p>

                  {/* Liseré or au survol */}
                  <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-brand-400/60 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.article>
              );
            })}
          </div>

          {/* Bottom text */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-body-base text-neutral-900/80 leading-relaxed font-body">
              Chaque séance est un moment d'exception où la précision technique rencontre l'art de la coiffure. Nos protocoles exclusifs sont pensés pour révéler le plein potentiel de votre chevelure, qu'il s'agisse de lisser, discipliner ou restructurer.
            </p>
            <p className="text-body-sm text-neutral-900/70 italic font-body">
              Des résultats visibles dès la première séance, une transformation durable qui redéfinit votre rapport au coiffage quotidien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
