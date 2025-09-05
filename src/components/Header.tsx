import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Crown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import regenLogo from "@/assets/regen-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isHomePage 
        ? (isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-brand-500/10 shadow-luxury-medium' 
          : 'bg-transparent')
        : 'bg-white/95 backdrop-blur-xl border-b border-brand-500/10 shadow-luxury-medium'
    }`}>
      <nav className="container mx-auto py-[clamp(0.25rem,1vw,0.5rem)]">
        <div className="flex items-center justify-between">
          {/* Logo Ultra-Moderne - visible après scroll sur homepage, toujours visible sur autres pages */}
          {(isHomePage ? isScrolled : true) && (
            <div 
              onClick={() => scrollToSection('hero')}
              className="flex items-center hover-lift-luxe cursor-pointer animate-spring group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-brand rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-sm"></div>
                <img 
                  src={regenLogo} 
                  alt="RE-GEN Logo" 
                  className="h-[clamp(2.5rem,5vw,3rem)] w-[clamp(2.5rem,5vw,3rem)] object-contain transition-all duration-500 group-hover:scale-110 relative z-10 rounded-full"
                />
              </div>
            </div>
          )}

          <div></div>
          
          {/* Navigation Ultra-Moderne Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { id: 'hero', label: 'Accueil' },
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'À propos' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-[clamp(0.5rem,1.5vw,0.75rem)] py-[clamp(0.25rem,1vw,0.5rem)] font-medium text-[clamp(0.75rem,1.5vw,0.875rem)] font-body rounded transition-all duration-300 group relative overflow-hidden ${
                  isHomePage 
                    ? (isScrolled 
                      ? 'text-neutral-900 hover-champagne hover:bg-brand-500/10' 
                      : 'text-white hover:text-brand-500 hover:bg-white/10')
                    : 'text-neutral-900 hover-champagne hover:bg-brand-500/10'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-5 transition-all duration-300"></div>
              </button>
            ))}
            
            <button 
              onClick={() => navigate('/booking')}
              className={`ml-3 relative group px-[clamp(1rem,2.5vw,1.25rem)] py-[clamp(0.625rem,1.5vw,0.75rem)] text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium transition-all duration-500 overflow-hidden ${
                isHomePage 
                  ? (isScrolled 
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40')
                  : 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-lg hover:shadow-xl'
              } rounded-full hover:scale-105`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Réserver</span>
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isHomePage 
                    ? (isScrolled ? 'bg-white' : 'bg-brand-500')
                    : 'bg-white'
                } group-hover:scale-125`}></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </button>
          </div>


          {/* Menu Burger Moderne */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden relative group px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] font-medium transition-all duration-500 overflow-hidden ${
              isHomePage 
                ? (isScrolled 
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 shadow-lg hover:shadow-xl' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40')
                : 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 shadow-lg hover:shadow-xl'
            } rounded-full hover:scale-105`}
          >
            <div className="relative w-4 h-4 flex items-center justify-center">
              <div className={`absolute w-3 h-0.5 transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0 w-4' : '-translate-y-1'} ${
                isHomePage 
                  ? (isScrolled ? 'bg-white' : 'bg-white')
                  : 'bg-white'
              }`}></div>
              <div className={`absolute w-3 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} ${
                isHomePage 
                  ? (isScrolled ? 'bg-white' : 'bg-white')
                  : 'bg-white'
              }`}></div>
              <div className={`absolute w-3 h-0.5 transition-all duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0 w-4' : 'translate-y-1'} ${
                isHomePage 
                  ? (isScrolled ? 'bg-white' : 'bg-white')
                  : 'bg-white'
              }`}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          </button>
        </div>

        {/* Navigation Mobile Moderne */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 glass-luxe rounded-luxe-medium p-[clamp(1rem,3vw,1.5rem)] animate-spring border-brand-500/10">
            <div className="space-y-3">
              {/* Navigation Links */}
              <div className="space-y-2">
                {[
                  { id: 'hero', label: 'Accueil', icon: '🏠' },
                  { id: 'services', label: 'Services', icon: '✨' },
                  { id: 'about', label: 'À propos', icon: 'ℹ️' }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center space-x-3 text-left text-neutral-900 hover-champagne font-medium py-[clamp(0.5rem,1.5vw,0.75rem)] px-[clamp(0.75rem,2vw,1rem)] rounded hover:bg-brand-500/8 transition-all duration-300 font-body group text-[clamp(0.875rem,2vw,1rem)]"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="divider-luxe my-4"></div>
              
              {/* CTA Mobile */}
              <button 
                onClick={() => navigate('/booking')}
                className="btn-luxe-primary w-full py-[clamp(0.75rem,2vw,1rem)] hover-lift-luxe hover:shimmer-luxe text-[clamp(0.75rem,1.5vw,0.875rem)]"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Crown className="w-4 h-4" />
                  <span>Réserver Maintenant</span>
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;