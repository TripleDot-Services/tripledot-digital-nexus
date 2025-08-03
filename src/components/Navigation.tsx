
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
    { name: "Case Studies", path: "/case-studies" },
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
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 bg-neo-blue rounded-full glow-primary animate-pulse shadow-lg"></div>
              <div className="w-2.5 h-2.5 bg-neo-purple rounded-full glow-secondary animate-pulse shadow-lg" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2.5 h-2.5 bg-neo-emerald rounded-full glow-accent animate-pulse shadow-lg" style={{animationDelay: '0.6s'}}></div>
            </div>
            <span className="text-foreground font-dm-sans font-semibold text-lg tracking-wide gradient-text-secondary transition-all duration-300">
              TripleDot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const getNavColors = (itemName: string) => {
                switch (itemName) {
                  case "Services":
                    return {
                      hover: "hover:text-neo-blue",
                      active: "text-neo-blue"
                    };
                  case "Creative":
                    return {
                      hover: "hover:text-neo-purple",
                      active: "text-neo-purple"
                    };
                  case "Ventures":
                    return {
                      hover: "hover:text-neo-orange",
                      active: "text-neo-orange"
                    };
                  default:
                    return {
                      hover: "hover:text-neo-blue",
                      active: "text-neo-blue"
                    };
                }
              };

              const colors = getNavColors(item.name);
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${colors.hover} ${
                    isActive(item.path) ? colors.active : "text-foreground/70"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
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
            {navItems.map((item) => {
              const getNavColors = (itemName: string) => {
                switch (itemName) {
                  case "Services":
                    return {
                      hover: "hover:text-neo-blue",
                      active: "text-neo-blue"
                    };
                  case "Creative":
                    return {
                      hover: "hover:text-neo-purple",
                      active: "text-neo-purple"
                    };
                  case "Ventures":
                    return {
                      hover: "hover:text-neo-orange",
                      active: "text-neo-orange"
                    };
                  default:
                    return {
                      hover: "hover:text-neo-blue",
                      active: "text-neo-blue"
                    };
                }
              };

              const colors = getNavColors(item.name);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 px-4 text-sm font-medium transition-colors ${colors.hover} ${
                    isActive(item.path) ? colors.active : "text-foreground/70"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
