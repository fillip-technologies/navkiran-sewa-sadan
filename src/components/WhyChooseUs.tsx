import { Award, Clock, Heart, Leaf, Shield, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/context/LanguageContext";

const WhyChooseUs = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          badge: "Why Choose Us",
          title: "What Makes Us Different",
          description:
            "Our care goes beyond basic support. We create an environment that helps healing grow and positive change last.",
          reasons: [
            {
              icon: Heart,
              title: "NGO-Based Service",
              description:
                "A non-profit approach that keeps care genuine and people-first.",
            },
            {
              icon: Shield,
              title: "Safe & Respectful",
              description:
                "A protected environment where dignity and privacy matter.",
            },
            {
              icon: Clock,
              title: "24/7 Support",
              description:
                "Round-the-clock care and assistance whenever needed.",
            },
            {
              icon: Award,
              title: "Experienced Team",
              description:
                "Dedicated professionals with years of compassionate service.",
            },
            {
              icon: Users,
              title: "Family Involvement",
              description:
                "We encourage families to stay involved in the healing journey.",
            },
            {
              icon: Leaf,
              title: "Long-term Wellbeing",
              description:
                "We focus on steady recovery and lasting positive change.",
            },
          ],
        }
      : {
          badge: "हमें क्यों चुनें",
          title: "हमारी खास बात क्या है",
          description:
            "हमारी सेवा सिर्फ सामान्य देखभाल तक सीमित नहीं है। हम ऐसा माहौल बनाते हैं जो सुधार को मजबूत करे और अच्छा बदलाव लंबे समय तक बनाए रखे।",
          reasons: [
            {
              icon: Heart,
              title: "सेवा संस्था आधारित",
              description:
                "हम लाभ नहीं, सच्ची देखभाल और लोगों की जरूरत को पहले रखते हैं।",
            },
            {
              icon: Shield,
              title: "सुरक्षित और सम्मानजनक",
              description:
                "ऐसा माहौल जहां सुरक्षा, सम्मान और निजता का ध्यान रखा जाता है।",
            },
            {
              icon: Clock,
              title: "24/7 सहारा",
              description: "जब भी जरूरत हो, देखभाल और मदद उपलब्ध रहती है।",
            },
            {
              icon: Award,
              title: "अनुभवी टीम",
              description:
                "हमारी समर्पित टीम के पास सेवा और देखभाल का अच्छा अनुभव है।",
            },
            {
              icon: Users,
              title: "परिवार की भागीदारी",
              description:
                "हम सुधार की यात्रा में परिवार को साथ लेकर चलने पर जोर देते हैं।",
            },
            {
              icon: Leaf,
              title: "लंबे समय का भला",
              description:
                "हम स्थिर सुधार और अच्छे बदलाव को लंबे समय तक बनाए रखने पर काम करते हैं।",
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
