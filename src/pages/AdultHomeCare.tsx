import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  Car,
  CheckCircle,
  Clock,
  Heart,
  Home,
  Phone,
  Shield,
  Smile,
  Stethoscope,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import FacilityGallery from "@/components/FacilityGallery";
import adultCareImage from "@/assets/adult-care.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryCounseling from "@/assets/gallery-counseling.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryRecreation from "@/assets/gallery-recreation.jpg";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import Seo from "@/components/Seo";
import { seoData } from "@/constants/seo";

const AdultHomeCare = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
        hero: {
          imageAlt: "Old age home care services",
          badge: "Care & Assistance",
          title: "Elderly Care Service",
          description:
            "Every day here feels like home, built around people who deserve gentle support. Comfort comes first - so does respect, staying safe, and feeling empowered. With a well-structured old age home in Patna, care shows up quietly, exactly when needed.",
          primaryCta: "Inquire About Care",
          secondaryCta: "Learn About Our Care Services",
        },
        services: {
          badge: "Our Care Services",
          title: "Comprehensive Care with Dignity",
          description:
            "Providing holistic support that addresses both physical and emotional needs while preserving the honour and individuality of every person.",
          items: [
            {
              title: "24/7 Personalized Care",
              description:
                "Round-the-clock personalized services from trained caregivers, who prioritize individual needs and comfort.",
            },
            {
              title: "Secure Living Space",
              description:
                "A warm, secure, and comfortable environment where individuals can live with ease, peace, and confidence.",
            },
            {
              title: "Medical Support & Assistance",
              description:
                "Regular health check-ups, medication management, and coordination with trained professionals to ensure overall well-being.",
            },
            {
              title: "Holistic Emotional Care",
              description:
                "Through thoughtful companionship and emphatic interaction, helping individuals feel supported, respected, and emotionally strong.",
            },
            {
              title: "Nutritious Meals",
              description:
                "Fresh and well-balanced meals tailored to individual needs and personal preferences.",
            },
            {
              title: "Activities and Companionship",
              description:
                "Meaningful activities and social interaction for uplifting mood and promoting overall happiness.",
            },
          ],
        },
        whoWeServe: {
          badge: "Who We Serve",
          title: "Compassionate Care for Those Who Need It Most",
          description:
            "Within our Vridh Ashram in Patna, care services are provided to people who need daily support but deserve dignity and a good life.",
          items: [
            "Elderly people who need daily assistance",
            "Adults with physical problems",
            "Person recovering from illness or surgery",
            "Those who need companionship and social support",
            "People with memory or cognitive challenges who need supervision",
          ],
          imageAlt: "Residents enjoying recreation activities",
          cardTitle: "A Home Away",
          cardSubtitle: "From Home",
        },
        gallery: {
          title: "Our Care Home Facilities",
          subtitle:
            "Explore our comfortable environment designed with safety, respect, and happiness in mind.",
          images: [
            {
              alt: "Compassionate care for adults",
              title: "Personalized Care",
            },
            {
              alt: "Comfortable bedroom",
              title: "Private Rooms",
            },
            {
              alt: "Dining area",
              title: "Community Dining",
            },
            {
              alt: "Recreation room",
              title: "Recreation Activities",
            },
            {
              alt: "Outdoor garden",
              title: "Garden & Outdoor Space",
            },
            {
              alt: "Healthcare consultation",
              title: "Medical Support",
            },
          ],
        },
        commitment: {
          title: "Our Commitment to Your Loved Ones",
          items: [
            {
              title: "Respect",
              description: "Respecting the identity and choices of every individual",
            },
            {
              title: "Security",
              description: "Safe environment with proper supervision",
            },
            {
              title: "Sympathy",
              description: "Care given with love and understanding",
            },
          ],
        },
        cta: {
          title: "Give Your Loved Ones the Care They Deserve",
          description:
            "Contact us to learn more about our old age home care services and how we can support your family.",
          primaryCta: "Contact Us",
          secondaryCta: "View Other Services",
        },
      }
      : {
        hero: {
          imageAlt: "बुजुर्ग देखभाल सेवा",
          badge: "देखभाल और सहायता",
          title: "बुजुर्ग देखभाल सेवा",
          description:
            "यहाँ हर दिन घर जैसा सुकून देता है, उन लोगों के लिए, जो स्नेहपूर्ण सहारे के हकदार हैं। हम आराम, सम्मान, सुरक्षा और आत्मविश्वास को प्राथमिकता देते हैं। पटना स्थित हमारे सुव्यवस्थित वृद्धाश्रम और पटना नशा इलाज केंद्र में देखभाल सहज रूप से, सही समय पर उपलब्ध होती है।",
          primaryCta: "देखभाल के लिए पूछताछ करें",
          secondaryCta: "हमारी देखभाल सेवाएं जानें",
        },
        services: {
          badge: "हमारी देखभाल सेवाएं",
          title: "गरिमा के साथ सम्पूर्ण देखभाल",
          description:
            "हम शारीरिक और भावनात्मक दोनों जरूरतों को ध्यान में रखते हुए ऐसी देखभाल प्रदान करते हैं, जो हर व्यक्ति की सम्मान और पहचान को बनाए रखे। इसलिए हम पटना में एडिक्शन काउंसलिंग के अलावा सर्वोपरि बुजुर्ग देखभाल सेवा प्रदाता के रूप में जाने जाते हैं।",
          items: [
            {
              title: "24/7 व्यक्तिगत देखभाल",
              description:
                "प्रशिक्षित देखभालकर्ताओं द्वारा हर समय उपलब्ध व्यक्तिगत सेवाएं, जो प्रत्येक व्यक्ति की जरूरत और आराम को प्राथमिकता देती हैं।",
            },
            {
              title: "सुरक्षित रहने का स्थान",
              description:
                "एक स्नेहपूर्ण, सुरक्षित और आरामदायक वातावरण, जहाँ व्यक्ति शांति, सहजता और आत्मविश्वास के साथ रह सके।",
            },
            {
              title: "चिकित्सीय सहयोग और सहायता",
              description:
                "नियमित स्वास्थ्य जांच, दवाओं का प्रबंधन और प्रशिक्षित विशेषज्ञों के साथ समन्वय, ताकि संपूर्ण स्वास्थ्य का ध्यान रखा जा सके।",
            },
            {
              title: "समग्र भावनात्मक देखभाल",
              description:
                "स्नेहपूर्ण साथ और संवेदनशील बातचीत के माध्यम से, हम हर व्यक्ति को समर्थ, सम्मानित और भावनात्मक रूप से मजबूत महसूस कराने में मदद करते हैं।",
            },
            {
              title: "पौष्टिक आहार",
              description:
                "ताजा और संतुलित भोजन, जो व्यक्तिगत जरूरतों और पसंद के अनुसार तैयार किया जाता है।",
            },
            {
              title: "गतिविधियाँ और साथ",
              description:
                "अर्थपूर्ण गतिविधियाँ और सामाजिक जुड़ाव, जो मन को प्रसन्न रखते हैं और जीवन में खुशी बढ़ाते हैं।",
            },
          ],
        },
        whoWeServe: {
          badge: "हम किनकी सेवा करते हैं",
          title: "उनके लिए समर्पित देखभाल, जिन्हें इसकी सबसे ज्यादा जरूरत है",
          description:
            "पटना स्थित हमारे वृद्धाश्रम में हम उन लोगों को सेवाएं प्रदान करते हैं, जिन्हें दैनिक सहायता की आवश्यकता है, लेकिन जो सम्मान और बेहतर जीवन के हकदार हैं।",
          items: [
            "दैनिक सहायता की जरूरत वाले बुजुर्ग",
            "शारीरिक समस्याओं से जूझ रहे वयस्क",
            "बीमारी या सर्जरी से उबर रहे व्यक्ति",
            "जिन्हें साथ और सामाजिक सहयोग की आवश्यकता है",
            "याददाश्त या मानसिक चुनौतियों वाले व्यक्ति, जिन्हें निगरानी की जरूरत है",
          ],
          imageAlt: "मनोरंजन गतिविधियों में शामिल निवासी",
          cardTitle: "घर जैसा",
          cardSubtitle: "अपनापन",
        },
        gallery: {
          title: "हमारी देखभाल सुविधाएं",
          subtitle:
            "सुरक्षा, सम्मान और खुशी को ध्यान में रखकर बनाए गए हमारे आरामदायक वातावरण का अनुभव करें।",
          images: [
            {
              alt: "व्यक्तिगत देखभाल",
              title: "व्यक्तिगत देखभाल",
            },
            {
              alt: "आरामदायक कमरा",
              title: "निजी कमरे",
            },
            {
              alt: "भोजन कक्ष",
              title: "सामूहिक भोजन",
            },
            {
              alt: "मनोरंजन कक्ष",
              title: "मनोरंजन गतिविधियाँ",
            },
            {
              alt: "खुला बगीचा",
              title: "बगीचा और खुला स्थान",
            },
            {
              alt: "स्वास्थ्य परामर्श",
              title: "चिकित्सीय सहायता",
            },
          ],
        },
        commitment: {
          title: "आपके अपनों के लिए हमारी जिम्मेदारी",
          items: [
            {
              title: "सम्मान",
              description:
                "हम हर व्यक्ति की पहचान और पसंद का पूरा आदर करते हैं।",
            },
            {
              title: "सुरक्षा",
              description:
                "उचित निगरानी के साथ एक सुरक्षित और संरक्षित वातावरण प्रदान करते हैं।",
            },
            {
              title: "सहानुभूति",
              description:
                "हम प्रेम, समझ और संवेदनशीलता के साथ देखभाल प्रदान करते हैं।",
            },
          ],
        },
        cta: {
          title: "अपने अपनों को वह देखभाल दें जिसके वे हकदार हैं",
          description:
            "हमारी बुजुर्ग देखभाल सेवाओं के बारे में जानने और अपने परिवार के लिए सही सहारा पाने के लिए संपर्क करें।",
          primaryCta: "संपर्क करें",
          secondaryCta: "अन्य सेवाएं देखें",
        },
      };

  const services = [
    { icon: Clock, ...content.services.items[0] },
    { icon: Shield, ...content.services.items[1] },
    { icon: Stethoscope, ...content.services.items[2] },
    { icon: Heart, ...content.services.items[3] },
    { icon: Utensils, ...content.services.items[4] },
    { icon: Activity, ...content.services.items[5] },
    {
      icon: Car,
      title:
        language === "en" ? "Patients Pickup Facility" : "मरीज पिकअप सुविधा",
      description:
        language === "en"
          ? "Safe and reliable transportation for patients across districts, making the admission process smooth, easy, and worry-free."
          : "जिले और आसपास के क्षेत्रों से सुरक्षित और भरोसेमंद परिवहन सुविधा, जिससे प्रवेश प्रक्रिया आसान, सहज और चिंता-मुक्त हो जाती है।",
    },
  ];

  const galleryImages = [
    { src: adultCareImage, ...content.gallery.images[0] },
    { src: galleryBedroom, ...content.gallery.images[1] },
    { src: galleryDining, ...content.gallery.images[2] },
    { src: galleryRecreation, ...content.gallery.images[3] },
    { src: galleryOutdoor, ...content.gallery.images[4] },
    { src: galleryCounseling, ...content.gallery.images[5] },
  ];

  const goldenTheme = {
    "--background": "42 60% 95%",
    "--foreground": "35 45% 18%",
    "--card": "0 0% 100%",
    "--card-foreground": "35 45% 18%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "35 45% 18%",
    "--primary": "42 85% 45%", // main gold
    "--primary-foreground": "0 0% 100%",
    "--secondary": "40 75% 65%", // soft gold
    "--secondary-foreground": "35 45% 18%",
    "--muted": "42 45% 90%",
    "--muted-foreground": "35 25% 40%",
    "--accent": "42 70% 85%",
    "--accent-foreground": "38 80% 30%",
    "--border": "42 35% 80%",
    "--input": "42 35% 80%",
    "--ring": "42 85% 45%",
    "--hero-gradient":
      "linear-gradient(135deg, rgba(200, 146, 14, 0.95) 0%, rgba(212, 160, 23, 0.85) 40%, rgba(232, 201, 122, 0.70) 65%)",
    "--card-shadow": "0 18px 60px -30px rgba(212, 160, 23, 0.35)",
    "--card-shadow-hover": "0 28px 80px -34px rgba(200, 146, 14, 0.48)",
    "--text-gradient":
      "linear-gradient(135deg, #C8920E 0%, #D4A017 55%, #E8C97A 100%)",
  } as CSSProperties;

  return (
    <Layout>
      <Seo {...seoData.adultHomeCare} />
      <div
        className="overflow-hidden bg-background text-foreground"
        style={goldenTheme}
      >
        <section className="relative flex min-h-screen items-center overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0">
            <img
              src={adultCareImage}
              alt={content.hero.imageAlt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 backdrop-blur-sm">
                <Home className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {content.hero.badge}
                </span>
              </div>
              <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
                {content.hero.title}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {content.hero.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link to="/contact">
                    <Phone className="h-4 w-4" /> {content.hero.primaryCta}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary bg-card/50 text-primary backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                  onClick={() => {
                    document
                      .getElementById("ourcareservices")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {content.hero.secondaryCta}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-20 md:py-28" id="ourcareservices">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <Badge className="text-sm">{content.services.badge}</Badge>
              <h2 className="mt-2 mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                {content.services.title}
              </h2>
              <p className="text-muted-foreground">
                {content.services.description}
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="card-elevated rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-x-hidden py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img
                    src={galleryRecreation}
                    alt={content.whoWeServe.imageAlt}
                    className="w-full rounded-2xl shadow-xl"
                  />
                  <div className="absolute -right-6 -bottom-6 rounded-xl border border-border bg-card p-6 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                        <Smile className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-serif text-lg font-bold text-foreground">
                          {content.whoWeServe.cardTitle}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {content.whoWeServe.cardSubtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <Badge className="text-sm">{content.whoWeServe.badge}</Badge>
                <h2 className="mt-2 mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  {content.whoWeServe.title}
                </h2>
                <p className="mb-8 text-muted-foreground">
                  {content.whoWeServe.description}
                </p>

                <ul className="space-y-4">
                  {content.whoWeServe.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FacilityGallery
          images={galleryImages}
          title={content.gallery.title}
          subtitle={content.gallery.subtitle}
        />

        <section className="bg-accent/30 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
                {content.commitment.title}
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {content.commitment.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <h3 className="mb-2 font-serif text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                {content.cta.title}
              </h2>
              <p className="mb-8 text-primary-foreground/80">
                {content.cta.description}
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 bg-card text-foreground hover:bg-card/90"
                  asChild
                >
                  <Link to="/contact">
                    <Phone className="h-4 w-4" /> {content.cta.primaryCta}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-foreground bg-foreground text-white hover:border-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                  asChild
                >
                  <Link to="/nasha-mukti-kendra">
                    {content.cta.secondaryCta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AdultHomeCare;
