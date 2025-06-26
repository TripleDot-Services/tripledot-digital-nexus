
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InnovationLab = () => {
  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovation Lab</h2>
            <p className="text-gray-300 text-lg mb-6">
              TripleDot Ventures is where we experiment with emerging technologies, validate new business models, 
              and develop solutions that don't yet exist in the market.
            </p>
            <p className="text-gray-300 mb-8">
              Our ventures are born from real problems we encounter while serving clients. We build internal tools, 
              test them in the wild, then scale the successful ones into standalone products or services.
            </p>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
              <Link to="/contact">Discuss Partnership</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl"></div>
            <div className="relative bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Current Focus Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">AI-powered workflow automation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">No-code/low-code platforms</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Creator economy tools</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Decentralized collaboration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3</div>
                  <span className="text-gray-300">Sustainable tech solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;
