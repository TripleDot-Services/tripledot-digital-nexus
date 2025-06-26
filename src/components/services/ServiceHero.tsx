
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServiceHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The foundation of digital transformation. Reliable, scalable, and secure infrastructure 
            that powers your business growth and enables innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Monitoring & Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">GDPR</div>
              <div className="text-gray-400 text-sm">Compliant Hosting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
