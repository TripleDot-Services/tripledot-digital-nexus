
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import ProcessSteps from "@/components/services/ProcessSteps";
import ServiceCTA from "@/components/services/ServiceCTA";
import GrowthRoadmap from "@/components/services/GrowthRoadmap";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import CrossPillarNavigation from "@/components/ui/cross-pillar-navigation";
import SEO from "@/components/SEO";
import { servicesPagePillars } from "@/data/pillars";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Services - TripleDot"
        description="Technology solutions that work. Digital enablement, managed hosting, security, and workflow automation services to power your business growth."
        keywords="managed hosting, cloud services, digital transformation, IT services, workflow automation, security services"
        url={window.location.href}
      />
      <Navigation />
      <ServiceHero />
      <ServiceCategories />
      <ProcessSteps />
      <CaseStudies />
      <Testimonials />
      <GrowthRoadmap />
      
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
