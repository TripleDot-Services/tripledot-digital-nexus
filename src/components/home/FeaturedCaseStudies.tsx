
import { Link } from "react-router-dom";
import { ChevronRight, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedCaseStudies = () => {
  const featuredCases = [
    {
      title: "TechFlow Solutions",
      description: "Complete digital transformation with Microsoft 365 implementation and workflow automation",
      result: "20 hours saved weekly",
      category: "Services",
      icon: TrendingUp,
      color: "blue"
    },
    {
      title: "EduCreate Platform",
      description: "Brand redesign and custom learning management system development",
      result: "300% user engagement increase",
      category: "Creative",
      icon: Users,
      color: "purple"
    },
    {
      title: "StartupLab Innovation",
      description: "Custom AI-powered tool development and market validation",
      result: "5x faster operations",
      category: "Ventures",
      icon: Zap,
      color: "emerald"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-400 text-lg">Real results from real clients across all three pillars</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredCases.map((case_, index) => {
            const Icon = case_.icon;
            return (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all group hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 text-${case_.color}-400`} />
                    <Badge variant="outline" className={`text-${case_.color}-400 border-${case_.color}-400`}>
                      {case_.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{case_.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{case_.description}</p>
                  
                  <div className={`text-lg font-semibold text-${case_.color}-400 mb-4`}>
                    {case_.result}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button variant="outline-light">
            <Link to="/case-studies" className="flex items-center">
              View All Case Studies <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
