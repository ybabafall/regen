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
  const [selectedHairLength, setSelectedHairLength] = useState("");
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

  const hairLengths = [
    { id: "courts", name: "Courts (au-dessus des épaules)", price: "180€" },
    { id: "mi-longs", name: "Mi-longs (jusqu'aux omoplates)", price: "200€" },
    { id: "longs", name: "Longs (au-delà des omoplates)", price: "220€" }
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

    if (!selectedHairLength || !selectedDate || !selectedTime || !formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simuler la sauvegarde du rendez-vous
    const appointment = {
      hairLength: selectedHairLength,
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
      title: "Demande enregistrée !",
      description: "Nos équipes vous recontactent sous 24h pour confirmer votre rendez-vous.",
    });
  };

  if (isBooked) {
    return (
      <section id="booking" className="py-[clamp(3rem,8vw,5rem)] bg-laboratory-50">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-[clamp(1.5rem,5vw,2.5rem)] border border-neutral-900/10 shadow-laboratory-medium animate-spring">
              <div className="w-16 h-16 bg-neutral-900 flex items-center justify-center mx-auto mb-6 rounded-full shadow-laboratory-medium">
                <Check size={28} className="text-white" />
              </div>
              <h2 className="text-heading-xl font-display font-semibold mb-4 text-neutral-900 tracking-tight">
                Demande enregistrée
              </h2>
              <p className="text-body-base text-neutral-900/70 mb-8 leading-relaxed font-body">
                Nos équipes vous recontactent sous <span className="text-neutral-900 font-semibold">24h</span> pour confirmer votre rendez-vous.
              </p>

              <div className="bg-laboratory-100 border border-neutral-900/10 rounded-lg p-[clamp(1rem,3vw,1.5rem)] mb-8 text-left">
                <h3 className="font-display font-semibold text-neutral-900 mb-4 text-center tracking-tight">Récapitulatif</h3>
                <div className="space-y-3 text-body-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900/60 font-body">Rituel RE·GEN :</span>
                    <span className="text-neutral-900 font-semibold font-body">{hairLengths.find(h => h.id === selectedHairLength)?.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900/60 font-body">Tarif :</span>
                    <span className="text-neutral-900 font-semibold font-body">{hairLengths.find(h => h.id === selectedHairLength)?.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900/60 font-body">Date :</span>
                    <span className="text-neutral-900 font-semibold font-body">{selectedDate && format(selectedDate, 'dd MMMM yyyy', { locale: fr })}</span>
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
                className="w-full px-[clamp(2rem,5vw,2.75rem)] py-[clamp(0.4rem,1.2vw,0.6rem)] text-ui-base font-medium bg-neutral-900/5 backdrop-blur-sm text-neutral-900 hover:bg-neutral-900/10 border border-neutral-900/20 hover:border-neutral-900/40 rounded-full hover:scale-105 transition-all duration-500"
              >
                Nouvelle réservation
              </button>

              <div className="mt-6 bg-laboratory-100 p-3 rounded-lg border border-neutral-900/10">
                <p className="text-ui-xs text-neutral-900/70 font-body text-center">
                  Acompte de <strong>40 €</strong> requis pour confirmer la réservation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-[clamp(1rem,4vw,2rem)] bg-laboratory-50 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(71, 85, 105, 0.08) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-[clamp(1rem,3vw,1.5rem)]">
          <h2 className="font-display text-heading-xl text-neutral-900 mb-6 animate-spring tracking-tight">
            Réservez votre rituel
          </h2>

          <div className="divider-luxe max-w-xs mx-auto mb-6"></div>

          <p className="text-body-base text-neutral-900/75 max-w-2xl mx-auto leading-relaxed font-body animate-spring">
            Complétez les informations ci-dessous. Nos équipes vous recontactent sous 24h pour finaliser votre réservation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 xs:px-6">
          <form onSubmit={handleSubmit} className="bg-white/50 backdrop-blur-sm rounded-xl p-[clamp(1.5rem,5vw,2.5rem)] border border-neutral-900/10 shadow-laboratory-medium animate-spring">
            <div className="space-y-[clamp(1.5rem,4vw,2rem)]">

              {/* Hair Length Selection */}
              <div className="space-y-3">
                <Label className="text-ui-sm font-semibold text-neutral-900 font-body flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-neutral-900" />
                  <span>Longueur de cheveux *</span>
                </Label>
                <Select value={selectedHairLength} onValueChange={setSelectedHairLength}>
                  <SelectTrigger className="h-12 border-2 border-neutral-900/20 hover:border-neutral-900/40 focus:border-neutral-900 transition-all duration-300 text-ui-sm bg-white/70 backdrop-blur-sm rounded-lg">
                    <SelectValue placeholder="Sélectionnez votre longueur" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-neutral-900/20">
                    {hairLengths.map((length) => (
                      <SelectItem key={length.id} value={length.id} className="py-3 hover:bg-laboratory-50 cursor-pointer">
                        <div className="flex justify-between items-center w-full">
                          <span className="font-medium text-ui-sm font-body text-neutral-900">{length.name}</span>
                          <span className="ml-4 font-semibold text-ui-sm text-neutral-900">{length.price}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-ui-sm font-semibold text-neutral-900 font-body flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-neutral-900" />
                    <span>Date *</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 justify-start text-left font-medium border-2 border-neutral-900/20 hover:border-neutral-900/40 focus:border-neutral-900 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 text-ui-sm bg-white/70 backdrop-blur-sm rounded-lg"
                      >
                        <Calendar className="mr-3 h-4 w-4 text-neutral-900" />
                        {selectedDate ? (
                          <span className="font-body text-neutral-900">{format(selectedDate, "dd/MM/yyyy", { locale: fr })}</span>
                        ) : (
                          <span className="text-neutral-900/60 font-body">Sélectionner une date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white border-neutral-900/20">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        initialFocus
                        className="rounded-lg"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-3">
                  <Label className="text-ui-sm font-semibold text-neutral-900 font-body flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-neutral-900" />
                    <span>Heure *</span>
                  </Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="h-12 border-2 border-neutral-900/20 hover:border-neutral-900/40 transition-all duration-300 text-ui-sm bg-white/70 backdrop-blur-sm rounded-lg">
                      <SelectValue placeholder="Choisissez un créneau" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-neutral-900/20">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="py-3 hover:bg-laboratory-50 cursor-pointer">
                          <span className="font-medium text-ui-sm font-body text-neutral-900">{time}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Informations Client */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="w-5 h-5 text-neutral-900" />
                  <h3 className="text-base font-display font-semibold text-neutral-900">
                    Vos informations
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-ui-sm font-semibold text-neutral-900 font-body">
                      Prénom *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Votre prénom"
                      className="w-full h-12 border-2 border-neutral-900/20 hover:border-neutral-900/40 focus:border-neutral-900 transition-all duration-300 text-ui-sm bg-white/70 backdrop-blur-sm rounded-lg font-body"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-ui-sm font-semibold text-neutral-900 font-body">
                      Nom *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Votre nom"
                      className="w-full h-12 border-2 border-neutral-900/20 hover:border-neutral-900/40 focus:border-neutral-900 transition-all duration-300 text-ui-sm bg-white/70 backdrop-blur-sm rounded-lg font-body"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-ui-sm font-semibold text-neutral-900 font-body flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-neutral-900" />
                      <span>Email *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="email@exemple.com"
                      className="w-full h-12 border-2 border-neutral-900/20 hover:border-neutral-900/40 focus:border-neutral-900 transition-all duration-300 text-ui-sm bg-white/70 backdrop-blur-sm rounded-lg font-body"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-ui-sm font-semibold text-neutral-900 font-body flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-neutral-900" />
                      <span>Téléphone *</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="01 23 45 67 89"
                      className="w-full h-12 border-2 border-neutral-900/20 hover:border-neutral-900/40 focus:border-neutral-900 transition-all duration-300 text-ui-sm bg-white/70 backdrop-blur-sm rounded-lg font-body"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-ui-sm font-semibold text-neutral-900/70 font-body">
                    Message (optionnel)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Vos attentes particulières..."
                    className="w-full resize-none border-2 border-neutral-900/20 hover:border-neutral-900/40 focus:border-neutral-900 transition-all duration-300 min-h-24 text-ui-sm bg-white/70 backdrop-blur-sm rounded-lg font-body"
                    rows={4}
                  />
                  <p className="text-ui-xs text-neutral-900/60 font-body mt-2">
                    * Champs obligatoires
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="mt-12">
              <div className="divider-luxe mb-8"></div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="relative group px-[clamp(2rem,5vw,2.75rem)] py-[clamp(0.6rem,1.5vw,0.8rem)] text-ui-base font-medium transition-all duration-500 overflow-hidden bg-white/10 backdrop-blur-sm text-neutral-900 hover:bg-white/20 shadow-[0_8px_20px_rgba(71,85,105,0.3),0_4px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(71,85,105,0.4),0_6px_15px_rgba(0,0,0,0.2)] rounded-full hover:scale-105"
                >
                  <span className="relative z-10">
                    Confirmer ma réservation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </button>
              </div>

              <div className="text-center mt-8">
                <p className="text-ui-xs text-neutral-900/60 font-body">
                  Confirmation par notre équipe dans les <span className="text-neutral-900 font-semibold">24h</span>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;