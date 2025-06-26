
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Palette, Lightbulb, ArrowRight } from "lucide-react";

const ValueProposition = () => {
  const pillars = [
    {
      icon: Settings,
      title: "Services",
      subtitle: "Systems that scale",
      description: "Microsoft 365, automation, and infrastructure that just works.",
      color: "blue",
      link: "/services"
    },
    {
      icon: Palette,
      title: "Creative",
      subtitle: "Design that converts",
      description: "Websites, brands, and content that captivate your audience.",
      color: "purple",
      link: "/creative"
    },
    {
      icon: Lightbulb,
      title: "Ventures",
      subtitle: "Innovation that disrupts",
      description: "Custom tools and solutions that give you competitive advantage.",
      color: "emerald",
      link: "/ventures"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Three Pillars. One System.</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Everything works together to create sustainable, long-term growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Link key={index} to={pillar.link}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all group hover-scale h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${pillar.color}-500 to-${pillar.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                    <p className={`text-${pillar.color}-400 font-semibold mb-3 text-sm`}>{pillar.subtitle}</p>
                    <p className="text-gray-400 mb-4 text-sm">{pillar.description}</p>
                    
                    <div className="flex items-center justify-center text-gray-300 group-hover:text-white transition-colors text-sm">
                      <span className="mr-2">Learn more</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
