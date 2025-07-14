import { Scissors, Heart, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Scissors,
      title: "Learning & Growing",
      description: "Currently mastering precision cuts and styling techniques at Laurel Technical Institute"
    },
    {
      icon: Heart,
      title: "Color Passion",
      description: "Studying advanced color theory and techniques to create stunning transformations"
    },
    {
      icon: Award,
      title: "December Graduate",
      description: "Graduating from Laurel Technical Institute in December 2025, ready to start my professional journey"
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Growing up in New Castle, PA taught me to value genuine connections and personalized care"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Jossalyn
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A 20-year-old aspiring hair stylist from New Castle, PA, currently pursuing her passion at Laurel Technical Institute with graduation set for December 2024.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Growing Into My Dream Career
              </h3>
              <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                <p>
                  At 20 years old, I'm living my dream by pursuing my passion for hair artistry at Laurel Technical Institute here in New Castle, PA. Every day brings new learning opportunities as I master the techniques that will help me transform lives through beautiful hair.
                </p>
                <p>
                  What started as a love for experimenting with different styles has grown into a deep commitment to excellence in hair design. I'm dedicated to learning everything from classic cutting techniques to the latest color trends, ensuring that when I graduate this December, I'll be ready to help every client feel their absolute best.
                </p>
                <p>
                  My approach combines the technical skills I'm learning at school with an artistic eye and genuine care for each person I work with. I believe that great hair isn't just about the style—it's about creating confidence and helping people express their unique personality.
                </p>
                <p>
                  Growing up in the New Castle area has taught me the value of building real relationships with people, and I bring that same warmth and personal attention to every styling session.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-scale">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-soft transition-all duration-300 transform hover:translate-y-[-4px]"
                >
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-inter font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats or Call to Action */}
          <div className="text-center bg-card p-8 rounded-xl shadow-card animate-fade-in">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Ready to Start This Journey Together?
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              I'm excited to work with you and help create a look that makes you feel amazing. Let's chat about your hair goals!
            </p>
            <a 
              href="#contact"
              className="inline-block bg-gradient-hero text-white px-8 py-3 rounded-lg font-inter font-medium hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;