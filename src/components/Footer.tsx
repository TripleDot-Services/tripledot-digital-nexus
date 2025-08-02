
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex space-x-1">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
              </div>
              <span className="text-white font-bold text-xl">TripleDot</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Services that work. Creative that captivates. Ventures that innovate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Development</Link></li>
              <li><Link to="/creative" className="text-gray-400 hover:text-blue-400 transition-colors">Creative</Link></li>
              <li><Link to="/ventures" className="text-gray-400 hover:text-blue-400 transition-colors">Ventures</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 <Link to="/about" className="text-neo-blue hover:text-neo-purple transition-colors">TripleDot Services</Link>. Services fund Creative. Creative empowers Ventures. Ventures grow the brand.
          </p>
          <div className="mt-2 text-gray-500 text-xs">
            <div>VAT: NL005136013B45 | Chamber of Commerce: 95184317</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
