
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Code, Globe, Smartphone } from "lucide-react";

const InteractiveDemo = () => {
  const demoProjects = [
    {
      title: "Microsoft 365 Dashboard",
      description: "Real-time analytics and user management interface",
      tech: ["Power BI", "SharePoint", "Teams API"],
      status: "Live Demo",
      icon: Globe,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Workflow Automation Hub",
      description: "Visual workflow builder with drag-and-drop interface",
      tech: ["Power Automate", "Logic Apps", "Custom APIs"],
      status: "Interactive",
      icon: Code,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Mobile Admin Panel",
      description: "Cross-platform management application",
      tech: ["React Native", "Azure", "Push Notifications"],
      status: "Preview",
      icon: Smartphone,
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive Demos
          </h2>
          <p className="text-gray-400 text-lg">
            Experience our solutions firsthand with live, interactive demonstrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demoProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300 group overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-emerald-400 border-emerald-400">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
                    <Play className="mr-2 w-4 h-4" />
                    Launch Demo
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to See More?</h3>
            <p className="text-gray-400 mb-6">
              Schedule a personalized demo tailored to your specific business needs
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Request Custom Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
