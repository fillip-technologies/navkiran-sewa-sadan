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
import Seo from "@/components/Seo";
import { seoData } from "@/constants/seo";

const NashaMuktiKendra = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          hero: {
            imageAlt: "Nasha Mukti Kendra rehabilitation center",
            badge: "De-Addiction & Rehabilitation",
            title: "Drug De-Addiction Center",
            description:
              "Healing begins when someone feels safe enough to speak their truth. We provide a caring and non-judgmental space, where individuals can overcome addiction and transform their lives. Through professional guidance and personalised care, our nasha mukti kendra Patna empowers individuals to regain hope, confidence, and a sense of purpose.",
            primaryCta: "Get Help Now",
            secondaryCta: "Learn About Our Approach",
          },
          approach: {
            badge: "Our Approach",
            title: "Compassionate Care for Lasting Recovery",
            description:
              "Our setting feels steady, built so growth can take root slowly. Body, thoughts, feelings - each part gets space to shift without pressure. Hence, progress shows up quietly, shaped by consistent and personalised care.",
            features: [
              {
                title: "Expert Counselling",
                description:
                  "Personalised one-on-one and small group sessions, with skilled counsellors who listen closely, digging into what's really behind your struggles and developing healthier habits.",
              },
              {
                title: "Supportive Rehabilitation Program",
                description:
                  "Being the best nasha mukti kendra in Patna, our structured routine is designed to rebuild confidence, restore stability, helping individual take control of their lives.",
              },
              {
                title: "Family Support",
                description:
                  "Families join the process early, shaped by ongoing counseling that builds steady backing during healing.",
              },
              {
                title: "Safe & Peaceful Environment",
                description:
                  "A quiet place, built for recovery, keeps distractions far away. People come here because their minds feel clearer without chaos nearby.",
              },
              {
                title: "24/7 Care & Support",
                description:
                  "When you reach out, someone will always be there to help. Night or day, we're ready to listen, guide, or simply sit with your concerns.",
              },
              {
                title: "Postcare Planning",
                description:
                  "Stability sticks around when help keeps coming; our follow-up steps fit into real life, making setbacks less likely.",
              },
            ],
          },
          journey: {
            badge: "Recovery Journey",
            title: "Your Path Toward a New Life",
            description:
              "Recovery takes time; it is a long journey. Our nasha mukti kendra Patna supports a step-by-step process, ensuring lasting transformation, stability, and a confident return to life.",
            steps: [
              "Early Assessment and personalised care",
              "Safe and supervised detox",
              "Therapeutic counseling session",
              "Life skills and work Readiness",
              "Physical Wellness and Recreation",
              "Family Involvement and Guidance",
              "Gradual Reintegration with Continued Support",
            ],
            imageAlt: "Group therapy session at Nasha Mukti Kendra",
            messageTitle: "A Message of Hope",
            messageQuote:
              "\"Recovery is possible. You are not alone in this journey.\"",
            messageAuthor: "Navkiran Seva Sadan Team",
          },
          gallery: {
            title: "Our Rehabilitation Facilities",
            subtitle:
              "Step into a calm, safe, and healing environment, designed for recovery and life transformation.",
            images: [
              {
                alt: "Meditation and wellness room",
                title: "Meditation Room",
              },
              {
                alt: "Counseling session",
                title: "Counselling session",
              },
              {
                alt: "Group therapy session",
                title: "Group Therapy",
              },
              {
                alt: "Outdoor garden area",
                title: "Garden and Open Space",
              },
              {
                alt: "Exercise and fitness area",
                title: "Fitness Room",
              },
            ],
          },
          cta: {
            title: "Start Your Journey Today",
            description:
              "We are available round-the-clock to help you or your loved one, take the first step toward recovery and a better future.",
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
              "उपचार की शुरुआत तब होती है जब व्यक्ति स्वयं अपनी बात खुलकर कहने के लिए सुरक्षित महसूस करता है। हम एक स्नेहपूर्ण और बिना किसी भेदभाव वाला वातावरण प्रदान करते हैं, जहाँ लोग नशे की लत से उबरकर अपने जीवन में सकारात्मक बदलाव ला सकते हैं।\n\nविशेषज्ञ मार्गदर्शन और व्यक्तिगत देखभाल के माध्यम से, हमारा पटना ड्रग रिहैब सेंटर लोगों को नई उम्मीद, आत्मविश्वास और जीवन का उद्देश्य फिर से पाने में सक्षम बनाता है।",
            primaryCta: "अभी मदद लें",
            secondaryCta: "हमारा तरीका जानें",
          },
          approach: {
            badge: "हमारा तरीका",
            title: "स्थायी सुधार के लिए स्नेहपूर्ण देखभाल",
            description:
              "हमारा पटना में नशा मुक्ति केंद्र का वातावरण स्थिर और सहयोगी है, जहाँ विकास धीरे-धीरे और स्वाभाविक रूप से आकार लेता है। शरीर, विचार और भावनाएँ, हर पहलू को बिना किसी दबाव के बदलने और आगे बढ़ने का अवसर दिया जाता है।\n\nइसी कारण, निरंतर और व्यक्तिगत देखभाल के माध्यम से सुधार धीरे-धीरे लेकिन मजबूती के साथ दिखाई देता है।",
            features: [
              {
                title: "विशेषज्ञ परामर्श",
                description:
                  "व्यक्तिगत और छोटे समूह सत्र, जहाँ अनुभवी काउंसलर आपकी बात ध्यान से सुनते हैं, समस्याओं की जड़ तक पहुँचते हैं और बेहतर जीवन के लिए सकारात्मक आदतें विकसित करने में मदद करते हैं।",
              },
              {
                title: "उचित पुनर्वास कार्यक्रम",
                description:
                  "पटना के विश्वसनीय नशा मुक्ति केंद्र के रूप में, हमारी सुव्यवस्थित दिनचर्या आत्मविश्वास बढ़ाने, स्थिरता वापस लाने और व्यक्ति को अपने जीवन पर फिर से नियंत्रण पाने में सहायता करती है।",
              },
              {
                title: "परिवार का सहयोग",
                description:
                  "उपचार की शुरुआत से ही परिवार को शामिल किया जाता है, और निरंतर काउंसलिंग के माध्यम से मजबूत सहयोग और समझ विकसित की जाती है।",
              },
              {
                title: "सुरक्षित और शांत वातावरण",
                description:
                  "एक शांत, सुरक्षित और व्यवस्थित स्थान, जहाँ बिना किसी बाधा के व्यक्ति अपने सुधार और उपचार पर पूरी तरह ध्यान केंद्रित कर सकता है।",
              },
              {
                title: "24/7 देखभाल और सहायता",
                description:
                  "दिन हो या रात, जब भी आपको जरूरत हो, हमारी टीम हमेशा सहायता, मार्गदर्शन और सहयोग के लिए तैयार रहती है।",
              },
              {
                title: "पुनः देखभाल योजना (Postcare Planning)",
                description:
                  "उपचार के बाद भी निरंतर सहयोग दिया जाता है, ताकि सुधार लंबे समय तक बना रहे और जीवन में स्थिरता कायम रहे।",
              },
            ],
          },
          journey: {
            badge: "सुधार की यात्रा",
            title: "एक नए जीवन की ओर आपकी यात्रा",
            description:
              "सुधार एक लंबी प्रक्रिया है, जिसमें समय और धैर्य की आवश्यकता होती है। हमारा नशा मुक्ति अस्पताल पटना चरणबद्ध तरीके से सहायता प्रदान करता है, ताकि स्थायी बदलाव, जीवन में स्थिरता और आत्मविश्वास के साथ नई शुरुआत सुनिश्चित हो सके।",
            steps: [
              "प्रारंभिक जांच और व्यक्तिगत देखभाल",
              "सुरक्षित और निगरानी में डिटॉक्स",
              "उपचारात्मक काउंसलिंग सत्र",
              "जीवन कौशल और कार्य के लिए तैयारी",
              "शारीरिक स्वास्थ्य और मनोरंजन",
              "परिवार की भागीदारी और मार्गदर्शन",
              "निरंतर सहयोग के साथ समाज में पुनः शामिल होना",
            ],
            imageAlt: "नशा मुक्ति केंद्र में समूह चिकित्सा सत्र",
            messageTitle: "उम्मीद की बात",
            messageQuote: "\"सुधार संभव है। आप इस सफर में अकेले नहीं हैं।\"",
            messageAuthor: "नवकिरण सेवा सदन टीम",
          },
          gallery: {
            title: "हमारी पुनर्वास सुविधाएं",
            subtitle:
              "एक शांत, सुरक्षित और उपचार के अनुकूल वातावरण का अनुभव करें, जिसे सुधार और जीवन में सकारात्मक बदलाव के लिए विशेष रूप से तैयार किया गया है।",
            images: [
              {
                alt: "ध्यान कक्ष",
                title: "ध्यान कक्ष",
              },
              {
                alt: "काउंसलिंग सत्र",
                title: "काउंसलिंग सत्र",
              },
              {
                alt: "समूह चिकित्सा",
                title: "समूह चिकित्सा",
              },
              {
                alt: "बगीचा और खुला स्थान",
                title: "बगीचा और खुला स्थान",
              },
              {
                alt: "फिटनेस कक्ष",
                title: "फिटनेस कक्ष",
              },
            ],
          },
          cta: {
            title: "आज ही अपनी यात्रा शुरू करें",
            description:
              "हम 24/7 उपलब्ध हैं, ताकि आप या आपके प्रियजन सुधार और एक बेहतर भविष्य की ओर पहला कदम उठा सकें।",
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
        language === "en" ? "Patient Pickup Facility" : "मरीज पिकअप",
      description:
        language === "en"
          ? "Getting here should never be a problem. Our pickup service covers the district along with surrounding spots, so people arrive relaxed."
          : "हम सुरक्षित और भरोसेमंद पिकअप सेवा प्रदान करते हैं, जो जिले के साथ-साथ आसपास के क्षेत्रों को भी कवर करती है, ताकि मरीज आराम से केंद्र तक पहुँच सकें।",
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
            "सुरक्षित, अनुशासित और स्नेहपूर्ण देखभाल, जो हर व्यक्ति को सम्मान के साथ नया जीवन बनाने में मदद करती है।",
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
      <Seo {...seoData.nashaMuktiKendra} />
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
