import { useEffect, useState } from "react";
import announcementImage from "@/assets/navkiran.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const ANNOUNCEMENT_SESSION_KEY = "navkiran-launch-announcement-seen";
const ANNOUNCEMENT_DELAY_MS = 700;

const LaunchAnnouncementModal = () => {
  const [open, setOpen] = useState(false);

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
      <DialogContent className="w-full p-0 border-0 bg-transparent shadow-none [&>button]:text-black [&>button]:opacity-100 [&>button_svg]:text-black">
        <img
          src={announcementImage}
          alt="Navkiran Sewa Sadan launch announcement"
          className="w-full h-auto object-contain px-4 sm:px-0"
        />
      </DialogContent>
    </Dialog>
  );
};

export default LaunchAnnouncementModal;
