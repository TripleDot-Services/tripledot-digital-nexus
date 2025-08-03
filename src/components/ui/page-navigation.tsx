
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Info, Menu } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

      {/* About Us Button - Always visible in top-right corner */}
      <Link to="/about" className="fixed right-4 top-20 w-12 h-12 glass bg-background/20 backdrop-blur-md border border-white/10 rounded-full z-40 flex items-center justify-center hover:bg-background/30 transition-all duration-300 group">
        <Info className="w-5 h-5 text-neo-blue group-hover:scale-110 transition-transform duration-300" />
      </Link>


      {/* Horizontal Accordion Navigation Menu - Left Edge */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40">
        <Accordion type="single" collapsible className="w-fit">
          <AccordionItem value="navigation" className="border-none">
            <AccordionTrigger className="glass bg-background/20 backdrop-blur-md border border-white/10 rounded-full w-12 h-12 flex items-center justify-center hover:bg-background/30 transition-all duration-300 p-0 hover:no-underline">
              <Menu className="w-5 h-5 text-white" />
            </AccordionTrigger>
            <AccordionContent className="pb-0 pt-2">
              <div className="glass bg-background/20 backdrop-blur-md border border-white/10 rounded-lg p-2">
                <div className="flex flex-row gap-1">
                  {pages.map((page, index) => {
                    const isCurrentPage = page.path === location.pathname;
                    const colorClass = page.path === "/" ? "text-white" : 
                      page.color === "neo-emerald" ? "text-neo-emerald" : 
                      page.color === "neo-blue" ? "text-neo-blue" : 
                      page.color === "neo-purple" ? "text-neo-purple" : 
                      "text-neo-orange";
                    
                    return (
                      <Link
                        key={page.path}
                        to={page.path}
                        className={`px-3 py-2 hover:bg-background/30 transition-all duration-300 group rounded-md ${
                          isCurrentPage ? 'bg-background/40' : ''
                        }`}
                      >
                        <div 
                          className={`text-xs font-medium whitespace-nowrap ${
                            isCurrentPage 
                              ? colorClass
                              : page.path === "/" ? "text-white/70 group-hover:text-white" :
                                page.color === "neo-emerald" ? "text-neo-emerald/70 group-hover:text-neo-emerald" :
                                page.color === "neo-blue" ? "text-neo-blue/70 group-hover:text-neo-blue" :
                                page.color === "neo-purple" ? "text-neo-purple/70 group-hover:text-neo-purple" :
                                "text-neo-orange/70 group-hover:text-neo-orange"
                          } transition-colors duration-300`}
                        >
                          {page.name}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Right Side Navigation */}
      {nextPage && (
        <Link to={nextPage.path} className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-16 glass bg-background/20 backdrop-blur-md border-l border-white/10 z-40 flex flex-col items-center justify-center hover:bg-background/30 transition-all duration-300 group">
          <ChevronRight className={`w-8 h-8 ${nextPage.path === "/" ? "text-white" : nextPage.color === "neo-blue" ? "text-neo-blue" : nextPage.color === "neo-purple" ? "text-neo-purple" : "text-neo-orange"} group-hover:scale-110 transition-transform duration-300`} />
          <div className={`writing-mode-vertical text-xs font-medium ${nextPage.path === "/" ? "text-white/70 group-hover:text-white" : nextPage.color === "neo-blue" ? "text-neo-blue/70 group-hover:text-neo-blue" : nextPage.color === "neo-purple" ? "text-neo-purple/70 group-hover:text-neo-purple" : "text-neo-orange/70 group-hover:text-neo-orange"} transition-colors duration-300 mt-2`} style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
            {nextPage.name}
          </div>
        </Link>
      )}
    </>
  );
};

export default PageNavigation;
