import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_NUMBER } from "@/constant/contact";
import { useLanguage } from "@/context/LanguageContext";

const CTASection = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          title: "Ready to Take the First Step?",
          description:
            "Whether you are looking for help for yourself or a loved one, we are here to support you. Reach out to learn more or begin your journey toward healing.",
          primaryCta: "Contact Us Today",
          secondaryCta: "View Our Services",
          footerText:
            "Your journey to recovery and dignity starts with one step. Let us walk beside you.",
        }
      : {
          title: "पहला कदम उठाने के लिए तैयार हैं?",
          description:
            "चाहे आपको अपने लिए मदद चाहिए या किसी अपने के लिए, हम आपके साथ हैं। हमारी सेवाओं के बारे में जानने या सुधार की शुरुआत करने के लिए संपर्क करें।",
          primaryCta: "आज ही संपर्क करें",
          secondaryCta: "हमारी सेवाएं देखें",
          footerText:
            "सुधार और सम्मान की राह एक कदम से शुरू होती है। हम आपके साथ चलने के लिए तैयार हैं।",
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
