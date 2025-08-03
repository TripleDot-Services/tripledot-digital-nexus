
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 bg-neo-blue rounded-full glow-primary animate-pulse shadow-lg"></div>
                <div className="w-2.5 h-2.5 bg-neo-purple rounded-full glow-secondary animate-pulse shadow-lg"></div>
                <div className="w-2.5 h-2.5 bg-neo-emerald rounded-full glow-accent animate-pulse shadow-lg"></div>
              </div>
              <span className="text-foreground font-dm-sans font-semibold text-lg tracking-wide gradient-text-secondary transition-all duration-300">
                TripleDot
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Services that work.<br />
              Creative that captivates.<br />
              Ventures that innovate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link></li>
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
