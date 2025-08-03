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
    <nav className="fixed left-0 top-32 h-[calc(100vh-8rem)] w-48 glass bg-background/20 backdrop-blur-md border-r border-white/10 z-40 hidden lg:flex flex-col justify-center">
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
    </nav>
  );
};

export default VerticalNavigation;