
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14">
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
            <ThemeToggle />
            <div className="text-xs text-foreground/60 text-right">
              <div className="font-semibold text-neo-blue">TripleDot Services</div>
              <div>Zinkstraat 24, Nr. A4364</div>
              <div>4823AD Breda, The Netherlands</div>
              <div>VAT: NL005136013B45</div>
              <div>CoC: 95184317</div>
            </div>
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
            <div className="px-4 pt-2 text-xs text-foreground/60">
              <div className="font-semibold text-neo-blue">TripleDot Services</div>
              <div>Zinkstraat 24, Nr. A4364</div>
              <div>4823AD Breda, The Netherlands</div>
              <div>VAT: NL005136013B45</div>
              <div>CoC: 95184317</div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
