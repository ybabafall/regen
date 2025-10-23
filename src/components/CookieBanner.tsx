import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Cookie } from 'lucide-react';
import { useCookieConsent, CookiePreferences } from '@/contexts/CookieConsentContext';

const CookieBanner = () => {
  const { showBanner, acceptAll, rejectAll, savePreferences } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [customPreferences, setCustomPreferences] = useState<CookiePreferences>({
    essential: true,
    preferences: false,
    analytics: false
  });

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

  const handleSaveCustom = () => {
    savePreferences(customPreferences);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <AnimatePresence>
        {!showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="relative isolate overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] ring-1 ring-neutral-900/5">
                {/* Texture de fond */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{ backgroundImage: noise }}
                />

                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 to-white/10 opacity-100" />

                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    {/* Icône et texte */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-white to-white/40 text-neutral-800 ring-1 ring-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_18px_rgba(0,0,0,0.06)]">
                            <Cookie className="h-6 w-6" strokeWidth={1.5} />
                            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/70" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">
                            Votre confidentialité nous importe
                          </h3>
                          <p className="text-body-sm text-neutral-700 leading-relaxed font-body">
                            Nous utilisons des cookies pour améliorer votre expérience et analyser notre audience de manière anonyme.
                            Vous pouvez accepter tous les cookies ou personnaliser vos préférences.
                            {' '}
                            <a href="/cookies" className="text-brand-400 hover:text-brand-500 underline font-medium">
                              En savoir plus
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Boutons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                      <button
                        onClick={() => setShowSettings(true)}
                        className="group relative px-6 py-3 text-ui-sm font-medium text-neutral-900 bg-white/60 hover:bg-white/80 rounded-full transition-all duration-300 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20 font-body flex items-center justify-center gap-2"
                      >
                        <Settings className="h-4 w-4" strokeWidth={2} />
                        Personnaliser
                      </button>

                      <button
                        onClick={rejectAll}
                        className="px-6 py-3 text-ui-sm font-medium text-neutral-700 hover:text-neutral-900 bg-white/40 hover:bg-white/60 rounded-full transition-all duration-300 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20 font-body"
                      >
                        Refuser
                      </button>

                      <button
                        onClick={acceptAll}
                        className="relative group px-6 py-3 text-ui-sm font-medium text-white bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.3)] font-body overflow-hidden"
                      >
                        <span className="relative z-10">Accepter tout</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Ligne dorée décorative */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de personnalisation */}
      <AnimatePresence>
        {showSettings && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
                {/* Texture de fond */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.03] rounded-3xl"
                  style={{ backgroundImage: noise }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-neutral-900/5 px-8 py-6 rounded-t-3xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-white to-white/40 text-neutral-800 ring-1 ring-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_18px_rgba(0,0,0,0.06)]">
                          <Cookie className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-heading-lg font-display font-semibold text-neutral-900 tracking-tight">
                          Paramètres des cookies
                        </h2>
                      </div>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                      >
                        <X className="h-5 w-5 text-neutral-600" strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="px-8 py-6 space-y-6">
                    <p className="text-body-base text-neutral-700 leading-relaxed font-body">
                      Nous respectons votre vie privée. Choisissez les catégories de cookies que vous souhaitez autoriser.
                    </p>

                    {/* Cookies essentiels */}
                    <div className="rounded-2xl bg-laboratory-50 p-6 ring-1 ring-neutral-900/5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">
                            Cookies essentiels
                          </h3>
                          <p className="text-body-sm text-neutral-700 leading-relaxed font-body">
                            Ces cookies sont nécessaires au fonctionnement du site. Ils gèrent votre session, votre panier et la sécurité. Ils ne peuvent pas être désactivés.
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                            Toujours actifs
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cookies de préférences */}
                    <div className="rounded-2xl bg-white p-6 ring-1 ring-neutral-900/5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">
                            Cookies de préférences
                          </h3>
                          <p className="text-body-sm text-neutral-700 leading-relaxed font-body">
                            Ces cookies mémorisent vos choix et préférences pour personnaliser votre expérience (langue, affichage, etc.).
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={customPreferences.preferences}
                              onChange={(e) => setCustomPreferences({
                                ...customPreferences,
                                preferences: e.target.checked
                              })}
                              className="sr-only peer"
                            />
                            <div className="w-14 h-7 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-400/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-brand-400 peer-checked:to-brand-500"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Cookies analytiques */}
                    <div className="rounded-2xl bg-white p-6 ring-1 ring-neutral-900/5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-2 tracking-tight">
                            Cookies analytiques
                          </h3>
                          <p className="text-body-sm text-neutral-700 leading-relaxed font-body mb-3">
                            Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer. Toutes les données sont anonymisées.
                          </p>
                          <div className="bg-laboratory-50 rounded-lg p-3">
                            <p className="text-sm text-neutral-600 font-body">
                              <strong>Outil utilisé :</strong> Google Analytics 4 (anonymisé)
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={customPreferences.analytics}
                              onChange={(e) => setCustomPreferences({
                                ...customPreferences,
                                analytics: e.target.checked
                              })}
                              className="sr-only peer"
                            />
                            <div className="w-14 h-7 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-400/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-brand-400 peer-checked:to-brand-500"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-900 mb-1">
                        ✓ Aucun cookie publicitaire
                      </p>
                      <p className="text-sm text-green-800">
                        Nous ne partageons pas vos données avec des régies publicitaires. Il n'y a pas de tracking publicitaire sur notre site.
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="sticky bottom-0 bg-white/95 backdrop-blur-xl border-t border-neutral-900/5 px-8 py-6 rounded-b-3xl">
                    <div className="flex flex-col sm:flex-row gap-3 justify-end">
                      <button
                        onClick={() => setShowSettings(false)}
                        className="px-6 py-3 text-ui-sm font-medium text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-all duration-300 font-body"
                      >
                        Annuler
                      </button>
                      <button
                        onClick={handleSaveCustom}
                        className="relative group px-6 py-3 text-ui-sm font-medium text-white bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.3)] font-body overflow-hidden"
                      >
                        <span className="relative z-10">Enregistrer mes préférences</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieBanner;
