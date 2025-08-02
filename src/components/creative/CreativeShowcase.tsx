
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
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-400 text-lg">Recent projects that transformed businesses</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all group overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 right-4">
                  <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-purple-400 border-purple-400">
                    {project.type}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="text-lg font-semibold text-pink-400 mb-4">
                  {project.result}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
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
