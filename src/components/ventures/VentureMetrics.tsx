
const VentureMetrics = () => {
  const ventureSuccessMetrics = [
    { label: "Ventures Launched", value: "8", description: "From prototype to market" },
    { label: "Success Rate", value: "75%", description: "Ventures reaching market fit" },
    { label: "Partner Collaborations", value: "15+", description: "Strategic partnerships formed" },
    { label: "Innovation Awards", value: "3", description: "Industry recognition received" }
  ];

  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Venture Track Record</h2>
          <p className="text-gray-400 text-lg">Proven results in innovation and market validation</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ventureSuccessMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{metric.value}</div>
              <div className="text-white font-medium mb-1">{metric.label}</div>
              <div className="text-gray-400 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VentureMetrics;
