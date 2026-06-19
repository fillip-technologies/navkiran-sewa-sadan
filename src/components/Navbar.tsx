import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import navkiranLogo from "@/assets/Navkiran-LOGO-png.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, otherLanguageLabel } = useLanguage();

  const content =
    language === "en"
      ? {
          brand: "Navkiran Seva Sadan",
          tagline: "Restoring Hope, Healing Lives",
          home: "Home",
          services: "Services",
          nashaMuktiKendra: "Nasha Mukti Kendra",
          adultHomeCare: "Old Age Home Care",
          about: "About Us",
          contact: "Contact Us",
          switchLanguage: "Switch website language",
        }
      : {
          brand: "नवकिरण सेवा सदन",
          tagline: "उम्मीद लौटाएं, जीवन संवारें",
          home: "होम",
          services: "सेवाएं",
          nashaMuktiKendra: "नशा मुक्ति केंद्र",
          adultHomeCare: "बुजुर्ग देखभाल सेवा",
          about: "हमारे बारे में",
          contact: "संपर्क करें",
          switchLanguage: "वेबसाइट की भाषा बदलें",
        };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" aria-label="Navkiran Seva Sadan home">
            <img
              src={navkiranLogo}
              alt="Navkiran Seva Sadan"
              className="h-12 w-auto object-contain md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              {content.home}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary text-foreground">
                {content.services} <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem asChild>
                  <Link
                    to="/nasha-mukti-kendra"
                    className="w-full cursor-pointer"
                  >
                    {content.nashaMuktiKendra}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/adult-home-care" className="w-full cursor-pointer">
                    {content.adultHomeCare}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              {content.about}
            </Link>

            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link to="/contact">{content.contact}</Link>
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="min-w-24 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={toggleLanguage}
              aria-label={content.switchLanguage}
            >
              <Globe className="w-4 h-4" />
              {otherLanguageLabel}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              size="sm"
              variant="outline"
              className="h-10 rounded-full border-primary/30 bg-background/80 px-3 text-xs font-semibold text-primary shadow-sm hover:bg-primary hover:text-primary-foreground"
              onClick={toggleLanguage}
              aria-label={content.switchLanguage}
            >
              <Globe className="h-3.5 w-3.5" />
              {otherLanguageLabel}
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
              >
                {content.home}
              </Link>
              <div className="pl-4 flex flex-col gap-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {content.services}
                </p>
                <Link
                  to="/nasha-mukti-kendra"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/nasha-mukti-kendra")
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {content.nashaMuktiKendra}
                </Link>
                <Link
                  to="/adult-home-care"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/adult-home-care")
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {content.adultHomeCare}
                </Link>
              </div>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}
              >
                {content.about}
              </Link>
              <Button
                size="sm"
                className="w-fit bg-primary hover:bg-primary/90"
                asChild
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  {content.contact}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
