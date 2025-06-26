
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import InteractivePillars from "@/components/home/InteractivePillars";
import SocialProof from "@/components/home/SocialProof";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <InteractivePillars />
      <SocialProof />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
