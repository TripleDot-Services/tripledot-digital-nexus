
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Server, Palette, Rocket, Zap, Sparkles, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InteractivePillars = () => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const pillars = [
    {
      id: "services",
      title: "Services",
      icon: Server,
      color: "neo-blue",
      description: "The foundation of your digital transformation. From Microsoft 365 to automation, we provide the reliable infrastructure that keeps your business running smoothly.",
      features: [
        "Digital enablement & cloud management",
        "Managed hosting & security compliance", 
        "Workflow automation & integrations"
      ],
      link: "/services",
      demo: "99.9% uptime guarantee",
      stats: { value: "500+", label: "Projects Delivered" }
    },
    {
      id: "creative",
      title: "Creative",
      icon: Palette,
      color: "neo-purple",
      description: "Where vision meets execution. We design experiences that captivate, build tools that empower, and create content that converts.",
      features: [
        "Brand identity & web design",
        "Content publishing & creator tools",
        "Media production & automation"
      ],
      link: "/creative",
      demo: "Award-winning design",
      stats: { value: "150+", label: "Brands Transformed" }
    },
    {
      id: "ventures",
      title: "Ventures",
      icon: Rocket,
      color: "neo-emerald",
      description: "Innovation in action. Our lab where we build tomorrow's solutions today, turning experimental ideas into game-changing products.",
      features: [
        "AI-powered automation tools",
        "Custom platform development",
        "Market validation & scaling"
      ],
      link: "/ventures",
      demo: "Cutting-edge solutions",
      stats: { value: "25+", label: "Innovations Launched" }
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neo-blue/5 to-transparent"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-neo-purple/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-neo-emerald/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 mb-8 glass rounded-full">
            <Target className="w-4 h-4 mr-2 text-neo-blue" />
            <span className="text-sm font-medium text-foreground/80">Our Three Pillars</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-primary">
            The TripleDot Ecosystem
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Services fund Creative. Creative empowers Ventures. Ventures grow the brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;
            
            return (
              <Card 
                key={pillar.id}
                className={`glass border-white/10 transition-all duration-500 group cursor-pointer transform ${
                  isActive ? 'scale-105 glow-primary' : 'hover:scale-102'
                } shadow-xl hover:shadow-2xl animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActivePillar(pillar.id)}
                onMouseLeave={() => setActivePillar(null)}
              >
                <CardContent className="p-8 relative overflow-hidden h-full flex flex-col">
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity ${
                    pillar.color === 'neo-blue' ? 'from-neo-blue to-neo-cyan' :
                    pillar.color === 'neo-purple' ? 'from-neo-purple to-neo-pink' :
                    'from-neo-emerald to-neo-cyan'
                  }`}></div>
                  
                  {/* Floating decoration */}
                  <div className={`absolute top-8 right-4 w-8 h-8 rounded-full opacity-20 animate-float ${
                    pillar.color === 'neo-blue' ? 'bg-blue-500' :
                    pillar.color === 'neo-purple' ? 'bg-purple-500' :
                    'bg-emerald-500'
                  }`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg relative z-10 ${
                    pillar.color === 'neo-blue' ? 'from-neo-blue to-neo-cyan' :
                    pillar.color === 'neo-purple' ? 'from-neo-purple to-neo-pink' :
                    'from-neo-emerald to-neo-cyan'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-4 transition-colors relative z-10 ${
                    pillar.color === 'neo-blue' ? 'group-hover:text-neo-blue gradient-text-primary' :
                    pillar.color === 'neo-purple' ? 'group-hover:text-neo-purple gradient-text-secondary' :
                    'group-hover:text-neo-emerald gradient-text-accent'
                  }`}>{pillar.title}</h3>
                  
                  <p className="text-foreground/60 mb-6 leading-relaxed relative z-10">{pillar.description}</p>
                  
                  <div className={`space-y-3 mb-8 flex-grow transition-all duration-300 relative z-10 ${
                    isActive ? 'opacity-100 max-h-40' : 'opacity-80 max-h-32'
                  }`}>
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-foreground/70">
                        <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                          pillar.color === 'neo-blue' ? 'bg-neo-blue' :
                          pillar.color === 'neo-purple' ? 'bg-neo-purple' :
                          'bg-neo-emerald'
                        }`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="glass p-4 rounded-xl mb-6 relative z-10 mt-auto">
                    <div className={`text-2xl font-bold mb-1 ${
                      pillar.color === 'neo-blue' ? 'text-neo-blue' :
                      pillar.color === 'neo-purple' ? 'text-neo-purple' :
                      'text-neo-emerald'
                    }`}>{pillar.stats.value}</div>
                    <div className="text-xs text-foreground/60">{pillar.stats.label}</div>
                  </div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <Button 
                      variant="ghost" 
                      className={`font-medium flex items-center transition-colors hover:bg-transparent ${
                        pillar.color === 'neo-blue' ? 'text-neo-blue hover:text-neo-cyan' :
                        pillar.color === 'neo-purple' ? 'text-neo-purple hover:text-neo-pink' :
                        'text-neo-emerald hover:text-neo-cyan'
                      }`}
                    >
                      <Link to={pillar.link} className="flex items-center">
                        Learn More <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                    <div className={`text-xs font-semibold px-3 py-1 rounded-full glass border ${
                      pillar.color === 'neo-blue' ? 'text-neo-blue border-neo-blue/20' :
                      pillar.color === 'neo-purple' ? 'text-neo-purple border-neo-purple/20' :
                      'text-neo-emerald border-neo-emerald/20'
                    }`}>
                      {pillar.demo}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Connection visualization */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 glass p-6 rounded-2xl">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-neo-blue" />
              <span className="text-sm font-medium">Services</span>
            </div>
            <ChevronRight className="w-4 h-4 text-foreground/40" />
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-neo-purple" />
              <span className="text-sm font-medium">Creative</span>
            </div>
            <ChevronRight className="w-4 h-4 text-foreground/40" />
            <div className="flex items-center space-x-2">
              <Rocket className="w-5 h-5 text-neo-emerald" />
              <span className="text-sm font-medium">Ventures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePillars;
