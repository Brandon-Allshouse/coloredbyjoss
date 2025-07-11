import { useState } from "react";
import { ChevronDown, Calendar, Scissors, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      icon: Scissors,
      name: "Haircut & Style",
      description: "Precision cuts and styling",
      duration: "60-90 mins"
    },
    {
      icon: Palette,
      name: "Hair Color",
      description: "Color consultation and application",
      duration: "2-3 hours"
    },
    {
      icon: Sparkles,
      name: "Highlights/Balayage",
      description: "Dimensional color techniques",
      duration: "2-4 hours"
    },
    {
      icon: Calendar,
      name: "Consultation",
      description: "Discuss your hair goals",
      duration: "30 mins"
    }
  ];

  const handleServiceSelect = (serviceName: string) => {
    // In a real app, this would integrate with a booking system
    alert(`Booking request for ${serviceName}. I'll contact you soon to schedule!`);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <Button
        variant="elegant"
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="font-inter flex items-center gap-2"
      >
        Book Appointment
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 mt-2 w-80 bg-card rounded-xl shadow-elegant border border-border z-50 overflow-hidden animate-fade-in-scale">
            <div className="p-4 bg-gradient-hero text-white">
              <h3 className="font-playfair text-lg font-semibold">Select a Service</h3>
              <p className="text-white/80 text-sm">Choose what you'd like to book</p>
            </div>
            
            <div className="p-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceSelect(service.name)}
                  className="w-full p-4 text-left hover:bg-accent/50 rounded-lg transition-colors duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {service.description}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {service.duration}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="p-4 bg-muted/30 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                📧 I'll reach out to confirm your appointment details
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingDropdown;