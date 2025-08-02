
const VentureProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Ideate",
      description: "Generate and validate innovative concepts through market research."
    },
    {
      number: "02",
      title: "Prototype",
      description: "Build and test minimum viable products with real user feedback."
    },
    {
      number: "03",
      title: "Scale",
      description: "Launch successful ventures and grow them into sustainable businesses."
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Venture Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-emerald-400/20 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VentureProcess;
