import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          title: "Oops! Page not found",
          cta: "Return to Home",
        }
      : {
          title: "यह पेज नहीं मिला",
          cta: "होम पेज पर जाएं",
        };

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{content.title}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {content.cta}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
