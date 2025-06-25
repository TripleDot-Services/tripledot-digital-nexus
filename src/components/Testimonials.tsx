
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TripleDot transformed our entire digital infrastructure. Their Microsoft 365 setup and automation workflows saved us 20 hours per week.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      company: "TechFlow"
    },
    {
      quote: "The creative team at TripleDot didn't just design our website - they created a complete brand ecosystem that resonates with our audience.",
      author: "Marcus Rodriguez",
      role: "Founder, EduCreate",
      company: "EduCreate"
    },
    {
      quote: "Their ventures approach is unique. They built us a custom tool that we now can't imagine working without. True innovation partners.",
      author: "Lisa Wang",
      role: "Head of Operations, StartupLab",
      company: "StartupLab"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-400 text-sm">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
