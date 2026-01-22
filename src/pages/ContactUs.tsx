import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactBg from "@/assets/contact-bg.jpg";
import { PHONE_NUMBER } from "@/constant/contact";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you soon.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 7004775368"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@navkiransewasadan.org", "support@navkiransewasadan.org"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Navkiran Sewa Sadan", "City, State, PIN Code"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Emergency Support", "Office: 9 AM - 6 PM"],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactBg}
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/50 border border-border rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Get in Touch
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're here to help. Reach out to us for any inquiries about our
              services, to seek help, or to learn how you can support our cause.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            {/* <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div> */}

            {/* Contact Info */}
            <div className="space-y-10">
              {/* Header */}
              <div className="max-w-xl">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Feel free to reach out through any of the following channels.
                  We are available{" "}
                  <span className="font-medium text-foreground">24/7</span> for
                  emergency support.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex flex-col gap-4 rounded-2xl border border-borderbg-muted/40 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-muted/60"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground tracking-tight">
                        {info.title}
                      </h3>

                      {info.details.map((detail, i) => (
                        <p
                          key={i}
                          className="text-sm text-muted-foreground leading-snug"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl overflow-hidden shadow-soft h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9898673012!2d85.1350!3d25.6093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzMzLjUiTiA4NcKwMDgnMDYuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Domus Cure Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
              Need Immediate Help?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our helpline is available 24/7 for those seeking urgent assistance
              or support.
            </p>
            <a href={`tel:+${PHONE_NUMBER}`}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                <Phone className="w-4 h-4" /> Call Emergency Helpline
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
