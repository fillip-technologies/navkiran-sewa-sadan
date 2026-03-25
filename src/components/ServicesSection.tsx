import { HeartHandshake, Home } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/context/LanguageContext";

const ServicesSection = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          badge: "Our Services",
          title: "How We Help",
          description:
            "We offer focused support during life’s difficult moments with care that respects dignity and encourages healing.",
          services: [
            {
              title: "Nasha Mukti Kendra",
              description:
                "Our de-addiction and rehabilitation center provides complete support for people seeking freedom from substance dependency. We offer a safe and respectful environment focused on recovery and reintegration.",
              icon: HeartHandshake,
              link: "/nasha-mukti-kendra",
              features: [
                "Professional counseling",
                "Structured rehabilitation program",
                "Family support sessions",
                "Aftercare planning",
              ],
            },
            {
              title: "Old Age Home Care",
              description:
                "Our elder care service provides a safe and supportive living space for people who need help with daily routines. We focus on dignity, comfort, and quality of life.",
              icon: Home,
              link: "/adult-home-care",
              features: [
                "24/7 personalized care",
                "Safe living environment",
                "Medical assistance",
                "Emotional support",
              ],
            },
          ],
        }
      : {
          badge: "हमारी सेवाएं",
          title: "हम कैसे मदद करते हैं",
          description:
            "मुश्किल समय में हम ऐसी सेवाएं देते हैं जो सम्मान बनाए रखें और सुधार की राह आसान करें।",
          services: [
            {
              title: "नशा मुक्ति केंद्र",
              description:
                "हमारा नशा मुक्ति और पुनर्वास केंद्र नशे की लत से बाहर आने वाले लोगों को पूरा सहारा देता है। यहां सुरक्षित, शांत और सम्मानजनक माहौल में सुधार पर काम किया जाता है।",
              icon: HeartHandshake,
              link: "/nasha-mukti-kendra",
              features: [
                "विशेषज्ञ काउंसलिंग",
                "सही पुनर्वास कार्यक्रम",
                "परिवार के साथ सत्र",
                "आगे की देखभाल की योजना",
              ],
            },
            {
              title: "बुजुर्ग देखभाल सेवा",
              description:
                "हमारी बुजुर्ग देखभाल सेवा उन लोगों के लिए सुरक्षित और सहायक रहने की जगह देती है जिन्हें रोजमर्रा के कामों में मदद चाहिए। हम आराम, सम्मान और अच्छी देखभाल पर ध्यान देते हैं।",
              icon: Home,
              link: "/adult-home-care",
              features: [
                "24/7 व्यक्तिगत देखभाल",
                "सुरक्षित रहने का माहौल",
                "चिकित्सीय सहायता",
                "भावनात्मक सहारा",
              ],
            },
          ],
        };

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge className="text-sm">{content.badge}</Badge>
          <h2 className="mt-2 mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {content.title}
          </h2>
          <p className="text-muted-foreground">{content.description}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {content.services.map((service) => (
            <ServiceCard key={service.link} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
