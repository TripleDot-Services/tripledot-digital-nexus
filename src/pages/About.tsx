
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageTransition from "@/components/ui/page-transition";
import ScrollToTop from "@/components/ui/scroll-to-top";
import PageLayout from "@/components/ui/page-layout";

const About = () => {
  return (
    <PageLayout>
      <SEO 
        title="About - TripleDot"
        description="Learn about TripleDot's mission, team, and approach to digital transformation, creative design, and technology innovation."
        keywords="about us, company, team, mission, digital agency, technology consulting"
      />
      <PageTransition>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About TripleDot
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Who we are, how we work, and what drives us to create a modern digital operating system 
                for businesses ready to transform and scale.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl"></div>
              <div className="relative bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  "We believe technology should amplify human potential, not complicate it. TripleDot exists to 
                  simplify digital transformation through strategic services, creative excellence, and innovative 
                  ventures that work together as a unified ecosystem."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Listen First</h3>
                  <p className="text-gray-300">
                    We start by understanding your challenges, goals, and vision. Every solution begins with deep listening.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Build Together</h3>
                  <p className="text-gray-300">
                    Collaboration is at our core. We work alongside you, not just for you, ensuring solutions fit perfectly.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">Evolve Continuously</h3>
                  <p className="text-gray-300">
                    Technology and needs change. We build relationships and solutions that adapt and grow with you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Drives Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Simplicity in Complexity</h3>
                <p className="text-gray-300 mb-8">
                  We believe the best solutions feel effortless. Behind every simple experience is thoughtful 
                  complexity that we handle so you don't have to.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Quality over Quantity</h3>
                <p className="text-gray-300">
                  We'd rather do fewer things exceptionally well than many things adequately. Excellence 
                  in execution is our standard, not our exception.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Future-Ready Thinking</h3>
                <p className="text-gray-300 mb-8">
                  Every decision we make considers not just today's needs, but tomorrow's possibilities. 
                  We build solutions that scale and adapt.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Human-Centered Technology</h3>
                <p className="text-gray-300">
                  Technology serves people, not the other way around. Our solutions amplify human capabilities 
                  and create more meaningful work experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Ecosystem */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The TripleDot Ecosystem</h2>
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-300">
                  <span className="text-blue-400 font-semibold">Services</span> provide the foundation - 
                  reliable infrastructure and strategic guidance that businesses need to operate and grow.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-300">
                  <span className="text-purple-400 font-semibold">Creative</span> brings vision to life - 
                  beautiful design and powerful tools that help businesses stand out and connect with their audiences.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-300">
                  <span className="text-emerald-400 font-semibold">Ventures</span> push boundaries - 
                  innovative solutions that solve tomorrow's problems and create new opportunities.
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-300 mt-8 italic">
              "Services fund Creative. Creative empowers Ventures. Ventures grow the brand."
            </p>
          </div>
        </section>

        {/* Company Growth */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Growth Journey</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Stage 1: Foundation & Partnerships</h3>
                  <p className="text-gray-300">Establish brand identity, launch MVP services, and build strategic partnerships.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Stage 2: Operations & Case Studies</h3>
                  <p className="text-gray-300">Formalize operations with CRM systems and build compelling case studies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">Stage 3: Scale & Innovation</h3>
                  <p className="text-gray-300">Diversify services, grow the team, and launch flagship venture products.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Together?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in creating the future of digital business operations.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Link to="/contact">Let's Connect</Link>
            </Button>
          </div>
        </section>
      </PageTransition>

      <Footer />
      <ScrollToTop />
    </PageLayout>
  );
};

export default About;
