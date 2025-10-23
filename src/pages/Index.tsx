import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RitualSignature from "@/components/RitualSignature";
import Gallery from "@/components/Gallery";
import HairTypes from "@/components/HairTypes";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HairTypes />
        <Gallery />
        <RitualSignature />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;