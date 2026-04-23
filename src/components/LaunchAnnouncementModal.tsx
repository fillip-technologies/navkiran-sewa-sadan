import { useEffect, useState } from "react";
import announcementImageHindi from "@/assets/navkiran.jpeg";
import announcementImageEnglish from "@/assets/navkiran-english.png";
import { Language, useLanguage } from "@/context/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const ANNOUNCEMENT_SESSION_KEY = "navkiran-launch-announcement-seen";
const ANNOUNCEMENT_DELAY_MS = 700;

const ANNOUNCEMENT_CONTENT: Record<
  Language,
  {
    image: string;
    alt: string;
    title: string;
    description: string;
  }
> = {
  en: {
    image: announcementImageEnglish,
    alt: "Navkiran Seva Sadan launch announcement in English",
    title: "Launch Announcement",
    description: "English launch announcement graphic for Navkiran Seva Sadan.",
  },
  hi: {
    image: announcementImageHindi,
    alt: "Navkiran Seva Sadan launch announcement in Hindi",
    title: "लॉन्च घोषणा",
    description: "नवकिरण सेवा सदन के लिए हिंदी लॉन्च घोषणा ग्राफिक।",
  },
};

const LaunchAnnouncementModal = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const announcement = ANNOUNCEMENT_CONTENT[language];

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.sessionStorage.getItem(ANNOUNCEMENT_SESSION_KEY) === "true") {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, ANNOUNCEMENT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const dismissAnnouncement = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(ANNOUNCEMENT_SESSION_KEY, "true");
    }

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          dismissAnnouncement();
          return;
        }
        setOpen(true);
      }}
    >
      <DialogContent className="w-[calc(100vw-2rem)] max-w-4xl border-0 bg-transparent p-0 shadow-none [&>button]:opacity-100 [&>button]:text-black [&>button>svg]:text-black">
        <DialogTitle className="sr-only">{announcement.title}</DialogTitle>
        <DialogDescription className="sr-only">
          {announcement.description}
        </DialogDescription>
        <img
          src={announcement.image}
          alt={announcement.alt}
          className="w-full h-auto object-contain px-4 sm:px-0"
        />
      </DialogContent>
    </Dialog>
  );
};

export default LaunchAnnouncementModal;
