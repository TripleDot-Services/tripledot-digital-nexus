
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const DetailedTestimonials = () => {
  const testimonials = [
    {
      quote: "TripleDot didn't just implement Microsoft 365 - they completely transformed how our team collaborates. The automation workflows they built save us 20+ hours per week, and their ongoing support is exceptional. ROI was achieved in just 3 months.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      companySize: "50-100 employees",
      industry: "SaaS",
      results: "20+ hours saved weekly",
      rating: 5,
      projectType: "Digital Infrastructure"
    },
    {
      quote: "The creative team at TripleDot understood our vision from day one. They delivered not just a website, but a complete brand ecosystem that increased our conversion rate by 40%. The attention to detail and strategic thinking was outstanding.",
      author: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "EduCreate",
      companySize: "10-50 employees",
      industry: "Education",
      results: "40% increase in conversions",
      rating: 5,
      projectType: "Brand & Web Design"
    },
    {
      quote: "Their ventures approach is unique in the market. They built us a custom tool that became integral to our operations - we literally can't imagine working without it now. True innovation partners who understand startup needs.",
      author: "Lisa Wang",
      role: "Head of Operations",
      company: "StartupLab",
      companySize: "100+ employees",
      industry: "Incubator",
      results: "Custom solution deployed",
      rating: 5,
      projectType: "Custom Venture Development"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-400 text-lg">Real results from real partnerships</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-blue-500/30 transition-all duration-300">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-gray-400">({testimonial.rating}.0)</span>
                </div>
                
                {/* Quote */}
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                
                {/* Results Badge */}
                <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-lg p-3 mb-6">
                  <div className="text-sm text-emerald-400 font-medium">Key Result</div>
                  <div className="text-white font-semibold">{testimonial.results}</div>
                </div>
                
                {/* Author Info */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-blue-400 text-sm font-medium">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">{testimonial.companySize}</div>
                      <div className="text-xs text-gray-500">{testimonial.industry}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                      {testimonial.projectType}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Overall Stats */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-6">Overall Client Satisfaction</h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="flex items-center justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-2xl font-bold text-yellow-400">4.9/5</div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">95%</div>
                <div className="text-gray-400 text-sm">Project Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-gray-400 text-sm">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedTestimonials;
