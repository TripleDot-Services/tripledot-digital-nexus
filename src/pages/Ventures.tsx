
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CredentialsSection from "@/components/CredentialsSection";
import VentureHero from "@/components/ventures/VentureHero";
import VentureMetrics from "@/components/ventures/VentureMetrics";
import InnovationLab from "@/components/ventures/InnovationLab";
import VentureProcess from "@/components/ventures/VentureProcess";
import VentureRoadmap from "@/components/ventures/VentureRoadmap";
import InnovationAreas from "@/components/ventures/InnovationAreas";
import VentureCTA from "@/components/ventures/VentureCTA";

const Ventures = () => {
  const partnerTestimonials = [
    {
      quote: "TripleDot Ventures didn't just build our tool - they became our innovation partners. Their venture is now integral to our daily operations.",
      author: "Alex Chen",
      role: "Innovation Director",
      company: "TechForward Inc."
    },
    {
      quote: "The prototype-to-market process was seamless. They understood our industry needs and delivered exactly what we didn't know we needed.",
      author: "Maria Santos",
      role: "Operations Manager", 
      company: "StartupHub"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="flex flex-col">
        <VentureHero />
        <VentureMetrics />
        <InnovationLab />
        
        {/* Partner Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Innovation Partner Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerTestimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-8">
                    <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-emerald-400 text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CredentialsSection />
        <VentureProcess />
        <VentureRoadmap />
        <InnovationAreas />
        <VentureCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Ventures;
