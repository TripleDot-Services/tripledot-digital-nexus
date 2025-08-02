
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CreativeHero from "@/components/creative/CreativeHero";
import CreativeShowcase from "@/components/creative/CreativeShowcase";
import CreativeProcess from "@/components/creative/CreativeProcess";
import CreativeCTA from "@/components/creative/CreativeCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Lightbulb } from "lucide-react";

const Creative = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Creative - TripleDot"
        description="Design that converts. Content that captivates. Brands that inspire. Professional creative services for modern businesses."
        keywords="web design, brand identity, content creation, digital marketing, creative services"
      />
      <Navigation />
      <CreativeHero />
      <CreativeShowcase />
      <CreativeProcess />
      
      {/* Cross-Pillar Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Complete Your Digital Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-8 rounded-2xl border border-blue-800/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Services</h3>
              </div>
              <p className="text-gray-300 mb-6">Build the reliable foundation your creative vision needs to thrive.</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 p-8 rounded-2xl border border-emerald-800/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400">Ventures</h3>
              </div>
              <p className="text-gray-300 mb-6">Push creative boundaries with innovative solutions and emerging technologies.</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Link to="/ventures">Explore Ventures</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <CreativeCTA />
      <Footer />
    </div>
  );
};

export default Creative;
