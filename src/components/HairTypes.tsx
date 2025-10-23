import renduLisse from "@/assets/rendulisse.jpg";
import renduOndule from "@/assets/renduondule.jpeg";
import renduBoucle from "@/assets/renduboucle.jpeg";
import renduBlond from "@/assets/rendublond.jpeg";

const HairTypes = () => {
  const hairTypes = [
    {
      id: 1,
      name: "Discipline Soyeuse",
      description: "Lissage parfait et brillance éclatante",
      image: renduLisse,
    },
    {
      id: 2,
      name: "Fluidité Naturelle",
      description: "Ondulations maîtrisées et légèreté",
      image: renduOndule,
    },
    {
      id: 3,
      name: "Boucles Restructurées",
      description: "Définition et souplesse retrouvées",
      image: renduBoucle,
    },
    {
      id: 4,
      name: "Éclat Chromatique",
      description: "Sublimation et protection de la couleur",
      image: renduBlond,
    },
  ];

  return (
    <section id="formulations" className="py-20 bg-laboratory-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(71, 85, 105, 0.08) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-display-lg font-display font-semibold text-neutral-900 mb-4 animate-spring tracking-tight" style={{ animationDelay: '0.2s' }}>
              Votre Vision, Notre Expertise
            </h2>

            <div className="divider-luxe max-w-xs mx-auto mb-6"></div>

            <p className="text-body-base text-neutral-900/75 max-w-3xl mx-auto leading-relaxed font-body animate-spring" style={{ animationDelay: '0.3s' }}>
              Quel que soit le résultat souhaité, notre protocole s'adapte avec précision à votre chevelure.<br />Une formulation unique, personnalisée selon votre diagnostic capillaire.
            </p>
          </div>

          {/* Grid of hair types */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {hairTypes.map((type, index) => {
              return (
                <div
                  key={type.id}
                  className="group cursor-pointer animate-spring"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4] bg-white/30">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="text-left">
                    <h3 className="text-heading-md font-display font-semibold text-neutral-900 mb-1 tracking-tight">
                      {type.name}
                    </h3>
                    <p className="text-body-sm text-neutral-900/70 leading-relaxed font-body">
                      {type.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom emphasis text */}
          <div className="text-center animate-spring" style={{ animationDelay: '0.6s' }}>
            <p className="text-body-base text-neutral-900/80 font-body mb-2 leading-relaxed">
              Chaque rituel est calibré selon votre type de cheveux, leur structure et vos objectifs esthétiques.
            </p>
            <p className="text-body-sm text-neutral-900/60 italic font-body">
              Un diagnostic précis · Une formulation exclusive · Des résultats sur mesure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairTypes;
