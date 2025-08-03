
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const PageNavigation = () => {
  const location = useLocation();
  
  const pages = [
    { name: "Services", path: "/services", color: "neo-blue" },
    { name: "Creative", path: "/creative", color: "neo-purple" },
    { name: "Ventures", path: "/ventures", color: "neo-orange" },
  ];

  const currentIndex = pages.findIndex(page => page.path === location.pathname);
  const isHomePage = location.pathname === "/";
  
  // Don't show navigation on other pages (not home or main pages)
  if (currentIndex === -1 && !isHomePage) return null;

  let prevPage = null;
  let nextPage = null;

  if (isHomePage) {
    // On home page, show Services as next page
    nextPage = pages[0]; // Services
  } else {
    // On other pages, show normal navigation
    prevPage = currentIndex > 0 ? pages[currentIndex - 1] : { name: "Home", path: "/", color: "neo-emerald" };
    nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;
  }

  return (
    <>
      {/* Home Button - Always visible in top-left corner */}
      {!isHomePage && (
        <Link to="/" className="fixed left-4 top-20 w-12 h-12 glass bg-background/20 backdrop-blur-md border border-white/10 rounded-full z-40 flex items-center justify-center hover:bg-background/30 transition-all duration-300 group">
          <Home className="w-5 h-5 text-neo-emerald group-hover:scale-110 transition-transform duration-300" />
        </Link>
      )}

      {/* About Us Button - Always visible in top-right corner */}
      <Link to="/about" className="fixed right-4 top-20 w-12 h-12 glass bg-background/20 backdrop-blur-md border border-white/10 rounded-full z-40 flex items-center justify-center hover:bg-background/30 transition-all duration-300 group">
        <Info className="w-5 h-5 text-neo-blue group-hover:scale-110 transition-transform duration-300" />
      </Link>

      {/* Left Side Navigation */}
      {prevPage && (
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-16 glass bg-background/20 backdrop-blur-md border-r border-white/10 z-40 flex flex-col">
          {/* Main Navigation - ALWAYS in center with big arrow */}
          <div className="flex-1 flex items-center justify-center">
            <Link to={prevPage.path} className="flex flex-col items-center justify-center hover:bg-background/30 transition-all duration-300 group p-4 rounded-lg">
              <ChevronLeft className={`w-8 h-8 ${prevPage.path === "/" ? "text-white" : prevPage.color === "neo-blue" ? "text-neo-blue" : prevPage.color === "neo-purple" ? "text-neo-purple" : "text-neo-orange"} group-hover:scale-110 transition-transform duration-300`} />
            </Link>
          </div>
        </div>
      )}

      {/* Right Side Navigation */}
      {nextPage && (
        <Link to={nextPage.path} className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-16 glass bg-background/20 backdrop-blur-md border-l border-white/10 z-40 flex flex-col items-center justify-center hover:bg-background/30 transition-all duration-300 group">
          <ChevronRight className={`w-8 h-8 ${nextPage.path === "/" ? "text-white" : nextPage.color === "neo-blue" ? "text-neo-blue" : nextPage.color === "neo-purple" ? "text-neo-purple" : "text-neo-orange"} group-hover:scale-110 transition-transform duration-300`} />
        </Link>
      )}
    </>
  );
};

export default PageNavigation;
