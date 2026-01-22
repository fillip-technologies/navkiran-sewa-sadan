import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Home,
  Heart,
  Clock,
  Shield,
  Utensils,
  Activity,
  CheckCircle,
  ArrowRight,
  Phone,
  Stethoscope,
  Smile,
} from "lucide-react";
import { Link } from "react-router-dom";
import FacilityGallery from "@/components/FacilityGallery";
import adultCareImage from "@/assets/adult-care.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryRecreation from "@/assets/gallery-recreation.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryCounseling from "@/assets/gallery-counseling.jpg";
import { Badge } from "@/components/ui/badge";

const AdultHomeCare = () => {
  const services = [
    {
      icon: Clock,
      title: "24/7 Personalized Care",
      description:
        "Round-the-clock attention from trained caregivers who understand individual needs and preferences.",
    },
    {
      icon: Shield,
      title: "Safe Living Environment",
      description:
        "A secure, comfortable living space designed for safety, accessibility, and peace of mind.",
    },
    {
      icon: Stethoscope,
      title: "Medical Assistance",
      description:
        "Regular health monitoring, medication management, and coordination with healthcare providers.",
    },
    {
      icon: Heart,
      title: "Emotional Support",
      description:
        "Companionship and emotional care that addresses the psychological well-being of residents.",
    },
    {
      icon: Utensils,
      title: "Nutrition & Meals",
      description:
        "Balanced, nutritious meals prepared according to dietary requirements and preferences.",
    },
    {
      icon: Activity,
      title: "Activities & Engagement",
      description:
        "Recreational activities and social engagement to maintain mental sharpness and happiness.",
    },
  ];

  const whoWeServe = [
    "Elderly individuals requiring daily assistance",
    "Adults with physical disabilities",
    "Individuals recovering from illness or surgery",
    "Those needing companionship and social support",
    "Adults with cognitive challenges requiring supervision",
  ];

  const galleryImages = [
    {
      src: adultCareImage,
      alt: "Compassionate care for adults",
      title: "Personalized Care",
    },
    { src: galleryBedroom, alt: "Comfortable bedroom", title: "Private Rooms" },
    { src: galleryDining, alt: "Dining area", title: "Community Dining" },
    {
      src: galleryRecreation,
      alt: "Recreation room",
      title: "Recreation Activities",
    },
    {
      src: galleryOutdoor,
      alt: "Outdoor garden",
      title: "Garden & Outdoor Space",
    },
    {
      src: galleryCounseling,
      alt: "Healthcare consultation",
      title: "Medical Support",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={adultCareImage}
            alt="Adult Home Care - Compassionate Care Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
              <Home className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Care & Assistance
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Adult Home Care
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our adult care services provide a warm, supportive living
              environment for individuals who need assistance with daily
              activities. We focus on maintaining dignity, comfort, and quality
              of life while ensuring safety and compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 gap-2"
                asChild
              >
                <Link to="/contact">
                  <Phone className="w-4 h-4" /> Inquire About Care
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-card/50 backdrop-blur-sm"
                onClick={() => {
                  document
                    .getElementById("ourcareservices")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn About Our Care Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-muted/50" id="ourcareservices">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            {/* <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Care Services
            </span> */}
            <Badge className="text-sm"> Our Care Services</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Comprehensive Care with Dignity
            </h2>
            <p className="text-muted-foreground">
              We provide holistic care that addresses physical, emotional, and
              social needs while respecting the dignity and independence of each
              individual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border card-elevated"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 md:py-28 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={galleryRecreation}
                  alt="Residents enjoying recreational activities"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 border border-border shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Smile className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-serif text-lg font-bold text-foreground">
                        A Home Away
                      </p>
                      <p className="text-sm text-muted-foreground">From Home</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              {/* <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Who We Serve
              </span> */}
              <Badge className="text-sm">Who We Serve</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Care for Those Who Need It Most
              </h2>
              <p className="text-muted-foreground mb-8">
                Our adult home care services are designed for individuals who
                need assistance with daily living but deserve to maintain their
                dignity and quality of life.
              </p>

              <ul className="space-y-4">
                {whoWeServe.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <FacilityGallery
        images={galleryImages}
        title="Our Care Home Facilities"
        subtitle="Explore our comfortable, home-like environment designed for safety, dignity, and happiness."
      />

      {/* Our Commitment */}
      <section className="py-16 md:py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Commitment to Your Loved Ones
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Dignity",
                  desc: "Respecting individuality and autonomy",
                },
                {
                  title: "Safety",
                  desc: "Secure environment with proper supervision",
                },
                {
                  title: "Compassion",
                  desc: "Care delivered with empathy and love",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Give Your Loved Ones the Care They Deserve
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact us to learn more about our adult home care services and
              how we can support your family.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-card text-foreground hover:bg-card/90 gap-2"
                asChild
              >
                <Link to="/contact">
                  <Phone className="w-4 h-4" /> Contact Us
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground hover:border-primary-foreground bg-foreground text-white hover:bg-primary-foreground hover:text-foreground gap-2"
                asChild
              >
                <Link to="/nasha-mukti-kendra">
                  View Other Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdultHomeCare;
