
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QuickFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes TripleDot different from other agencies?",
      answer: "We're the only agency that combines reliable services, creative excellence, and innovative ventures under one roof. Our three pillars work together to create sustainable, long-term growth rather than isolated solutions."
    },
    {
      question: "How quickly can you start working on my project?",
      answer: "Most service implementations can begin within 1-2 weeks. Creative projects typically start within a week of approval, and ventures depend on complexity but usually kick off within 2-3 weeks."
    },
    {
      question: "Do you work with small businesses or just enterprises?",
      answer: "We work with businesses of all sizes. Our scalable solutions are designed to grow with you, whether you're a startup or an established enterprise."
    },
    {
      question: "What's included in your ongoing support?",
      answer: "All our services include ongoing maintenance, monitoring, and support. We provide 99.9% uptime guarantees for hosted services and dedicated account management for all clients."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Answers</h2>
          <p className="text-gray-400 text-lg">Common questions about working with TripleDot</p>
        </div>
        
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6 text-gray-400 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline-light">
            <Link to="/faq">View All FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickFAQ;
