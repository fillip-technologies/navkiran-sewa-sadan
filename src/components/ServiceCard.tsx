import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  features: string[];
}

const ServiceCard = ({ title, description, icon: Icon, link, features }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-8 card-elevated border border-border">
      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to={link}
        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
