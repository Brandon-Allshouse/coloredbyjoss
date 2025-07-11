import { Button } from "@/components/ui/button";
import BookingDropdown from "@/components/BookingDropdown";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-glow/10 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Jossalyn
            <span className="block text-primary">Capezio</span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Hair Styling Student & Aspiring Color Specialist
          </p>
          
          <p className="font-inter text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Currently perfecting my craft at Laurel Technical Institute. Graduating December 2024 and passionate about creating beautiful transformations that make you feel confident and radiant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="font-inter"
            >
              View My Work
            </Button>
            <BookingDropdown />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-full h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;