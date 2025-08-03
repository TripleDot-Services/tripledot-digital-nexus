import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PageNavigation = () => {
  const location = useLocation();
  
  const pages = [
    { name: "Services", path: "/services", color: "neo-blue" },
    { name: "Creative", path: "/creative", color: "neo-purple" },
    { name: "Ventures", path: "/ventures", color: "neo-orange" },
  ];

  const currentIndex = pages.findIndex(page => page.path === location.pathname);
  
  // Don't show navigation on homepage or other pages
  if (currentIndex === -1) return null;

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="fixed top-1/2 -translate-y-1/2 w-full pointer-events-none z-40">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Previous Page Arrow */}
        {prevPage && (
          <Link to={prevPage.path} className="pointer-events-auto">
            <Button
              variant="ghost"
              size="icon"
              className={`glass-card hover:scale-110 transition-all duration-300 hover:text-${prevPage.color} hover:glow-primary`}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
        )}

        {/* Spacer when no prev page */}
        {!prevPage && <div />}

        {/* Next Page Arrow */}
        {nextPage && (
          <Link to={nextPage.path} className="pointer-events-auto">
            <Button
              variant="ghost"
              size="icon"
              className={`glass-card hover:scale-110 transition-all duration-300 hover:text-${nextPage.color} hover:glow-primary`}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;