import Header from "@/components/Header";
import BookingProcess from "@/components/BookingProcess";
import BookingSystem from "@/components/BookingSystem";
import Footer from "@/components/Footer";

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <BookingProcess />
        <div className="container mx-auto py-[clamp(0.5rem,2vw,1rem)]">
          <BookingSystem />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;