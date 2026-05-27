import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/navkiran-6.jpeg";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          imageAlt: "Compassionate care and support at Navkiran Seva Sadan",
          badge: "Non-Profit Organization",
          title: "A New Beginning ",
          highlight: "Towards A Better Life",
          description:
            "Navkiran Seva Sadan helps individuals overcome addiction and provide compassionate care for the elderly, as everyone deserves proper care, dignity, and a second chance in life.",
          primaryCta: "Explore Our Services",
          secondaryCta: "Know More About Us",
          stats: [
            { number: "500+", label: "Lives Touched" },
            { number: "10+", label: "Years of Service" },
            { number: "24/7", label: "Care & Support" },
            { number: "100%", label: "Compassion Driven" },
          ],
        }
      : {
          imageAlt: "नवकिरण सेवा सदन में देखभाल और सहारा",
          badge: "सेवा संस्था",
          title: "एक नई शुरुआत ",
          highlight: "बेहतर जीवन कि ओर",
          description:
            "नवकिरण सेवा सदन लोगों को नशे की लत से बाहर निकलने में मदद करता है और बुजुर्गो के लिए करुणामई सेवा प्रदान करता है l क्यूंकि हर व्यक्ति सही देखवाल, सम्मान, और जीवन में एक नई शुरुआत का अधिकार रखता है |",
          primaryCta: "हमारी सेवाएं देखें",
          secondaryCta: "हमारे बारे में जानें",
          stats: [
            { number: "500+", label: "जीवनों को नया सहारा" },
            { number: "10+", label: "सेवा के वर्ष" },
            { number: "24/7", label: "देखभाल और सहायता" },
            { number: "100%", label: "करुणा के साथ सेवा" },
          ],
        };

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={content.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              {content.badge}
            </span>
          </div>

          <h1 className="mb-6 font-serif text-4xl font-bold text-foreground animate-fade-in-up md:text-5xl lg:text-6xl">
            {content.title}
            <span className="text-gradient">{content.highlight}</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground animate-fade-in-delay-1 md:text-xl">
            {content.description}
          </p>

          <div className="flex flex-col items-start gap-4 animate-fade-in-delay-2 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {content.primaryCta} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary bg-card/50 text-primary backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/about">{content.secondaryCta}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card/80 p-4 text-center backdrop-blur-sm md:p-6"
            >
              <p className="mb-1 font-serif text-2xl font-bold text-primary md:text-3xl">
                {stat.number}
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">
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
