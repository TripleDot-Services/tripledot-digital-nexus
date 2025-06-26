
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CreativeCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stand Out?</h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Let's create something that captures attention, drives engagement, and delivers results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            <Link to="/contact" className="flex items-center">
              Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900">
            <MessageCircle className="mr-2 w-4 h-4" />
            <Link to="/contact">Discuss Your Ideas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreativeCTA;
