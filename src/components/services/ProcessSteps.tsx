
import ProcessStep from "@/components/ui/process-step";
import { processStepsData } from "@/data/services";

const ProcessSteps = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processStepsData.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              colorTheme="blue"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
