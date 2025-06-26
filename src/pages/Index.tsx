
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import InteractivePillars from "@/components/home/InteractivePillars";
import FeaturedCaseStudies from "@/components/home/FeaturedCaseStudies";
import QuickFAQ from "@/components/home/QuickFAQ";
import CTASection from "@/components/home/CTASection";
import ClientShowcase from "@/components/ClientShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <HeroSection />
      
      <ClientShowcase />
      
      <InteractivePillars />
      
      <FeaturedCaseStudies />
      
      <QuickFAQ />
      
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
