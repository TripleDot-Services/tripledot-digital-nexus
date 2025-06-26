
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Eye, Zap } from "lucide-react";

const CreativeHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-blue-900/40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <Palette className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Creative
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Design that converts. Content that captivates. Brands that inspire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white">
              <Eye className="mr-2 w-4 h-4" />
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
            <div className="text-gray-300">Average Engagement Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
            <div className="text-gray-300">Brands Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24hr</div>
            <div className="text-gray-300">Average Project Start</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeHero;
