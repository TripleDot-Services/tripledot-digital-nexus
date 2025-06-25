
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Ventures = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Ventures
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our internal innovation and product lab where we build, test, and launch new digital solutions. 
              A peek into the future of technology and business innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Philosophy */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovation Lab</h2>
              <p className="text-gray-300 text-lg mb-6">
                TripleDot Ventures is where we experiment with emerging technologies, validate new business models, 
                and develop solutions that don't yet exist in the market.
              </p>
              <p className="text-gray-300 mb-8">
                Our ventures are born from real problems we encounter while serving clients. We build internal tools, 
                test them in the wild, then scale the successful ones into standalone products or services.
              </p>
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
                <Link to="/contact">Discuss Partnership</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl"></div>
              <div className="relative bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Current Focus Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">AI-powered workflow automation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">No-code/low-code platforms</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Creator economy tools</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Decentralized collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Sustainable tech solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venture Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">From Idea to Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-emerald-400">Identify</h3>
              <p className="text-gray-300 text-sm">Spot problems in our client work and market gaps</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-400">Prototype</h3>
              <p className="text-gray-300 text-sm">Build minimal viable solutions and test internally</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-purple-400">Validate</h3>
              <p className="text-gray-300 text-sm">Test with select clients and gather feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-orange-400">Scale</h3>
              <p className="text-gray-300 text-sm">Launch as products or spin out as separate ventures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ventures Growth Roadmap</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Stage 1: Build Internal Tools & Prototypes</h3>
                <p className="text-gray-300">Develop solutions for our own operations and validate concepts.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Stage 2: Launch Testable MVPs</h3>
                <p className="text-gray-300">Release minimum viable products and pilot use cases with select partners.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Stage 3: Spin Out Validated Products</h3>
                <p className="text-gray-300">Scale successful ventures into standalone products or independent brands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Innovation Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">AI</span>
                </div>
                <CardTitle className="text-xl text-white">AI & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Intelligent workflows, predictive analytics, and AI-powered business tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">NC</span>
                </div>
                <CardTitle className="text-xl text-white">No-Code Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Empowering non-technical users to build powerful applications and workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CE</span>
                </div>
                <CardTitle className="text-xl text-white">Creator Economy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Tools and platforms that help creators monetize and scale their content.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Innovation</h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaborating on cutting-edge solutions or early access to our ventures?
          </p>
          <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700">
            <Link to="/contact">Explore Partnership</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ventures;
