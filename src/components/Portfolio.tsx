import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: portfolio1,
      title: "Blonde Balayage Transformation",
      description: "Natural sun-kissed highlights with seamless color blending for a fresh, dimensional look"
    },
    {
      id: 2,
      image: portfolio2,
      title: "Rich Brunette Color",
      description: "Deep chocolate tones with subtle lowlights for added depth and richness"
    },
    {
      id: 3,
      image: portfolio3,
      title: "Elegant Bridal Updo",
      description: "Sophisticated styling perfect for special occasions and formal events"
    },
    {
      id: 4,
      image: portfolio1,
      title: "Color Correction Magic",
      description: "Expert color repair and restoration bringing damaged hair back to life"
    },
    {
      id: 5,
      image: portfolio2,
      title: "Modern Precision Cut",
      description: "Contemporary layered cut with perfect shape and movement"
    },
    {
      id: 6,
      image: portfolio3,
      title: "Romantic Wedding Hair",
      description: "Timeless bridal styling designed to make your special day unforgettable"
    },
    {
      id: 7,
      image: portfolio1,
      title: "Lived-in Blonde",
      description: "Effortless blonde highlights that grow out beautifully with low maintenance"
    },
    {
      id: 8,
      image: portfolio2,
      title: "Face-Framing Layers",
      description: "Strategic layers and highlights to enhance facial features"
    },
    {
      id: 9,
      image: portfolio3,
      title: "Special Event Styling",
      description: "Glamorous updos and styling for parties, proms, and celebrations"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Portfolio
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the artistry behind each transformation. Every style tells a unique story of beauty and confidence.
          </p>
        </div>

        {/* Portfolio Grid - Better viewing with larger images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image - Larger and more prominent */}
              <div className="relative overflow-hidden h-80">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content - Cleaner design */}
              <div className="p-6 bg-card">
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-card p-8 rounded-xl shadow-soft max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Love What You See?
            </h3>
            <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
              Ready to start your own hair transformation journey? Let's create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.instagram.com/coloredbyjoss/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-hero text-white px-6 py-3 rounded-lg font-inter font-medium hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
              >
                Follow on Instagram
              </a>
              <a 
                href="#contact"
                className="inline-block border border-primary text-primary px-6 py-3 rounded-lg font-inter font-medium hover:bg-primary hover:text-white transition-all duration-300"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;