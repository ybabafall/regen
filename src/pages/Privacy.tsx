import { useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  // SVG noise pour la texture papier
  const noise = useMemo(
    () =>
      `url('data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
          <filter id="n">
            <feTurbulature type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
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
                  Politique de Confidentialité
                </motion.h1>
                <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
                <p className="text-body-base text-neutral-700 max-w-3xl mx-auto leading-relaxed font-body">
                  RE·GEN Salon accorde la plus grande importance à la protection de vos données personnelles et au respect de votre vie privée.
                </p>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Responsable du traitement
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Le responsable du traitement des données est :
                    </p>
                    <p>
                      <strong>RE·GEN Salon</strong><br />
                      SARL au capital de 50 000 €<br />
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France<br />
                      Email : contact@regen-salon.fr<br />
                      Téléphone : +33 1 42 56 78 90
                    </p>
                  </div>
                </motion.div>

                {/* Données collectées */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Données personnelles collectées
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Dans le cadre de nos prestations de coiffure haut de gamme, nous collectons les données suivantes :
                    </p>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Lors de la réservation en ligne :</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Civilité, nom et prénom</li>
                        <li>Adresse email</li>
                        <li>Numéro de téléphone</li>
                        <li>Adresse postale (pour les prestations à domicile)</li>
                        <li>Date et heure du rendez-vous souhaitées</li>
                        <li>Informations sur vos attentes capillaires</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Lors de la prestation :</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Diagnostic capillaire (nature, texture, état des cheveux)</li>
                        <li>Historique des traitements capillaires</li>
                        <li>Allergies ou sensibilités éventuelles</li>
                        <li>Photographies avant/après (uniquement avec votre consentement explicite)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Données de paiement :</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Informations de facturation</li>
                        <li>Historique des transactions (via notre prestataire de paiement sécurisé)</li>
                      </ul>
                      <p className="text-sm text-neutral-900/70 mt-2 italic">
                        Note : Les coordonnées bancaires ne sont jamais stockées sur nos serveurs. Elles sont traitées directement par notre prestataire de paiement certifié PCI-DSS.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Finalités */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Finalités du traitement
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Gestion des réservations :</strong> Confirmation, modification ou annulation de votre rendez-vous</li>
                      <li><strong>Personnalisation du service :</strong> Adaptation du rituel RE·GEN à vos besoins capillaires spécifiques</li>
                      <li><strong>Traitement des paiements :</strong> Encaissement de l'acompte et du solde de la prestation</li>
                      <li><strong>Communication :</strong> Rappels de rendez-vous, confirmations, informations sur nos services</li>
                      <li><strong>Suivi client :</strong> Historique de vos prestations pour optimiser les traitements futurs</li>
                      <li><strong>Obligations légales :</strong> Facturation, comptabilité, conformité fiscale</li>
                      <li><strong>Marketing (avec consentement) :</strong> Envoi d'offres personnalisées, newsletters, nouveautés</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Base légale */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Base légale du traitement
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>Conformément au RGPD, les traitements de vos données reposent sur :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>L'exécution d'un contrat :</strong> La réservation et la réalisation de nos prestations de coiffure</li>
                      <li><strong>Votre consentement :</strong> Pour les communications marketing et l'utilisation de photographies</li>
                      <li><strong>Notre intérêt légitime :</strong> Amélioration de nos services et personnalisation de l'expérience client</li>
                      <li><strong>Une obligation légale :</strong> Conservation des données de facturation pendant 10 ans</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Durée de conservation */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Durée de conservation
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>Vos données sont conservées pendant les durées suivantes :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Données de réservation :</strong> 3 ans après votre dernière prestation</li>
                      <li><strong>Historique capillaire :</strong> 3 ans après votre dernière visite (pour assurer la continuité des soins)</li>
                      <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                      <li><strong>Consentement marketing :</strong> 3 ans, renouvelable sur demande</li>
                      <li><strong>Photographies :</strong> Jusqu'au retrait de votre consentement</li>
                    </ul>
                    <p className="mt-4">
                      À l'issue de ces durées, vos données sont automatiquement supprimées ou anonymisées.
                    </p>
                  </div>
                </motion.div>

                {/* Destinataires */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Destinataires des données
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>Vos données personnelles sont accessibles uniquement aux catégories de destinataires suivants :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Personnel autorisé de RE·GEN Salon :</strong> Nos maîtres coiffeurs et notre équipe administrative</li>
                      <li><strong>Prestataires techniques :</strong> Hébergement web (Vercel), plateforme de paiement sécurisée</li>
                      <li><strong>Prestataires de communication :</strong> Uniquement si vous avez consenti à recevoir nos communications</li>
                    </ul>
                    <p className="mt-4 font-semibold text-neutral-900">
                      Engagement : Vos données ne sont jamais vendues, louées ou échangées avec des tiers à des fins commerciales.
                    </p>
                  </div>
                </motion.div>

                {/* Droits */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Vos droits
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Droit d'accès :</h3>
                      <p>Obtenir une copie de l'ensemble de vos données personnelles que nous détenons.</p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Droit de rectification :</h3>
                      <p>Corriger ou mettre à jour vos données si elles sont inexactes ou incomplètes.</p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Droit à l'effacement (« droit à l'oubli ») :</h3>
                      <p>Demander la suppression de vos données, sauf si une obligation légale nous impose de les conserver.</p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Droit à la limitation du traitement :</h3>
                      <p>Suspendre temporairement le traitement de vos données dans certains cas.</p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Droit à la portabilité :</h3>
                      <p>Récupérer vos données dans un format structuré et lisible par machine.</p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Droit d'opposition :</h3>
                      <p>Vous opposer au traitement de vos données à des fins de marketing direct.</p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Droit de retirer votre consentement :</h3>
                      <p>Retirer à tout moment votre consentement pour les traitements basés sur celui-ci (newsletters, photos, etc.).</p>
                    </div>

                    <div className="mt-6 p-4 bg-laboratory-100 rounded-lg">
                      <p className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Pour exercer vos droits :</p>
                      <p>Contactez-nous par email à : <a href="mailto:contact@regen-salon.fr" className="text-brand-400 hover:text-brand-500 underline">contact@regen-salon.fr</a></p>
                      <p className="mt-2">ou par courrier à :<br />
                      RE·GEN Salon - Service Données Personnelles<br />
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France</p>
                      <p className="mt-4 text-sm text-neutral-900/70 italic">
                        Nous nous engageons à vous répondre dans un délai maximum d'un mois. Une pièce d'identité pourra vous être demandée pour sécuriser votre demande.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Sécurité */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Sécurité des données
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      RE·GEN Salon met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Chiffrement SSL/TLS pour toutes les communications web</li>
                      <li>Hébergement sécurisé chez un prestataire certifié</li>
                      <li>Accès aux données strictement limité au personnel autorisé</li>
                      <li>Sauvegardes régulières et sécurisées</li>
                      <li>Politique de mots de passe renforcée</li>
                      <li>Surveillance continue des accès et des tentatives d'intrusion</li>
                    </ul>
                    <p className="mt-4">
                      En cas de violation de données susceptible d'engendrer un risque élevé pour vos droits, vous serez informé dans les meilleurs délais, conformément à la réglementation.
                    </p>
                  </div>
                </motion.div>

                {/* Cookies */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Cookies et technologies similaires
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>Notre site utilise des cookies pour améliorer votre expérience de navigation :</p>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Cookies essentiels :</h3>
                      <p>Nécessaires au fonctionnement du site (session, panier, sécurité). Ils ne nécessitent pas votre consentement.</p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Cookies de performance :</h3>
                      <p>Analyse anonyme de la fréquentation pour améliorer nos services. Déposés uniquement avec votre consentement.</p>
                    </div>

                    <p className="mt-4">
                      Vous pouvez à tout moment gérer vos préférences de cookies via les paramètres de votre navigateur ou notre bandeau de consentement.
                    </p>
                  </div>
                </motion.div>

                {/* Réclamation */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Droit de réclamation
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente :
                    </p>
                    <div className="p-4 bg-laboratory-100 rounded-lg">
                      <p className="text-heading-md font-display font-semibold text-neutral-900 tracking-tight">Commission Nationale de l'Informatique et des Libertés (CNIL)</p>
                      <p className="mt-2">
                        3 Place de Fontenoy<br />
                        TSA 80715<br />
                        75334 Paris Cedex 07<br />
                        France
                      </p>
                      <p className="mt-2">
                        Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-500 underline">www.cnil.fr</a>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Modifications */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Modifications de la politique
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      RE·GEN Salon se réserve le droit de modifier cette politique de confidentialité à tout moment. Toute modification substantielle vous sera notifiée par email ou via un avertissement visible sur notre site.
                    </p>
                    <p>
                      Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
                    </p>
                    <p className="text-sm text-neutral-900/60 italic mt-6">
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

export default PrivacyPage;
