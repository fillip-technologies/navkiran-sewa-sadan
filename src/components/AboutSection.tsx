import { Heart, Shield, Sparkles, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          badge: "About Us",
          title: "A Commitment to Care and Recovery",
          paragraphOne:
            "Navkiran Seva Sadan is a non-profit organization dedicated to recovery, dignity, and a better quality of life. Built on compassion and social responsibility, we provide care that supports both physical and emotional well-being.",
          paragraphTwo:
            "Our team works with dedication to create a place where people feel safe, respected, and encouraged to start again. We believe the right support can help every person move forward with hope.",
          values: [
            {
              title: "Compassion",
              description:
                "Every individual deserves care, respect, and understanding.",
            },
            {
              title: "Safe Environment",
              description: "We provide secure and supportive spaces for healing.",
            },
            {
              title: "Community",
              description:
                "We build connections that create belonging and support.",
            },
            {
              title: "Dignity",
              description: "We honor every person and protect their self-worth.",
            },
          ],
          purposeLabel: "Our Purpose",
          purposeTitle: "Driven by Compassion, Guided by Care",
          purposeDescription:
            "We focus on long-term healing through medical support, emotional care, and community connection to help individuals rebuild life with dignity.",
          impactStats: [
            { number: "500+", label: "Lives Supported" },
            { number: "10+", label: "Years of Service" },
            { number: "24/7", label: "Care & Support" },
            { number: "100%", label: "Compassion" },
          ],
        }
      : {
          badge: "हमारे बारे में",
          title: "देखभाल और सुधार के लिए समर्पित",
          paragraphOne:
            "नवकिरण सेवा सदन एक सेवा संस्था है जो लोगों को सुधार, सम्मान और बेहतर जीवन की ओर बढ़ने में मदद करती है। करुणा और सामाजिक जिम्मेदारी के साथ हम शारीरिक और मानसिक दोनों तरह की देखभाल देते हैं।",
          paragraphTwo:
            "हमारी टीम ऐसा माहौल बनाती है जहां हर व्यक्ति खुद को सुरक्षित, सम्मानित और मजबूत महसूस करे। हमें भरोसा है कि सही सहारे से हर इंसान नई उम्मीद के साथ आगे बढ़ सकता है।",
          values: [
            {
              title: "सहानुभूति",
              description: "हर व्यक्ति देखभाल, सम्मान और समझ का हकदार है।",
            },
            {
              title: "सुरक्षित माहौल",
              description: "हम इलाज और सुधार के लिए सुरक्षित जगह देते हैं।",
            },
            {
              title: "साथ",
              description: "हम ऐसा जुड़ाव बनाते हैं जो सहारा देता है।",
            },
            {
              title: "सम्मान",
              description: "हम हर व्यक्ति का मान और आत्मविश्वास बचाए रखते हैं।",
            },
          ],
          purposeLabel: "हमारा उद्देश्य",
          purposeTitle: "सेवा भाव के साथ सही देखभाल",
          purposeDescription:
            "हम लंबे समय के सुधार पर काम करते हैं। इलाज, भावनात्मक सहारा और सामुदायिक जुड़ाव के साथ हम लोगों को सम्मान के साथ जीवन फिर से बनाने में मदद करते हैं।",
          impactStats: [
            { number: "500+", label: "लोगों को सहारा" },
            { number: "10+", label: "सेवा के साल" },
            { number: "24/7", label: "देखभाल और सहारा" },
            { number: "100%", label: "करुणा" },
          ],
        };

  const values = [
    { icon: Heart, ...content.values[0] },
    { icon: Shield, ...content.values[1] },
    { icon: Users, ...content.values[2] },
    { icon: Sparkles, ...content.values[3] },
  ];

  return (
    <section id="about" className="overflow-x-hidden bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="px-2">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              {content.badge}
            </span>
            <h2 className="mt-2 mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {content.title}
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {content.paragraphOne}
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              {content.paragraphTwo}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border bg-background p-8 shadow-sm">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                {content.purposeLabel}
              </span>

              <h3 className="mt-2 mb-4 font-serif text-2xl font-bold text-foreground">
                {content.purposeTitle}
              </h3>

              <p className="mb-8 leading-relaxed text-muted-foreground">
                {content.purposeDescription}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {content.impactStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-primary">
                      {stat.number}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-3xl bg-primary/10" />
            <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-3xl bg-secondary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
