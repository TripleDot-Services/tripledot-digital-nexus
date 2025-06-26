
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServiceCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's discuss your project and create a solution that drives real results.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
          <Link to="/contact" className="flex items-center">
            Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ServiceCTA;
