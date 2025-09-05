import Header from "@/components/Header";
import BookingSystem from "@/components/BookingSystem";

const Booking = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto py-[clamp(0.5rem,2vw,1rem)]">
          <BookingSystem />
        </div>
      </main>
    </div>
  );
};

export default Booking;