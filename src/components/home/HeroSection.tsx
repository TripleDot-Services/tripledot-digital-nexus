
import { Link } from "react-router-dom";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
            TripleDot
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">
          The Digital Operating System for Modern Business
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Services that work. Creative that captivates. Ventures that innovate.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover-scale">
            <Link to="/services" className="flex items-center">
              Start Your Transformation <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900 hover-scale">
            <Play className="mr-2 w-4 h-4" />
            <Link to="/ventures">See Our Innovation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
