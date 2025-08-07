
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
    <nav className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-48 bg-black/20 backdrop-blur-xl border-r border-white/20 z-50 hidden lg:flex flex-col">
      {/* Navigation Items */}
      <div className="flex-1 flex flex-col justify-start pt-6">
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
                className={`block py-3 px-4 text-sm font-medium transition-all duration-300 ${
                  isCurrentPage 
                    ? `${colorClass} underline underline-offset-4 decoration-2`
                    : `text-foreground/60 hover:${colorClass} hover:bg-background/20 rounded-lg`
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
