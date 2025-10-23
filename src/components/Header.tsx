import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Crown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import regenText from "@/assets/regen-text.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Afficher le header si on scroll vers le haut ou si on est en haut de page
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Cacher le header si on scroll vers le bas
        setIsVisible(false);
        setIsMenuOpen(false); // Fermer le menu mobile si ouvert
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'about') {
      navigate('/about');
    } else if (sectionId === 'hero') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Pour services, si on n'est pas sur la page principale, y aller d'abord
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className={`container mx-auto py-[clamp(0.75rem,2vw,1rem)] px-6 transition-all duration-700 ${
        isHomePage
          ? (isScrolled
            ? 'bg-white/80 backdrop-blur-2xl border-b border-neutral-900/5 rounded-b-2xl'
            : '')
          : 'bg-white/80 backdrop-blur-2xl border-b border-neutral-900/5 rounded-b-2xl'
      }`}>
        <div className="flex items-center justify-between relative">
          {/* Navigation Desktop - à gauche */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { id: 'hero', label: 'Accueil' },
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'À propos' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group text-base font-body font-normal tracking-wide transition-all duration-300 ${
                  isHomePage
                    ? (isScrolled
                      ? 'text-neutral-900/70 hover:text-neutral-900'
                      : 'text-white/80 hover:text-white')
                    : 'text-neutral-900/70 hover:text-neutral-900'
                }`}
              >
                {item.label}
                {/* Soulignement au hover */}
                <span className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${
                  isHomePage
                    ? (isScrolled ? 'bg-neutral-900' : 'bg-white')
                    : 'bg-neutral-900'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Logo au centre - visible après scroll sur homepage, toujours visible sur autres pages */}
          {(isHomePage ? isScrolled : true) && (
            <div
              onClick={() => scrollToSection('hero')}
              className="absolute left-1/2 transform -translate-x-1/2 flex items-center cursor-pointer group"
            >
              <div className="relative flex items-center">
                <img
                  src={regenText}
                  alt="RE-GEN"
                  className="h-[clamp(1.5rem,3vw,2rem)] w-auto object-contain transition-all duration-300 group-hover:opacity-80"
                />
              </div>
            </div>
          )}

          {/* Bouton Réserver à droite */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => navigate('/booking')}
              className={`relative group text-base font-body font-normal tracking-wide transition-all duration-300 ${
                isHomePage
                  ? (isScrolled
                    ? 'text-neutral-900/70 hover:text-neutral-900'
                    : 'text-white/80 hover:text-white')
                  : 'text-neutral-900/70 hover:text-neutral-900'
              }`}
            >
              Réserver
              {/* Soulignement au hover */}
              <span className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${
                isHomePage
                  ? (isScrolled ? 'bg-neutral-900' : 'bg-white')
                  : 'bg-neutral-900'
              }`}></span>
            </button>
          </div>


          {/* Menu Burger Minimaliste */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2 transition-all duration-300"
          >
            <div className="relative w-5 h-4 flex items-center justify-center">
              <div className={`absolute w-5 h-px transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'} ${
                isHomePage
                  ? (isScrolled ? 'bg-neutral-900' : 'bg-white')
                  : 'bg-neutral-900'
              }`}></div>
              <div className={`absolute w-5 h-px transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} ${
                isHomePage
                  ? (isScrolled ? 'bg-neutral-900' : 'bg-white')
                  : 'bg-neutral-900'
              }`}></div>
              <div className={`absolute w-5 h-px transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'} ${
                isHomePage
                  ? (isScrolled ? 'bg-neutral-900' : 'bg-white')
                  : 'bg-neutral-900'
              }`}></div>
            </div>
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full mt-0">
            <div className="mt-4 bg-white/90 px-10 py-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl before:pointer-events-none before:absolute before:inset-px before:bg-gradient-to-b before:from-white/80 before:to-white/30 before:opacity-100 relative">
              <div className="space-y-2 relative z-10">
                {/* Navigation Links */}
                {[
                  { id: 'hero', label: 'Accueil' },
                  { id: 'services', label: 'Services' },
                  { id: 'about', label: 'À propos' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left text-neutral-900/80 hover:text-neutral-900 font-normal py-4 px-5 rounded-xl hover:bg-white/40 hover:backdrop-blur-sm transition-all duration-500 font-body text-base tracking-wide border border-transparent hover:border-brand-400/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Divider luxe */}
                <div className="py-3">
                  <div className="h-px flex items-center gap-2">
                    <span className="h-px flex-1 bg-neutral-200" />
                    <span className="h-1 w-8 rounded-full bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 opacity-80" />
                    <span className="h-px flex-1 bg-neutral-200" />
                  </div>
                </div>

                {/* CTA Mobile */}
                <button
                  onClick={() => navigate('/booking')}
                  className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-4 px-6 text-base font-medium tracking-wide transition-all duration-500 rounded-full font-body shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] hover:scale-[1.02] relative overflow-hidden group"
                >
                  <span className="relative z-10">Réserver</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;