
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Creative", path: "/creative" },
    { name: "Ventures", path: "/ventures" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full glass border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-neo-blue rounded-full glow-primary animate-pulse"></div>
              <div className="w-3 h-3 bg-neo-purple rounded-full glow-secondary animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-neo-emerald rounded-full glow-accent animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <span className="text-foreground font-bold text-xl gradient-text-primary group-hover:gradient-text-secondary transition-all duration-300">TripleDot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-neo-blue ${
                  isActive(item.path) ? "text-neo-blue" : "text-foreground/70"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-neo-blue to-neo-purple hover:from-neo-purple hover:to-neo-pink text-white font-semibold border-0 rounded-xl glow-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground/70 hover:text-neo-blue"
          >
            <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 glass-card">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 px-4 text-sm font-medium transition-colors hover:text-neo-blue ${
                  isActive(item.path) ? "text-neo-blue" : "text-foreground/70"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button className="w-full bg-gradient-to-r from-neo-blue to-neo-purple hover:from-neo-purple hover:to-neo-pink text-white font-semibold border-0 rounded-xl">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
