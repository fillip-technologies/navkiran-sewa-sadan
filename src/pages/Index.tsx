import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Seo from "@/components/Seo";
import { seoData } from "@/constants/seo";

const Index = () => {
  return (
    <Layout>
      <Seo {...seoData.home} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
