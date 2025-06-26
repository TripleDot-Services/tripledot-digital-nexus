
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VentureCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Innovation</h2>
        <p className="text-xl text-gray-300 mb-8">
          Interested in collaborating on cutting-edge solutions or early access to our ventures?
        </p>
        <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700">
          <Link to="/contact">Explore Partnership</Link>
        </Button>
      </div>
    </section>
  );
};

export default VentureCTA;
