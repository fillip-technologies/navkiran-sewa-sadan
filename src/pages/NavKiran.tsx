import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { PHONE_NUMBER } from "@/constant/contact";
import heroImage from "@/assets/navkiran-6.jpeg";

const services = [
  {
    icon: HeartHandshake,
    title: "Nasha Mukti Kendra",
    description:
      "Structured de-addiction support, counselling, and compassionate care in a safe environment.",
  },
  {
    icon: UsersRound,
    title: "Old Age Home Care",
    description:
      "Respectful daily assistance and a caring community where senior citizens can feel at home.",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
    description:
      "Our team remains available around the clock to provide guidance, care, and reassurance.",
  },
];

const benefits = [
  "Experienced and compassionate care team",
  "Safe, supportive, and peaceful environment",
  "Personalised care and recovery plans",
  "Confidential guidance for every family",
];

const NavKiran = () => {
  return (
    <Layout>
      <div className="bg-background text-foreground">
        <section className="relative flex min-h-[92vh] items-center overflow-hidden">
          <img
            src={heroImage}
            alt="Care and support at Navkiran Seva Sadan"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />

          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="max-w-3xl text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Trusted care in Patna
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Care, dignity, and a new beginning
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                Navkiran Seva Sadan provides compassionate rehabilitation and
                elderly care designed to help individuals and families move
                toward a healthier, more hopeful life.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="gap-2 rounded-full px-7">
                  <a href={`tel:+${PHONE_NUMBER}`}>
                    Speak With Our Team <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full border-white/40 bg-white/10 px-7 text-white hover:bg-white hover:text-foreground"
                >
                  <a href="#services">Explore Our Services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                How we help
              </p>
              <h2 className="font-serif text-3xl font-bold md:text-5xl">
                Compassionate support for every stage of life
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-transform hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold">{title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-20 md:py-28">
          <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Why Navkiran
              </p>
              <h2 className="font-serif text-3xl font-bold md:text-5xl">
                A place where care feels personal
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                For more than a decade, our work has been guided by empathy,
                responsibility, and respect for every individual who comes to us.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm md:p-9">
              <ul className="space-y-5">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-center text-background md:px-12 md:py-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Take the first step
              </p>
              <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold md:text-5xl">
                A better tomorrow can begin with one conversation
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-background/70">
                Contact our team for confidential guidance about rehabilitation or elderly care.
              </p>
              <Button size="lg" asChild className="mt-8 gap-2 rounded-full px-7">
                <a href={`tel:+${PHONE_NUMBER}`}>
                  <Phone className="h-4 w-4" /> Call +91 9955901593
                </a>
              </Button>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-background/65">
                <MapPin className="h-4 w-4 text-primary" /> Patna, Bihar
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NavKiran;
