import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  HeartHandshake,
  Users,
  Clock,
  Shield,
  Brain,
  Activity,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import FacilityGallery from "@/components/FacilityGallery";
import rehabCenterImage from "@/assets/rehab-center.jpg";
import galleryCounseling from "@/assets/gallery-counseling.jpg";
import galleryGroupTherapy from "@/assets/gallery-group-therapy.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryExercise from "@/assets/gallery-exercise.jpg";
import { PHONE_NUMBER } from "@/constant/contact";
import { Badge } from "@/components/ui/badge";

const NashaMuktiKendra = () => {
  const features = [
    {
      icon: Brain,
      title: "Professional Counseling",
      description:
        "One-on-one and group therapy sessions with trained counselors to address underlying issues and develop coping strategies.",
    },
    {
      icon: Activity,
      title: "Structured Rehabilitation",
      description:
        "A comprehensive program that includes daily routines, discipline, and activities designed to rebuild healthy habits.",
    },
    {
      icon: Users,
      title: "Family Support",
      description:
        "We involve families in the recovery process through counseling sessions and educational programs.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description:
        "A secure, substance-free environment where individuals can focus entirely on their recovery journey.",
    },
    {
      icon: Clock,
      title: "24/7 Care",
      description:
        "Round-the-clock supervision and support from our dedicated staff ensures help is always available.",
    },
    {
      icon: HeartHandshake,
      title: "Aftercare Planning",
      description:
        "We prepare individuals for life after rehabilitation with support systems and follow-up care.",
    },
  ];

  const process = [
    "Initial assessment and personalized treatment planning",
    "Detoxification support in a safe, monitored environment",
    "Individual and group counseling sessions",
    "Life skills training and vocational guidance",
    "Physical wellness activities and recreation",
    "Family involvement and education programs",
    "Gradual reintegration with ongoing support",
  ];

  const galleryImages = [
    {
      src: rehabCenterImage,
      alt: "Meditation and wellness room",
      title: "Meditation Room",
    },
    {
      src: galleryCounseling,
      alt: "Counseling session",
      title: "Counseling Sessions",
    },
    {
      src: galleryGroupTherapy,
      alt: "Group therapy session",
      title: "Group Therapy",
    },
    {
      src: galleryOutdoor,
      alt: "Outdoor garden area",
      title: "Garden & Outdoor Space",
    },
    {
      src: galleryExercise,
      alt: "Exercise and fitness area",
      title: "Fitness Center",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={rehabCenterImage}
            alt="Nasha Mukti Kendra - Rehabilitation Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/10" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
              <HeartHandshake className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                De-Addiction & Rehabilitation
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nasha Mukti Kendra
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our de-addiction center provides a compassionate, judgment-free
              environment where individuals can overcome substance dependency
              and rebuild their lives. With professional guidance and
              comprehensive support, we help individuals rediscover hope and
              reclaim their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 gap-2"
                asChild
              >
                <Link to="/contact">
                  <Phone className="w-4 h-4" /> Get Help Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-card/50 backdrop-blur-sm"
                onClick={() => {
                  document
                    .getElementById("ournashapproach")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn About Our Approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28 bg-muted/50" id="ournashapproach">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            {/* <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Approach
            </span> */}
            <Badge className="text-sm"> Our Approach</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Compassionate Care for Recovery
            </h2>
            <p className="text-muted-foreground">
              We understand that addiction is a complex challenge. Our holistic
              approach addresses physical, emotional, and psychological aspects
              of recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border card-elevated"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              {/* <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Recovery Journey
              </span> */}
              <Badge className="text-sm"> Recovery Journey</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Your Path to Freedom
              </h2>
              <p className="text-muted-foreground mb-8">
                Recovery is a journey, not a destination. Our structured program
                guides individuals through each step, providing the tools and
                support needed for lasting change.
              </p>

              <ul className="space-y-4">
                {process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src={galleryGroupTherapy}
                alt="Group therapy session at Nasha Mukti Kendra"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 border border-border shadow-lg max-w-xs">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  A Message of Hope
                </h3>
                <p className="text-sm text-muted-foreground italic">
                  "Recovery is possible. You are not alone in this journey."
                </p>
                <p className="text-xs text-primary font-medium mt-2">
                  — Navkiran Sewa Sadan Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <FacilityGallery
        images={galleryImages}
        title="Our Rehabilitation Facilities"
        subtitle="Take a virtual tour of our peaceful, healing environment designed to support your recovery journey."
      />

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Take the First Step Today
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Whether you're seeking help for yourself or a loved one, we're
              here to support you with compassion and understanding.
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
                <Link to="/adult-home-care">
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

export default NashaMuktiKendra;
