
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
  iconColor?: string;
  titleColor?: string;
}

const IconCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  className,
  iconColor = "from-blue-500 to-blue-600",
  titleColor = "text-blue-400"
}: IconCardProps) => {
  return (
    <div className={cn(
      "bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors",
      className
    )}>
      <div className={cn(
        "w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30",
        `bg-gradient-to-br ${iconColor}`
      )}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className={cn("text-xl font-bold mb-3", titleColor)}>{title}</h3>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      {features && (
        <ul className="space-y-1">
          {features.map((feature, i) => (
            <li key={i} className="text-blue-200 text-sm flex items-center">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IconCard;
