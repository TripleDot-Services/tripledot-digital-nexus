
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Creative = () => {
  const creativeServices = [
    {
      title: "Content & Publishing",
      description: "Platforms and tools for content creators and educators",
      color: "from-pink-500 to-pink-600",
      services: [
        "Ghost Setup for Blogs & Newsletters",
        "Podcast Infrastructure & Distribution",
        "Course Platform Integration (LMS)",
        "Digital Product Storefronts & Delivery"
      ]
    },
    {
      title: "Web & Brand Design",
      description: "Visual identity and digital experiences",
      color: "from-purple-500 to-purple-600",
      services: [
        "Website Design & Deployment (Framer, Webflow, Ghost)",
        "Brand Identity Systems (Logo, Typography, Color)",
        "UI/UX Design for Digital Experiences"
      ]
    },
    {
      title: "Creator Infrastructure",
      description: "Backend systems for content creators",
      color: "from-blue-500 to-blue-600",
      services: [
        "Notion/Airtable Workspaces",
        "Multichannel Publishing Automations",
        "Email Marketing Funnels and Integrations"
      ]
    },
    {
      title: "Media & Production Tools",
      description: "Complete media production pipeline",
      color: "from-emerald-500 to-emerald-600",
      services: [
        "Audio/Video Toolchain Setup",
        "Repurposing Pipelines",
        "Editable Templates & Digital Asset Kits"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Creative
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tools, design, and infrastructure for creators and educators. We empower your creative vision 
              with comprehensive digital solutions and stunning visual experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {creativeServices.map((category, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold text-lg">{category.title.split(' ')[0].charAt(0)}</span>
                  </div>
                  <CardTitle className="text-2xl text-white">{category.title}</CardTitle>
                  <p className="text-gray-400">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Creative Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-pink-400">Discover & Strategy</h3>
              <p className="text-gray-300">We understand your vision, audience, and goals to create a strategic foundation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Design & Build</h3>
              <p className="text-gray-300">We craft beautiful, functional solutions that bring your creative vision to life.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Launch & Optimize</h3>
              <p className="text-gray-300">We deploy your solution and continuously optimize for performance and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Creative Growth Roadmap</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">Stage 1: Deliver Standout Projects</h3>
                <p className="text-gray-300">Build internal creative library and establish design excellence.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Stage 2: Integrated Stacks & Dashboards</h3>
                <p className="text-gray-300">Offer comprehensive creative solutions with powerful management tools.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Stage 3: Flexible Creative Studio</h3>
                <p className="text-gray-300">Operate as a full-service creative studio with digital goods and products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your creative vision to life with our comprehensive design and development services.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Creative;
