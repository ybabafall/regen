import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, Check, Sparkles, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "@/hooks/use-toast";

const BookingSystem = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isBooked, setIsBooked] = useState(false);

  const services = [
    { id: "aurea", name: "AURÉA NOVA - Lissage Coréen", price: "280€", duration: "3-4h" },
    { id: "flowless", name: "FLOWLESS SILVER - Anti-Frisottis", price: "180€", duration: "2-3h" },
    { id: "coupe", name: "COUPE PREMIUM", price: "85€", duration: "1-2h" },
    { id: "coloration", name: "COLORATION LUXE", price: "120€", duration: "2-4h" }
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime || !formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simuler la sauvegarde du rendez-vous
    const appointment = {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      client: formData,
      id: Date.now().toString()
    };

    // Sauvegarder dans le localStorage (simulation)
    const appointments = JSON.parse(localStorage.getItem('regen-appointments') || '[]');
    appointments.push(appointment);
    localStorage.setItem('regen-appointments', JSON.stringify(appointments));

    setIsBooked(true);
    toast({
      title: "Rendez-vous confirmé !",
      description: "Votre demande de rendez-vous a été enregistrée. Nous vous contacterons pour confirmation.",
    });
  };

  if (isBooked) {
    return (
      <section id="booking" className="py-[clamp(3rem,8vw,5rem)] bg-accent-500">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto text-center">
            <div className="glass-luxe p-[clamp(1.5rem,5vw,2.5rem)] animate-spring">
              <div className="w-16 h-16 bg-gradient-brand flex items-center justify-center mx-auto mb-6 rounded-full animate-glow-champagne">
                <Check size={24} className="text-white" />
              </div>
              <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-display font-bold mb-4 text-neutral-900">
                Demande enregistrée
              </h2>
              <p className="text-[clamp(0.875rem,2vw,1rem)] text-neutral-900/70 mb-8 leading-relaxed font-body">
                Notre équipe vous contactera pour confirmation dans les <span className="text-brand-500 font-semibold">24h</span>.
              </p>
              
              <div className="bg-white/60 border border-brand-500/20 rounded-luxe p-[clamp(1rem,3vw,1.5rem)] mb-8 text-left backdrop-blur-sm">
                <h3 className="font-display font-semibold text-neutral-900 mb-4 text-center">Récapitulatif</h3>
                <div className="space-y-3 text-[clamp(0.875rem,1.5vw,1rem)]">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900/60 font-body">Service :</span>
                    <span className="text-neutral-900 font-semibold font-body">{services.find(s => s.id === selectedService)?.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900/60 font-body">Date :</span>
                    <span className="text-neutral-900 font-semibold font-body">{selectedDate && format(selectedDate, 'dd/MM/yyyy', { locale: fr })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900/60 font-body">Heure :</span>
                    <span className="text-neutral-900 font-semibold font-body">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900/60 font-body">Client :</span>
                    <span className="text-neutral-900 font-semibold font-body">{formData.firstName} {formData.lastName}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsBooked(false)}
                className="btn-luxe-outline w-full text-sm py-3 hover-lift-luxe"
              >
                Nouvelle réservation
              </button>
              
              <div className="mt-6 glass-luxe p-3 rounded-luxe">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-3 h-3 text-brand-500" />
                  <span className="text-xs text-brand-500 font-semibold tracking-wide uppercase font-body">Réservation Premium Confirmée</span>
                  <Star className="w-3 h-3 text-brand-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-[clamp(1rem,4vw,2rem)] bg-neutral-50 relative">
      {/* Texture de fond beige luxueux */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(207, 166, 124, 0.08) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-[clamp(1rem,3vw,1.5rem)]">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-neutral-900 mb-6 animate-spring">
            Réservez Votre Consultation
          </h2>
          
          <div className="divider-luxe max-w-md mx-auto mb-6"></div>
          
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-neutral-900/70 max-w-2xl mx-auto leading-relaxed font-body animate-spring">
            Prenez rendez-vous avec nos experts pour une consultation personnalisée et découvrez le traitement idéal pour vos cheveux.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 xs:px-6">
          <form onSubmit={handleSubmit} className="card-luxe-2025 animate-spring hover:shimmer-luxe">
            <div className="space-y-[clamp(1.5rem,4vw,2rem)]">

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-neutral-900 font-body flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-brand-500" />
                    <span>Date *</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 justify-start text-left font-medium border-2 border-brand-500/20 hover:border-brand-500 transition-all duration-300 text-sm bg-white/70 backdrop-blur-sm rounded-luxe shadow-luxury-soft"
                      >
                        <Calendar className="mr-3 h-4 w-4 text-brand-500" />
                        {selectedDate ? (
                          <span className="font-body text-neutral-900">{format(selectedDate, "dd/MM/yyyy", { locale: fr })}</span>
                        ) : (
                          <span className="text-neutral-900/60 font-body">Sélectionner une date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 glass-luxe border-brand-500/20">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        initialFocus
                        className="rounded-luxe"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-neutral-900 font-body flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-brand-500" />
                    <span>Heure *</span>
                  </Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="h-12 border-2 border-brand-500/20 hover:border-brand-500 transition-all duration-300 text-sm bg-white/70 backdrop-blur-sm rounded-luxe shadow-luxury-soft">
                      <SelectValue placeholder="Choisissez un créneau" />
                    </SelectTrigger>
                    <SelectContent className="glass-luxe border-brand-500/20">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="py-3 hover:bg-brand-500/10 cursor-pointer">
                          <span className="font-medium text-sm font-body text-neutral-900">{time}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Informations Client */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="w-5 h-5 text-brand-500" />
                  <h3 className="text-base font-display font-semibold text-neutral-900">
                    Vos informations
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-sm font-semibold text-neutral-900 font-body">
                      Prénom *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Votre prénom"
                      className="w-full h-12 border-2 border-brand-500/20 hover:border-brand-500 focus:border-brand-500 transition-all duration-300 text-sm bg-white/70 backdrop-blur-sm rounded-luxe shadow-luxury-soft font-body"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-sm font-semibold text-neutral-900 font-body">
                      Nom *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Votre nom"
                      className="w-full h-12 border-2 border-brand-500/20 hover:border-brand-500 focus:border-brand-500 transition-all duration-300 text-sm bg-white/70 backdrop-blur-sm rounded-luxe shadow-luxury-soft font-body"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-neutral-900 font-body flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-brand-500" />
                      <span>Email *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="email@exemple.com"
                      className="w-full h-12 border-2 border-brand-500/20 hover:border-brand-500 focus:border-brand-500 transition-all duration-300 text-sm bg-white/70 backdrop-blur-sm rounded-luxe shadow-luxury-soft font-body"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm font-semibold text-neutral-900 font-body flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-brand-500" />
                      <span>Téléphone *</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="01 23 45 67 89"
                      className="w-full h-12 border-2 border-brand-500/20 hover:border-brand-500 focus:border-brand-500 transition-all duration-300 text-sm bg-white/70 backdrop-blur-sm rounded-luxe shadow-luxury-soft font-body"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-sm font-semibold text-neutral-900/70 font-body">
                    Message (optionnel)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Vos attentes particulières..."
                    className="w-full resize-none border-2 border-brand-500/20 hover:border-brand-500 focus:border-brand-500 transition-all duration-300 min-h-24 text-sm bg-white/70 backdrop-blur-sm rounded-luxe shadow-luxury-soft font-body"
                    rows={4}
                  />
                  <p className="text-xs text-neutral-900/60 font-body mt-2">
                    * Champs obligatoires
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Section Premium */}
            <div className="mt-12">
              <div className="divider-luxe mb-8"></div>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-full mb-4 animate-glow-champagne">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-display font-bold text-neutral-900 mb-2">
                  Finaliser votre réservation premium
                </h4>
                <p className="text-neutral-900/70 font-body">
                  Votre transformation commence maintenant
                </p>
              </div>
              

              <Button 
                type="submit" 
                className="btn-luxe-primary w-full text-base py-4 hover-lift-luxe hover:shimmer-luxe"
              >
                Confirmer ma réservation
              </Button>
              
              <div className="text-center mt-8 space-y-3">
                <p className="text-xs text-neutral-900/60 font-body">
                  Confirmation par notre équipe d'experts dans les <span className="text-brand-500 font-semibold">24h</span>.
                </p>
                <div className="flex items-center justify-center space-x-2 mt-6 glass-luxe p-3 rounded-luxe">
                  <Star className="w-3 h-3 text-brand-500" />
                  <span className="text-xs text-brand-500 font-semibold tracking-wide uppercase font-body">Service Premium Garanti</span>
                  <Star className="w-3 h-3 text-brand-500" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;