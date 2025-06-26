
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import ProcessSteps from "@/components/services/ProcessSteps";
import ServiceCTA from "@/components/services/ServiceCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <ServiceHero />
      <ServiceCategories />
      <ProcessSteps />
      <ServiceCTA />
      <Footer />
    </div>
  );
};

export default Services;
