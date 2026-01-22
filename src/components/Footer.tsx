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

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">
                  N
                </span>
              </div>
              <h3 className="font-serif font-semibold text-lg">
                Navkiran Sewa Sadan
              </h3>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              A non-profit organization committed to supporting individuals in
              their journey toward recovery, dignity, and a better quality of
              life.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/nasha-mukti-kendra"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Nasha Mukti Kendra
                </Link>
              </li>
              <li>
                <Link
                  to="/adult-home-care"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Adult Home Care
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Get In Touch</h4>
            <p className="text-sm text-background/70 mb-5">
              Reach out to us for support or to learn more about our services.
            </p>

            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Navkiran Sewa Sadan,
                  <br />
                  Patna, Bihar, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+919999999999"
                  className="hover:text-background transition"
                >
                  +91 7004775368
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contact@navkiransewasadan.org"
                  className="hover:text-background transition"
                >
                  contact@navkiransewasadan.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Navkiran Sewa Sadan. All rights
            reserved.
          </p>
          <p className="text-sm text-background/60 md:flex items-center gap-1 hidden">
            Made with <Heart className="w-4 h-4 text-red-600 fill-red-600" />{" "}
            for humanity.
          </p>
          <a href="https://filliptechnologies.com/" target="_blank">
            <p className="text-background/60 text-sm hover:text-background">
              Developed by Fillip Technologies Pvt. Ltd.
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
