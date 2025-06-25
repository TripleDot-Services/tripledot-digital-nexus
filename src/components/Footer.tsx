
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T3</span>
              </div>
              <span className="text-white font-bold text-xl">TripleDot</span>
            </div>
            <p className="text-gray-400 max-w-md">
              A modern digital operating system connecting services, creativity, and innovation. 
              We help businesses transform and scale through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/creative" className="text-gray-400 hover:text-blue-400 transition-colors">Creative</Link></li>
              <li><Link to="/ventures" className="text-gray-400 hover:text-blue-400 transition-colors">Ventures</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><span className="text-gray-400">hello@tripledot.com</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TripleDot. Services fund Creative. Creative empowers Ventures. Ventures grow the brand.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
