import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import regenLogo from "@/assets/regen-logo.png";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const Footer = () => {
  const { openSettings } = useCookieConsent();

  return (
    <footer id="contact" className="bg-laboratory-75 text-neutral-900">
      {/* Main Footer Content */}
      <div className="border-b border-neutral-900/10">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Column 1: Customer Service */}
            <div>
              <h3 className="text-ui-sm font-semibold uppercase tracking-wider mb-4">Service Client</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-ui-sm font-body text-neutral-900/70 hover:text-neutral-900 transition-colors">
                    Prendre rendez-vous
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ui-sm font-body text-neutral-900/70 hover:text-neutral-900 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-ui-sm font-body text-neutral-900/70 hover:text-neutral-900 transition-colors">
                    Nos tarifs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ui-sm font-body text-neutral-900/70 hover:text-neutral-900 transition-colors">
                    Conditions d'annulation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: About RE-GEN */}
            <div>
              <h3 className="text-ui-sm font-semibold uppercase tracking-wider mb-4">L'Univers RE-GEN</h3>
              <ul className="space-y-2 mb-5">
                <li>
                  <a href="/about" className="text-ui-sm font-body text-neutral-900/70 hover:text-neutral-900 transition-colors">
                    Notre histoire
                  </a>
                </li>
                <li>
                  <a href="/innovation" className="text-ui-sm font-body text-neutral-900/70 hover:text-neutral-900 transition-colors">
                    Produits coréens
                  </a>
                </li>
              </ul>

              {/* Social Media */}
              <div>
                <h4 className="text-ui-sm font-semibold uppercase tracking-wider mb-2.5">Suivez-nous</h4>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 border border-neutral-900/20 rounded hover:bg-neutral-900/10 flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-neutral-900/20 rounded hover:bg-neutral-900/10 flex items-center justify-center transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-ui-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start space-x-3">
                  <MapPin size={16} className="text-neutral-900/70 mt-1 flex-shrink-0" />
                  <div className="text-ui-sm font-body text-neutral-900/70">
                    <p>123 Avenue des Champs-Élysées</p>
                    <p>75008 Paris, France</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone size={16} className="text-neutral-900/70 mt-1 flex-shrink-0" />
                  <div className="text-ui-sm font-body text-neutral-900/70">
                    <p>+33 1 42 56 78 90</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail size={16} className="text-neutral-900/70 mt-1 flex-shrink-0" />
                  <div className="text-ui-sm font-body text-neutral-900/70">
                    <p>contact@regen-salon.fr</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src={regenLogo}
                alt="RE-GEN Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-ui-sm font-display font-semibold">RE-GEN</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-ui-sm font-body text-neutral-900/60">
              <a href="/legal" className="hover:text-neutral-900 transition-colors">
                Mentions légales
              </a>
              <span className="text-neutral-900/30">|</span>
              <a href="/privacy" className="hover:text-neutral-900 transition-colors">
                Politique de confidentialité
              </a>
              <span className="text-neutral-900/30">|</span>
              <a href="/terms" className="hover:text-neutral-900 transition-colors">
                Conditions générales
              </a>
              <span className="text-neutral-900/30">|</span>
              <a href="/cookies" className="hover:text-neutral-900 transition-colors">
                Cookies
              </a>
              <span className="text-neutral-900/30">|</span>
              <button onClick={openSettings} className="hover:text-neutral-900 transition-colors">
                Gérer mes cookies
              </button>
            </div>

            {/* Copyright */}
            <div className="text-ui-sm font-body text-neutral-900/60">
              © {new Date().getFullYear()} RE-GEN Salon
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
