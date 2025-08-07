import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Info } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Services", path: "/services" },
    { name: "Creative", path: "/creative" },
    { name: "Ventures", path: "/ventures" },
  ];

  const allPages = [
    { name: "Home", path: "/", color: "neo-emerald" },
    { name: "Services", path: "/services", color: "neo-blue" },
    { name: "Creative", path: "/creative", color: "neo-purple" },
    { name: "Ventures", path: "/ventures", color: "neo-orange" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const currentIndex = allPages.findIndex(page => page.path === location.pathname);
  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/20 z-40">
        <div className="w-full px-3 sm:px-4 lg:px-6 lg:pl-48 h-16">
          <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
            {/* Logo - always visible */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 bg-neo-blue rounded-full glow-primary animate-pulse shadow-lg"></div>
                <div className="w-2.5 h-2.5 bg-neo-purple rounded-full glow-secondary animate-pulse shadow-lg"></div>
                <div className="w-2.5 h-2.5 bg-neo-emerald rounded-full glow-accent animate-pulse shadow-lg"></div>
              </div>
              <span className="text-foreground font-dm-sans font-semibold text-lg tracking-wide gradient-text-secondary transition-all duration-300">
                TripleDot
              </span>
            </Link>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Call to Action Button */}
              <Link 
                to="/contact" 
                className="px-4 py-2 bg-neo-blue/20 text-neo-blue border border-neo-blue/30 rounded-lg hover:bg-neo-blue/30 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
              >
                Get Started
              </Link>
              
              {/* About Us Button */}
              <Link 
                to="/about" 
                className="w-10 h-10 glass bg-background/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-background/30 transition-all duration-300 group"
              >
                <Info className="w-4 h-4 text-neo-blue group-hover:scale-110 transition-transform duration-300" />
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-foreground/70 hover:text-neo-blue"
              >
                <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 glass-card">
            <Link
              to="/"
              className={`block py-2 px-4 text-sm font-medium transition-colors hover:text-neo-emerald ${
                isActive("/") ? "text-neo-emerald" : "text-foreground/70"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
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
      </nav>

      {/* Right Side Navigation for Next Page */}
      {(() => {
        let nextPage = null;
        if (isHomePage) {
          nextPage = allPages[1]; // Services
        } else {
          if (currentIndex < allPages.length - 1) {
            nextPage = allPages[currentIndex + 1];
          } else {
            nextPage = allPages[0]; // Home
          }
        }

        return nextPage ? (
          <Link to={nextPage.path} className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-16 glass bg-black/20 backdrop-blur-xl border-l border-white/20 z-50 hidden lg:flex flex-col items-center justify-center hover:bg-black/30 transition-all duration-300 group">
            <ChevronRight className={`w-8 h-8 ${nextPage.path === "/" ? "text-white" : nextPage.color === "neo-blue" ? "text-neo-blue" : nextPage.color === "neo-purple" ? "text-neo-purple" : "text-neo-orange"} group-hover:scale-110 transition-transform duration-300`} />
            <div className={`writing-mode-vertical text-xs font-medium ${nextPage.path === "/" ? "text-white/70 group-hover:text-white" : nextPage.color === "neo-blue" ? "text-neo-blue/70 group-hover:text-neo-blue" : nextPage.color === "neo-purple" ? "text-neo-purple/70 group-hover:text-neo-purple" : "text-neo-orange/70 group-hover:text-neo-orange"} transition-colors duration-300 mt-2`} style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
              {nextPage.name}
            </div>
          </Link>
        ) : null;
      })()}
    </>
  );
};

export default Navigation;
