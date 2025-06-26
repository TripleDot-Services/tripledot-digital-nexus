
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, Users, Zap } from "lucide-react";

const CredentialsSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      items: [
        "Best Digital Transformation Partner 2024",
        "Innovation Excellence Award",
        "Top Creative Agency - Regional Winner"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      items: [
        "ISO 27001 Certified",
        "SOC 2 Type II Compliant",
        "GDPR Compliant",
        "Microsoft Security Partner"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Strategic Partnerships",
      items: [
        "Microsoft Gold Partner",
        "AWS Advanced Consulting Partner",
        "Google Cloud Premier Partner",
        "Certified B-Corporation"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Technical Expertise",
      items: [
        "15+ Microsoft Certifications",
        "AWS Solutions Architect Certified",
        "Google Cloud Professional",
        "Agile & Scrum Certified Teams"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const teamStats = [
    { label: "Years Combined Experience", value: "150+" },
    { label: "Certified Professionals", value: "25+" },
    { label: "Industry Specializations", value: "12+" },
    { label: "Continuous Learning Hours/Year", value: "500+" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Credentials & Recognition</h2>
          <p className="text-gray-400 text-lg">Validated expertise you can trust</p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Expertise Stats */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Team Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-300">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">Industry Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Trusted Partners</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
