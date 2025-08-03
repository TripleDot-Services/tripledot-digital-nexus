
const VentureMetrics = () => {
  const metrics = [
    { number: "12+", label: "Active Projects", color: "neo-orange" },
    { number: "3", label: "Launched Ventures", color: "neo-emerald" },
    { number: "50K+", label: "Users Reached", color: "neo-cyan" },
    { number: "85%", label: "Success Rate", color: "neo-orange" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="glass-card p-6 text-center ventures-card-glow transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-3xl md:text-4xl font-bold text-${metric.color} mb-2 ventures-floating`}>
                {metric.number}
              </div>
              <div className="text-muted-foreground font-medium">{metric.label}</div>
              
              {/* Decorative elements */}
              <div className={`mt-4 w-12 h-1 bg-gradient-to-r from-${metric.color} to-transparent mx-auto rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VentureMetrics;
