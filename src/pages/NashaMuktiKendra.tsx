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
import type { CSSProperties } from "react";
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

  const heroPanelContent =
    language === "en"
      ? {
          label: "Recovery Support",
          careDescription: "Dedicated care and supervision",
          servicesSummary: "Counseling, rehab support, and pickup assistance",
          message:
            "Safe, structured, and compassionate care designed to help every individual rebuild with dignity.",
          servicesLabel: "services",
        }
      : {
          label: "सुधार सहायता",
          careDescription: "24/7 समर्पित देखभाल और निगरानी",
          servicesSummary: "काउंसलिंग, पुनर्वास सहायता और पिकअप सुविधा",
          message:
            "सुरक्षित, अनुशासित और स्नेहपूर्ण देखभाल जो हर व्यक्ति को सम्मान के साथ नया जीवन बनाने में मदद करती है।",
          servicesLabel: "सेवाएं",
        };

  const pageTheme = {
    "--background": "208 57% 97%",
    "--foreground": "209 43% 18%",
    "--card": "0 0% 100%",
    "--card-foreground": "209 43% 18%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "209 43% 18%",
    "--primary": "207 55% 41%",
    "--primary-foreground": "0 0% 100%",
    "--secondary": "205 48% 62%",
    "--secondary-foreground": "0 0% 100%",
    "--muted": "208 52% 92%",
    "--muted-foreground": "209 23% 38%",
    "--accent": "208 48% 88%",
    "--accent-foreground": "208 66% 35%",
    "--border": "208 39% 82%",
    "--input": "208 39% 82%",
    "--ring": "208 66% 35%",
    "--hero-gradient":
      "linear-gradient(135deg, rgba(30, 93, 149, 0.96) 0%, rgba(47, 111, 163, 0.88) 38%, rgba(111, 166, 204, 0.72) 60%)",
    "--card-shadow": "0 18px 60px -30px rgba(47, 111, 163, 0.35)",
    "--card-shadow-hover": "0 28px 80px -34px rgba(30, 93, 149, 0.48)",
    "--text-gradient": "linear-gradient(135deg, #1E5D95 0%, #2F6FA3 55%, #6FA6CC 100%)",
  } as CSSProperties;

  return (
    <Layout>
      <div className="overflow-hidden bg-background text-foreground" style={pageTheme}>
        <section className="relative isolate flex min-h-screen items-center overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0">
            <img
              src={rehabCenterImage}
              alt={content.hero.imageAlt}
              className="h-full w-full object-cover"
            />
            <div className="hero-gradient absolute inset-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(175,203,227,0.38),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(111,166,204,0.28),transparent_24%)]" />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#082946]/55 to-transparent" />
          <div className="absolute top-24 right-[10%] h-56 w-56 rounded-full bg-[#AFCBE3]/20 blur-3xl" />
          <div className="absolute bottom-16 left-[6%] h-64 w-64 rounded-full bg-[#6FA6CC]/25 blur-3xl" />

          <div className="container relative mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
                  <HeartHandshake className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium">{content.hero.badge}</span>
                </div>
                <h1 className="mb-6 max-w-2xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  {content.hero.title}
                </h1>
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/[0.82]">
                  {content.hero.description}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="gap-2 rounded-full bg-[#1E5D95] px-8 text-white shadow-lg shadow-[#0D3357]/25 hover:bg-[#174A77]"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone className="h-4 w-4" /> {content.hero.primaryCta}
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/[0.35] bg-white/10 px-8 text-white backdrop-blur-md hover:bg-white hover:text-[#1E5D95]"
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
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(175,203,227,0.3)_0%,rgba(255,255,255,0.92)_100%)] py-20 md:py-28"
          id="ournashapproach"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-white/70" />
          <div className="absolute top-10 left-0 h-56 w-56 rounded-full bg-[#AFCBE3]/[0.45] blur-3xl" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#6FA6CC]/25 blur-3xl" />

          <div className="container relative mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <Badge className="border border-[#6FA6CC]/30 bg-[#2F6FA3] px-4 py-1 text-sm text-white shadow-sm shadow-[#2F6FA3]/20">
                {content.approach.badge}
              </Badge>
              <h2 className="mt-4 mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                {content.approach.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {content.approach.description}
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="card-elevated rounded-[1.75rem] border border-white/70 bg-white/[0.85] p-6 backdrop-blur-sm"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1E5D95_0%,#2F6FA3_50%,#6FA6CC_100%)] shadow-lg shadow-[#2F6FA3]/20">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(175,203,227,0.26),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(175,203,227,0.12)_100%)]" />

          <div className="container relative mx-auto px-4">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_1.05fr]">
              <div>
                <Badge className="border border-[#6FA6CC]/25 bg-[#EAF4FB] px-4 py-1 text-sm text-[#1E5D95]">
                  {content.journey.badge}
                </Badge>
                <h2 className="mt-4 mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  {content.journey.title}
                </h2>
                <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {content.journey.description}
                </p>

                <div className="rounded-[2rem] border border-white/75 bg-white/[0.85] p-7 shadow-[0_24px_70px_-36px_rgba(47,111,163,0.45)] backdrop-blur-sm">
                  <ul className="space-y-4">
                    {content.journey.steps.map((step) => (
                      <li key={step} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#EAF4FB]">
                          <CheckCircle className="h-4 w-4 text-[#1E5D95]" />
                        </div>
                        <span className="text-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-5 rounded-[2.25rem] bg-[linear-gradient(135deg,rgba(175,203,227,0.4),rgba(111,166,204,0.12))] blur-2xl" />
                <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/30 p-3 shadow-[0_28px_80px_-34px_rgba(30,93,149,0.45)] backdrop-blur-sm">
                  <img
                    src={galleryGroupTherapy}
                    alt={content.journey.imageAlt}
                    className="w-full rounded-[1.75rem] object-cover shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 right-6 rounded-[1.75rem] border border-white/25 bg-[linear-gradient(135deg,rgba(30,93,149,0.96),rgba(47,111,163,0.92),rgba(111,166,204,0.9))] p-6 text-white shadow-2xl shadow-[#1E5D95]/25 backdrop-blur-sm md:right-auto md:max-w-sm">
                  <h3 className="mb-2 font-serif text-xl font-bold">
                    {content.journey.messageTitle}
                  </h3>
                  <p className="text-sm italic leading-6 text-white/[0.88]">
                    {content.journey.messageQuote}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.72]">
                    {content.journey.messageAuthor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(234,244,251,0.85)_0%,rgba(175,203,227,0.28)_100%)]">
          <div className="absolute inset-x-0 top-0 h-px bg-white/70" />
          <FacilityGallery
            images={galleryImages}
            title={content.gallery.title}
            subtitle={content.gallery.subtitle}
          />
        </div>

        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#1E5D95_0%,#2F6FA3_44%,#6FA6CC_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(175,203,227,0.3),transparent_30%)]" />

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/[0.15] bg-white/10 px-6 py-10 text-center text-white shadow-2xl shadow-[#082946]/20 backdrop-blur-md md:px-10">
              <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
                {content.cta.title}
              </h2>
              <p className="mb-8 text-white/[0.82]">{content.cta.description}</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-white px-8 text-[#1E5D95] hover:bg-[#EAF4FB]"
                  asChild
                >
                  <Link to="/contact">
                    <Phone className="h-4 w-4" /> {content.cta.primaryCta}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-white/[0.35] bg-white/10 px-8 text-white hover:bg-white hover:text-[#1E5D95]"
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
      </div>
    </Layout>
  );
};

export default NashaMuktiKendra;
