
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CreativeCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glass background */}
      <div className="absolute inset-0 glass-bg"></div>
      
      {/* Floating neon elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-neo-purple/20 rounded-full blur-3xl animate-pulse glow-secondary"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-neo-pink/20 rounded-full blur-3xl animate-pulse delay-1000 glow-accent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-secondary">Ready to Stand Out?</h2>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Let's create something that captures attention, drives engagement, and delivers results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-neo-purple to-neo-pink hover:from-neo-purple/80 hover:to-neo-pink/80 text-white font-semibold border-0 glow-secondary">
            <Link to="/contact" className="flex items-center">
              Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-neo-purple/50 text-neo-purple hover:bg-neo-purple/20 hover:border-neo-purple font-semibold">
            <MessageCircle className="mr-2 w-4 h-4" />
            <Link to="/contact">Discuss Your Ideas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreativeCTA;
