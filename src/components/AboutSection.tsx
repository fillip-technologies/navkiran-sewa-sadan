import { Heart, Shield, Users, Sparkles } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "Every individual deserves care, respect, and understanding in their journey.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description:
        "We provide secure, supportive spaces for healing and recovery.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building connections that foster belonging and mutual support.",
    },
    {
      icon: Sparkles,
      title: "Dignity",
      description:
        "Treating every person with honor and preserving their self-worth.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="px-2">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              A Commitment to Care and Recovery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Navkiran Sewa Sadan is a non-profit organization committed to
              supporting individuals in their journey toward recovery, dignity,
              and a better quality of life. Founded on principles of compassion
              and social responsibility, we provide comprehensive care services
              that address both physical and emotional well-being.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our dedicated team works tirelessly to create an environment where
              individuals feel safe, respected, and empowered to rebuild their
              lives. We believe that with the right support, everyone can
              overcome challenges and rediscover hope.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {value.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          {/* Right Section – Mission & Impact */}
          <div className="relative">
            <div className="rounded-3xl border bg-background p-8 shadow-sm">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Purpose
              </span>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-2 mb-4">
                Driven by Compassion, Guided by Care
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-8">
                We focus on long-term healing by combining medical support,
                emotional care, and community integration—helping individuals
                rebuild their lives with dignity.
              </p>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">
                    Lives Supported
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">
                    Years of Service
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">
                    Care & Support
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Compassion</p>
                </div>
              </div>
            </div>

            {/* Soft background accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/10 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
