
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "TechFlow Digital Transformation",
      category: "Services",
      challenge: "Manual processes causing 30+ hours/week overhead",
      solution: "Complete Microsoft 365 setup with Power Automate workflows",
      results: ["67% reduction in manual tasks", "20 hours/week saved", "99.9% uptime achieved"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "EduCreate Brand Launch",
      category: "Creative",
      challenge: "New education platform needed complete brand identity",
      solution: "End-to-end brand design with Ghost-powered content platform",
      results: ["300% increase in user engagement", "50+ content pieces published", "Brand recognition up 200%"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "StartupLab Innovation Tool",
      category: "Ventures",
      challenge: "No existing solution for startup collaboration needs",
      solution: "Custom-built collaboration platform with AI features",
      results: ["25 startups onboarded", "40% faster project completion", "Platform now licensing to others"],
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-400 text-lg">Real results from real partnerships</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-to-br ${study.color} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold">{study.category.charAt(0)}</span>
                </div>
                <CardTitle className="text-xl text-white">{study.title}</CardTitle>
                <p className="text-gray-400 text-sm">{study.category}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge</h4>
                  <p className="text-gray-400 text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution</h4>
                  <p className="text-gray-400 text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-gray-400 text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Link to="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
