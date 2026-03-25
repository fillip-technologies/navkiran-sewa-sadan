import { Link } from "react-router-dom";
import {
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { PHONE_NUMBER } from "@/constant/contact";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          brand: "Navkiran Sewa Sadan",
          description:
            "A non-profit organization committed to supporting people in their journey toward recovery, dignity, and a better quality of life.",
          quickLinks: "Quick Links",
          links: {
            home: "Home",
            about: "About Us",
            nashaMuktiKendra: "Nasha Mukti Kendra",
            adultHomeCare: "Old Age Home Care",
            contact: "Contact Us",
          },
          getInTouch: "Get In Touch",
          supportText:
            "Reach out to us for support or to learn more about our services.",
          addressLines: ["Navkiran Sewa Sadan", "Patna, Bihar, India"],
          copyright: "Navkiran Sewa Sadan. All rights reserved.",
          madeWith: "Made with",
          madeForHumanity: "for humanity.",
          developedBy: "Developed by Fillip Technologies Pvt. Ltd.",
        }
      : {
          brand: "नवकिरण सेवा सदन",
          description:
            "एक सेवा संस्था जो लोगों को सुधार, सम्मान और बेहतर जीवन की ओर बढ़ने में सहारा देती है।",
          quickLinks: "त्वरित लिंक",
          links: {
            home: "होम",
            about: "हमारे बारे में",
            nashaMuktiKendra: "नशा मुक्ति केंद्र",
            adultHomeCare: "बुजुर्ग देखभाल सेवा",
            contact: "संपर्क करें",
          },
          getInTouch: "संपर्क में रहें",
          supportText:
            "मदद पाने या हमारी सेवाओं के बारे में जानने के लिए हमसे संपर्क करें।",
          addressLines: ["नवकिरण सेवा सदन", "पटना, बिहार, भारत"],
          copyright: "नवकिरण सेवा सदन। सभी अधिकार सुरक्षित।",
          madeWith: "दिल से",
          madeForHumanity: "मानवता की सेवा के लिए।",
          developedBy: "विकसित किया: Fillip Technologies Pvt. Ltd.",
        };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="font-serif text-lg font-bold text-primary-foreground">
                  N
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold">{content.brand}</h3>
            </div>
            <p className="text-sm leading-relaxed text-background/70">
              {content.description}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition hover:border-primary hover:bg-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition hover:border-primary hover:bg-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition hover:border-primary hover:bg-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition hover:border-primary hover:bg-primary"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-serif font-semibold">{content.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  {content.links.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  {content.links.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/nasha-mukti-kendra"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  {content.links.nashaMuktiKendra}
                </Link>
              </li>
              <li>
                <Link
                  to="/adult-home-care"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  {content.links.adultHomeCare}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  {content.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif font-semibold">{content.getInTouch}</h4>
            <p className="mb-5 text-sm text-background/70">{content.supportText}</p>

            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  {content.addressLines[0]},
                  <br />
                  {content.addressLines[1]}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href={`tel:+${PHONE_NUMBER}`}
                  className="transition hover:text-background"
                >
                  +91 7004775368
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:contact@navkiransewasadan.org"
                  className="transition hover:text-background"
                >
                  contact@navkiransewasadan.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-background/20 pt-8 md:flex-row">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} {content.copyright}
          </p>
          <p className="hidden items-center gap-1 text-sm text-background/60 md:flex">
            {content.madeWith}{" "}
            <Heart className="h-4 w-4 fill-red-600 text-red-600" />{" "}
            {content.madeForHumanity}
          </p>
          <a href="https://filliptechnologies.com/" target="_blank" rel="noreferrer">
            <p className="text-sm text-background/60 hover:text-background">
              {content.developedBy}
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
