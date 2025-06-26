
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState([10]);
  const [hourlyRate, setHourlyRate] = useState([75]);
  const [hoursWasted, setHoursWasted] = useState([5]);
  const [selectedService, setSelectedService] = useState("services");

  const services = {
    services: {
      name: "Digital Infrastructure Services",
      monthlyCost: 2500,
      timesSaved: 0.7,
      efficiencyGain: 0.3,
      color: "from-blue-500 to-blue-600"
    },
    creative: {
      name: "Creative & Brand Services",
      monthlyCost: 3500,
      timesSaved: 0.4,
      efficiencyGain: 0.5,
      color: "from-purple-500 to-purple-600"
    },
    ventures: {
      name: "Innovation & Ventures",
      monthlyCost: 5000,
      timesSaved: 0.6,
      efficiencyGain: 0.8,
      color: "from-emerald-500 to-emerald-600"
    }
  };

  const calculateROI = () => {
    const service = services[selectedService as keyof typeof services];
    
    // Calculate current waste
    const weeklyWaste = teamSize[0] * hoursWasted[0] * hourlyRate[0];
    const monthlyWaste = weeklyWaste * 4.33; // Average weeks per month
    const yearlyWaste = monthlyWaste * 12;
    
    // Calculate savings with our service
    const timeSavings = monthlyWaste * service.timesSaved;
    const efficiencyGains = monthlyWaste * service.efficiencyGain;
    const totalMonthlySavings = timeSavings + efficiencyGains;
    const totalYearlySavings = totalMonthlySavings * 12;
    
    // Calculate ROI
    const yearlyInvestment = service.monthlyCost * 12;
    const netBenefit = totalYearlySavings - yearlyInvestment;
    const roiPercent = (netBenefit / yearlyInvestment) * 100;
    const paybackMonths = yearlyInvestment / totalMonthlySavings;
    
    return {
      monthlyWaste,
      yearlyWaste,
      totalMonthlySavings,
      totalYearlySavings,
      yearlyInvestment,
      netBenefit,
      roiPercent,
      paybackMonths
    };
  };

  const results = calculateROI();
  const service = services[selectedService as keyof typeof services];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center">
            <TrendingUp className="mr-3 w-6 h-6 text-blue-400" />
            ROI Calculator
          </CardTitle>
          <p className="text-gray-400">
            See how much you could save with TripleDot's services
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Service Selection */}
          <div>
            <label className="text-sm font-medium text-gray-300 mb-3 block">
              Select Service Type
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {Object.entries(services).map(([key, service]) => (
                <button
                  key={key}
                  onClick={() => setSelectedService(key)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedService === key
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                  }`}
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded mb-2`}></div>
                  <div className="text-white font-medium text-sm">{service.name}</div>
                  <div className="text-gray-400 text-xs">From ${service.monthlyCost}/month</div>
                </button>
              ))}
            </div>
          </div>

          {/* Input Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-3 block">
                Team Size: {teamSize[0]} people
              </label>
              <Slider
                value={teamSize}
                onValueChange={setTeamSize}
                max={100}
                min={1}
                step={1}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-300 mb-3 block">
                Average Hourly Rate: ${hourlyRate[0]}
              </label>
              <Slider
                value={hourlyRate}
                onValueChange={setHourlyRate}
                max={200}
                min={25}
                step={5}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-300 mb-3 block">
                Hours Wasted Weekly: {hoursWasted[0]} hours
              </label>
              <Slider
                value={hoursWasted}
                onValueChange={setHoursWasted}
                max={20}
                min={1}
                step={0.5}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-red-900/20 border-red-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-5 h-5 text-red-400" />
              <span className="text-xs text-red-400">Current Waste</span>
            </div>
            <div className="text-2xl font-bold text-white">
              ${Math.round(results.monthlyWaste).toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">per month</div>
          </CardContent>
        </Card>

        <Card className="bg-green-900/20 border-green-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-xs text-green-400">Monthly Savings</span>
            </div>
            <div className="text-2xl font-bold text-white">
              ${Math.round(results.totalMonthlySavings).toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">after investment</div>
          </CardContent>
        </Card>

        <Card className="bg-blue-900/20 border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-xs text-blue-400">ROI</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {Math.round(results.roiPercent)}%
            </div>
            <div className="text-sm text-gray-400">annually</div>
          </CardContent>
        </Card>

        <Card className="bg-purple-900/20 border-purple-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-xs text-purple-400">Payback</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {Math.round(results.paybackMonths)}
            </div>
            <div className="text-sm text-gray-400">months</div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Breakdown */}
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-white">Investment Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-300 mb-4">Current Situation (Annual)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Wasted Time Cost:</span>
                  <span className="text-white">${Math.round(results.yearlyWaste).toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-300 mb-4">With TripleDot (Annual)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Service Investment:</span>
                  <span className="text-white">${Math.round(results.yearlyInvestment).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Savings:</span>
                  <span className="text-green-400">${Math.round(results.totalYearlySavings).toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-2 font-semibold">
                  <span className="text-gray-300">Net Benefit:</span>
                  <span className="text-green-400">${Math.round(results.netBenefit).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90`}>
              Get Started with {service.name}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ROICalculator;
