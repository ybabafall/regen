import { useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTA = () => {
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

  return (
    <section id="cta" className="relative isolate overflow-hidden bg-laboratory-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: noise }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto bg-white/80 rounded-xl p-12 text-center shadow-laboratory-medium"
          >
            <h3 className="text-heading-xl font-display font-semibold text-neutral-900 mb-6 tracking-tight leading-tight">
              Révélez l'excellence de votre chevelure
            </h3>
            <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
            <p className="text-body-base text-neutral-900/85 mb-8 leading-relaxed max-w-2xl mx-auto font-body">
              Réservez votre consultation gratuite et bénéficiez d'un diagnostic capillaire complet. Nos experts vous accompagnent vers la transformation que vous méritez.
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
