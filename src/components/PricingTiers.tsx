
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingTiers = () => {
  const pricingTiers = [
    {
      name: "Foundation",
      price: "€2,500",
      period: "/month",
      description: "Essential digital infrastructure for growing businesses",
      features: [
        "Microsoft 365 Administration",
        "Basic Security & Compliance",
        "Monthly Strategy Call",
        "Email Support",
        "Standard SLA"
      ],
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      name: "Growth",
      price: "€5,000",
      period: "/month",
      description: "Comprehensive digital transformation with creative support",
      features: [
        "Everything in Foundation",
        "Power Platform Development",
        "Workflow Automation",
        "Brand & Creative Services",
        "Bi-weekly Strategy Calls",
        "Priority Support",
        "Enhanced SLA"
      ],
      color: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      name: "Innovation",
      price: "€10,000",
      period: "/month",
      description: "Full ecosystem access including ventures and custom development",
      features: [
        "Everything in Growth",
        "Custom Tool Development",
        "Ventures Access",
        "Dedicated Account Manager",
        "Weekly Strategy Sessions",
        "24/7 Support",
        "Premium SLA",
        "Early Access to New Tools"
      ],
      color: "from-emerald-500 to-emerald-600",
      popular: false
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-gray-400 text-lg">Choose the partnership level that fits your growth stage</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`bg-gray-900/50 border-gray-800 relative ${tier.popular ? 'border-purple-500/50 scale-105' : ''} hover:border-gray-600 transition-all duration-300`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">{tier.name.charAt(0)}</span>
                </div>
                <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                <div className="text-3xl font-bold text-white">
                  {tier.price}<span className="text-lg text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-400">{tier.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90`}>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-400">
            All plans include setup, training, and ongoing optimization. 
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 ml-1">Contact us</Link> for custom enterprise solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
