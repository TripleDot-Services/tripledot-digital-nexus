
import ProcessStep from "@/components/ui/process-step";
import { processStepsData } from "@/data/services";

const ProcessSteps = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glass background */}
      <div className="absolute inset-0 glass-bg"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-neo-emerald/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-neo-cyan/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text-accent">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processStepsData.map((step, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                colorTheme="emerald"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
