import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

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

const FacilityGallery = ({
  images,
  title = "Our Facilities",
  subtitle,
}: FacilityGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Gallery
          </span> */}
          <Badge className="text-sm">Gallery</Badge>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-border"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-primary-foreground text-sm font-medium">
                    {image.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <div
              className="max-w-4xl max-h-[80vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg mx-auto"
              />
              <p className="text-primary-foreground text-center mt-4 font-medium">
                {images[selectedIndex].title}
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacilityGallery;
