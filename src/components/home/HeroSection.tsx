
import { Link } from "react-router-dom";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Logo Section */}
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
            TripleDot
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200">
          Three Pillars. One Digital Ecosystem.
        </h2>
        
        {/* Three Subdivisions Highlight */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 text-lg">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-blue-400 font-semibold">Services</span>
          </div>
          <div className="hidden sm:block text-gray-500">•</div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-purple-400 font-semibold">Creative</span>
          </div>
          <div className="hidden sm:block text-gray-500">•</div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
            <span className="text-emerald-400 font-semibold">Ventures</span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
          Reliable infrastructure, captivating design, and innovative solutions working together to transform your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold border-0">
            <Link to="/services" className="flex items-center">
              Explore Our Services <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold">
            <Play className="mr-2 w-4 h-4" />
            <Link to="/ventures">See Innovation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
