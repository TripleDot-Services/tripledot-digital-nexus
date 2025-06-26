
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import ProcessSteps from "@/components/services/ProcessSteps";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Lightbulb } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <ServiceHero />
      <ServiceCategories />
      <ProcessSteps />
      
      {/* Cross-Pillar Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Explore Our Other Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-800/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-400">Creative</h3>
              </div>
              <p className="text-gray-300 mb-6">Transform your brand with compelling design and content that converts.</p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Link to="/creative">Explore Creative</Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 p-8 rounded-2xl border border-emerald-800/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400">Ventures</h3>
              </div>
              <p className="text-gray-300 mb-6">Discover cutting-edge innovations and join our innovation ecosystem.</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Link to="/ventures">Explore Ventures</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <ServiceCTA />
      <Footer />
    </div>
  );
};

export default Services;
