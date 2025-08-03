
const VentureHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden ventures-hero-bg">
      {/* Grid Overlay */}
      <div className="absolute inset-0 ventures-grid-overlay opacity-20"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 ventures-orb ventures-floating rounded-full"></div>
      <div className="absolute top-40 right-20 w-24 h-24 ventures-orb ventures-floating rounded-full" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-40 h-40 ventures-orb ventures-floating rounded-full" style={{ animationDelay: '4s' }}></div>
      
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          {/* Logo dots with synchronized animation */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-neo-orange rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-neo-emerald rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-neo-cyan rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neo-orange to-neo-emerald bg-clip-text text-transparent">
            Ventures
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our internal innovation and product lab where we build, test, and launch new digital solutions. 
            A peek into the future of technology and business innovation.
          </p>
          
          {/* Tech indicators */}
          <div className="flex justify-center space-x-8 mt-8">
            <div className="glass-card px-4 py-2 ventures-pulse-glow">
              <span className="text-sm text-neo-orange font-medium">AI POWERED</span>
            </div>
            <div className="glass-card px-4 py-2 ventures-pulse-glow" style={{ animationDelay: '1s' }}>
              <span className="text-sm text-neo-emerald font-medium">INNOVATION LAB</span>
            </div>
            <div className="glass-card px-4 py-2 ventures-pulse-glow" style={{ animationDelay: '2s' }}>
              <span className="text-sm text-neo-cyan font-medium">FUTURE TECH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentureHero;
