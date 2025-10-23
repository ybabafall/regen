import { useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
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
                  Conditions Générales de Vente
                </motion.h1>
                <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
                <p className="text-body-base text-neutral-700 max-w-3xl mx-auto leading-relaxed font-body">
                  Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des prestations de coiffure proposées par RE·GEN Salon.
                </p>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {/* Article 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 1 - Objet et champ d'application
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Les présentes Conditions Générales de Vente (ci-après « CGV ») s'appliquent à toutes les prestations de coiffure et soins capillaires proposées par RE·GEN Salon, SARL au capital de 50 000 €, dont le siège social est situé 123 Avenue des Champs-Élysées, 75008 Paris.
                    </p>
                    <p>
                      Toute réservation de prestation implique l'acceptation sans réserve des présentes CGV par le client. RE·GEN Salon se réserve le droit de modifier ses CGV à tout moment. Les conditions applicables sont celles en vigueur à la date de la réservation.
                    </p>
                  </div>
                </motion.div>

                {/* Article 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 2 - Prestations proposées
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>RE·GEN Salon propose des prestations de coiffure haut de gamme comprenant :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Diagnostic capillaire moléculaire personnalisé</li>
                      <li>Traitement régénérant RE·GEN à base d'actifs coréens innovants</li>
                      <li>Restructuration thermique et modelage capillaire</li>
                      <li>Application de sérum d'excellence haute concentration</li>
                      <li>Coupe et finitions professionnelles (incluse dans toutes les prestations)</li>
                    </ul>
                    <p className="mt-4">
                      Les prestations sont disponibles en salon (Paris 8ème) et à domicile (Paris et proche banlieue, selon disponibilité).
                    </p>
                    <p>
                      La durée moyenne d'une prestation complète est de 3 à 4 heures, selon la longueur et la nature des cheveux.
                    </p>
                  </div>
                </motion.div>

                {/* Article 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 3 - Tarifs
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>Les tarifs des prestations RE·GEN sont fixés comme suit :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Cheveux courts</strong> (au-dessus des épaules) : 180 €</li>
                      <li><strong>Cheveux mi-longs</strong> (jusqu'aux omoplates) : 200 €</li>
                      <li><strong>Cheveux longs</strong> (au-delà des omoplates) : 220 €</li>
                    </ul>
                    <p className="mt-4">
                      Les tarifs s'entendent toutes taxes comprises (TTC) et incluent la coupe des pointes.
                    </p>
                    <p>
                      Un supplément géographique peut être appliqué pour les prestations à domicile selon la zone de déplacement. Ce supplément sera communiqué lors de la réservation.
                    </p>
                    <p>
                      RE·GEN Salon se réserve le droit de modifier ses tarifs à tout moment. Le tarif applicable est celui en vigueur au moment de la réservation.
                    </p>
                  </div>
                </motion.div>

                {/* Article 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 4 - Réservation
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">4.1 Modalités de réservation</h3>
                      <p>
                        La réservation d'un rendez-vous peut être effectuée :
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li>En ligne via notre plateforme de réservation</li>
                        <li>Par téléphone au +33 1 42 56 78 90</li>
                        <li>Par email à contact@regen-salon.fr</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">4.2 Acompte</h3>
                      <p>
                        La réservation n'est définitive qu'après versement d'un acompte de <strong>40 €</strong>. Cet acompte sera déduit du montant total de la prestation.
                      </p>
                      <p className="mt-2">
                        Le paiement de l'acompte s'effectue en ligne par carte bancaire via une plateforme de paiement sécurisée.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">4.3 Confirmation</h3>
                      <p>
                        Une fois l'acompte reçu, nos équipes vous recontactent sous <strong>24 heures ouvrées</strong> pour confirmer définitivement votre rendez-vous et préciser les modalités (lieu, matériel nécessaire, etc.).
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Article 5 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 5 - Annulation et modification
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">5.1 Annulation par le client</h3>
                      <p>
                        <strong>Annulation plus de 48h avant le rendez-vous :</strong> L'acompte est intégralement remboursé sous 7 jours ouvrés.
                      </p>
                      <p className="mt-2">
                        <strong>Annulation moins de 48h avant le rendez-vous ou absence :</strong> L'acompte est conservé par RE·GEN Salon à titre de dédommagement.
                      </p>
                      <p className="mt-2">
                        Les demandes d'annulation doivent être effectuées par email à contact@regen-salon.fr ou par téléphone au +33 1 42 56 78 90.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">5.2 Modification par le client</h3>
                      <p>
                        Toute demande de modification de rendez-vous (date, heure, lieu) doit être effectuée au minimum <strong>24 heures avant</strong> le rendez-vous initial.
                      </p>
                      <p className="mt-2">
                        La modification est acceptée sous réserve de disponibilité. En cas d'indisponibilité aux nouvelles dates proposées, les conditions d'annulation s'appliquent.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">5.3 Annulation par RE·GEN Salon</h3>
                      <p>
                        RE·GEN Salon se réserve le droit d'annuler un rendez-vous en cas de force majeure ou d'indisponibilité exceptionnelle de nos experts.
                      </p>
                      <p className="mt-2">
                        Dans ce cas, le client en est informé dans les meilleurs délais et l'acompte est intégralement remboursé. RE·GEN Salon proposera des créneaux alternatifs au client.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Article 6 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 6 - Paiement
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">6.1 Modalités de paiement</h3>
                      <p>Le paiement s'effectue en deux temps :</p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li><strong>Acompte de 40 €</strong> lors de la réservation (paiement en ligne par carte bancaire)</li>
                        <li><strong>Solde de la prestation</strong> le jour du rendez-vous (carte bancaire, espèces ou chèque)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">6.2 Sécurité des paiements</h3>
                      <p>
                        Les paiements en ligne sont sécurisés via une plateforme de paiement certifiée PCI-DSS. RE·GEN Salon ne stocke aucune donnée bancaire.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">6.3 Facturation</h3>
                      <p>
                        Une facture acquittée est remise au client à l'issue de chaque prestation, par email ou en format papier sur demande.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Article 7 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 7 - Obligations du client
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>Le client s'engage à :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fournir des informations exactes et complètes lors de la réservation</li>
                      <li>Informer RE·GEN Salon de toute allergie, sensibilité ou problème capillaire particulier</li>
                      <li>Signaler tout traitement capillaire récent (coloration, permanente, lissage, etc.)</li>
                      <li>Respecter l'heure du rendez-vous (un retard de plus de 15 minutes pourra entraîner l'annulation de la prestation sans remboursement de l'acompte)</li>
                      <li>Pour les prestations à domicile : mettre à disposition un point d'eau, une prise électrique et un espace de travail adapté</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Article 8 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 8 - Garanties et responsabilité
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">8.1 Garantie de qualité</h3>
                      <p>
                        RE·GEN Salon s'engage à réaliser chaque prestation avec le plus grand soin, en utilisant des produits de haute qualité et des techniques éprouvées.
                      </p>
                      <p className="mt-2">
                        Les résultats peuvent varier selon la nature, la texture et l'état initial des cheveux. Les photographies présentées sur notre site sont des exemples de résultats obtenus et ne constituent pas une garantie de résultat identique.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">8.2 Réclamations</h3>
                      <p>
                        En cas de mécontentement, le client dispose d'un délai de <strong>7 jours</strong> suivant la prestation pour formuler une réclamation par email à contact@regen-salon.fr.
                      </p>
                      <p className="mt-2">
                        RE·GEN Salon s'engage à examiner toute réclamation avec attention et à proposer une solution adaptée (retouche gratuite, remboursement partiel, etc.) au cas par cas.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">8.3 Limitation de responsabilité</h3>
                      <p>
                        La responsabilité de RE·GEN Salon ne saurait être engagée dans les cas suivants :
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li>Informations inexactes ou incomplètes fournies par le client</li>
                        <li>Non-respect des conseils d'entretien prodigués par nos experts</li>
                        <li>Réactions allergiques non signalées au préalable</li>
                        <li>Résultats insatisfaisants dus à l'état initial des cheveux (cheveux très abîmés, sur-traités, etc.)</li>
                        <li>Utilisation ultérieure de produits incompatibles avec le traitement RE·GEN</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Article 9 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 9 - Droit de rétractation
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux prestations de services pleinement exécutées avant la fin du délai de rétractation.
                    </p>
                    <p>
                      Une fois la prestation réalisée, le client ne peut plus exercer son droit de rétractation. Toutefois, les conditions d'annulation prévues à l'article 5 restent applicables avant la réalisation de la prestation.
                    </p>
                  </div>
                </motion.div>

                {/* Article 10 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 10 - Protection des données personnelles
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Les données personnelles collectées lors de la réservation sont traitées conformément au RGPD et à notre Politique de Confidentialité disponible sur notre site.
                    </p>
                    <p>
                      Le client dispose d'un droit d'accès, de rectification, d'effacement et de portabilité de ses données. Pour exercer ces droits : contact@regen-salon.fr
                    </p>
                  </div>
                </motion.div>

                {/* Article 11 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 11 - Médiation et règlement des litiges
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">11.1 Médiation de la consommation</h3>
                      <p>
                        Conformément à l'article L612-1 du Code de la consommation, en cas de litige, le client peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige.
                      </p>
                      <div className="p-4 bg-laboratory-100 rounded-lg mt-4">
                        <p className="text-heading-md font-display font-semibold text-neutral-900 tracking-tight">Médiateur compétent :</p>
                        <p className="mt-2">
                          Centre de Médiation de la Consommation de Conciliateurs de Justice (CM2C)<br />
                          14 rue Saint Jean, 75017 Paris<br />
                          Email : cm2c@cm2c.net<br />
                          Site web : <a href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-500 underline">www.cm2c.net</a>
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">11.2 Droit applicable et juridiction</h3>
                      <p>
                        Les présentes CGV sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Paris.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Article 12 */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Article 12 - Dispositions générales
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Si l'une quelconque des dispositions des présentes CGV venait à être déclarée nulle ou inapplicable, les autres dispositions resteraient pleinement en vigueur.
                    </p>
                    <p>
                      Le fait pour RE·GEN Salon de ne pas se prévaloir à un moment donné d'une quelconque disposition des présentes CGV ne peut être interprété comme valant renonciation à s'en prévaloir ultérieurement.
                    </p>
                    <p className="text-sm text-neutral-900/60 italic mt-6">
                      Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
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

export default TermsPage;
