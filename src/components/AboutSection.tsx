import { Heart, Shield, Sparkles, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          badge: "Who We Are",
          title: "Dedicated To Care & Recovery",
          paragraphOne:
            "Navkiran Seva Sadan is a dedicated service-oriented center that assists individuals in recovering from addiction and provides elderly care services, encouraging improved and better quality of life. We are committed to serving individuals both physically and emotionally with compassion and a strong sense of social responsibility.",
          paragraphTwo:
            "As the best nasha mukti kendra in Patna, our team of seasoned caregivers takes a supportive, compassionate approach to restore hope, health, and happiness in everyoneâ€™s life.",
          values: [
            {
              title: "Empathy",
              description:
                "We ensure everyone feels safe, respected, and empowered.",
            },
            {
              title: "Safe Environment",
              description:
                "We provide a safe and secure place for treatment and recovery.",
            },
            {
              title: "Compassionate Care",
              description:
                "We make meaningful connections for persistent support.",
            },
            {
              title: "Dignity",
              description: "We ensure every person is treated with dignity.",
            },
          ],
          purposeLabel: "Our Mission",
          purposeTitle: "Restoring Lives, Rebuilding Families",
          purposeDescription:
            "Our mission is to foster long-term recovery and well-being. With proper treatment and emotional support, we strive to make a positive impact, encouraging individuals to live their lives with confidence and dignity.",
          impactStats: [
            { number: "500+", label: "Lives Supported" },
            { number: "10+", label: "Years of Service" },
            { number: "24/7", label: "Care and Assistance" },
            { number: "100%", label: "Compassion-Driven Approach" },
          ],
        }
      : {
          badge: "हम कौन हैं",
          title: "देखभाल और सुधार के लिए समर्पित",
          paragraphOne:
            "नवकिरण सेवा सदन एक समर्पित बिहार नशा मुक्ति सेवा केंद्र है, जो लोगों को नशे की लत से उबरने में मदद करता है और बुजुर्गों के लिए देखभाल सेवाएं प्रदान करता है, ताकि वे स्वस्थ और खुशहाल जीवन जी सकें। हम करुणा और सामाजिक जिम्मेदारी के साथ शारीरिक और भावनात्मक दोनों प्रकार की देखभाल के लिए प्रतिबद्ध हैं।",
          paragraphTwo:
            "हमारा पटना ड्रग रिहैब सेंटर, एक विश्वसनीय नशा मुक्ति केंद्र के रूप में जाना जाता है, हमारी अनुभवी टीम सहायक और संवेदनशील दृष्टिकोण अपनाते हुए हर व्यक्ति के जीवन में आशा, स्वास्थ्य और खुशियां वापस लाने का प्रयास करती है।",
          values: [
            {
              title: "सहानुभूति",
              description:
                "हम सुनिश्चित करते हैं कि हर व्यक्ति खुद को सुरक्षित, सम्मानित और आत्मविश्वासी महसूस करे।",
            },
            {
              title: "सुरक्षित वातावरण",
              description:
                "हम उपचार और सुधार के लिए एक सुरक्षित और संरक्षित स्थान प्रदान करते हैं।",
            },
            {
              title: "करुणामय देखभाल",
              description:
                "हम स्नेहपूर्ण जुड़ाव बनाते हैं, जो निरंतर सहयोग और समर्थन प्रदान करता है।",
            },
            {
              title: "सम्मान",
              description:
                "हम हर व्यक्ति के आत्मसम्मान और गरिमा को बनाए रखते हैं।",
            },
          ],
          purposeLabel: "हमारा उद्देश्य",
          purposeTitle: "जीवन संवारना, परिवारों को फिर से जोड़ना",
          purposeDescription:
            "हमारा उद्देश्य निरंतर सुधार और समग्र कल्याण को बढ़ावा देना है। उचित उपचार, भावनात्मक सहारा और निरंतर देखभाल के माध्यम से हम हर व्यक्ति के जीवन में सकारात्मक बदलाव लाने का प्रयास करते हैं, ताकि वे आत्मविश्वास और सम्मान के साथ अपना जीवन जी सकें।",
          impactStats: [
            { number: "500+", label: "जीवनों को नया सहारा" },
            { number: "10+", label: "सेवा के वर्ष" },
            { number: "24/7", label: "देखभाल और सहायता" },
            { number: "100%", label: "करुणा के साथ सेवा" },
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
