import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import regenLifestyleBlonde from "@/assets/regen-lifestyle-blonde.png";
import regenLifestyleBrunette from "@/assets/regen-lifestyle-brunette.png";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    {
      id: 1,
      src: regenLifestyleBlonde,
      alt: "Traitement FLOWLESS SILVER - Avant/Après",
      title: "FLOWLESS SILVER",
      description: "Transformation anti-frisottis avec conservation de la texture naturelle"
    },
    {
      id: 2,
      src: regenLifestyleBrunette,
      alt: "Traitement AURÉA NOVA - Lissage Coréen",
      title: "AURÉA NOVA",
      description: "Lissage coréen premium pour une transformation complète"
    },
    {
      id: 3,
      src: regenLifestyleBlonde,
      alt: "Coupe Premium - Résultat",
      title: "COUPE PREMIUM",
      description: "Sculpture capillaire personnalisée selon votre morphologie"
    },
    {
      id: 4,
      src: regenLifestyleBrunette,
      alt: "Coloration Luxe - Transformation",
      title: "COLORATION LUXE",
      description: "Art chromatique avec techniques balayage premium"
    },
    {
      id: 5,
      src: regenLifestyleBlonde,
      alt: "Soin Régénérant - Traitement",
      title: "SOIN RÉGÉNÉRANT",
      description: "Traitement restructurant pour cheveux abîmés"
    },
    {
      id: 6,
      src: regenLifestyleBrunette,
      alt: "Style Professionnel - Finish",
      title: "STYLE PROFESSIONNEL",
      description: "Coiffage expert pour un résultat impeccable"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryImages.length]);

  // Scroll to current image
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;
      const scrollPosition = (scrollWidth / galleryImages.length) * currentIndex;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, galleryImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  return (
    <section id="gallery" className="py-[clamp(2rem,6vw,5rem)] bg-accent-500/30 relative">
      <div className="text-center mb-[clamp(2rem,6vw,4rem)] px-[clamp(1rem,3vw,1.5rem)]">
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-neutral-900/70 max-w-3xl mx-auto font-body">
          Découvrez nos réalisations et les transformations exceptionnelles 
          réalisées par nos experts. Chaque client est unique, chaque résultat l'est aussi.
        </p>
      </div>

      {/* Scrolling Gallery */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[clamp(0.5rem,2vw,1rem)] top-1/2 transform -translate-y-1/2 z-20 p-[clamp(0.5rem,1.5vw,0.75rem)] bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-luxury-medium transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={24} className="text-neutral-900" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[clamp(0.5rem,2vw,1rem)] top-1/2 transform -translate-y-1/2 z-20 p-[clamp(0.5rem,1.5vw,0.75rem)] bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-luxury-medium transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={24} className="text-neutral-900" />
        </button>

        {/* Images Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative flex-shrink-0 w-full"
              onClick={() => goToSlide(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[clamp(50vh,85vw,85vh)] object-cover object-center cursor-pointer"
              />
              
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent flex items-end">
                <div className="p-[clamp(1rem,4vw,2rem)] text-white max-w-2xl">
                  <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-display font-bold mb-[clamp(0.5rem,1.5vw,0.75rem)]">
                    {image.title}
                  </h3>
                  <p className="text-[clamp(0.875rem,2vw,1.125rem)] font-body leading-relaxed opacity-90">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-[clamp(1.5rem,4vw,2rem)] space-x-[clamp(0.25rem,1vw,0.5rem)]">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[clamp(0.625rem,1.5vw,0.75rem)] h-[clamp(0.625rem,1.5vw,0.75rem)] rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-brand-500 w-[clamp(1.5rem,3vw,2rem)]' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-[clamp(0.75rem,2vw,1rem)] mx-auto max-w-[clamp(16rem,50vw,28rem)] px-[clamp(1rem,3vw,1.5rem)]">
          <div className="w-full bg-white/30 rounded-full h-[clamp(0.125rem,0.5vw,0.25rem)]">
            <div 
              className="bg-brand-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;