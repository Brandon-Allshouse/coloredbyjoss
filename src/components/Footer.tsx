import { Instagram, Facebook, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary-glow mb-4">
              ColoredByJoss
            </h3>
            <p className="font-inter text-background/80 leading-relaxed">
              Professional hair styling and color artistry, creating beautiful transformations that make you feel confident and radiant.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold text-background mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="#home" className="block font-inter text-background/80 hover:text-primary-glow transition-colors">
                Home
              </a>
              <a href="#about" className="block font-inter text-background/80 hover:text-primary-glow transition-colors">
                About
              </a>
              <a href="#portfolio" className="block font-inter text-background/80 hover:text-primary-glow transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="block font-inter text-background/80 hover:text-primary-glow transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-inter font-semibold text-background mb-4">
              Connect With Me
            </h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/coloredbyjoss/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-background/10 rounded-lg text-background hover:bg-primary-glow hover:text-foreground transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61574176291851"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-background/10 rounded-lg text-background hover:bg-primary-glow hover:text-foreground transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
            <p className="font-inter text-sm text-background/80">
              Follow for daily inspiration and hair transformations
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-sm text-background/60 mb-4 md:mb-0">
            © 2025 ColoredByJoss. All rights reserved.
          </p>
          <div className="flex items-center text-background/60 font-inter text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-primary-glow" />
            <span>for beautiful hair</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;