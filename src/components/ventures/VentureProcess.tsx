
const VentureProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Ideate",
      description: "Generate and validate innovative concepts through market research.",
      color: "neo-blue"
    },
    {
      number: "02", 
      title: "Prototype",
      description: "Build and test minimum viable products with real user feedback.",
      color: "neo-purple"
    },
    {
      number: "03",
      title: "Scale", 
      description: "Launch successful ventures and grow them into sustainable businesses.",
      color: "neo-emerald"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-neo-orange rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-neo-emerald rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-neo-cyan rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-neo-blue via-neo-purple to-neo-emerald bg-clip-text text-transparent">
          Venture Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting lines */}
          <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-neo-blue via-neo-purple to-neo-emerald"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step indicator */}
              <div className={`w-20 h-20 bg-gradient-to-br from-${step.color} to-${step.color}/50 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg ventures-pulse-glow relative z-10`}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              
              {/* Content card */}
              <div className="glass-card p-6 ventures-card-glow transition-all duration-500 hover:scale-105">
                <h3 className={`text-2xl font-bold mb-4 text-${step.color}`}>{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Progress indicator */}
                <div className="mt-4 flex justify-center">
                  <div className={`w-8 h-1 bg-${step.color} rounded-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VentureProcess;
