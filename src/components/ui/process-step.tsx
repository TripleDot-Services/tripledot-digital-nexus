
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  className?: string;
  colorTheme?: "blue" | "purple" | "emerald";
}

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  className,
  colorTheme = "blue"
}: ProcessStepProps) => {
  const colorClasses = {
    blue: {
      gradient: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/30",
      title: "text-blue-400"
    },
    purple: {
      gradient: "from-purple-500 to-purple-600", 
      shadow: "shadow-purple-500/30",
      title: "text-purple-400"
    },
    emerald: {
      gradient: "from-emerald-500 to-emerald-600",
      shadow: "shadow-emerald-500/30", 
      title: "text-emerald-400"
    }
  };

  const colors = colorClasses[colorTheme];

  return (
    <div className={cn("text-center", className)}>
      <div className={cn(
        "w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg",
        colors.gradient,
        colors.shadow
      )}>
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>
      <h3 className={cn("text-lg font-bold mb-3", colors.title)}>{title}</h3>
      <p className="text-gray-300 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default ProcessStep;
