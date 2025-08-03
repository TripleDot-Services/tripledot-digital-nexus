
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
      <nav className="fixed top-0 w-full glass border-b border-white/10 z-50">
        {/* Main Navigation Tier */}
        <div className="w-full px-3 sm:px-4 lg:px-6 h-16">
          <div className="flex justify-center items-center h-full relative max-w-7xl mx-auto">
            {/* Logo */}
            <Link to="/" className="absolute left-0 flex items-center space-x-3 group">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 bg-neo-blue rounded-full glow-primary animate-pulse shadow-lg"></div>
                <div className="w-2.5 h-2.5 bg-neo-purple rounded-full glow-secondary animate-pulse shadow-lg"></div>
                <div className="w-2.5 h-2.5 bg-neo-emerald rounded-full glow-accent animate-pulse shadow-lg"></div>
              </div>
              <span className="text-foreground font-dm-sans font-semibold text-lg tracking-wide gradient-text-secondary transition-all duration-300">
                TripleDot
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-8 h-full">
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

            {/* About Button */}
            <Link to="/about" className="absolute right-12 md:right-0 w-10 h-10 glass bg-background/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-background/30 transition-all duration-300 group">
              <Info className="w-4 h-4 text-neo-blue group-hover:scale-110 transition-transform duration-300" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-0 md:hidden text-foreground/70 hover:text-neo-blue"
            >
              <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {/* Page Navigation Tier */}
        <div className="w-full glass bg-background/10 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            {/* Desktop Page Navigation */}
            <div className="hidden md:flex items-center justify-between h-12">
              {/* Page Breadcrumb */}
              <div className="flex items-center space-x-2">
                {allPages.map((page, index) => {
                  const isCurrentPage = page.path === location.pathname;
                  const isPassed = index < currentIndex;
                  const colorClass = page.path === "/" ? "text-white" : 
                    page.color === "neo-emerald" ? "text-neo-emerald" : 
                    page.color === "neo-blue" ? "text-neo-blue" : 
                    page.color === "neo-purple" ? "text-neo-purple" : 
                    "text-neo-orange";
                  
                  return (
                    <div key={page.path} className="flex items-center">
                      <Link
                        to={page.path}
                        className={`text-xs font-medium transition-all duration-300 px-3 py-1.5 rounded-full ${
                          isCurrentPage 
                            ? `${colorClass} bg-background/20 backdrop-blur-sm border border-white/10 shadow-lg`
                            : isPassed
                            ? `${colorClass.replace('text-', 'text-').replace('neo-', 'neo-')}/60 hover:${colorClass}`
                            : page.path === "/" ? "text-white/40 hover:text-white" :
                              page.color === "neo-emerald" ? "text-neo-emerald/40 hover:text-neo-emerald" :
                              page.color === "neo-blue" ? "text-neo-blue/40 hover:text-neo-blue" :
                              page.color === "neo-purple" ? "text-neo-purple/40 hover:text-neo-purple" :
                              "text-neo-orange/40 hover:text-neo-orange"
                        }`}
                      >
                        {page.name}
                      </Link>
                      {index < allPages.length - 1 && (
                        <ChevronRight className={`w-3 h-3 mx-2 ${
                          isPassed ? "text-foreground/60" : "text-foreground/30"
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center space-x-2">
                <div className="text-xs text-foreground/60">
                  {currentIndex + 1} of {allPages.length}
                </div>
                <div className="w-20 h-1 bg-background/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-neo-blue to-neo-purple transition-all duration-500 ease-out"
                    style={{ width: `${((currentIndex + 1) / allPages.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Page Navigation */}
            <div className="md:hidden flex items-center justify-center h-10">
              <div className="flex items-center space-x-2">
                {allPages.map((page, index) => {
                  const isCurrentPage = page.path === location.pathname;
                  
                  return (
                    <div
                      key={page.path}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isCurrentPage
                          ? page.path === "/" ? "bg-white" :
                            page.color === "neo-emerald" ? "bg-neo-emerald" :
                            page.color === "neo-blue" ? "bg-neo-blue" :
                            page.color === "neo-purple" ? "bg-neo-purple" :
                            "bg-neo-orange"
                          : "bg-foreground/20"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
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
          <Link to={nextPage.path} className="fixed right-0 top-32 h-[calc(100vh-8rem)] w-16 glass bg-background/20 backdrop-blur-md border-l border-white/10 z-40 flex flex-col items-center justify-center hover:bg-background/30 transition-all duration-300 group">
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
