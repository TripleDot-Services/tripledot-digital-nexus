
const CreativeProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We understand your vision, audience, and goals through strategic workshops."
    },
    {
      number: "02", 
      title: "Design",
      description: "We craft beautiful, functional solutions that bring your brand to life."
    },
    {
      number: "03",
      title: "Deliver",
      description: "We launch your solution and provide ongoing optimization and support."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-purple-400/20 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeProcess;
