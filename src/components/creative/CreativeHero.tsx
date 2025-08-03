
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Eye, Zap } from "lucide-react";

const CreativeHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      
      {/* Floating neon elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neo-purple/20 rounded-full blur-3xl animate-pulse glow-secondary"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neo-pink/20 rounded-full blur-3xl animate-pulse delay-1000 glow-accent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neo-blue/10 rounded-full blur-3xl animate-pulse delay-500 glow-primary"></div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-neo-purple to-neo-pink rounded-2xl flex items-center justify-center glow-secondary">
              <Palette className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 gradient-text-secondary">
            Creative
          </h1>
          
          {/* Creative badge */}
          <div className="inline-flex items-center px-6 py-3 glass-card border border-neo-purple/30 mb-6">
            <div className="w-2 h-2 bg-neo-pink rounded-full mr-3 animate-pulse glow-accent"></div>
            <span className="text-sm font-medium text-neo-purple">Design • Content • Brand • Digital Assets</span>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Design that converts. Content that captivates. Brands that inspire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-neo-purple to-neo-pink hover:from-neo-purple/80 hover:to-neo-pink/80 glow-secondary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-neo-purple/50 text-neo-purple hover:bg-neo-purple/20 hover:border-neo-purple">
              <Eye className="mr-2 w-4 h-4" />
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
          <div className="text-center glass-card border border-neo-purple/20 glow-secondary">
            <div className="text-3xl md:text-4xl font-bold text-neo-purple mb-2">300%</div>
            <div className="text-sm text-muted-foreground">Engagement</div>
          </div>
          <div className="text-center glass-card border border-neo-pink/20 glow-accent">
            <div className="text-3xl md:text-4xl font-bold text-neo-pink mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Brands</div>
          </div>
          <div className="text-center glass-card border border-neo-blue/20 glow-primary">
            <div className="text-3xl md:text-4xl font-bold text-neo-blue mb-2">24hr</div>
            <div className="text-sm text-muted-foreground">Start Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeHero;
