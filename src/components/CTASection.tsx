import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_NUMBER } from "@/constant/contact";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Whether you're seeking help for yourself or a loved one, we're here
            to support you. Reach out to learn more about our services or to
            begin your journey toward healing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:+${PHONE_NUMBER}`}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-card text-foreground hover:bg-card/90 gap-2"
              >
                <Phone className="w-4 h-4" /> Contact Us Today
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground hover:border-primary-foreground bg-foreground text-white hover:bg-primary-foreground hover:text-foreground gap-2"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Our Services <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            Your journey to recovery and dignity starts with a single step. Let
            us walk beside you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
