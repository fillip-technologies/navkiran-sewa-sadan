import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Award,
  Eye,
  HandHeart,
  Heart,
  Phone,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import aboutTeamImage from "@/assets/team-image.jpeg";
import heroImage from "@/assets/hero-image.jpg";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import Seo from "@/components/Seo";
import { seoData } from "@/constants/seo";

const AboutUs = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          hero: {
            imageAlt: "About Navkiran Seva Sadan",
            badge: "About Us",
            title: "Who We Are",
            description:
              "Navkiran Seva Sadan, the trusted and affordable Rehab Center in Patna, is a service organisation dedicated to helping people recover, improve, and move toward a better life.",
          },
          missionVision: {
            imageAlt: "Dedicated team at Navkiran Seva Sadan",
            missionTitle: "Our Mission",
            missionDescription:
              "Providing compassionate care, rehabilitation, and support to those who need it most, helping them live a better quality of life with dignity. Our goal is to develop a safe and caring environment where recovery is both possible and sustainable.",
            visionTitle: "Our Vision",
            visionDescription:
              "Creating a society where every individual receives the compassionate care they deserve, and can live an addiction-free life with dignity and hope. We envision a society where appropriate support is always available when needed, and every life is empowered and valued.",
          },
          story: {
            badge: "Our Story",
            title: "A Journey Rooted In Empathy",
            paragraphs: [
              "Navkiran Seva Sadan (Rehabilitation Center in Patna) started with a simple yet powerful idea to help those who need it most. Almost a decade ago, we realised a growing need in our society for services regarding drug de-addiction and elderly care.",
              "Started as a small initiative, it has now developed into an organisation (Nasha Mukti Kendra Patna), providing trusted and reliable services for drug rehabilitation and elderly care. During the years, we have helped over 500 people and their families, resulting in a better quality of life.",
              "Still moving forward, our services grow while holding close kindness, dignity, and everyday care for others. Every person we reach adds quiet strength along the way.",
            ],
          },
          values: {
            badge: "Our Values",
            title: "What Guides Us",
            description:
              "At Navkiran Seva Sadan, the best old age home in Patna, these core values build the foundation for everything we do.",
            items: [
              {
                title: "Compassion",
                description:
                  "Treating every person with empathy, understanding, and genuine care.",
              },
              {
                title: "Dignity",
                description:
                  "Honouring the individuality, dignity, and self-worth of every person.",
              },
              {
                title: "Togetherness",
                description:
                  "Believing in the strength of community support to improve and encourage growth.",
              },
              {
                title: "Service",
                description:
                  "Dedicated to selfless service for the betterment of society and positive change.",
              },
            ],
          },
          team: {
            badge: "Our Team",
            title: "Dedicated Expert",
            description:
              "Our professional team of caregivers is dedicated to providing quality care and reliable support.",
            items: [
              {
                role: "Founder & Director",
                description: "Leading with vision and compassion",
              },
              {
                role: "Medical Team",
                description: "Professional healthcare support",
              },
              {
                role: "Counselors",
                description: "Emotional and mental guidance",
              },
              {
                role: "Care Staff",
                description: "24/7 dedicated caregivers",
              },
            ],
          },
          cta: {
            title: "Join Us in Making a Difference",
            description:
              "Whether you want to learn more about our services or support our cause, we would love to hear from you.",
            primaryCta: "Contact Us",
            secondaryCta: "View Our Services",
          },
        }
      : {
          hero: {
            imageAlt: "नवकिरण सेवा सदन के बारे में",
            badge: "हमारे बारे में",
            title: "हम कौन हैं",
            description:
              "उल्लेखनीय बिहार नशा मुक्ति सेवा केंद्र के रूप में, नवकिरण सेवा सदन एक सेवा-समर्पित संस्था है, जो लोगों को सुधार, पुनर्वास और बेहतर जीवन की ओर आगे बढ़ने में सहायता करती है।",
          },
          missionVision: {
            imageAlt: "नवकिरण सेवा सदन की समर्पित टीम",
            missionTitle: "हमारा मिशन",
            missionDescription:
              "हमारा उद्देश्य जरूरतमंद लोगों को करुणामय देखभाल, प्रभावी पुनर्वास और निरंतर सहयोग प्रदान करना है, ताकि वे सम्मान के साथ बेहतर जीवन जी सकें। हमारा लक्ष्य एक ऐसा सुरक्षित और स्नेहपूर्ण वातावरण तैयार करना हैं, जहाँ सुधार न केवल संभव हो, बल्कि लंबे समय तक कायम रह सके।",
            visionTitle: "हमारा विज़न",
            visionDescription:
              "हम एक ऐसे समाज की कल्पना करते हैं, जहाँ हर व्यक्ति को आवश्यक और संवेदनशील सहारा मिले, वह नशामुक्त जीवन जी सके और सम्मान व उम्मीद के साथ आगे बढ़ सके। हमारा लक्ष्य है कि हर व्यक्ति को सही समय पर सही सहयोग मिले और हर जीवन को सशक्त एवं मूल्यवान बनाया जाए।",
          },
          story: {
            badge: "हमारी कहानी",
            title: "सहानुभूति से शुरू हुई एक यात्रा",
            paragraphs: [
              "नवकिरण सेवा सदन की शुरुआत एक सरल लेकिन मजबूत उद्देश्य के साथ हुई, उन लोगों की मदद करना जिन्हें इसकी सबसे अधिक आवश्यकता है। लगभग एक दशक पहले, हमने समाज में नशा मुक्ति और बुजुर्ग देखभाल सेवाओं की बढ़ती जरूरत को महसूस किया।",
              "एक छोटे से प्रयास के रूप में शुरू होकर, आज यह एक विश्वसनीय संस्था के रूप में विकसित हो चुका है, जो नशा मुक्ति और बुजुर्ग देखभाल की भरोसेमंद सेवाएं प्रदान कर रही है। इन वर्षों में, हमने 500 से अधिक लोगों और उनके परिवारों की सहायता की है, जिससे उनके जीवन की गुणवत्ता में सकारात्मक बदलाव आया है।",
              "आज भी हम आगे बढ़ते हुए अपने मूल्यों: करुणा, सम्मान और सेवा को बनाए रखते हैं। हर व्यक्ति की मदद करना हमें और मजबूत बनाता है और हमारी प्रेरणा को बढ़ाता है।",
            ],
          },
          values: {
            badge: "हमारे मूल्य",
            title: "हमें दिशा देने वाले सिद्धांत",
            description:
              "नवकिरण सेवा सदन (नशा छोड़ने का हॉस्पिटल पटना) में ये प्राथमिक मूल्य हमारे हर कार्य की नींव हैं।",
            items: [
              {
                title: "करुणा",
                description:
                  "हर व्यक्ति के साथ सहानुभूति, समझ और सच्ची देखभाल के साथ व्यवहार करना।",
              },
              {
                title: "गरिमा",
                description:
                  "हर व्यक्ति की पहचान, सम्मान और आत्ममूल्य को बनाए रखना।",
              },
              {
                title: "साथ",
                description:
                  "समुदाय और सहयोग की शक्ति में विश्वास रखते हुए, विकास और सुधार को बढ़ावा देना।",
              },
              {
                title: "सेवा",
                description:
                  "समाज के कल्याण और सकारात्मक परिवर्तन के लिए निःस्वार्थ सेवा के प्रति समर्पण।",
              },
            ],
          },
          team: {
            badge: "हमारी टीम",
            title: "समर्पित विशेषज्ञ टीम",
            description:
              "हमारी अनुभवी और पेशेवर टीम गुणवत्तापूर्ण देखभाल और भरोसेमंद सहयोग प्रदान करने के लिए पूरी तरह समर्पित है।",
            items: [
              {
                role: "संस्थापक और निदेशक",
                description: "दूरदृष्टि और सेवा भाव के साथ नेतृत्व",
              },
              {
                role: "चिकित्सीय टीम",
                description: "पेशेवर स्वास्थ्य सहायता",
              },
              {
                role: "काउंसलर",
                description: "भावनात्मक और मानसिक मार्गदर्शन",
              },
              {
                role: "देखभाल स्टाफ",
                description: "24/7 समर्पित देखभाल",
              },
            ],
          },
          cta: {
            title: "अच्छा बदलाव लाने में हमारा साथ दें",
            description:
              "चाहे आप हमारी सेवाओं के बारे में जानना चाहते हों या हमारे उद्देश्य का साथ देना चाहते हों, हम आपसे बात करना चाहेंगे।",
            primaryCta: "संपर्क करें",
            secondaryCta: "हमारी सेवाएं देखें",
          },
        };

  const values = [
    { icon: Heart, ...content.values.items[0] },
    { icon: Award, ...content.values.items[1] },
    { icon: Users, ...content.values.items[2] },
    { icon: HandHeart, ...content.values.items[3] },
  ];

  return (
    <Layout>
      <Seo {...seoData.about} />
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={content.hero.imageAlt}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-accent/50 px-4 py-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {content.hero.badge}
              </span>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
              {content.hero.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {content.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutTeamImage}
                alt={content.missionVision.imageAlt}
                className="h-[400px] w-full object-cover"
              />
            </div>
            <div>
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    {content.missionVision.missionTitle}
                  </h2>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {content.missionVision.missionDescription}
                </p>
              </div>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    {content.missionVision.visionTitle}
                  </h2>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {content.missionVision.visionDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="text-sm">{content.story.badge}</Badge>
            <h2 className="mt-2 mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {content.story.title}
            </h2>
            <div className="space-y-4 text-left leading-relaxed text-muted-foreground">
              {content.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge className="text-sm">{content.values.badge}</Badge>
            <h2 className="mt-2 mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {content.values.title}
            </h2>
            <p className="text-muted-foreground">{content.values.description}</p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-elevated rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge className="text-sm">{content.team.badge}</Badge>
            <h2 className="mt-2 mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {content.team.title}
            </h2>
            <p className="text-muted-foreground">{content.team.description}</p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.team.items.map((member) => (
              <div
                key={member.role}
                className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {member.role}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </div>
            ))}
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
                className="border-foreground bg-foreground text-white hover:border-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                asChild
              >
                <Link to="/#services">{content.cta.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
