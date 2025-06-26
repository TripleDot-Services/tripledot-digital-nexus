
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
  variant?: "inline" | "card";
}

const ErrorMessage = ({ 
  title = "Error",
  message,
  onRetry,
  className,
  variant = "card"
}: ErrorMessageProps) => {
  if (variant === "inline") {
    return (
      <div className={cn("flex items-center gap-2 text-red-400", className)}>
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm">{message}</span>
        {onRetry && (
          <Button
            onClick={onRetry}
            size="sm"
            variant="ghost"
            className="text-red-400 hover:text-red-300 p-1 h-auto"
          >
            <RefreshCw className="w-3 h-3" />
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className={cn("bg-red-950/30 border border-red-800/50 rounded-lg p-4 text-center", className)}>
      <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-500" />
      <h3 className="text-lg font-semibold text-red-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} size="sm" className="bg-red-600 hover:bg-red-700">
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorMessage;
