
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceCategories = () => {
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

  return (
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
  );
};

export default ServiceCategories;
