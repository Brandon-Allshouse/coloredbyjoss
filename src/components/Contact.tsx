import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import BookingDropdown from "@/components/BookingDropdown";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'd love to hear about your hair goals! Let's connect and discuss how we can create your perfect look.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-inter text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-inter text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-inter text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-inter text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter"
                  >
                    <option value="">Select a service</option>
                    <option value="color">Hair Color</option>
                    <option value="cut">Haircut</option>
                    <option value="styling">Hair Styling</option>
                    <option value="highlights">Highlights/Balayage</option>
                    <option value="treatment">Hair Treatment</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter resize-none"
                    placeholder="Tell me about your hair goals and any specific requests..."
                  />
                </div>

                <Button 
                  type="submit"
                  variant="elegant" 
                  className="w-full font-inter py-3"
                >
                  Send Message
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="font-inter text-sm text-muted-foreground mb-4">
                  Ready to book? Choose your service:
                </p>
                <BookingDropdown />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-scale">
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="font-inter text-muted-foreground">
                      (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="font-inter text-muted-foreground">
                      hello@coloredbyjoss.com
                    </span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="font-inter text-muted-foreground">
                      New Castle, PA Area<br />
                      (Exact location provided upon booking)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media & Note */}
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  Follow My Journey
                </h3>
                <div className="flex space-x-4 mb-4">
                  <a 
                    href="https://www.instagram.com/coloredbyjoss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-lg text-white hover:shadow-elegant transform hover:scale-110 transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61574176291851"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-lg text-white hover:shadow-elegant transform hover:scale-110 transition-all duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
                <p className="font-inter text-sm text-muted-foreground mb-4">
                  Follow my learning journey and see my latest practice work!
                </p>
                <div className="bg-accent/20 p-4 rounded-lg">
                  <p className="font-inter text-sm text-foreground font-medium">
                    🎓 Student Stylist Notice
                  </p>
                  <p className="font-inter text-xs text-muted-foreground mt-1">
                    I'm currently completing my education at Laurel Technical Institute. All services are performed under supervision as part of my training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;