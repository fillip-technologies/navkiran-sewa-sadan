import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Target,
  Eye,
  Award,
  HandHeart,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import aboutTeamImage from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-image.jpg";
import { PHONE_NUMBER } from "@/constant/contact";
import { Badge } from "@/components/ui/badge";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We treat every individual with empathy, understanding, and genuine care.",
    },
    {
      icon: Award,
      title: "Dignity",
      description:
        "We uphold the dignity and respect of every person we serve.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We believe in the power of community support for healing and growth.",
    },
    {
      icon: HandHeart,
      title: "Service",
      description:
        "We are committed to selfless service for the betterment of society.",
    },
  ];

  const team = [
    {
      role: "Founder & Director",
      description: "Leading with vision and compassion",
    },
    { role: "Medical Team", description: "Professional healthcare support" },
    { role: "Counselors", description: "Emotional and psychological guidance" },
    { role: "Care Staff", description: "24/7 dedicated caregivers" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Navkiran Sewa Sadan"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/50 border border-border rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                About Us
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Navkiran Sewa Sadan is a non-profit organization committed to
              supporting individuals in their journey toward recovery, dignity,
              and a better quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutTeamImage}
                alt="Our dedicated team at Navkiran Sewa Sadan"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Our Mission
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide compassionate care, rehabilitation, and support
                  services to individuals in need, helping them rebuild their
                  lives with dignity and hope. We strive to create a safe,
                  nurturing environment where healing can flourish.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Our Vision
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A society where every individual has access to quality care
                  and the opportunity to live a life of dignity, free from
                  addiction and with proper support for those who need
                  assistance in their daily lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Story
            </span> */}
            <Badge className="text-sm">Our Story</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bour old text-foreground mt-2 mb-6">
              A Journey of Compassion
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-left">
              <p>
                Navkiran Sewa Sadan was founded with a simple yet profound
                vision: to serve those who need it most. Our journey began over
                a decade ago when we recognized the growing need for
                compassionate care services in our community.
              </p>
              <p>
                What started as a small initiative has grown into a
                comprehensive care organization offering de-addiction
                rehabilitation and adult home care services. Throughout our
                journey, we have touched the lives of over 500 individuals and
                their families.
              </p>
              <p>
                Today, we continue to expand our services while staying true to
                our core values of compassion, dignity, and community service.
                Every life we touch reinforces our commitment to making a
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            {/* <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span> */}
            <Badge className="text-sm">Our Values</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Guides Us
            </h2>
            <p className="text-muted-foreground">
              These core values are the foundation of everything we do at
              Navkiran Sewa Sadan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center card-elevated"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            {/* <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Team
            </span> */}
            <Badge className="text-sm">Our Team</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Dedicated Professionals
            </h2>
            <p className="text-muted-foreground">
              Our team of caring professionals is committed to providing the
              highest quality of care and support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {member.role}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Us in Making a Difference
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Whether you want to learn more about our services, volunteer, or
              support our cause, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:+${PHONE_NUMBER}`}>
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
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground hover:border-primary-foreground bg-foreground text-white hover:bg-primary-foreground hover:text-foreground gap-2"
                asChild
              >
                <Link to="/#services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
