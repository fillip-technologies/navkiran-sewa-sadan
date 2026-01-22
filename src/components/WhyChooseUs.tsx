import { Heart, Shield, Clock, Award, Users, Leaf } from "lucide-react";
import { Badge } from "./ui/badge";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Heart,
      title: "NGO-Based Service",
      description: "Non-profit approach ensuring genuine care without commercial motives.",
    },
    {
      icon: Shield,
      title: "Safe & Respectful",
      description: "Protected environment where dignity and privacy are paramount.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock care and assistance whenever needed.",
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Dedicated professionals with years of compassionate service.",
    },
    {
      icon: Users,
      title: "Family Involvement",
      description: "We encourage family participation in the healing journey.",
    },
    {
      icon: Leaf,
      title: "Long-term Wellbeing",
      description: "Focus on sustainable recovery and lasting positive change.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span> */}
          <Badge className="text-sm">Why Choose Us</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-muted-foreground">
            Our commitment goes beyond basic care. We create an ecosystem of 
            support that nurtures healing and empowers transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
