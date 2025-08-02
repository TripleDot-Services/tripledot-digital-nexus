
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import VentureHero from "@/components/ventures/VentureHero";
import VentureMetrics from "@/components/ventures/VentureMetrics";
import InnovationLab from "@/components/ventures/InnovationLab";
import VentureProcess from "@/components/ventures/VentureProcess";
import VentureCTA from "@/components/ventures/VentureCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Palette } from "lucide-react";

const Ventures = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Ventures - TripleDot"
        description="Our internal innovation and product lab where we build, test, and launch new digital solutions for the future."
        keywords="innovation lab, product development, digital ventures, technology incubator, startup solutions"
      />
      <Navigation />
      <VentureHero />
      <VentureMetrics />
      <InnovationLab />
      <VentureProcess />
      
      {/* Cross-Pillar Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Built on Solid Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-8 rounded-2xl border border-blue-800/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Services</h3>
              </div>
              <p className="text-gray-300 mb-6">The reliable infrastructure that powers our innovative ventures.</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-800/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-400">Creative</h3>
              </div>
              <p className="text-gray-300 mb-6">The compelling design and branding that brings ventures to market.</p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Link to="/creative">Explore Creative</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <VentureCTA />
      <Footer />
    </div>
  );
};

export default Ventures;
