import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Users, TrendingUp, Clock, Target, Award } from "lucide-react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageTransition from "@/components/ui/page-transition";
import ScrollToTop from "@/components/ui/scroll-to-top";

const CaseStudies = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: "TechFlow Digital Transformation",
      category: "Services",
      industry: "Technology",
      client: "TechFlow Solutions",
      duration: "3 months",
      teamSize: "4 specialists",
      challenge: "TechFlow was struggling with manual processes that consumed 30+ hours per week, causing delays and inefficiencies across their operations. Their team was spending more time on administrative tasks than core business activities.",
      solution: "We implemented a complete Microsoft 365 setup with custom Power Automate workflows, integrated their CRM with automated reporting, and established secure cloud infrastructure with 24/7 monitoring.",
      results: [
        "67% reduction in manual administrative tasks",
        "20 hours per week saved across the team",
        "99.9% uptime achieved with new infrastructure",
        "300% faster client onboarding process",
        "Automated reporting saved 8 hours weekly"
      ],
      metrics: {
        efficiency: "+67%",
        timeSaved: "20h/week",
        uptime: "99.9%",
        roi: "340%"
      },
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-400",
      featured: true
    },
    {
      id: 2,
      title: "EduCreate Brand & Platform Launch",
      category: "Creative",
      industry: "Education",
      client: "EduCreate Academy",
      duration: "4 months",
      teamSize: "6 specialists",
      challenge: "A new education platform needed complete brand identity, content strategy, and digital presence to compete in the crowded EdTech market. They had no brand recognition and needed to establish credibility quickly.",
      solution: "We developed a comprehensive brand identity system, built a Ghost-powered content platform, created an automated content distribution system, and designed user-centric interfaces that enhanced learning experiences.",
      results: [
        "300% increase in user engagement within first quarter",
        "50+ high-quality content pieces published",
        "Brand recognition increased by 200%",
        "40% higher course completion rates",
        "150% growth in organic traffic"
      ],
      metrics: {
        engagement: "+300%",
        content: "50+ pieces",
        recognition: "+200%",
        completion: "+40%"
      },
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-400",
      featured: true
    },
    {
      id: 3,
      title: "StartupLab Innovation Platform",
      category: "Ventures",
      industry: "Technology",
      client: "StartupLab Incubator",
      duration: "6 months",
      teamSize: "8 specialists",
      challenge: "StartupLab needed a custom collaboration platform that didn't exist in the market. Existing tools couldn't handle their unique workflow requirements for managing multiple startups simultaneously.",
      solution: "We built a custom collaboration platform from the ground up, integrated AI-powered project insights, created automated progress tracking, and developed a scalable architecture that could grow with their needs.",
      results: [
        "25 startups successfully onboarded",
        "40% faster project completion times",
        "Platform now licensing to 3 other incubators",
        "60% improvement in startup success rate",
        "Generated $150K in licensing revenue"
      ],
      metrics: {
        startups: "25 onboarded",
        speed: "+40%",
        licensing: "$150K",
        success: "+60%"
      },
      color: "from-emerald-500 to-emerald-600",
      textColor: "text-emerald-400",
      featured: true
    }
  ];

  const additionalCaseStudies = [
    {
      id: 4,
      title: "MediCare Digital Infrastructure",
      category: "Services",
      industry: "Healthcare",
      challenge: "Legacy systems causing compliance issues",
      solution: "Modern cloud infrastructure with HIPAA compliance",
      results: ["100% compliance achieved", "50% faster patient processing"],
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-400"
    },
    {
      id: 5,
      title: "RetailMax Brand Refresh",
      category: "Creative",
      industry: "Retail",
      challenge: "Outdated brand losing market share",
      solution: "Complete brand redesign with omnichannel strategy",
      results: ["25% increase in sales", "40% improvement in brand sentiment"],
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400"
    },
    {
      id: 6,
      title: "FinTech Security Solution",
      category: "Ventures",
      industry: "Finance",
      challenge: "Need for advanced fraud detection",
      solution: "AI-powered security platform",
      results: ["95% fraud detection accuracy", "30% reduction in false positives"],
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Case Studies - TripleDot"
        description="Real success stories from our partnerships. See how TripleDot's services, creative solutions, and innovative ventures drive measurable results for our clients."
        keywords="case studies, success stories, client results, digital transformation, brand design, innovation solutions"
      />
      <PageTransition>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Success Stories
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real partnerships. Discover how we've helped businesses transform, 
                grow, and innovate across our three pillars.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-primary mb-2">25+</div>
                <div className="text-sm text-foreground/60">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-secondary mb-2">99.9%</div>
                <div className="text-sm text-foreground/60">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-accent mb-2">300%</div>
                <div className="text-sm text-foreground/60">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-primary mb-2">15+</div>
                <div className="text-sm text-foreground/60">Industries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Case Studies</h2>
            <div className="space-y-16">
              {featuredCaseStudies.map((study, index) => (
                <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className={`${study.textColor} border-current`}>
                          {study.category}
                        </Badge>
                        <Badge variant="outline" className="text-gray-400 border-gray-600">
                          {study.industry}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold">{study.title}</h3>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {study.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {study.teamSize}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-300 mb-2 flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            Challenge
                          </h4>
                          <p className="text-gray-400">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-300 mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Solution
                          </h4>
                          <p className="text-gray-400">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="bg-gray-900/50 border-gray-800">
                      <CardHeader>
                        <CardTitle className="text-xl text-white flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2" />
                          Key Results
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-gray-800/50 rounded-lg">
                              <div className={`text-lg font-bold ${study.textColor}`}>{value}</div>
                              <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-300 mb-3">Detailed Impact</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="text-gray-400 text-sm flex items-start">
                                <div className={`w-1.5 h-1.5 bg-gradient-to-r ${study.color} rounded-full mt-1.5 mr-3 flex-shrink-0`}></div>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Case Studies */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">More Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalCaseStudies.map((study) => (
                <Card key={study.id} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-br ${study.color} rounded-lg flex items-center justify-center mb-4`}>
                      <span className="text-white font-bold">{study.category.charAt(0)}</span>
                    </div>
                    <CardTitle className="text-xl text-white">{study.title}</CardTitle>
                    <div className="flex space-x-2">
                      <Badge variant="outline" className={`${study.textColor} border-current text-xs`}>
                        {study.category}
                      </Badge>
                      <Badge variant="outline" className="text-gray-400 border-gray-600 text-xs">
                        {study.industry}
                      </Badge>
                    </div>
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
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${study.color} rounded-full mt-1.5 mr-2 flex-shrink-0`}></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our growing list of satisfied clients and let's build something remarkable together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </PageTransition>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudies;