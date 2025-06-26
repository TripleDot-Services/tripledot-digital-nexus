
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";

const ServiceComparison = () => {
  const comparisonData = [
    {
      feature: "Microsoft 365 Management",
      tripledot: true,
      traditional: true,
      diy: false,
      highlight: false
    },
    {
      feature: "24/7 Monitoring & Support",
      tripledot: true,
      traditional: false,
      diy: false,
      highlight: true
    },
    {
      feature: "Custom Automation Development",
      tripledot: true,
      traditional: false,
      diy: false,
      highlight: true
    },
    {
      feature: "GDPR-Compliant EU Hosting",
      tripledot: true,
      traditional: true,
      diy: false,
      highlight: false
    },
    {
      feature: "White-Label Solutions",
      tripledot: true,
      traditional: false,
      diy: false,
      highlight: true
    },
    {
      feature: "Creative & Design Services",
      tripledot: true,
      traditional: false,
      diy: false,
      highlight: true
    },
    {
      feature: "Innovation Lab & Ventures",
      tripledot: true,
      traditional: false,
      diy: false,
      highlight: true
    },
    {
      feature: "Transparent Pricing",
      tripledot: true,
      traditional: false,
      diy: true,
      highlight: false
    }
  ];

  const plans = [
    {
      name: "TripleDot",
      subtitle: "Complete Digital Ecosystem",
      price: "From €299/month",
      popular: true,
      description: "Services + Creative + Ventures"
    },
    {
      name: "Traditional Agency",
      subtitle: "Single Service Focus",
      price: "€2,000+/month",
      popular: false,
      description: "Limited scope & flexibility"
    },
    {
      name: "DIY Approach",
      subtitle: "Build Everything Yourself",
      price: "Time + Complexity",
      popular: false,
      description: "High learning curve & risk"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose TripleDot?
          </h2>
          <p className="text-gray-400 text-lg">
            Compare our comprehensive approach with traditional alternatives
          </p>
        </div>

        {/* Plans Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`text-center ${plan.popular ? 'border-blue-500 bg-blue-500/5' : 'bg-gray-900/50 border-gray-800'}`}>
              <CardHeader>
                <div className="flex items-center justify-center mb-2">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  {plan.popular && (
                    <Badge className="ml-2 bg-blue-500">
                      <Star className="w-3 h-3 mr-1" />
                      Recommended
                    </Badge>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                <div className="text-lg font-bold text-blue-400">{plan.price}</div>
                <p className="text-gray-500 text-xs">{plan.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={`border-b border-gray-800 ${row.highlight ? 'bg-blue-500/5' : ''}`}>
                      <td className="px-6 py-4 text-left">
                        <div className="flex items-center">
                          <span className="text-white">{row.feature}</span>
                          {row.highlight && (
                            <Badge variant="outline" className="ml-2 text-xs text-blue-400 border-blue-400">
                              Unique
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.tripledot ? (
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.traditional ? (
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.diy ? (
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            * Pricing varies based on specific requirements and scope of services
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
