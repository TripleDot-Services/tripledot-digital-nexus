
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServiceCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neo-purple/20 rounded-full blur-3xl glow-secondary"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="glass-card border border-neo-purple/30 glow-secondary">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-primary">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your project and create a solution that drives real results.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neo-blue to-neo-purple hover:from-neo-purple hover:to-neo-blue text-primary-foreground font-semibold border-0 px-8 py-4 text-lg glow-primary transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
