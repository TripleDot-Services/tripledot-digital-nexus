
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CreativeHero from "@/components/creative/CreativeHero";
import CreativeShowcase from "@/components/creative/CreativeShowcase";
import CreativeProcess from "@/components/creative/CreativeProcess";
import CreativeCTA from "@/components/creative/CreativeCTA";

const Creative = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <CreativeHero />
      <CreativeShowcase />
      <CreativeProcess />
      <CreativeCTA />
      <Footer />
    </div>
  );
};

export default Creative;
