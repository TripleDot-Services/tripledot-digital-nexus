
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingTiers from "@/components/PricingTiers";

const Services = () => {
  const serviceCategories = [
    {
      title: "Digital Enablement",
      description: "Complete Microsoft 365 and cloud infrastructure management",
      color: "from-blue-500 to-blue-600",
      pricing: "Starting at €1,500/month",
      timeline: "2-4 weeks implementation",
      services: [
        {
          name: "Microsoft 365 Administration",
          details: "Complete tenant setup, user management, licensing optimization, and ongoing administration"
        },
        {
          name: "Power Platform Development",
          details: "Custom Power Apps, Power Automate workflows, Power BI dashboards, and Power Pages sites"
        },
        {
          name: "Device & Endpoint Management",
          details: "Intune configuration, Windows device management, mobile device policies, and compliance monitoring"
        },
        {
          name: "Security & Compliance",
          details: "Multi-factor authentication, data loss prevention, Microsoft Defender, and compliance reporting"
        },
        {
          name: "Teams & SharePoint Collaboration",
          details: "Teams governance, SharePoint site architecture, document management, and collaboration workflows"
        }
      ]
    },
    {
      title: "Managed Open Source Hosting",
      description: "Fully managed, GDPR-compliant hosting for open source applications",
      color: "from-purple-500 to-purple-600",
      pricing: "Starting at €299/month",
      timeline: "1-2 weeks deployment",
      services: [
        {
          name: "Fully Managed OSS App Hosting",
          details: "Ghost, Nextcloud, BookStack, Discourse, and 50+ other applications with full management"
        },
        {
          name: "Pre-configured App Bundles",
          details: "Community Stack (Ghost + Discourse), Creator Kit (Ghost + Nextcloud), Knowledge Hub (BookStack + Wiki.js)"
        },
        {
          name: "Automatic Updates & Maintenance",
          details: "Automated updates, SSL certificates, daily backups, performance monitoring, and security patches"
        },
        {
          name: "GDPR-Compliant EU Hosting",
          details: "EU-based infrastructure with full GDPR compliance, data residency guarantees, and privacy controls"
        },
        {
          name: "Export & Migration Options",
          details: "Complete data export capabilities and assistance migrating to self-hosted or other platforms"
        },
        {
          name: "White-Label Solutions",
          details: "Custom branding, domain configuration, and white-label installations for agencies and resellers"
        }
      ]
    },
    {
      title: "Automation & Integration",
      description: "Streamline workflows and connect all your business tools",
      color: "from-emerald-500 to-emerald-600",
      pricing: "Starting at €2,000/month",
      timeline: "3-6 weeks development",
      services: [
        {
          name: "Workflow Automation",
          details: "Power Automate, Zapier, and n8n integrations to eliminate manual tasks and reduce errors"
        },
        {
          name: "SaaS-to-OSS Migrations",
          details: "Strategic migration from expensive SaaS tools to cost-effective open source alternatives"
        },
        {
          name: "Custom Dashboards & Tools",
          details: "Tailored admin panels, reporting dashboards, and internal tools built specifically for your needs"
        },
        {
          name: "API & Data Integrations",
          details: "Connect Notion, Airtable, Slack, Google Workspace, and hundreds of other tools seamlessly"
        }
      ]
    },
    {
      title: "Strategic Consulting",
      description: "Expert guidance for your digital transformation journey",
      color: "from-orange-500 to-orange-600",
      pricing: "€300/hour or retainer",
      timeline: "Ongoing partnership",
      services: [
        {
          name: "Digital Transformation Roadmaps",
          details: "Comprehensive assessment and strategic planning for digital transformation initiatives"
        },
        {
          name: "Remote-First Workflow Design",
          details: "Optimize processes and tools for distributed teams and remote-first operations"
        },
        {
          name: "Vendor & Stack Evaluation",
          details: "Unbiased analysis of technology options, cost-benefit analysis, and implementation recommendations"
        },
        {
          name: "Infrastructure Planning",
          details: "Scalable architecture design, security planning, and long-term technology strategy"
        }
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Assessment",
      description: "We analyze your current setup, identify pain points, and understand your goals through detailed workshops and technical audits."
    },
    {
      step: "2",
      title: "Strategy & Planning",
      description: "Custom roadmap creation with clear milestones, timelines, and success metrics aligned with your business objectives."
    },
    {
      step: "3",
      title: "Implementation & Testing",
      description: "Careful deployment with thorough testing, user training, and gradual rollout to minimize disruption."
    },
    {
      step: "4",
      title: "Optimization & Support",
      description: "Ongoing monitoring, performance optimization, and continuous improvement based on usage data and feedback."
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The foundation of digital transformation. Reliable, scalable, and secure infrastructure 
              that powers your business growth and enables innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring & Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">GDPR</div>
                <div className="text-gray-400 text-sm">Compliant Hosting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                        <span className="text-white font-bold text-lg">{category.title.charAt(0)}</span>
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white">{category.title}</CardTitle>
                        <p className="text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                      <div className="bg-gray-800/50 px-3 py-2 rounded">
                        <span className="text-gray-400">From </span>
                        <span className="text-white font-semibold">{category.pricing}</span>
                      </div>
                      <div className="bg-gray-800/50 px-3 py-2 rounded">
                        <span className="text-gray-400">Timeline: </span>
                        <span className="text-white font-semibold">{category.timeline}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="border-l-2 border-gray-700 pl-4">
                        <h4 className="text-white font-semibold mb-2">{service.name}</h4>
                        <p className="text-gray-400 text-sm">{service.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Proven Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-blue-400">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingTiers />

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
                <p className="text-gray-300 mb-2">Establish our fundamental services and build initial client relationships.</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Microsoft 365 administration and basic hosting</li>
                  <li>• Strategic consulting and workflow optimization</li>
                  <li>• Building our first success stories and case studies</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Stage 2: Productize with Automation</h3>
                <p className="text-gray-300 mb-2">Add automation tools and premium add-ons to enhance service delivery.</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Custom dashboard development and monitoring tools</li>
                  <li>• Advanced integration services and API development</li>
                  <li>• White-label solutions for partners and resellers</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Stage 3: Scale with Partnerships</h3>
                <p className="text-gray-300 mb-2">Build a distributed team and strategic partnerships for global reach.</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Partner network for specialized services and local support</li>
                  <li>• Enterprise-grade solutions and dedicated account management</li>
                  <li>• Integration with ventures for next-generation tools</li>
                </ul>
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
            Schedule a free consultation to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900">
              <Link to="/about">Learn About Our Approach</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
