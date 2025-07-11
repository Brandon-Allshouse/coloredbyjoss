import { Award, GraduationCap, FileText } from "lucide-react";
import certificate1 from "@/assets/certificate-1.jpg";
import certificate2 from "@/assets/certificate-2.jpg";
import certificate3 from "@/assets/certificate-3.jpg";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      image: certificate1,
      title: "Hair Styling Program",
      institution: "Laurel Technical Institute",
      year: "In Progress - Graduating December 2024"
    },
    {
      id: 2,
      image: certificate2,
      title: "Color Theory & Application",
      institution: "Laurel Technical Institute",
      year: "Currently Studying"
    },
    {
      id: 3,
      image: certificate3,
      title: "Professional Techniques Course",
      institution: "Laurel Technical Institute", 
      year: "Advanced Studies 2024"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-primary mr-3" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Education & Training
            </h2>
          </div>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Currently pursuing my passion for hair artistry at Laurel Technical Institute, mastering the skills to become a professional stylist.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 transform hover:translate-y-[-4px] animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="font-inter text-primary font-medium mb-1">
                  {cert.institution}
                </p>
                <p className="font-inter text-sm text-muted-foreground">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Development Statement */}
        <div className="text-center bg-gradient-card p-8 rounded-xl shadow-soft max-w-3xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-primary mr-2" />
            <h3 className="font-playfair text-2xl font-semibold text-foreground">
              Passionate About Learning
            </h3>
          </div>
          <p className="font-inter text-muted-foreground leading-relaxed">
            As a dedicated student at Laurel Technical Institute, I'm constantly learning new techniques and staying 
            current with industry trends. My education is preparing me to provide exceptional service and create 
            beautiful results for every client when I graduate this December.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;