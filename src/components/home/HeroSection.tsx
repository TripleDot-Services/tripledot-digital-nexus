
import { ArrowRight, Sparkles, Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-neo-blue/20 blur-xl animate-float"></div>
      <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-neo-purple/20 blur-xl animate-float delay-1000"></div>
      <div className="absolute bottom-40 left-32 w-28 h-28 rounded-full bg-neo-cyan/20 blur-xl animate-float delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-neo-pink/20 blur-xl animate-float delay-500"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="mb-6 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-neo-blue rounded-full shadow-lg glow-primary animate-pulse"></div>
              <div className="w-6 h-6 bg-neo-purple rounded-full shadow-lg glow-secondary animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-6 h-6 bg-neo-emerald rounded-full shadow-lg glow-accent animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in-up delay-200">
          <span className="gradient-text-secondary">Triple</span>
          <span className="gradient-text-primary">Dot</span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground/80 animate-fade-in-up delay-300">
          Three Pillars. One Digital Ecosystem.
        </h2>
        
        {/* Three Subdivisions Highlight */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 text-lg animate-fade-in-up delay-400">
          <Link to="/services" className="flex items-center glass px-4 py-2 rounded-full hover:bg-neo-blue/10 transition-all duration-300">
            <div className="w-3 h-3 bg-neo-blue rounded-full mr-3 glow-primary"></div>
            <span className="text-neo-blue font-semibold">Services</span>
          </Link>
          <Link to="/creative" className="flex items-center glass px-4 py-2 rounded-full hover:bg-neo-purple/10 transition-all duration-300">
            <div className="w-3 h-3 bg-neo-purple rounded-full mr-3 glow-secondary"></div>
            <span className="text-neo-purple font-semibold">Creative</span>
          </Link>
          <Link to="/ventures" className="flex items-center glass px-4 py-2 rounded-full hover:bg-neo-emerald/10 transition-all duration-300">
            <div className="w-3 h-3 bg-neo-emerald rounded-full mr-3 glow-accent"></div>
            <span className="text-neo-emerald font-semibold">Ventures</span>
          </Link>
        </div>
        
        {/* Badge moved here */}
        <div className="inline-flex items-center px-4 py-2 mb-6 glass rounded-full animate-fade-in">
          <Sparkles className="w-4 h-4 mr-2 text-neo-blue animate-pulse-glow" />
          <span className="text-sm font-medium text-foreground/80">Where Innovation Meets Excellence</span>
        </div>
        
        {/* Core Philosophy */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up delay-500 flex items-center justify-center">
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/70 mb-4 leading-relaxed whitespace-nowrap text-center">
            Services fund Creative. Creative empowers Ventures. Ventures grow the brand.
          </p>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-600">
          The digital operating system that transforms businesses through reliable infrastructure, 
          captivating design, and innovative solutions.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-700">
          <Button size="lg" className="group bg-gradient-to-r from-neo-blue to-neo-purple hover:from-neo-purple hover:to-neo-pink text-white font-semibold px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/services" className="flex items-center">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="group glass border-neo-purple/30 text-neo-purple hover:bg-neo-purple/10 px-8 py-4 text-lg rounded-2xl transition-all duration-300">
            <Link to="/ventures" className="flex items-center">
              <Play className="mr-2 w-5 h-5 group-hover:text-neo-cyan transition-colors" />
              See Innovation
            </Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in-up delay-900">
          <div className="glass-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold gradient-text-primary mb-2">99.9%</div>
            <div className="text-sm text-foreground/60">Uptime Guarantee</div>
          </div>
          <div className="glass-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold gradient-text-secondary mb-2">5</div>
            <div className="text-sm text-foreground/60">Exclusive Clients</div>
          </div>
          <div className="glass-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold gradient-text-accent mb-2">∞</div>
            <div className="text-sm text-foreground/60">Possibilities</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
