
const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your needs, challenges, and goals through detailed consultation."
    },
    {
      number: "02",
      title: "Strategy",
      description: "We design a technical roadmap that aligns with your business objectives."
    },
    {
      number: "03",
      title: "Execution",
      description: "We build, test, and deploy your solution with ongoing support and optimization."
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-blue-500/30">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-400">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
