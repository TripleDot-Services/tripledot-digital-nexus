
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import ProcessSteps from "@/components/services/ProcessSteps";
import ServiceCTA from "@/components/services/ServiceCTA";
import CrossPillarNavigation from "@/components/ui/cross-pillar-navigation";
import { servicesPagePillars } from "@/data/pillars";

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <ServiceHero />
      <ServiceCategories />
      <ProcessSteps />
      
      <CrossPillarNavigation
        title="Explore Our Other Pillars"
        pillars={servicesPagePillars}
        pillarThemes={["purple", "emerald"]}
      />
      
      <ServiceCTA />
      <Footer />
    </div>
  );
};

export default Services;
