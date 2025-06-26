
import { Card, CardContent } from "@/components/ui/card";

const ClientShowcase = () => {
  const clients = [
    { name: "TechFlow Solutions", logo: "TF", industry: "SaaS" },
    { name: "EduCreate", logo: "EC", industry: "Education" },
    { name: "StartupLab", logo: "SL", industry: "Incubator" },
    { name: "FinanceForward", logo: "FF", industry: "FinTech" },
    { name: "HealthTech Pro", logo: "HP", industry: "Healthcare" },
    { name: "RetailNext", logo: "RN", industry: "E-commerce" }
  ];

  const certifications = [
    "Microsoft Gold Partner",
    "AWS Solution Provider",
    "Google Cloud Partner",
    "ISO 27001 Certified"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Organizations</h2>
          <p className="text-gray-400 text-lg">Join 50+ companies who've transformed their operations with TripleDot</p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 border border-gray-700/50 rounded-lg flex items-center justify-center mb-3 group-hover:from-blue-600 group-hover:to-purple-600 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-lg">{client.logo}</span>
              </div>
              <p className="text-gray-300 text-sm text-center font-medium">{client.name}</p>
              <p className="text-gray-500 text-xs">{client.industry}</p>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-400">Support Response</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-6 text-gray-300">Certifications & Partnerships</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900/70 border border-gray-600/50 rounded-lg px-4 py-2 hover:border-gray-500/50 transition-colors">
                <span className="text-gray-200 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
