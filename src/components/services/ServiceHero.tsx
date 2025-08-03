
const ServiceHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      
      {/* Floating neon elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neo-blue/20 rounded-full blur-3xl animate-pulse glow-primary"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neo-purple/20 rounded-full blur-3xl animate-pulse delay-1000 glow-secondary"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neo-emerald/10 rounded-full blur-3xl animate-pulse delay-500 glow-accent"></div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 gradient-text-primary">
            Services That Scale
          </h1>
          
          {/* Exclusivity badge */}
          <div className="inline-flex items-center px-6 py-3 glass-card border border-neo-blue/30 mb-6">
            <div className="w-2 h-2 bg-neo-emerald rounded-full mr-3 animate-pulse glow-accent"></div>
            <span className="text-sm font-medium text-neo-blue">Limited to 5 clients • Ensuring agility & premium quality</span>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Technology solutions that work. We handle the complex tech so you can focus on growing your business.
          </p>
          
          {/* Stats section */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="text-center glass-card border border-neo-blue/20 glow-primary">
              <div className="text-3xl md:text-4xl font-bold text-neo-blue mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center glass-card border border-neo-purple/20 glow-secondary">
              <div className="text-3xl md:text-4xl font-bold text-neo-purple mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center glass-card border border-neo-emerald/20 glow-accent">
              <div className="text-3xl md:text-4xl font-bold text-neo-emerald mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
