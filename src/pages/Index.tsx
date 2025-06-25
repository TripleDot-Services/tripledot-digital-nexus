
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            TripleDot
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A modern digital operating system connecting services, creativity, and innovation
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            We don't just solve today's problems - we build the foundation for tomorrow's opportunities. 
            Through strategic services, creative excellence, and innovative ventures, we transform businesses 
            into digital-first organizations ready for whatever comes next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Link to="/services" className="flex items-center">
                Explore Services <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
              <div className="text-gray-400 text-sm">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
              <div className="text-gray-400 text-sm">Innovative Solutions Built</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Three Pillars</h2>
            <p className="text-gray-400 text-lg">Services fund Creative. Creative empowers Ventures. Ventures grow the brand.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold">S</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Services</h3>
                <p className="text-gray-400 mb-4">
                  The foundation of your digital transformation. From Microsoft 365 to automation, 
                  we provide the reliable infrastructure that keeps your business running smoothly.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    Digital enablement & cloud management
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    Managed hosting & security compliance
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    Workflow automation & integrations
                  </div>
                </div>
                <Link to="/services" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Creative */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold">C</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Creative</h3>
                <p className="text-gray-400 mb-4">
                  Where vision meets execution. We design experiences that captivate, 
                  build tools that empower, and create content that converts.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    Brand identity & web design
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    Content publishing & creator tools
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    Media production & automation
                  </div>
                </div>
                <Link to="/creative" className="text-purple-400 hover:text-purple-300 font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Ventures */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold">V</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">Ventures</h3>
                <p className="text-gray-400 mb-4">
                  Innovation in action. Our lab where we build tomorrow's solutions today, 
                  turning experimental ideas into game-changing products.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                    AI-powered automation tools
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                    Custom platform development
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                    Market validation & scaling
                  </div>
                </div>
                <Link to="/ventures" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* Testimonials */}
      <Testimonials />

      {/* Growth Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The TripleDot Difference</h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl"></div>
            <div className="relative bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-800">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                "Most agencies solve problems in isolation. We see the bigger picture. Every solution we build 
                considers not just your immediate needs, but how it fits into your long-term digital strategy. 
                Our three pillars work together to create sustainable growth that compounds over time."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">Reliable</div>
                  <div className="text-gray-400 text-sm">99.9% uptime guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">Creative</div>
                  <div className="text-gray-400 text-sm">Award-winning design</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">Innovative</div>
                  <div className="text-gray-400 text-sm">Cutting-edge solutions</div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Link to="/contact">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Index;
