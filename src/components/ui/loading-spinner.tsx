
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  color?: "blue" | "purple" | "emerald" | "white";
}

const LoadingSpinner = ({ 
  size = "md", 
  className,
  color = "blue"
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const colorClasses = {
    blue: "border-blue-500",
    purple: "border-purple-500",
    emerald: "border-emerald-500",
    white: "border-white"
  };

  return (
    <div className={cn("flex justify-center items-center", className)}>
      <div 
        className={cn(
          "animate-spin rounded-full border-2 border-t-transparent",
          sizeClasses[size],
          colorClasses[color]
        )}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
