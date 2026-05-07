import { Award, Clock, Heart, Leaf, Shield, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/context/LanguageContext";

const WhyChooseUs = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          badge: "Why Choose Us?",
          title: "What Makes Us Different",
          description:
            "What we do is not just about basic support. We have developed a nurturing environment that empowers recovery and ensures long-lasting positive change.",
          reasons: [
            {
              icon: Heart,
              title: "Care-First Approach",
              description:
                "We prioritise people over profit, ensuring precise care and individual needs at the forefront.",
            },
            {
              icon: Shield,
              title: "Secure & Respectful Environment",
              description:
                "We provide a safe and secure space where every person feels valued and protected.",
            },
            {
              icon: Clock,
              title: "24/7 Support",
              description:
                "We offer round-the-clock service to help whenever you require our assistance.",
            },
            {
              icon: Award,
              title: "Experienced Team",
              description:
                "Our expert team of caregivers brings valuable experience, ensuring high-quality care.",
            },
            {
              icon: Users,
              title: "Family Involvement",
              description:
                "During the recovery journey, we go along with family, providing quality support and building trust.",
            },
            {
              icon: Leaf,
              title: "Long-Term Well-Being",
              description:
                "We emphasise sustainable recovery and lasting positive change, ensuring a better quality of life.",
            },
          ],
        }
      : {
          badge: "हमें क्यों चुनें?",
          title: "हमारी खासियत क्या है",
          description:
            "हमारी सेवाएं केवल सामान्य देखभाल तक सीमित नहीं हैं। हमने एक ऐसा सहयोगी वातावरण विकसित किया है जो सुधार को मजबूत बनाता है और लंबे समय तक सकारात्मक बदलाव सुनिश्चित करता है।",
          reasons: [
            {
              icon: Heart,
              title: "देखभाल-प्रथम दृष्टिकोण",
              description:
                "हम लाभ से पहले लोगों को प्राथमिकता देते हैं, ताकि हर व्यक्ति की जरूरत के अनुसार सही और व्यक्तिगत देखभाल मिल सके।",
            },
            {
              icon: Shield,
              title: "सुरक्षित और सम्मानजनक वातावरण",
              description:
                "हम एक ऐसा सुरक्षित और संरक्षित स्थान प्रदान करते हैं, जहां हर व्यक्ति खुद को सम्मानित और सुरक्षित महसूस करता है।",
            },
            {
              icon: Clock,
              title: "24/7 सहायता",
              description:
                "हम हर समय उपलब्ध रहते हैं, ताकि जब भी आपको जरूरत हो, तुरंत सहायता मिल सके।",
            },
            {
              icon: Award,
              title: "अनुभवी टीम",
              description:
                "हमारी विशेषज्ञ टीम का अनुभव उच्च गुणवत्ता वाली देखभाल सुनिश्चित करता है।",
            },
            {
              icon: Users,
              title: "परिवार की भागीदारी",
              description:
                "सुधार की यात्रा में हम परिवार को साथ लेकर चलते हैं, जिससे बेहतर सहयोग और विश्वास बनता है।",
            },
            {
              icon: Leaf,
              title: "दीर्घकालिक कल्याण",
              description:
                "हम स्थायी सुधार और लंबे समय तक सकारात्मक बदलाव पर ध्यान देते हैं, ताकि बेहतर जीवन गुणवत्ता सुनिश्चित हो सके।",
            },
          ],
        };

  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge className="text-sm">{content.badge}</Badge>
          <h2 className="mt-2 mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {content.title}
          </h2>
          <p className="text-muted-foreground">{content.description}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
