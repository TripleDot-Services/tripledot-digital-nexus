
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServiceCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's discuss how our services can support your digital transformation journey. 
          Schedule a free consultation to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900">
            <Link to="/about">Learn About Our Approach</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
