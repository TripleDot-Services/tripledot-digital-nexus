
import { Card, CardContent } from "@/components/ui/card";

const SocialProof = () => {
  const stats = [
    { number: "50+", label: "Businesses Transformed" },
    { number: "200+", label: "Hours Saved Weekly" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Response" }
  ];

  const testimonial = {
    quote: "TripleDot didn't just solve our immediate problems - they built the foundation for our future growth. The three-pillar approach means everything works together seamlessly.",
    author: "Sarah Chen",
    role: "CEO, TechFlow Solutions"
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center hover-scale">
              <div className="text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <Card className="bg-gray-900/50 border-gray-800 max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8 text-center">
            <blockquote className="text-lg md:text-xl text-gray-300 mb-6 italic">
              "{testimonial.quote}"
            </blockquote>
            <div>
              <p className="text-white font-semibold">{testimonial.author}</p>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialProof;
