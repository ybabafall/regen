import { useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiesPage = () => {
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
                  Politique de Cookies
                </motion.h1>
                <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
                <p className="text-body-base text-neutral-700 max-w-3xl mx-auto leading-relaxed font-body">
                  RE·GEN Salon utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation de notre site.
                </p>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {/* Qu'est-ce qu'un cookie */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Qu'est-ce qu'un cookie ?
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web. Il permet au site de mémoriser des informations relatives à votre navigation.
                    </p>
                    <p>
                      Les cookies ont différentes finalités : ils peuvent être nécessaires au fonctionnement du site, améliorer votre expérience de navigation, ou permettre l'analyse de l'audience du site.
                    </p>
                  </div>
                </motion.div>

                {/* Cookies utilisés */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Les cookies que nous utilisons
                  </h2>
                  <div className="space-y-6 text-body-base text-neutral-900/80 font-body leading-relaxed">

                    {/* Cookies essentiels */}
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-3 tracking-tight">1. Cookies strictement nécessaires</h3>
                      <p className="mb-3">
                        Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés sans affecter l'utilisation du site.
                      </p>
                      <div className="bg-laboratory-100 rounded-lg p-4">
                        <p className="font-semibold text-neutral-900 mb-2">Exemples :</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Cookies de session : maintien de votre session de navigation</li>
                          <li>Cookies de sécurité : protection contre les attaques CSRF</li>
                          <li>Cookies de panier : mémorisation des prestations sélectionnées</li>
                          <li>Cookies d'authentification : maintien de votre connexion si vous avez un compte</li>
                        </ul>
                        <p className="text-sm text-neutral-900/70 mt-3 italic">
                          Durée de conservation : Session ou 24 heures maximum
                        </p>
                      </div>
                      <p className="mt-3 text-sm">
                        <strong>Base légale :</strong> Ces cookies sont exemptés de consentement car nécessaires à la fourniture du service.
                      </p>
                    </div>

                    {/* Cookies de préférences */}
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-3 tracking-tight">2. Cookies de préférences</h3>
                      <p className="mb-3">
                        Ces cookies permettent de mémoriser vos choix et préférences pour personnaliser votre expérience.
                      </p>
                      <div className="bg-laboratory-100 rounded-lg p-4">
                        <p className="font-semibold text-neutral-900 mb-2">Exemples :</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Choix de langue</li>
                          <li>Préférences d'affichage</li>
                          <li>Consentement aux cookies (enregistrement de vos choix)</li>
                        </ul>
                        <p className="text-sm text-neutral-900/70 mt-3 italic">
                          Durée de conservation : 6 mois à 1 an
                        </p>
                      </div>
                      <p className="mt-3 text-sm">
                        <strong>Base légale :</strong> Votre consentement (sauf pour le cookie de consentement lui-même)
                      </p>
                    </div>

                    {/* Cookies analytiques */}
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-3 tracking-tight">3. Cookies de mesure d'audience (analytiques)</h3>
                      <p className="mb-3">
                        Ces cookies nous permettent de comprendre comment les visiteurs utilisent notre site, afin d'améliorer son contenu et ses fonctionnalités.
                      </p>
                      <div className="bg-laboratory-100 rounded-lg p-4">
                        <p className="font-semibold text-neutral-900 mb-2">Informations collectées :</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Pages visitées et durée de visite</li>
                          <li>Parcours de navigation sur le site</li>
                          <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
                          <li>Type d'appareil et navigateur utilisé</li>
                          <li>Données démographiques générales (âge, genre) de manière anonyme</li>
                        </ul>
                        <p className="text-sm text-neutral-900/70 mt-3 italic">
                          Durée de conservation : 13 mois maximum
                        </p>
                        <p className="text-sm text-neutral-900/70 mt-2">
                          <strong>Outil utilisé :</strong> Google Analytics 4 (avec anonymisation de l'adresse IP)
                        </p>
                      </div>
                      <p className="mt-3 text-sm">
                        <strong>Base légale :</strong> Votre consentement préalable
                      </p>
                    </div>

                    {/* Cookies publicitaires - NON UTILISÉS */}
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-3 tracking-tight">4. Cookies publicitaires et de réseaux sociaux</h3>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="font-semibold text-green-900">
                          ✓ RE·GEN Salon n'utilise actuellement AUCUN cookie publicitaire ou de réseaux sociaux.
                        </p>
                        <p className="text-sm text-green-800 mt-2">
                          Nous ne partageons pas vos données avec des régies publicitaires tierces. Il n'y a pas de tracking publicitaire sur notre site.
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>

                {/* Gestion des cookies */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Comment gérer vos cookies ?
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Via notre bandeau de consentement</h3>
                      <p>
                        Lors de votre première visite sur notre site, un bandeau de consentement vous permet de choisir quels cookies vous acceptez. Vous pouvez à tout moment modifier vos préférences en cliquant sur le lien "Gérer mes cookies" en bas de chaque page.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Via votre navigateur</h3>
                      <p className="mb-3">
                        Vous pouvez également configurer votre navigateur pour gérer les cookies selon vos préférences :
                      </p>

                      <div className="space-y-3">
                        <div className="bg-laboratory-100 rounded-lg p-4">
                          <p className="font-semibold text-neutral-900">Google Chrome</p>
                          <p className="text-sm mt-1">
                            Menu (⋮) &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données de sites
                          </p>
                        </div>

                        <div className="bg-laboratory-100 rounded-lg p-4">
                          <p className="font-semibold text-neutral-900">Mozilla Firefox</p>
                          <p className="text-sm mt-1">
                            Menu (☰) &gt; Paramètres &gt; Vie privée et sécurité &gt; Cookies et données de sites
                          </p>
                        </div>

                        <div className="bg-laboratory-100 rounded-lg p-4">
                          <p className="font-semibold text-neutral-900">Safari (Mac)</p>
                          <p className="text-sm mt-1">
                            Préférences &gt; Confidentialité &gt; Cookies et données de sites web
                          </p>
                        </div>

                        <div className="bg-laboratory-100 rounded-lg p-4">
                          <p className="font-semibold text-neutral-900">Microsoft Edge</p>
                          <p className="text-sm mt-1">
                            Menu (⋯) &gt; Paramètres &gt; Cookies et autorisations de site &gt; Cookies et données de site
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-sm text-neutral-900/70 italic">
                        Note : Le blocage de tous les cookies peut affecter le fonctionnement de certaines fonctionnalités du site.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Refuser les cookies analytiques (Google Analytics)</h3>
                      <p>
                        Vous pouvez également installer le module complémentaire de navigateur pour la désactivation de Google Analytics disponible à l'adresse :
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-500 underline ml-1">
                          https://tools.google.com/dlpage/gaoptout
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Durée de conservation */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Durée de conservation des cookies
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>Les cookies sont conservés pour des durées variables selon leur finalité :</p>
                    <div className="bg-laboratory-100 rounded-lg p-4">
                      <ul className="space-y-2">
                        <li><strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
                        <li><strong>Cookies de sécurité :</strong> 24 heures maximum</li>
                        <li><strong>Cookies de préférences :</strong> 6 mois à 1 an</li>
                        <li><strong>Cookies analytiques :</strong> 13 mois (conformément aux recommandations de la CNIL)</li>
                        <li><strong>Cookie de consentement :</strong> 6 mois (pour mémoriser vos choix)</li>
                      </ul>
                    </div>
                    <p className="mt-4">
                      À l'expiration de ces délais, les cookies sont automatiquement supprimés. Vous pouvez également les supprimer manuellement à tout moment via les paramètres de votre navigateur.
                    </p>
                  </div>
                </motion.div>

                {/* Cookies tiers */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Cookies tiers
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Certains cookies peuvent être déposés par des services tiers avec lesquels nous travaillons :
                    </p>
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Google Analytics</h3>
                      <p>
                        Pour la mesure d'audience de notre site. Les données collectées sont anonymisées et ne permettent pas de vous identifier personnellement.
                      </p>
                      <p className="text-sm mt-2">
                        Politique de confidentialité :
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-500 underline ml-1">
                          https://policies.google.com/privacy
                        </a>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Stripe (paiement sécurisé)</h3>
                      <p>
                        Notre prestataire de paiement peut déposer des cookies nécessaires au traitement sécurisé de vos paiements.
                      </p>
                      <p className="text-sm mt-2">
                        Politique de confidentialité :
                        <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-500 underline ml-1">
                          https://stripe.com/privacy
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Vos droits */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Vos droits concernant vos données
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Conformément au RGPD, vous disposez de droits sur les données collectées via les cookies :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Droit d'accès aux données collectées</li>
                      <li>Droit de rectification si les données sont inexactes</li>
                      <li>Droit à l'effacement de vos données</li>
                      <li>Droit d'opposition au traitement de vos données</li>
                      <li>Droit de retirer votre consentement à tout moment</li>
                    </ul>
                    <div className="mt-6 p-4 bg-laboratory-100 rounded-lg">
                      <p className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">Pour exercer vos droits :</p>
                      <p>Contactez-nous à : <a href="mailto:contact@regen-salon.fr" className="text-brand-400 hover:text-brand-500 underline">contact@regen-salon.fr</a></p>
                      <p className="mt-2 text-sm text-neutral-900/70">
                        Vous pouvez également introduire une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas respectés.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Modifications */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Modifications de la politique de cookies
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      RE·GEN Salon se réserve le droit de modifier cette politique de cookies à tout moment. Toute modification sera portée à votre connaissance via notre bandeau de consentement ou par un avertissement visible sur notre site.
                    </p>
                    <p>
                      Nous vous encourageons à consulter régulièrement cette page pour rester informé de notre utilisation des cookies.
                    </p>
                    <p className="text-sm text-neutral-900/60 italic mt-6">
                      Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                  className="bg-white/80 rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-heading-lg font-display font-semibold text-neutral-900 mb-4 tracking-tight">
                    Questions ou préoccupations ?
                  </h2>
                  <div className="space-y-4 text-body-base text-neutral-900/80 font-body leading-relaxed">
                    <p>
                      Si vous avez des questions concernant notre utilisation des cookies ou si vous souhaitez exercer vos droits, n'hésitez pas à nous contacter :
                    </p>
                    <div className="p-4 bg-laboratory-100 rounded-lg">
                      <p className="font-semibold text-neutral-900">RE·GEN Salon</p>
                      <p className="mt-2">
                        Email : <a href="mailto:contact@regen-salon.fr" className="text-brand-400 hover:text-brand-500 underline">contact@regen-salon.fr</a><br />
                        Téléphone : +33 1 42 56 78 90<br />
                        Adresse : 123 Avenue des Champs-Élysées, 75008 Paris, France
                      </p>
                    </div>
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

export default CookiesPage;
