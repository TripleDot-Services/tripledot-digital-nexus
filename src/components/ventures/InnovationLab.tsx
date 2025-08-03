
import { Lightbulb, Rocket, Target } from "lucide-react";

const InnovationLab = () => {
  const innovations = [
    {
      icon: Lightbulb,
      title: "AI-Powered Tools",
      description: "Developing intelligent automation solutions for modern businesses.",
      color: "neo-orange",
      particles: "top-4 right-4"
    },
    {
      icon: Rocket,
      title: "SaaS Platforms", 
      description: "Building scalable software solutions that solve real market problems.",
      color: "neo-emerald",
      particles: "top-6 left-6"
    },
    {
      icon: Target,
      title: "Market Validation",
      description: "Testing and iterating on ideas with real users and measurable results.",
      color: "neo-cyan",
      particles: "bottom-4 right-6"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neo-orange rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-neo-emerald rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-neo-cyan rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-neo-orange rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-neo-orange to-neo-emerald bg-clip-text text-transparent">
          Innovation Lab
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl text-center ventures-card-glow transition-all duration-500 hover:scale-105 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background particles */}
              <div className={`absolute ${item.particles} w-1 h-1 bg-${item.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              
              {/* Icon with glow effect */}
              <div className={`w-16 h-16 bg-gradient-to-br from-${item.color} to-${item.color}/50 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg ventures-floating`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className={`text-xl font-bold mb-4 text-${item.color}`}>{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              
              {/* Decorative gradient line */}
              <div className={`mt-6 w-16 h-0.5 bg-gradient-to-r from-${item.color} to-transparent mx-auto rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;
