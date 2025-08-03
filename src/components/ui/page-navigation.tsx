import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
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

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : { name: "Home", path: "/", color: "neo-emerald" };
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <>
      {/* Left Side Navigation */}
      {prevPage && (
        <Link to={prevPage.path} className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-16 glass bg-background/20 backdrop-blur-md border-r border-white/10 z-40 flex flex-col items-center justify-center hover:bg-background/30 transition-all duration-300 group">
          <ChevronLeft className={`w-8 h-8 text-${prevPage.color} group-hover:scale-110 transition-transform duration-300 mb-4`} />
          <div className="writing-mode-vertical text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            {prevPage.name}
          </div>
        </Link>
      )}

      {/* Right Side Navigation */}
      {nextPage && (
        <Link to={nextPage.path} className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-16 glass bg-background/20 backdrop-blur-md border-l border-white/10 z-40 flex flex-col items-center justify-center hover:bg-background/30 transition-all duration-300 group">
          <ChevronRight className={`w-8 h-8 text-${nextPage.color} group-hover:scale-110 transition-transform duration-300 mb-4`} />
          <div className="writing-mode-vertical text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            {nextPage.name}
          </div>
        </Link>
      )}

      {/* Home Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-40">
        <Link to="/" className="pointer-events-auto">
          <Button
            variant="ghost"
            size="icon"
            className="glass-card hover:scale-110 transition-all duration-300 hover:text-neo-emerald hover:glow-accent"
          >
            <Home className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PageNavigation;