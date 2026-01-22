import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">N</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif font-semibold text-lg text-foreground leading-tight">
                Navkiran Sewa Sadan
              </h1>
              <p className="text-xs text-muted-foreground">Restoring Hope, Healing Lives</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary text-foreground">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/nasha-mukti-kendra" className="w-full cursor-pointer">
                    Nasha Mukti Kendra
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/adult-home-care" className="w-full cursor-pointer">
                    Adult Home Care
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
              About Us
            </Link>

            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
                Home
              </Link>
              <div className="pl-4 flex flex-col gap-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Services</p>
                <Link
                  to="/nasha-mukti-kendra"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/nasha-mukti-kendra") ? "text-primary" : "text-foreground"
                  }`}
                >
                  Nasha Mukti Kendra
                </Link>
                <Link
                  to="/adult-home-care"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/adult-home-care") ? "text-primary" : "text-foreground"
                  }`}
                >
                  Adult Home Care
                </Link>
              </div>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}
              >
                About Us
              </Link>
              <Button size="sm" className="w-fit bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
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
