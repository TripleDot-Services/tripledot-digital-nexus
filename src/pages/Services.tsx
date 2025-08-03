
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import ProcessSteps from "@/components/services/ProcessSteps";
import ServiceCTA from "@/components/services/ServiceCTA";

import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import CrossPillarNavigation from "@/components/ui/cross-pillar-navigation";
import PageTransition from "@/components/ui/page-transition";
import ScrollToTop from "@/components/ui/scroll-to-top";
import SEO from "@/components/SEO";
import { servicesPagePillars } from "@/data/pillars";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pl-16 pr-16">
      <SEO 
        title="Services - TripleDot"
        description="Technology solutions that work. Digital enablement, managed hosting, security, and workflow automation services to power your business growth."
        keywords="managed hosting, cloud services, digital transformation, IT services, workflow automation, security services"
        url={window.location.href}
      />
      <PageTransition>
        <ServiceHero />
        <ServiceCategories />
        <ProcessSteps />
        <CaseStudies />
        <Testimonials />
        
        
        <CrossPillarNavigation
          title="Explore Our Other Pillars"
          pillars={servicesPagePillars}
          pillarThemes={["purple", "emerald"]}
        />
        
        <ServiceCTA />
      </PageTransition>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;
