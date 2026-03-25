import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface FacilityGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

const FacilityGallery = ({ images, title, subtitle }: FacilityGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { language } = useLanguage();

  const galleryLabel = language === "en" ? "Gallery" : "गैलरी";
  const defaultTitle = language === "en" ? "Our Facilities" : "हमारी सुविधाएं";

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1,
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1,
      );
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge className="text-sm">{galleryLabel}</Badge>
          <h2 className="mt-2 mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {title ?? defaultTitle}
          </h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={`${image.title}-${index}`}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-border"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute right-0 bottom-0 left-0 p-4">
                  <p className="text-sm font-medium text-primary-foreground">
                    {image.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-4 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={(event) => {
                event.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div
              className="max-h-[80vh] max-w-4xl px-4"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="mx-auto max-h-[70vh] max-w-full rounded-lg object-contain"
              />
              <p className="mt-4 text-center font-medium text-primary-foreground">
                {images[selectedIndex].title}
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={(event) => {
                event.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacilityGallery;
