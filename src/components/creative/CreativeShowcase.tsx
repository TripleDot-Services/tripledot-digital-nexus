
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const CreativeShowcase = () => {
  const projects = [
    {
      title: "EduCreate Platform",
      type: "Brand + Website",
      description: "Complete brand identity and Ghost-powered educational platform",
      result: "300% user engagement increase",
      color: "from-pink-500 to-rose-500",
      tags: ["Branding", "Web Design", "Content Platform"]
    },
    {
      title: "TechFlow Rebrand",
      type: "Visual Identity",
      description: "Modern B2B brand system with comprehensive guidelines",
      result: "200% brand recognition boost",
      color: "from-purple-500 to-indigo-500",
      tags: ["Logo Design", "Brand Guidelines", "Marketing Materials"]
    },
    {
      title: "StartupLab Content Hub",
      type: "Content Strategy",
      description: "Multi-channel content system with automated workflows",
      result: "5x content output increase",
      color: "from-blue-500 to-cyan-500",
      tags: ["Content Strategy", "Automation", "Multi-channel"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glass background */}
      <div className="absolute inset-0 glass-bg"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-neo-purple/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-neo-pink/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text-secondary">Featured Work</h2>
          <p className="text-muted-foreground text-lg">Recent projects that transformed businesses</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border border-neo-purple/30 hover:border-neo-purple/50 transition-all group overflow-hidden hover:scale-105 glow-secondary">
              <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 right-4">
                  <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-neo-purple border-neo-purple/50">
                    {project.type}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-neo-purple">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="text-lg font-semibold text-neo-pink mb-4">
                  {project.result}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs glass-card text-muted-foreground px-2 py-1 rounded border border-neo-purple/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeShowcase;
