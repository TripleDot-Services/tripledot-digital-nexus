
import { Lightbulb, Rocket, Target } from "lucide-react";

const InnovationLab = () => {
  const innovations = [
    {
      icon: Lightbulb,
      title: "AI-Powered Tools",
      description: "Developing intelligent automation solutions for modern businesses."
    },
    {
      icon: Rocket,
      title: "SaaS Platforms",
      description: "Building scalable software solutions that solve real market problems."
    },
    {
      icon: Target,
      title: "Market Validation",
      description: "Testing and iterating on ideas with real users and measurable results."
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Innovation Lab</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((item, index) => (
            <div key={index} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 text-center hover:border-emerald-500/50 transition-colors">
              <item.icon className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;
