
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const serviceCategories = [
    {
      title: "Digital Enablement",
      description: "Microsoft 365 and cloud infrastructure management",
      color: "from-blue-500 to-blue-600",
      services: [
        "Microsoft 365 Administration",
        "Power Platform (Power Apps, Automate, BI)",
        "Device & Endpoint Management (Intune, Windows)",
        "Security & Compliance (MFA, DLP, Defender)",
        "Teams & SharePoint Collaboration"
      ]
    },
    {
      title: "Managed Open Source Hosting",
      description: "Fully managed, GDPR-compliant hosting solutions",
      color: "from-purple-500 to-purple-600",
      services: [
        "Fully Managed OSS App Hosting (Ghost, Nextcloud, BookStack, etc.)",
        "App Bundles (Community Stack, Creator Kit, Knowledge Hub)",
        "Automatic Updates, TLS, Backups, Monitoring",
        "GDPR-Compliant EU Hosting",
        "Export & Self-Host Options",
        "White-Label Installations (Optional)"
      ]
    },
    {
      title: "Automation & Integration",
      description: "Streamline workflows and connect your tools",
      color: "from-emerald-500 to-emerald-600",
      services: [
        "Workflow Automation (Power Automate, Zapier, n8n)",
        "SaaS-to-OSS Migrations",
        "Custom Dashboards, Admin Panels, Internal Tools",
        "API and Data Integrations (Notion, Airtable, Slack, Google Workspace)"
      ]
    },
    {
      title: "Strategic Consulting",
      description: "Guide your digital transformation journey",
      color: "from-orange-500 to-orange-600",
      services: [
        "Digital Transformation Roadmaps",
        "Remote-First Workflow Design",
        "Vendor & Stack Evaluation",
        "Infrastructure Planning & Optimization"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our core offerings to support your operations and growth. From digital enablement to strategic consulting, 
              we provide the foundation for your digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold text-lg">{category.title.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-2xl text-white">{category.title}</CardTitle>
                  <p className="text-gray-400">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

      {/* Growth Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services Growth Roadmap</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Stage 1: Launch Core Offerings</h3>
                <p className="text-gray-300">Establish our fundamental services and build initial client relationships.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Stage 2: Productize with Automation</h3>
                <p className="text-gray-300">Add automation tools and premium add-ons to enhance service delivery.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Stage 3: Scale with Partnerships</h3>
                <p className="text-gray-300">Build a distributed team and strategic partnerships for global reach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can support your digital transformation journey.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
