
const VentureMetrics = () => {
  const metrics = [
    { number: "12+", label: "Active Projects" },
    { number: "3", label: "Launched Ventures" },
    { number: "50K+", label: "Users Reached" },
    { number: "85%", label: "Success Rate" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{metric.number}</div>
              <div className="text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VentureMetrics;
