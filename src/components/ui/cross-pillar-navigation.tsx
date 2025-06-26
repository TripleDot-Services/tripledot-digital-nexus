
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  colorTheme: "blue" | "purple" | "emerald";
}

const PillarCard = ({ icon: Icon, title, description, link, colorTheme }: PillarCardProps) => {
  const colorClasses = {
    blue: {
      gradient: "from-blue-900/30 to-indigo-900/30",
      border: "border-blue-800/50",
      iconBg: "bg-blue-500",
      titleColor: "text-blue-400",
      buttonBg: "bg-blue-600 hover:bg-blue-700"
    },
    purple: {
      gradient: "from-purple-900/30 to-pink-900/30",
      border: "border-purple-800/50", 
      iconBg: "bg-purple-500",
      titleColor: "text-purple-400",
      buttonBg: "bg-purple-600 hover:bg-purple-700"
    },
    emerald: {
      gradient: "from-emerald-900/30 to-green-900/30",
      border: "border-emerald-800/50",
      iconBg: "bg-emerald-500", 
      titleColor: "text-emerald-400",
      buttonBg: "bg-emerald-600 hover:bg-emerald-700"
    }
  };

  const colors = colorClasses[colorTheme];

  return (
    <div className={cn("bg-gradient-to-br p-8 rounded-2xl border", colors.gradient, colors.border)}>
      <div className="flex items-center mb-4">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mr-4", colors.iconBg)}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className={cn("text-2xl font-bold", colors.titleColor)}>{title}</h3>
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <Button className={colors.buttonBg}>
        <Link to={link}>Explore {title}</Link>
      </Button>
    </div>
  );
};

interface CrossPillarNavigationProps {
  title: string;
  pillars: Omit<PillarCardProps, 'colorTheme'>[];
  pillarThemes: ("blue" | "purple" | "emerald")[];
}

const CrossPillarNavigation = ({ title, pillars, pillarThemes }: CrossPillarNavigationProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              {...pillar}
              colorTheme={pillarThemes[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrossPillarNavigation;
