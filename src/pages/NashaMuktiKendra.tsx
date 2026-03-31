import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  Brain,
  Car,
  CheckCircle,
  Clock,
  HeartHandshake,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import FacilityGallery from "@/components/FacilityGallery";
import rehabCenterImage from "@/assets/rehab-center.jpg";
import galleryCounseling from "@/assets/gallery-counseling.jpg";
import galleryGroupTherapy from "@/assets/gallery-group-therapy.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryExercise from "@/assets/gallery-exercise.jpg";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

const NashaMuktiKendra = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          hero: {
            imageAlt: "Nasha Mukti Kendra rehabilitation center",
            badge: "De-Addiction & Rehabilitation",
            title: "Nasha Mukti Kendra",
            description:
              "Our de-addiction center provides a caring and judgment-free space where people can overcome substance dependency and rebuild life. With professional guidance and complete support, we help individuals regain hope and move forward with confidence.",
            primaryCta: "Get Help Now",
            secondaryCta: "Learn About Our Approach",
          },
          approach: {
            badge: "Our Approach",
            title: "Compassionate Care for Recovery",
            description:
              "We understand that addiction is complex. Our complete approach supports physical, emotional, and mental recovery together.",
            features: [
              {
                title: "Professional Counseling",
                description:
                  "One-to-one and group sessions with trained counselors to understand root causes and build healthy coping habits.",
              },
              {
                title: "Structured Rehabilitation",
                description:
                  "A disciplined daily program designed to rebuild routine, focus, and healthy habits.",
              },
              {
                title: "Family Support",
                description:
                  "We involve families through counseling and guidance during the recovery process.",
              },
              {
                title: "Safe Environment",
                description:
                  "A secure, substance-free setting where individuals can focus on recovery.",
              },
              {
                title: "24/7 Care",
                description:
                  "Our dedicated team is available at all hours so help is always close.",
              },
              {
                title: "Aftercare Planning",
                description:
                  "We prepare individuals for life after rehabilitation with continued support and follow-up care.",
              },
            ],
          },
          journey: {
            badge: "Recovery Journey",
            title: "Your Path to Freedom",
            description:
              "Recovery is a journey. Our structured program guides each person step by step with support that helps create lasting change.",
            steps: [
              "Initial assessment and personalized care planning",
              "Detox support in a safe and monitored setting",
              "Individual and group counseling sessions",
              "Life skills training and vocational guidance",
              "Physical wellness activities and recreation",
              "Family involvement and guidance programs",
              "Gradual reintegration with continued support",
            ],
            imageAlt: "Group therapy session at Nasha Mukti Kendra",
            messageTitle: "A Message of Hope",
            messageQuote:
              "\"Recovery is possible. You are not alone in this journey.\"",
            messageAuthor: "Navkiran Sewa Sadan Team",
          },
          gallery: {
            title: "Our Rehabilitation Facilities",
            subtitle:
              "Take a look at our calm and healing environment designed to support recovery.",
            images: [
              {
                alt: "Meditation and wellness room",
                title: "Meditation Room",
              },
              {
                alt: "Counseling session",
                title: "Counseling Sessions",
              },
              {
                alt: "Group therapy session",
                title: "Group Therapy",
              },
              {
                alt: "Outdoor garden area",
                title: "Garden & Outdoor Space",
              },
              {
                alt: "Exercise and fitness area",
                title: "Fitness Center",
              },
            ],
          },
          cta: {
            title: "Take the First Step Today",
            description:
              "Whether you are looking for help for yourself or a loved one, we are here with compassion and understanding.",
            primaryCta: "Contact Us",
            secondaryCta: "View Other Services",
          },
        }
      : {
          hero: {
            imageAlt: "नशा मुक्ति केंद्र",
            badge: "नशा मुक्ति और पुनर्वास",
            title: "नशा मुक्ति केंद्र",
            description:
              "हमारा नशा मुक्ति केंद्र ऐसा स्नेहपूर्ण और बिना निर्णय वाला माहौल देता है जहां लोग नशे की लत से बाहर आकर जीवन फिर से संभाल सकें। विशेषज्ञ मार्गदर्शन और पूरी देखभाल के साथ हम उम्मीद और आत्मविश्वास वापस लाने में मदद करते हैं।",
            primaryCta: "अभी मदद लें",
            secondaryCta: "हमारा तरीका जानें",
          },
          approach: {
            badge: "हमारा तरीका",
            title: "सुधार के लिए स्नेहपूर्ण देखभाल",
            description:
              "हम समझते हैं कि नशे की लत एक कठिन समस्या है। इसलिए हमारा तरीका शरीर, मन और भावनाओं तीनों को साथ लेकर चलता है।",
            features: [
              {
                title: "विशेषज्ञ काउंसलिंग",
                description:
                  "प्रशिक्षित काउंसलर के साथ व्यक्तिगत और समूह सत्र, ताकि कारण समझे जाएं और सही आदतें बनें।",
              },
              {
                title: "सही पुनर्वास कार्यक्रम",
                description:
                  "अनुशासन और नियमित दिनचर्या वाला कार्यक्रम जो जीवन को फिर से व्यवस्थित करने में मदद करे।",
              },
              {
                title: "परिवार का सहारा",
                description:
                  "हम काउंसलिंग और मार्गदर्शन के जरिए परिवार को भी सुधार की प्रक्रिया में शामिल करते हैं।",
              },
              {
                title: "सुरक्षित माहौल",
                description:
                  "नशामुक्त, सुरक्षित और शांत जगह जहां पूरा ध्यान सुधार पर रहे।",
              },
              {
                title: "24/7 देखभाल",
                description:
                  "हमारी टीम हर समय उपलब्ध रहती है ताकि जरूरत पड़ने पर तुरंत मदद मिल सके।",
              },
              {
                title: "आगे की योजना",
                description:
                  "पुनर्वास के बाद भी हम आगे की देखभाल और सहारे की तैयारी करते हैं।",
              },
            ],
          },
          journey: {
            badge: "सुधार की यात्रा",
            title: "नए जीवन की ओर आपका रास्ता",
            description:
              "सुधार एक सफर है। हमारा कार्यक्रम हर व्यक्ति को एक-एक कदम आगे बढ़ाता है ताकि बदलाव लंबे समय तक बना रहे।",
            steps: [
              "शुरुआती जांच और व्यक्तिगत देखभाल की योजना",
              "सुरक्षित निगरानी में डिटॉक्स सहायता",
              "व्यक्तिगत और समूह काउंसलिंग सत्र",
              "जीवन कौशल और काम से जुड़ी दिशा",
              "शारीरिक स्वास्थ्य गतिविधियां और मनोरंजन",
              "परिवार की भागीदारी और मार्गदर्शन",
              "लगातार सहारे के साथ धीरे-धीरे समाज में वापसी",
            ],
            imageAlt: "नशा मुक्ति केंद्र में समूह सत्र",
            messageTitle: "उम्मीद की बात",
            messageQuote: "\"सुधार संभव है। आप इस सफर में अकेले नहीं हैं।\"",
            messageAuthor: "नवकिरण सेवा सदन टीम",
          },
          gallery: {
            title: "हमारी पुनर्वास सुविधाएं",
            subtitle:
              "हमारे शांत और सुधार में मदद करने वाले माहौल की एक झलक देखें।",
            images: [
              {
                alt: "ध्यान और स्वास्थ्य कक्ष",
                title: "ध्यान कक्ष",
              },
              {
                alt: "काउंसलिंग सत्र",
                title: "काउंसलिंग सत्र",
              },
              {
                alt: "समूह सत्र",
                title: "समूह थेरेपी",
              },
              {
                alt: "बगीचा और खुला स्थान",
                title: "बगीचा और खुला स्थान",
              },
              {
                alt: "व्यायाम क्षेत्र",
                title: "फिटनेस कक्ष",
              },
            ],
          },
          cta: {
            title: "आज पहला कदम उठाएं",
            description:
              "चाहे आपको अपने लिए मदद चाहिए या किसी अपने के लिए, हम समझ और सहारे के साथ आपके साथ हैं।",
            primaryCta: "संपर्क करें",
            secondaryCta: "अन्य सेवाएं देखें",
          },
        };

  const features = [
    { icon: Brain, ...content.approach.features[0] },
    { icon: Activity, ...content.approach.features[1] },
    { icon: Users, ...content.approach.features[2] },
    { icon: Shield, ...content.approach.features[3] },
    { icon: Clock, ...content.approach.features[4] },
    { icon: HeartHandshake, ...content.approach.features[5] },
    {
      icon: Car,
      title:
        language === "en" ? "Patient Pickup Facility" : "रोगी पिकअप सुविधा",
      description:
        language === "en"
          ? "We provide patient pickup support both within the same district and from other districts to help families bring patients to our center safely."
          : "हम मरीजों को सुरक्षित रूप से केंद्र तक लाने के लिए उसी जिले के भीतर और दूसरे जिलों से भी पिकअप सुविधा प्रदान करते हैं।",
    },
  ];

  const galleryImages = [
    { src: rehabCenterImage, ...content.gallery.images[0] },
    { src: galleryCounseling, ...content.gallery.images[1] },
    { src: galleryGroupTherapy, ...content.gallery.images[2] },
    { src: galleryOutdoor, ...content.gallery.images[3] },
    { src: galleryExercise, ...content.gallery.images[4] },
  ];

  return (
    <Layout>
      <section className="relative flex min-h-screen items-center overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={rehabCenterImage}
            alt={content.hero.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/10" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 backdrop-blur-sm">
              <HeartHandshake className="h-4 w-4 text-primary" />
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
                    .getElementById("ournashapproach")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {content.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-28" id="ournashapproach">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge className="text-sm">{content.approach.badge}</Badge>
            <h2 className="mt-2 mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {content.approach.title}
            </h2>
            <p className="text-muted-foreground">{content.approach.description}</p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-elevated rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="text-sm">{content.journey.badge}</Badge>
              <h2 className="mt-2 mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                {content.journey.title}
              </h2>
              <p className="mb-8 text-muted-foreground">
                {content.journey.description}
              </p>

              <ul className="space-y-4">
                {content.journey.steps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src={galleryGroupTherapy}
                alt={content.journey.imageAlt}
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 max-w-xs rounded-xl border border-border bg-card p-6 shadow-lg">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                  {content.journey.messageTitle}
                </h3>
                <p className="text-sm italic text-muted-foreground">
                  {content.journey.messageQuote}
                </p>
                <p className="mt-2 text-xs font-medium text-primary">
                  {content.journey.messageAuthor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FacilityGallery
        images={galleryImages}
        title={content.gallery.title}
        subtitle={content.gallery.subtitle}
      />

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
                <Link to="/adult-home-care">
                  {content.cta.secondaryCta} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NashaMuktiKendra;
