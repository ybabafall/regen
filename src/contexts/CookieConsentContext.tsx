import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type CookieCategory = 'essential' | 'preferences' | 'analytics';

export interface CookiePreferences {
  essential: boolean;
  preferences: boolean;
  analytics: boolean;
}

interface CookieConsentContextType {
  preferences: CookiePreferences | null;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  openSettings: () => void;
  hasConsent: (category: CookieCategory) => boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const COOKIE_CONSENT_KEY = 'regen-cookie-consent';
const CONSENT_EXPIRY_DAYS = 180; // 6 mois

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  // Charger les préférences au démarrage
  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const expiryDate = new Date(parsed.expiryDate);

        // Vérifier si le consentement n'a pas expiré
        if (expiryDate > new Date()) {
          setPreferences(parsed.preferences);
          setShowBanner(false);

          // Charger Google Analytics si autorisé
          if (parsed.preferences.analytics) {
            loadGoogleAnalytics();
          }
        } else {
          // Consentement expiré
          localStorage.removeItem(COOKIE_CONSENT_KEY);
          setShowBanner(true);
        }
      } catch (e) {
        console.error('Erreur lors du chargement des préférences cookies', e);
        setShowBanner(true);
      }
    } else {
      // Première visite
      setShowBanner(true);
    }
  }, []);

  const saveToStorage = (prefs: CookiePreferences) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);

    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      preferences: prefs,
      expiryDate: expiryDate.toISOString(),
      timestamp: new Date().toISOString()
    }));
  };

  const loadGoogleAnalytics = () => {
    // Cette fonction sera appelée uniquement si l'utilisateur a consenti
    if (typeof window !== 'undefined' && !window.gtag) {
      // Remplacer G-XXXXXXXXXX par votre ID Google Analytics
      const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

      // Charger le script GA4
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialiser gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        'anonymize_ip': true,
        'allow_google_signals': false,
        'allow_ad_personalization_signals': false,
        'cookie_flags': 'SameSite=None;Secure'
      });
    }
  };

  const acceptAll = () => {
    const prefs: CookiePreferences = {
      essential: true,
      preferences: true,
      analytics: true
    };
    setPreferences(prefs);
    saveToStorage(prefs);
    setShowBanner(false);

    // Charger Google Analytics
    loadGoogleAnalytics();
  };

  const rejectAll = () => {
    const prefs: CookiePreferences = {
      essential: true, // Toujours actifs
      preferences: false,
      analytics: false
    };
    setPreferences(prefs);
    saveToStorage(prefs);
    setShowBanner(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    // Les cookies essentiels sont toujours actifs
    const finalPrefs = {
      ...prefs,
      essential: true
    };

    setPreferences(finalPrefs);
    saveToStorage(finalPrefs);
    setShowBanner(false);

    // Charger Google Analytics si autorisé
    if (finalPrefs.analytics) {
      loadGoogleAnalytics();
    }
  };

  const openSettings = () => {
    setShowBanner(true);
  };

  const hasConsent = (category: CookieCategory): boolean => {
    if (!preferences) return category === 'essential';
    return preferences[category];
  };

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        showBanner,
        acceptAll,
        rejectAll,
        savePreferences,
        openSettings,
        hasConsent
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent doit être utilisé dans un CookieConsentProvider');
  }
  return context;
};

// Déclaration TypeScript pour gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
