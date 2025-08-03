import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const VentureCTA = () => {
  return <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Innovation</h2>
        <p className="text-xl text-gray-300 mb-8">
          Interested in collaborating on cutting-edge solutions or early access to our ventures?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold border-0">
            <Link to="/contact">Explore Partnerships</Link>
          </Button>
          <Button size="lg" variant="outline-light">
            <Link to="/contact">Retainer Plans</Link>
          </Button>
          <Button size="lg" variant="outline-light">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default VentureCTA;