
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceQuiz from "@/components/ServiceQuiz";
import ROICalculator from "@/components/ROICalculator";
import KnowledgeBase from "@/components/KnowledgeBase";
import { Calculator, HelpCircle, BookOpen, ChevronRight } from "lucide-react";

const Tools = () => {
  const [activeTab, setActiveTab] = useState("quiz");

  const tools = [
    {
      id: "quiz",
      name: "Service Quiz",
      icon: HelpCircle,
      description: "Find the perfect TripleDot pillar for your business needs",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "calculator",
      name: "ROI Calculator",
      icon: Calculator,
      description: "Calculate potential savings and return on investment",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "knowledge",
      name: "Knowledge Base",
      icon: BookOpen,
      description: "Browse guides, insights, and best practices",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "quiz":
        return <ServiceQuiz />;
      case "calculator":
        return <ROICalculator />;
      case "knowledge":
        return <KnowledgeBase />;
      default:
        return <ServiceQuiz />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Interactive Tools
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the perfect solutions for your business with our interactive tools and resources
          </p>
        </div>
      </section>

      {/* Tool Navigation */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                    activeTab === tool.id
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-700 bg-gray-900/50 hover:border-gray-600 hover:bg-gray-800/50'
                  }`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Tool */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {renderActiveComponent()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Use our tools to plan your digital transformation, then let's make it happen together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Link to="/contact" className="flex items-center">
                Schedule Consultation <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline-light">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tools;
