import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Compassionate care and support at Navkiran Sewa Sadan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Non-Profit Organization
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Restoring Hope, <span className="text-gradient">Healing Lives</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-delay-1">
            Navkiran Sewa Sadan is dedicated to supporting individuals through
            compassionate care, rehabilitation, and dignity. Together, we help
            rebuild lives and restore hope.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-delay-2">
            {/* <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 gap-2"
              asChild
            >
              <Link to="#services">
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button> */}

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 gap-2"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Services <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-card/50 backdrop-blur-sm"
              asChild
            >
              <Link to="/about">Know More About Us</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl">
          {[
            { number: "500+", label: "Lives Touched" },
            { number: "10+", label: "Years of Service" },
            { number: "24/7", label: "Care & Support" },
            { number: "100%", label: "Compassion Driven" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border"
            >
              <p className="font-serif text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
