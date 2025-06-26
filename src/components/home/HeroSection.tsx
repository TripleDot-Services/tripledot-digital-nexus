
import { Link } from "react-router-dom";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
          TripleDot
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          A modern digital operating system connecting services, creativity, and innovation
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          We don't just solve today's problems - we build the foundation for tomorrow's opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover-scale">
            <Link to="/services" className="flex items-center">
              Explore Services <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900 hover-scale">
            <Play className="mr-2 w-4 h-4" />
            <Link to="/tools">Try Our Tools</Link>
          </Button>
        </div>
        
        {/* Key Metrics with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center hover-scale">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Businesses Transformed</div>
          </div>
          <div className="text-center hover-scale">
            <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
            <div className="text-gray-400 text-sm">Hours Saved Weekly</div>
          </div>
          <div className="text-center hover-scale">
            <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Innovative Solutions Built</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
