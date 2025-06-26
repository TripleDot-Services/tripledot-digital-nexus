
const ProcessSteps = () => {
  const processSteps = [
    {
      step: "1",
      title: "Discovery & Assessment",
      description: "We analyze your current setup, identify pain points, and understand your goals through detailed workshops and technical audits."
    },
    {
      step: "2",
      title: "Strategy & Planning",
      description: "Custom roadmap creation with clear milestones, timelines, and success metrics aligned with your business objectives."
    },
    {
      step: "3",
      title: "Implementation & Testing",
      description: "Careful deployment with thorough testing, user training, and gradual rollout to minimize disruption."
    },
    {
      step: "4",
      title: "Optimization & Support",
      description: "Ongoing monitoring, performance optimization, and continuous improvement based on usage data and feedback."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Proven Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">{process.step}</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-400">{process.title}</h3>
              <p className="text-gray-300 text-sm">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
