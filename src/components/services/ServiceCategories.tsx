
import { Cloud, Settings, Shield, Users } from "lucide-react";

const ServiceCategories = () => {
  const services = [
    {
      icon: Cloud,
      title: "Digital Enablement & Cloud Management",
      description: "Microsoft 365, cloud infrastructure, and digital transformation solutions.",
      features: ["Microsoft 365 Setup & Management", "Cloud Migration & Optimization", "Digital Workspace Solutions"]
    },
    {
      icon: Settings,
      title: "Managed Hosting & Infrastructure",
      description: "Reliable hosting solutions with 99.9% uptime and comprehensive management.",
      features: ["24/7 Server Monitoring", "Automated Backups", "Performance Optimization"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Robust security measures and compliance frameworks to protect your business.",
      features: ["Security Audits & Assessment", "Compliance Management", "Threat Detection & Response"]
    },
    {
      icon: Users,
      title: "Workflow Automation & Integration",
      description: "Streamline operations with intelligent automation and seamless integrations.",
      features: ["Process Automation", "Third-party API Integration", "Custom Workflow Design"]
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">{service.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-blue-200 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
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
