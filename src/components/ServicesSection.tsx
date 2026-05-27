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
            "Renowned as the best Drug Rehab Center in Patna, we stand by you in challenging times, supporting compassionate care, healing, and a loving life with dignity.",
          services: [
            {
              title: "Drug De-Addiction Center (Nasha Mukti Kendra)",
              description:
                "Our Drug De addiction Center in Patna and rehabilitation center is dedicated to providing complete support to individuals overcoming substance abuse. Here, we prioritise recovery in a safe, harmonious, and respectful environment.",
              icon: HeartHandshake,
              link: "/nasha-mukti-kendra",
              features: [
                "Expert Counselling",
                "Supportive Rehabilitation Programs",
                "Family Support Session",
                "Postcare Planning",
              ],
            },
            {
              title: "Elderly Care Services",
              description:
                "As the best old age home in Patna, we provide a safe and supportive living environment for senior citizens who require assistance with daily activities. Primarily, our luxury old age home in Patna prioritises credible, comfortable, compassionate care for the elderly, ensuring a better quality of life.",
              icon: Home,
              link: "/adult-home-care",
              features: [
                "Secure Living Space",
                "Medical Assistance",
                "Emotional Care",
                "24/7 Personalised Care",
              ],
            },
          ],
        }
      : {
          badge: "हमारी सेवाएं",
          title: "हम कैसे मदद करते हैं",
          description:
            "पटना में नशा मुक्ति केंद्र एक भरोसेमंद संस्था के रूप में हर कठिन परिस्थिति में आपके साथ खड़ी रहती है और सहयोग, उपचार और देखभाल के साथ जीवन को नई दिशा देने में मदद करती है।",
          services: [
            {
              title: "नशा मुक्ति केंद्र",
              description:
                "हमारा पटना नशा इलाज केंद्र एवं पुनर्वास सहायता नशे की लत से जूझ रहे व्यक्तियों को संपूर्ण सहयोग प्रदान करने के लिए समर्पित है। यहाँ हम एक सुरक्षित, शांत और सम्मानजनक वातावरण में उपचार और सुधार को प्राथमिकता देते हैं, ताकि हर व्यक्ति एक नई और बेहतर शुरुआत कर सके।",
              icon: HeartHandshake,
              link: "/nasha-mukti-kendra",
              features: [
                "विशेषज्ञ परामर्श",
                "सहायक पुनर्वास कार्यक्रम",
                "परिवार सहयोग सत्र",
                "पुनः देखभाल योजना",
              ],
            },
            {
              title: "बुजुर्ग देखभाल सेवा",
              description:
                "पटना स्थित हमारा वृद्धाश्रम उन वरिष्ठ नागरिकों के लिए एक सुरक्षित और सहायक निवास प्रदान करता है, जिन्हें दैनिक गतिविधियों में सहायता की आवश्यकता होती है। हम विश्वसनीय, आरामदायक और करुणामय देखभाल को प्राथमिकता देते हैं, ताकि हर बुजुर्ग को बेहतर जीवन मिल सके।",
              icon: Home,
              link: "/adult-home-care",
              features: [
                "सुरक्षित वातावरण",
                "चिकित्सीय सहायता",
                "भावनात्मक देखभाल",
                "24/7 व्यक्तिगत देखभाल",
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
