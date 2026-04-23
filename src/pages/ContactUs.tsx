import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Clock, Heart, Mail, MapPin, Phone } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";
import { PHONE_NUMBER } from "@/constant/contact";
import { useLanguage } from "@/context/LanguageContext";

const ContactUs = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          hero: {
            imageAlt: "Contact Navkiran Seva Sadan",
            badge: "Get in Touch",
            title: "Contact Us",
            description:
              "We are here to help. Reach out for any questions about our services, urgent support, or ways to stand with our cause.",
          },
          info: {
            title: "Contact Information",
            description:
              "Feel free to connect with us through any of these channels. We are available 24/7 for urgent support.",
            cards: [
              {
                title: "Phone",
                details: ["+91 7004775368"],
              },
              {
                title: "Email",
                details: [
                  "info@navkiransewasadan.org",
                  "support@navkiransewasadan.org",
                ],
              },
              {
                title: "Address",
                details: ["Navkiran Seva Sadan", "Patna, Bihar, India"],
              },
              {
                title: "Hours",
                details: ["24/7 Emergency Support", "Office: 9 AM - 6 PM"],
              },
            ],
            mapTitle: "Navkiran Seva Sadan Location",
          },
          emergency: {
            title: "Need Immediate Help?",
            description:
              "Our helpline is available 24/7 for people seeking urgent assistance or support.",
            cta: "Call Emergency Helpline",
          },
        }
      : {
          hero: {
            imageAlt: "नवकिरण सेवा सदन से संपर्क करें",
            badge: "संपर्क में रहें",
            title: "संपर्क करें",
            description:
              "हम आपकी मदद के लिए यहां हैं। हमारी सेवाओं, जरूरी सहायता या हमारे काम का साथ देने के बारे में जानने के लिए संपर्क करें।",
          },
          info: {
            title: "संपर्क जानकारी",
            description:
              "आप इनमें से किसी भी माध्यम से हमसे जुड़ सकते हैं। जरूरी सहायता के लिए हम 24/7 उपलब्ध हैं।",
            cards: [
              {
                title: "फोन",
                details: ["+91 7004775368"],
              },
              {
                title: "ईमेल",
                details: [
                  "info@navkiransewasadan.org",
                  "support@navkiransewasadan.org",
                ],
              },
              {
                title: "पता",
                details: ["नवकिरण सेवा सदन", "पटना, बिहार, भारत"],
              },
              {
                title: "समय",
                details: ["24/7 जरूरी सहायता", "ऑफिस: सुबह 9 बजे - शाम 6 बजे"],
              },
            ],
            mapTitle: "नवकिरण सेवा सदन का स्थान",
          },
          emergency: {
            title: "तुरंत मदद चाहिए?",
            description:
              "जरूरी सहायता या सहारे के लिए हमारी हेल्पलाइन 24/7 उपलब्ध है।",
            cta: "जरूरी हेल्पलाइन पर कॉल करें",
          },
        };

  const contactInfo = [
    { icon: Phone, ...content.info.cards[0] },
    { icon: Mail, ...content.info.cards[1] },
    { icon: MapPin, ...content.info.cards[2] },
    { icon: Clock, ...content.info.cards[3] },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={contactBg}
            alt={content.hero.imageAlt}
            className="h-full w-full object-cover opacity-30"
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

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="max-w-xl">
              <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">
                {content.info.title}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {content.info.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-muted/40 p-6 transition-all hover:-translate-y-1 hover:bg-muted/60 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-semibold tracking-tight text-foreground">
                      {info.title}
                    </h3>

                    {info.details.map((detail) => (
                      <p
                        key={detail}
                        className="text-sm leading-snug text-muted-foreground"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="h-96 overflow-hidden rounded-xl bg-card shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9898673012!2d85.1350!3d25.6093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzMzLjUiTiA4NcKwMDgnMDYuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={content.info.mapTitle}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="mb-4 font-serif text-xl font-bold text-foreground md:text-2xl">
              {content.emergency.title}
            </h3>
            <p className="mb-6 text-muted-foreground">
              {content.emergency.description}
            </p>
            <a href={`tel:+${PHONE_NUMBER}`}>
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <Phone className="h-4 w-4" /> {content.emergency.cta}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
