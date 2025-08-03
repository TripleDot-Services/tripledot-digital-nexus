import React from "react";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  className,
  fullWidth = false 
}) => {
  return (
    <div className={cn(
      "min-h-screen bg-background text-foreground",
      // Responsive padding to account for fixed navigation bars
      // Mobile: no padding (navigation is in header dropdown)
      // Desktop: left padding for sidebar (192px), right padding for navigation bar (64px)
      fullWidth ? "" : "lg:pl-48 lg:pr-16",
      className
    )}>
      {children}
    </div>
  );
};

export default PageLayout; 