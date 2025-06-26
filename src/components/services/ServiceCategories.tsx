
import { Code, Zap, Shield, BarChart } from "lucide-react";

const ServiceCategories = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored web applications and platforms built for your specific needs.",
      features: ["React & TypeScript", "Database Design", "API Integration"]
    },
    {
      icon: Zap,
      title: "Automation & Integration",
      description: "Streamline operations with smart automation and seamless integrations.",
      features: ["Workflow Automation", "Third-party APIs", "Data Synchronization"]
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Robust, secure, and fast solutions that scale with your business.",
      features: ["Security Audits", "Performance Optimization", "Scalable Architecture"]
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Data-driven solutions to understand and optimize your business.",
      features: ["Custom Dashboards", "Real-time Analytics", "Business Intelligence"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <service.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-blue-200 text-sm">• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
