
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollToTop from "@/components/ui/scroll-to-top";
import PageTransition from "@/components/ui/page-transition";
import HeroSection from "@/components/home/HeroSection";
import InteractivePillars from "@/components/home/InteractivePillars";
import SocialProof from "@/components/home/SocialProof";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="TripleDot - Services, Creative, Ventures"
        description="Reliable infrastructure, captivating design, and innovative solutions working together to transform your business."
        keywords="digital transformation, web development, creative design, innovation, technology ventures"
      />
      <Navigation />
      <PageTransition>
        <HeroSection />
        <InteractivePillars />
        <SocialProof />
        <CTASection />
      </PageTransition>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
