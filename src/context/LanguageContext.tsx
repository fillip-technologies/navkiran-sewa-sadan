import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Language = "en" | "hi";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  otherLanguageLabel: string;
}

const LANGUAGE_STORAGE_KEY = "navkiran-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "hi" ? "hi" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        otherLanguageLabel: language === "en" ? "हिंदी" : "English",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
