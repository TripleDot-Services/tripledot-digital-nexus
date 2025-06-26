
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Bot, Cog, ArrowRight, Clock, TrendingUp } from "lucide-react";

const AutomationShowcase = () => {
  const automationFeatures = [
    {
      icon: Bot,
      title: "AI-Powered Workflows",
      description: "Intelligent automation that learns and adapts to your business processes",
      metrics: "85% time reduction",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Real-time Integration",
      description: "Connect all your tools with instant data synchronization",
      metrics: "50+ integrations",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cog,
      title: "Custom API Development",
      description: "Tailored solutions that fit your unique business requirements",
      metrics: "99.9% uptime",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const automationStats = [
    { value: "2.5M+", label: "Tasks Automated" },
    { value: "40%", label: "Cost Reduction" },
    { value: "24/7", label: "Monitoring" },
    { value: "15min", label: "Setup Time" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Next-Generation Automation
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Transform your business with intelligent automation that goes beyond simple workflows
          </p>
        </div>

        {/* Automation Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {automationFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <div className="bg-gray-800/50 rounded-lg px-4 py-2 mb-4">
                    <span className="text-sm text-gray-300">Result: </span>
                    <span className="font-bold text-emerald-400">{feature.metrics}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {automationStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Explore Automation Solutions
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase;
