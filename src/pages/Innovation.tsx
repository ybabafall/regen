import Header from "@/components/Header";
import Innovation from "@/components/Innovation";
import Footer from "@/components/Footer";

const InnovationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Innovation />
      </main>
      <Footer />
    </div>
  );
};

export default InnovationPage;
