import { HeartHandshake, Home } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Badge } from "./ui/badge";

const ServicesSection = () => {
  const services = [
    {
      title: "Nasha Mukti Kendra",
      description:
        "Our de-addiction and rehabilitation center provides comprehensive support for individuals seeking freedom from substance dependency. We offer a safe, non-judgmental environment focused on recovery and reintegration.",
      icon: HeartHandshake,
      link: "/nasha-mukti-kendra",
      features: [
        "Professional counseling",
        "Structured rehabilitation program",
        "Family support sessions",
        "Aftercare planning",
      ],
    },
    {
      title: "Adult Home Care",
      description:
        "Our adult care services provide a safe, supportive living environment for individuals who need assistance with daily activities. We focus on maintaining dignity, comfort, and quality of life.",
      icon: Home,
      link: "/adult-home-care",
      features: [
        "24/7 personalized care",
        "Safe living environment",
        "Medical assistance",
        "Emotional support",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span> */}
          <Badge className="text-sm">Our Services</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            How We Help
          </h2>
          <p className="text-muted-foreground">
            We offer specialized services designed to support individuals
            through their most challenging times, providing care that respects
            dignity and promotes healing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
