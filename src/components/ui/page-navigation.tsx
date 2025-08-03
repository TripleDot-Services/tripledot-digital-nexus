
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home, Info } from "lucide-react";

const PageNavigation = () => {
  const location = useLocation();
  
  const pages = [
    { name: "Home", path: "/", color: "neo-emerald" },
    { name: "Services", path: "/services", color: "neo-blue" },
    { name: "Creative", path: "/creative", color: "neo-purple" },
    { name: "Ventures", path: "/ventures", color: "neo-orange" },
  ];

  const currentIndex = pages.findIndex(page => page.path === location.pathname);
  const isHomePage = location.pathname === "/";
  
  // Don't show navigation on other pages (not home or main pages)
  if (currentIndex === -1 && !isHomePage) return null;

  // Get static hierarchy - show pages up to current page (excluding current)
  const hierarchyPages = isHomePage ? [] : pages.slice(0, currentIndex);
  
  // Get previous page for back navigation
  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;

  let nextPage = null;

  if (isHomePage) {
    // On home page, show Services as next page
    nextPage = pages[1]; // Services
  } else {
    // On other pages, show normal navigation
    if (currentIndex < pages.length - 1) {
      nextPage = pages[currentIndex + 1];
    } else {
      // If on last page, cycle back to home
      nextPage = pages[0]; // Home
    }
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
      {(hierarchyPages.length > 0 || previousPage) && (
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-16 glass bg-background/20 backdrop-blur-md border-r border-white/10 z-40 flex flex-col items-center justify-between py-4">
          {/* Static Hierarchy Stack */}
          <div className="flex flex-col gap-2">
            {hierarchyPages.map((page, index) => (
              <Link key={`${page.path}-${index}`} to={page.path} className="flex items-center justify-center hover:bg-background/30 transition-all duration-300 group p-2 rounded-lg">
                <div className={`writing-mode-vertical text-xs font-medium ${page.color === "neo-emerald" ? "text-neo-emerald/70 group-hover:text-neo-emerald" : page.color === "neo-blue" ? "text-neo-blue/70 group-hover:text-neo-blue" : page.color === "neo-purple" ? "text-neo-purple/70 group-hover:text-neo-purple" : "text-neo-orange/70 group-hover:text-neo-orange"} transition-colors duration-300`} style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
                  {page.name}
                </div>
              </Link>
            ))}
          </div>
          
          {/* Back Navigation - Center */}
          {previousPage && (
            <Link to={previousPage.path} className="flex flex-col items-center justify-center hover:bg-background/30 transition-all duration-300 group p-4 rounded-lg">
              <ChevronLeft className={`w-8 h-8 ${previousPage.path === "/" ? "text-white" : previousPage.color === "neo-emerald" ? "text-neo-emerald" : previousPage.color === "neo-blue" ? "text-neo-blue" : previousPage.color === "neo-purple" ? "text-neo-purple" : "text-neo-orange"} group-hover:scale-110 transition-transform duration-300 mb-2`} />
              <div className="writing-mode-vertical text-xs font-medium text-white/70 group-hover:text-white transition-colors duration-300" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
                Back
              </div>
            </Link>
          )}
          
          {/* About Us Navigation - Bottom */}
          <Link to="/about" className="flex flex-col items-center justify-center hover:bg-background/30 transition-all duration-300 group p-4 rounded-lg">
            <Info className="w-5 h-5 text-neo-blue group-hover:scale-110 transition-transform duration-300 mb-2" />
            <div className="writing-mode-vertical text-xs font-medium text-neo-blue/70 group-hover:text-neo-blue transition-colors duration-300" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
              About
            </div>
          </Link>
        </div>
      )}

      {/* Show only About Us on Home page */}
      {isHomePage && (
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-16 glass bg-background/20 backdrop-blur-md border-r border-white/10 z-40 flex flex-col items-center justify-end py-4">
          {/* About Us Navigation - Bottom */}
          <Link to="/about" className="flex flex-col items-center justify-center hover:bg-background/30 transition-all duration-300 group p-4 rounded-lg">
            <Info className="w-5 h-5 text-neo-blue group-hover:scale-110 transition-transform duration-300 mb-2" />
            <div className="writing-mode-vertical text-xs font-medium text-neo-blue/70 group-hover:text-neo-blue transition-colors duration-300" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
              About
            </div>
          </Link>
        </div>
      )}

      {/* Right Side Navigation */}
      {nextPage && (
        <Link to={nextPage.path} className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-16 glass bg-background/20 backdrop-blur-md border-l border-white/10 z-40 flex flex-col items-center justify-center hover:bg-background/30 transition-all duration-300 group">
          <ChevronRight className={`w-8 h-8 ${nextPage.path === "/" ? "text-white" : nextPage.color === "neo-blue" ? "text-neo-blue" : nextPage.color === "neo-purple" ? "text-neo-purple" : "text-neo-orange"} group-hover:scale-110 transition-transform duration-300 mb-4`} />
          <div className={`writing-mode-vertical text-sm font-medium ${nextPage.path === "/" ? "text-white/70 group-hover:text-white" : nextPage.color === "neo-blue" ? "text-neo-blue/70 group-hover:text-neo-blue" : nextPage.color === "neo-purple" ? "text-neo-purple/70 group-hover:text-neo-purple" : "text-neo-orange/70 group-hover:text-neo-orange"} transition-colors duration-300`} style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
            {nextPage.name}
          </div>
        </Link>
      )}
    </>
  );
};

export default PageNavigation;
