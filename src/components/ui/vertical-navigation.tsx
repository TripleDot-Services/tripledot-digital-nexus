import { Link, useLocation } from "react-router-dom";

const VerticalNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", color: "neo-emerald" },
    { name: "Services", path: "/services", color: "neo-blue" },
    { name: "Creative", path: "/creative", color: "neo-purple" },
    { name: "Ventures", path: "/ventures", color: "neo-orange" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed left-0 top-0 h-screen w-48 glass bg-background/20 backdrop-blur-md border-r border-white/10 z-40 hidden lg:flex flex-col">
      {/* Logo Section */}
      <div className="h-16 flex items-center px-6 border-b border-white/10">
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
      </div>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-2 px-6">
          {navItems.map((item) => {
            const isCurrentPage = isActive(item.path);
            const colorClass = item.color === "neo-emerald" ? "text-neo-emerald" : 
              item.color === "neo-blue" ? "text-neo-blue" : 
              item.color === "neo-purple" ? "text-neo-purple" : 
              "text-neo-orange";
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isCurrentPage 
                    ? `${colorClass} bg-background/30 backdrop-blur-sm border border-white/20 shadow-lg glow-primary`
                    : `text-foreground/60 hover:${colorClass} hover:bg-background/20`
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default VerticalNavigation;