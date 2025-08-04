
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageTransition from "@/components/ui/page-transition";
import ScrollToTop from "@/components/ui/scroll-to-top";
import CreativeHero from "@/components/creative/CreativeHero";
import CreativeShowcase from "@/components/creative/CreativeShowcase";
import CreativeProcess from "@/components/creative/CreativeProcess";
import CreativeCTA from "@/components/creative/CreativeCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Lightbulb } from "lucide-react";

const Creative = () => {
  return (
    <div className="min-h-screen bg-background text-foreground lg:pl-48 lg:pr-16">
      <SEO 
        title="Creative - TripleDot"
        description="Design that converts. Content that captivates. Brands that inspire. Professional creative services for modern businesses."
        keywords="web design, brand identity, content creation, digital marketing, creative services"
      />
      <PageTransition>
        <CreativeHero />
        <CreativeShowcase />
        <CreativeProcess />
        
        {/* Cross-Pillar Navigation */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 glass-bg"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 w-48 h-48 bg-neo-blue/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-neo-emerald/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 gradient-text-primary">Complete Your Digital Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card border border-neo-blue/30 p-8 rounded-2xl hover:border-neo-blue/50 transition-all hover:scale-105 glow-primary">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neo-blue to-neo-cyan rounded-xl flex items-center justify-center mr-4 glow-primary">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neo-blue">Services</h3>
                </div>
                <p className="text-muted-foreground mb-6">Build the reliable foundation your creative vision needs to thrive.</p>
                <Button className="bg-gradient-to-r from-neo-blue to-neo-cyan hover:from-neo-blue/80 hover:to-neo-cyan/80 glow-primary">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
              
              <div className="glass-card border border-neo-emerald/30 p-8 rounded-2xl hover:border-neo-emerald/50 transition-all hover:scale-105 glow-accent">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neo-emerald to-neo-mint rounded-xl flex items-center justify-center mr-4 glow-accent">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neo-emerald">Ventures</h3>
                </div>
                <p className="text-muted-foreground mb-6">Push creative boundaries with innovative solutions and emerging technologies.</p>
                <Button className="bg-gradient-to-r from-neo-emerald to-neo-mint hover:from-neo-emerald/80 hover:to-neo-mint/80 glow-accent">
                  <Link to="/ventures">Explore Ventures</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <CreativeCTA />
      </PageTransition>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Creative;
