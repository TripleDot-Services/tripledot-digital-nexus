
import React from 'react';
import { Search, Target, Rocket } from 'lucide-react';

const ProcessSteps = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glass background */}
      <div className="absolute inset-0 glass-bg"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-neo-emerald/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-neo-cyan/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Main content container, centered with a max-width */}
      <div className="max-w-6xl mx-auto relative">
        
        {/* Header section */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text-primary">
            How We Work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our three-step process is designed to turn your business challenges into tangible results.
          </p>
        </header>

        {/* Grid layout for the three steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1: Discovery */}
          <div className="glass-card border border-neo-blue/30 p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-neo-blue/50 glow-primary">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-br from-neo-blue to-neo-cyan text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg glow-primary">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-neo-blue">Discovery</h3>
            </div>
            <p className="text-muted-foreground">
              We understand your needs, challenges, and goals through detailed consultation. We pinpoint the essential solutions that will truly drive your business forward.
            </p>
          </div>

          {/* Step 2: Strategy */}
          <div className="glass-card border border-neo-purple/30 p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-neo-purple/50 glow-secondary">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-br from-neo-purple to-neo-pink text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg glow-secondary">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-neo-purple">Strategy</h3>
            </div>
            <p className="text-muted-foreground">
              We design a precise technical roadmap that is perfectly aligned with your business objectives, focusing on what will deliver the greatest impact and tangible growth.
            </p>
          </div>

          {/* Step 3: Execution */}
          <div className="glass-card border border-neo-emerald/30 p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-neo-emerald/50 glow-accent">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-br from-neo-emerald to-neo-mint text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg glow-accent">
                <Rocket size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-neo-emerald">Execution</h3>
            </div>
            <p className="text-muted-foreground">
              We build, test, and deploy your solution with ongoing support and optimization. Our job isn't done until your team is empowered and confident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
