import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_NUMBER } from "@/constant/contact";
import { useLanguage } from "@/context/LanguageContext";

const CTASection = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          title: "Take the First Step Toward a Better Tomorrow",
          description:
            "If you or someone you care about requires support, you do not need to face it alone; we are here to help you every step of the way at the best drug rehab center in patna. Connect with us today and take the first step towards a comfortable, healing, and fruitful journey.",
          primaryCta: "Contact Us Today",
          secondaryCta: "View Our Services",
          footerText:
            "The journey toward recovery and dignity starts with one small step.",
        }
      : {
          title: "एक बेहतर कल की ओर पहला कदम उठाएं",
          description:
            "यदि आपको या आपके किसी अपने को सहायता की आवश्यकता है, तो हम हर कदम पर आपके साथ हैं। आज ही हमसे जुड़ें और एक आरामदायक और बेहतर जीवन की यात्रा की शुरुआत करें।",
          primaryCta: "आज ही संपर्क करें",
          secondaryCta: "हमारी सेवाएं देखें",
          footerText:
            "सुधार और बेहतर जीवन की ओर यात्रा एक छोटे से कदम से शुरू होती है।",
        };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80">
            {content.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`tel:+${PHONE_NUMBER}`}>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-card text-foreground hover:bg-card/90"
              >
                <Phone className="h-4 w-4" /> {content.primaryCta}
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-foreground bg-foreground text-white hover:border-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {content.secondaryCta} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            {content.footerText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
