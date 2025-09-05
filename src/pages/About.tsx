import Header from "@/components/Header";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto py-[clamp(1rem,4vw,2rem)]">
          <div className="text-center mb-[clamp(1rem,3vw,1.5rem)]">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-neutral-900 mb-6 animate-spring">
              À propos
            </h2>
            <div className="divider-luxe max-w-md mx-auto mb-6"></div>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-neutral-900/70 max-w-2xl mx-auto leading-relaxed font-body animate-spring">
              Découvrez l'excellence RE-GEN, votre laboratoire capillaire de référence et nos innovations révolutionnaires.
            </p>
          </div>
          <About />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;