
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VentureHero from "@/components/ventures/VentureHero";
import VentureMetrics from "@/components/ventures/VentureMetrics";
import InnovationLab from "@/components/ventures/InnovationLab";
import VentureProcess from "@/components/ventures/VentureProcess";
import VentureCTA from "@/components/ventures/VentureCTA";

const Ventures = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <VentureHero />
      <VentureMetrics />
      <InnovationLab />
      <VentureProcess />
      <VentureCTA />
      <Footer />
    </div>
  );
};

export default Ventures;
