
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Server, Palette, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InteractivePillars = () => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const pillars = [
    {
      id: "services",
      title: "Services",
      icon: Server,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      hoverBorder: "hover:border-blue-500/50",
      description: "The foundation of your digital transformation. From Microsoft 365 to automation, we provide the reliable infrastructure that keeps your business running smoothly.",
      features: [
        "Digital enablement & cloud management",
        "Managed hosting & security compliance", 
        "Workflow automation & integrations"
      ],
      link: "/services",
      demo: "99.9% uptime guarantee"
    },
    {
      id: "creative",
      title: "Creative",
      icon: Palette,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      hoverBorder: "hover:border-purple-500/50",
      description: "Where vision meets execution. We design experiences that captivate, build tools that empower, and create content that converts.",
      features: [
        "Brand identity & web design",
        "Content publishing & creator tools",
        "Media production & automation"
      ],
      link: "/creative",
      demo: "Award-winning design"
    },
    {
      id: "ventures",
      title: "Ventures",
      icon: Rocket,
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      hoverBorder: "hover:border-emerald-500/50",
      description: "Innovation in action. Our lab where we build tomorrow's solutions today, turning experimental ideas into game-changing products.",
      features: [
        "AI-powered automation tools",
        "Custom platform development",
        "Market validation & scaling"
      ],
      link: "/ventures",
      demo: "Cutting-edge solutions"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Three Pillars</h2>
          <p className="text-gray-400 text-lg">Services fund Creative. Creative empowers Ventures. Ventures grow the brand.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;
            
            return (
              <Card 
                key={pillar.id}
                className={`bg-gray-900/70 border-gray-700 ${pillar.hoverBorder} transition-all duration-300 group cursor-pointer transform ${isActive ? 'scale-105' : 'hover:scale-102'} shadow-lg hover:shadow-xl`}
                onMouseEnter={() => setActivePillar(pillar.id)}
                onMouseLeave={() => setActivePillar(null)}
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${pillar.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                    pillar.color === 'blue' ? 'group-hover:text-blue-400' :
                    pillar.color === 'purple' ? 'group-hover:text-purple-400' :
                    'group-hover:text-emerald-400'
                  }`}>{pillar.title}</h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">{pillar.description}</p>
                  
                  <div className={`space-y-2 mb-6 transition-all duration-300 ${isActive ? 'opacity-100 max-h-40' : 'opacity-70 max-h-32'}`}>
                    {pillar.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                          pillar.color === 'blue' ? 'bg-blue-400' :
                          pillar.color === 'purple' ? 'bg-purple-400' :
                          'bg-emerald-400'
                        }`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      to={pillar.link} 
                      className={`font-medium flex items-center transition-colors ${
                        pillar.color === 'blue' ? 'text-blue-400 hover:text-blue-300' :
                        pillar.color === 'purple' ? 'text-purple-400 hover:text-purple-300' :
                        'text-emerald-400 hover:text-emerald-300'
                      }`}
                    >
                      Learn More <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                    <div className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      pillar.color === 'blue' ? 'text-blue-400 bg-blue-400/10' :
                      pillar.color === 'purple' ? 'text-purple-400 bg-purple-400/10' :
                      'text-emerald-400 bg-emerald-400/10'
                    }`}>
                      {pillar.demo}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractivePillars;
