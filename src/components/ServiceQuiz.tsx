
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, RotateCcw } from "lucide-react";

const ServiceQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your primary business challenge?",
      options: [
        { text: "Need reliable digital infrastructure", pillar: "services" },
        { text: "Want to stand out with better design", pillar: "creative" },
        { text: "Looking for innovative solutions", pillar: "ventures" },
        { text: "Need comprehensive transformation", pillar: "all" }
      ]
    },
    {
      question: "What's your current digital maturity?",
      options: [
        { text: "Just getting started with digital tools", pillar: "services" },
        { text: "Have basics but need better presentation", pillar: "creative" },
        { text: "Advanced and ready for cutting-edge", pillar: "ventures" },
        { text: "Mixed - some areas advanced, others basic", pillar: "all" }
      ]
    },
    {
      question: "What's your primary goal?",
      options: [
        { text: "Improve efficiency and reduce costs", pillar: "services" },
        { text: "Attract more customers and build brand", pillar: "creative" },
        { text: "Innovate and disrupt my industry", pillar: "ventures" },
        { text: "Comprehensive growth across all areas", pillar: "all" }
      ]
    },
    {
      question: "What's your timeline?",
      options: [
        { text: "Need immediate improvements", pillar: "services" },
        { text: "Planning 3-6 month project", pillar: "creative" },
        { text: "Long-term innovation investment", pillar: "ventures" },
        { text: "Phased approach over 6-12 months", pillar: "all" }
      ]
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const pillarCounts = { services: 0, creative: 0, ventures: 0, all: 0 };
    
    answers.forEach((answerIndex, questionIndex) => {
      const pillar = questions[questionIndex].options[answerIndex].pillar;
      pillarCounts[pillar as keyof typeof pillarCounts]++;
    });

    if (pillarCounts.all >= 2) return "all";
    if (pillarCounts.services >= 2) return "services";
    if (pillarCounts.creative >= 2) return "creative";
    if (pillarCounts.ventures >= 2) return "ventures";
    
    // If no clear winner, suggest comprehensive approach
    return "all";
  };

  const getRecommendation = () => {
    const result = calculateResult();
    
    const recommendations = {
      services: {
        title: "Services Pillar",
        description: "Focus on building a solid digital foundation with our Services pillar. You'll benefit from Microsoft 365 setup, managed hosting, and workflow automation.",
        color: "from-blue-500 to-blue-600",
        next: "Start with a Digital Infrastructure Assessment"
      },
      creative: {
        title: "Creative Pillar",
        description: "Enhance your brand presence with our Creative pillar. Perfect for building compelling websites, content systems, and brand identity.",
        color: "from-purple-500 to-purple-600",
        next: "Begin with a Brand & Design Consultation"
      },
      ventures: {
        title: "Ventures Pillar",
        description: "Push boundaries with our Ventures pillar. Ideal for custom solutions, AI integration, and innovative product development.",
        color: "from-emerald-500 to-emerald-600",
        next: "Schedule an Innovation Strategy Session"
      },
      all: {
        title: "TripleDot Complete",
        description: "You'd benefit from our integrated approach across all three pillars. Let's create a comprehensive roadmap for your digital transformation.",
        color: "from-blue-500 via-purple-500 to-emerald-500",
        next: "Book a Complete Transformation Assessment"
      }
    };

    return recommendations[result];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const recommendation = getRecommendation();
    
    return (
      <Card className="bg-gray-900/50 border-gray-800 max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white mb-4">Your Recommendation</CardTitle>
          <div className={`w-16 h-16 bg-gradient-to-br ${recommendation.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <span className="text-white font-bold text-xl">
              {recommendation.title === "TripleDot Complete" ? "3" : recommendation.title.charAt(0)}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">{recommendation.title}</h3>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-300">{recommendation.description}</p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Recommended Next Step:</p>
            <p className="text-white font-semibold">{recommendation.next}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className={`bg-gradient-to-r ${recommendation.color} hover:opacity-90`}>
              Get Started <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline-light" onClick={resetQuiz}>
              <RotateCcw className="mr-2 w-4 h-4" />
              Retake Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800 max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-xl text-white">Find Your Perfect Pillar</CardTitle>
          <span className="text-sm text-gray-400">
            {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold text-white mb-6">
          {questions[currentQuestion].question}
        </h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 text-left bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-lg transition-all duration-200 text-gray-300 hover:text-white"
            >
              {option.text}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceQuiz;
