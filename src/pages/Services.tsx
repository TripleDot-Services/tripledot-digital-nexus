
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingTiers from "@/components/PricingTiers";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import ProcessSteps from "@/components/services/ProcessSteps";
import GrowthRoadmap from "@/components/services/GrowthRoadmap";
import ServiceCTA from "@/components/services/ServiceCTA";
import AutomationShowcase from "@/components/AutomationShowcase";
import InteractiveDemo from "@/components/InteractiveDemo";
import ServiceComparison from "@/components/ServiceComparison";

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <ServiceHero />
      <ServiceCategories />
      <ProcessSteps />
      <AutomationShowcase />
      <InteractiveDemo />
      <ServiceComparison />
      <PricingTiers />
      <GrowthRoadmap />
      <ServiceCTA />

      <Footer />
    </div>
  );
};

export default Services;
