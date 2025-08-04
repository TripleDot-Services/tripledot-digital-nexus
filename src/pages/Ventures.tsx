
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageTransition from "@/components/ui/page-transition";
import ScrollToTop from "@/components/ui/scroll-to-top";
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
    <div className="min-h-screen bg-background text-foreground lg:pl-48 lg:pr-16">
      <SEO 
        title="Ventures - TripleDot"
        description="Our internal innovation and product lab where we build, test, and launch new digital solutions for the future."
        keywords="innovation lab, product development, digital ventures, technology incubator, startup solutions"
      />
      <PageTransition>
        <VentureHero />
        <VentureMetrics />
        <InnovationLab />
        <VentureProcess />
        
        {/* Cross-Pillar Navigation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-neo-orange to-neo-emerald bg-clip-text text-transparent">
              Built on Solid Foundation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 ventures-card-glow transition-all duration-500 hover:scale-105 bg-gradient-to-br from-neo-blue/10 to-neo-blue/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neo-blue to-neo-blue/80 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neo-blue">Services</h3>
                </div>
                <p className="text-muted-foreground mb-6">The reliable infrastructure that powers our innovative ventures.</p>
                <Button className="bg-neo-blue hover:bg-neo-blue/80 transition-all duration-300 hover:shadow-lg hover:shadow-neo-blue/30">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
              
              <div className="glass-card p-8 ventures-card-glow transition-all duration-500 hover:scale-105 bg-gradient-to-br from-neo-purple/10 to-neo-purple/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neo-purple to-neo-purple/80 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neo-purple">Creative</h3>
                </div>
                <p className="text-muted-foreground mb-6">The compelling design and branding that brings ventures to market.</p>
                <Button className="bg-neo-purple hover:bg-neo-purple/80 transition-all duration-300 hover:shadow-lg hover:shadow-neo-purple/30">
                  <Link to="/creative">Explore Creative</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <VentureCTA />
      </PageTransition>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Ventures;
