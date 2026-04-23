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
import aboutTeamImage from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-image.jpg";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

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
              "Navkiran Seva Sadan is a non-profit organization committed to recovery, dignity, and a better quality of life.",
          },
          missionVision: {
            imageAlt: "Dedicated team at Navkiran Seva Sadan",
            missionTitle: "Our Mission",
            missionDescription:
              "To provide compassionate care, rehabilitation, and support to people in need, helping them rebuild life with dignity and hope in a safe and nurturing environment.",
            visionTitle: "Our Vision",
            visionDescription:
              "A society where every individual has access to quality care and the chance to live with dignity, free from addiction and supported in daily life when needed.",
          },
          story: {
            badge: "Our Story",
            title: "A Journey of Compassion",
            paragraphs: [
              "Navkiran Seva Sadan began with a simple vision: to serve people who need support the most. Our journey started over a decade ago when we saw the growing need for compassionate care in our community.",
              "What began as a small initiative has grown into a complete care organization offering de-addiction rehabilitation and old age home care services. Over the years, we have supported more than 500 individuals and their families.",
              "Today, we continue to grow while staying rooted in compassion, dignity, and community service. Every life we touch strengthens our commitment to make a meaningful difference.",
            ],
          },
          values: {
            badge: "Our Values",
            title: "What Guides Us",
            description:
              "These values shape every step we take at Navkiran Seva Sadan.",
            items: [
              {
                title: "Compassion",
                description:
                  "We treat every person with empathy, understanding, and genuine care.",
              },
              {
                title: "Dignity",
                description:
                  "We protect the dignity and respect of every individual we serve.",
              },
              {
                title: "Community",
                description:
                  "We believe support from the community helps healing and growth.",
              },
              {
                title: "Service",
                description:
                  "We are committed to selfless service for the betterment of society.",
              },
            ],
          },
          team: {
            badge: "Our Team",
            title: "Dedicated Professionals",
            description:
              "Our caring team is committed to delivering high-quality support and thoughtful care.",
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
              "नवकिरण सेवा सदन एक सेवा संस्था है जो लोगों को सुधार, सम्मान और बेहतर जीवन की ओर बढ़ने में मदद करती है।",
          },
          missionVision: {
            imageAlt: "नवकिरण सेवा सदन की समर्पित टीम",
            missionTitle: "हमारा मिशन",
            missionDescription:
              "जरूरतमंद लोगों को देखभाल, पुनर्वास और सहारा देना ताकि वे सम्मान और उम्मीद के साथ जीवन फिर से बना सकें। हमारा लक्ष्य सुरक्षित और स्नेहपूर्ण माहौल देना है जहां सुधार आगे बढ़े।",
            visionTitle: "हमारा विजन",
            visionDescription:
              "ऐसा समाज जहां हर व्यक्ति को अच्छी देखभाल मिले, वह सम्मान से जी सके, नशे से मुक्त जीवन जी सके और जरूरत पड़ने पर सही सहारा पा सके।",
          },
          story: {
            badge: "हमारी कहानी",
            title: "सहानुभूति की यात्रा",
            paragraphs: [
              "नवकिरण सेवा सदन की शुरुआत एक सरल सोच से हुई: उन लोगों की सेवा करना जिन्हें सबसे ज्यादा सहारे की जरूरत है। करीब एक दशक पहले हमने अपने आसपास देखभाल की बढ़ती जरूरत को महसूस किया।",
              "जो काम एक छोटे प्रयास से शुरू हुआ था, आज वह नशा मुक्ति पुनर्वास और बुजुर्ग देखभाल जैसी सेवाएं देने वाली संस्था बन चुका है। इन वर्षों में हमने 500 से अधिक लोगों और उनके परिवारों तक सहारा पहुंचाया है।",
              "आज भी हम अपनी सेवाएं बढ़ा रहे हैं, लेकिन करुणा, सम्मान और समाज सेवा के मूल भाव को साथ लेकर। हर जीवन जिसे हम छूते हैं, हमें और मजबूत बनाता है।",
            ],
          },
          values: {
            badge: "हमारे मूल्य",
            title: "क्या हमें दिशा देता है",
            description: "ये मूल्य नवकिरण सेवा सदन के हर काम की नींव हैं।",
            items: [
              {
                title: "सहानुभूति",
                description:
                  "हम हर व्यक्ति के साथ समझ, अपनापन और सच्ची देखभाल से पेश आते हैं।",
              },
              {
                title: "सम्मान",
                description:
                  "हम हर व्यक्ति की गरिमा और सम्मान को बनाए रखते हैं।",
              },
              {
                title: "साथ",
                description:
                  "हमें विश्वास है कि समुदाय का साथ सुधार और विकास में मदद करता है।",
              },
              {
                title: "सेवा",
                description:
                  "हम समाज के भले के लिए निस्वार्थ सेवा के लिए समर्पित हैं।",
              },
            ],
          },
          team: {
            badge: "हमारी टीम",
            title: "समर्पित विशेषज्ञ",
            description:
              "हमारी स्नेहपूर्ण टीम अच्छी देखभाल और भरोसेमंद सहारा देने के लिए समर्पित है।",
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
