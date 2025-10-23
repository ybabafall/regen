import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import regenLifestyleBlonde from "@/assets/regen-lifestyle-blonde.png";
import regenLifestyleBrunette from "@/assets/regen-lifestyle-brunette.png";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
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

  // Create infinite loop: add first image at end, last image at start
  const extendedImages = [
    galleryImages[galleryImages.length - 1], // Clone last
    ...galleryImages,
    galleryImages[0] // Clone first
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle infinite loop logic
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.clientWidth;

      // Position to show the correct image (offset by 1 because of cloned image at start)
      const scrollPosition = slideWidth * (currentIndex + 1);

      if (isTransitioning) {
        container.style.transition = 'transform 1.2s ease-in-out';
        container.style.transform = `translateX(-${scrollPosition}px)`;
      } else {
        container.style.transition = 'none';
        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
    }
  }, [currentIndex, isTransitioning]);

  // Reset position when reaching clones
  useEffect(() => {
    if (scrollContainerRef.current) {
      const handleTransitionEnd = () => {
        if (currentIndex >= galleryImages.length) {
          setIsTransitioning(false);
          setCurrentIndex(0);
          setTimeout(() => setIsTransitioning(true), 50);
        } else if (currentIndex < 0) {
          setIsTransitioning(false);
          setCurrentIndex(galleryImages.length - 1);
          setTimeout(() => setIsTransitioning(true), 50);
        }
      };

      const container = scrollContainerRef.current;
      container.addEventListener('transitionend', handleTransitionEnd);
      return () => container.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, [currentIndex, galleryImages.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1);
  };

  return (
    <section id="gallery" className="py-[clamp(2rem,6vw,5rem)] bg-background relative">
      {/* Scrolling Gallery */}
      <div className="relative px-[clamp(1rem,3vw,2rem)]">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[clamp(1.5rem,4vw,3rem)] top-1/2 transform -translate-y-1/2 z-20 p-[clamp(0.5rem,1.5vw,0.75rem)] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full shadow-[0_32px_80px_rgba(71,85,105,0.5),0_24px_60px_rgba(0,0,0,0.3),0_16px_40px_rgba(71,85,105,0.4),0_8px_20px_rgba(0,0,0,0.2),0_4px_10px_rgba(71,85,105,0.3)] hover:shadow-[0_48px_120px_rgba(71,85,105,0.6),0_36px_90px_rgba(0,0,0,0.4),0_24px_60px_rgba(71,85,105,0.5),0_16px_40px_rgba(0,0,0,0.3),0_8px_20px_rgba(71,85,105,0.4)] transition-all duration-500 hover:scale-105"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[clamp(1.5rem,4vw,3rem)] top-1/2 transform -translate-y-1/2 z-20 p-[clamp(0.5rem,1.5vw,0.75rem)] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full shadow-[0_32px_80px_rgba(71,85,105,0.5),0_24px_60px_rgba(0,0,0,0.3),0_16px_40px_rgba(71,85,105,0.4),0_8px_20px_rgba(0,0,0,0.2),0_4px_10px_rgba(71,85,105,0.3)] hover:shadow-[0_48px_120px_rgba(71,85,105,0.6),0_36px_90px_rgba(0,0,0,0.4),0_24px_60px_rgba(71,85,105,0.5),0_16px_40px_rgba(0,0,0,0.3),0_8px_20px_rgba(71,85,105,0.4)] transition-all duration-500 hover:scale-105"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Images Container */}
        <div className="overflow-hidden rounded-xl">
          <div
            ref={scrollContainerRef}
            className="flex"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {extendedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="relative flex-shrink-0 w-full"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[clamp(50vh,85vw,85vh)] object-cover object-center"
                />

                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent flex items-end">
                  <div className="p-[clamp(1rem,4vw,2rem)] text-white max-w-2xl">
                    <h3 className="text-heading-lg font-display font-bold mb-[clamp(0.5rem,1.5vw,0.75rem)]">
                      {image.title}
                    </h3>
                    <p className="text-body-base font-body leading-relaxed opacity-90">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;