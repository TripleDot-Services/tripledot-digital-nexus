
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "How do the three pillars of TripleDot work together?",
      answer: "Services provide the stable foundation and revenue stream. Creative brings innovation and brand differentiation. Ventures push boundaries and create new opportunities. Each pillar strengthens the others - Services fund Creative, Creative empowers Ventures, and Ventures grow the overall brand."
    },
    {
      question: "What makes TripleDot different from other digital agencies?",
      answer: "We're not just an agency - we're a digital operating system. We combine reliable services, creative excellence, and innovative ventures under one roof. This integrated approach means we can solve complex problems holistically rather than just addressing symptoms."
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with businesses at all stages. Our Services pillar helps startups establish solid foundations, Creative helps them stand out in the market, and Ventures can even spin out solutions that benefit the entire startup ecosystem."
    },
    {
      question: "How do you handle data privacy and security?",
      answer: "Security and privacy are fundamental to everything we do. We offer GDPR-compliant EU hosting, implement enterprise-grade security measures, and follow best practices for data protection. All our solutions include comprehensive security audits and compliance documentation."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Timelines vary by scope and complexity. Services implementations typically take 2-6 weeks, Creative projects range from 4-12 weeks, and Ventures can span 3-6 months for initial MVPs. We always provide detailed timelines during our discovery phase."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Absolutely. We believe in long-term partnerships. Our Services include ongoing management and support, Creative projects come with maintenance packages, and Ventures often evolve into ongoing product development relationships."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Get answers to common questions about working with TripleDot</p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-0">
              <Card className="bg-gray-900/50 border-gray-800">
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline hover:bg-gray-800/50 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
