import { useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LegalNoticePage = () => {
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
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-display-lg font-display font-semibold text-neutral-900 mb-6 tracking-tight"
                >
                  Mentions Légales
                </motion.h1>
                <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {/* Éditeur du site */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Éditeur du site
                  </h2>
                  <div className="space-y-2 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p><strong>Raison sociale :</strong> RE·GEN Salon</p>
                    <p><strong>Forme juridique :</strong> SARL au capital de 50 000 €</p>
                    <p><strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                    <p><strong>SIRET :</strong> 123 456 789 00010</p>
                    <p><strong>Email :</strong> contact@regen-salon.fr</p>
                    <p><strong>Téléphone :</strong> +33 1 42 56 78 90</p>
                    <p><strong>Directeur de publication :</strong> M. Alexandre Dubois</p>
                  </div>
                </motion.div>

                {/* Hébergement */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Hébergement
                  </h2>
                  <div className="space-y-2 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>Le site est hébergé par :</p>
                    <p><strong>Vercel Inc.</strong></p>
                    <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  </div>
                </motion.div>

                {/* Prestations */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Nature des prestations
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      RE·GEN Salon propose des prestations de coiffure haut de gamme spécialisées dans les soins capillaires régénérants. Nos services incluent :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Diagnostic capillaire moléculaire personnalisé</li>
                      <li>Traitements régénérants à base d'actifs coréens innovants</li>
                      <li>Restructuration thermique et modelage capillaire</li>
                      <li>Application de sérums d'excellence haute concentration</li>
                      <li>Coupe et finitions professionnelles</li>
                      <li>Prestations à domicile (Paris et proche banlieue)</li>
                    </ul>
                    <p className="mt-4">
                      <strong>Tarification :</strong> Nos tarifs varient selon la longueur des cheveux (180€ à 220€). La coupe des pointes est incluse dans toutes nos prestations.
                    </p>
                  </div>
                </motion.div>

                {/* Prise de rendez-vous */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Modalités de réservation
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      <strong>Réservation :</strong> Les rendez-vous peuvent être pris via notre plateforme de réservation en ligne ou par téléphone au +33 1 42 56 78 90.
                    </p>
                    <p>
                      <strong>Acompte :</strong> Un acompte de 40€ est requis lors de la réservation pour confirmer votre rendez-vous. Cet acompte sera déduit du montant total de la prestation.
                    </p>
                    <p>
                      <strong>Confirmation :</strong> Nos équipes vous recontactent sous 24h ouvrées pour confirmer votre rendez-vous et préciser les modalités (domicile ou salon).
                    </p>
                    <p>
                      <strong>Annulation :</strong> Toute annulation doit être effectuée au minimum 48h avant le rendez-vous. En cas d'annulation tardive (moins de 48h) ou d'absence, l'acompte ne sera pas remboursé.
                    </p>
                    <p>
                      <strong>Modification :</strong> Les modifications de rendez-vous sont possibles jusqu'à 24h avant la prestation, sous réserve de disponibilité.
                    </p>
                  </div>
                </motion.div>

                {/* Propriété intellectuelle */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Propriété intellectuelle
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      L'ensemble du contenu de ce site (textes, images, vidéos, logos, marques) est la propriété exclusive de RE·GEN Salon ou de ses partenaires. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable écrite.
                    </p>
                    <p>
                      La marque RE·GEN et son identité visuelle sont des marques déposées. Toute utilisation non autorisée constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                    </p>
                  </div>
                </motion.div>

                {/* Données personnelles */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Protection des données personnelles
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles.
                    </p>
                    <p>
                      Les données collectées lors de votre réservation (nom, prénom, email, téléphone, adresse) sont nécessaires à la gestion de votre rendez-vous et ne seront jamais transmises à des tiers sans votre consentement.
                    </p>
                    <p>
                      Pour exercer vos droits, contactez-nous à : contact@regen-salon.fr
                    </p>
                  </div>
                </motion.div>

                {/* Cookies */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Cookies
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Ce site utilise des cookies nécessaires à son bon fonctionnement et à l'amélioration de votre expérience utilisateur. Aucun cookie publicitaire ou de traçage tiers n'est utilisé sans votre consentement préalable.
                    </p>
                    <p>
                      Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient être limitées.
                    </p>
                  </div>
                </motion.div>

                {/* Responsabilité */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Limitation de responsabilité
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      RE·GEN Salon s'efforce de fournir des informations exactes et à jour sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
                    </p>
                    <p>
                      Les photographies présentées sur le site sont des exemples de résultats obtenus. Les résultats peuvent varier selon la nature et l'état initial des cheveux de chaque client.
                    </p>
                    <p>
                      RE·GEN Salon ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.
                    </p>
                  </div>
                </motion.div>

                {/* Droit applicable */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Droit applicable et juridiction
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Paris.
                    </p>
                    <p className="text-sm text-neutral-900/60 italic">
                      Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNoticePage;
