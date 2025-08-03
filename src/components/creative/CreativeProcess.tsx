
import React from 'react';
import { Eye, Palette, Rocket } from 'lucide-react';

const CreativeProcess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glass background */}
      <div className="absolute inset-0 glass-bg"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-neo-pink/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-neo-purple/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Main content container */}
      <div className="max-w-6xl mx-auto relative">
        
        {/* Header section */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text-secondary">
            Our Creative Process
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our three-step creative process transforms your vision into compelling digital experiences.
          </p>
        </header>

        {/* Grid layout for the three steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1: Discover */}
          <div className="glass-card border border-neo-purple/30 p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-neo-purple/50 glow-secondary">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-br from-neo-purple to-neo-pink text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg glow-secondary">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-neo-purple">Discover</h3>
            </div>
            <p className="text-muted-foreground">
              We understand your vision, audience, and goals through strategic workshops. Every great design starts with deep understanding.
            </p>
          </div>

          {/* Step 2: Design */}
          <div className="glass-card border border-neo-pink/30 p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-neo-pink/50 glow-accent">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-br from-neo-pink to-neo-coral text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg glow-accent">
                <Palette size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-neo-pink">Design</h3>
            </div>
            <p className="text-muted-foreground">
              We craft beautiful, functional solutions that bring your brand to life. Every pixel serves a purpose in your story.
            </p>
          </div>

          {/* Step 3: Deliver */}
          <div className="glass-card border border-neo-blue/30 p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-neo-blue/50 glow-primary">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-br from-neo-blue to-neo-cyan text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg glow-primary">
                <Rocket size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-neo-blue">Deliver</h3>
            </div>
            <p className="text-muted-foreground">
              We launch your solution and provide ongoing optimization and support. Your success is our measure of excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeProcess;
